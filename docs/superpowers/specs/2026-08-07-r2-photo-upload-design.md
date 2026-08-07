# Design: Applicant Profile Photo Upload to Cloudflare R2

**Date:** 2026-08-07
**Repo:** `learnrithm-fellowship` (Next.js 16 App Router, Prisma + MongoDB, deploys to Cloudflare Workers via OpenNext)
**Status:** Approved design; spec reviewed and revised (2026-08-07)

## 1. Goal

Applicants submitting the `/apply` form must upload **one required profile photo**. The photo's bytes are stored in a **private Cloudflare R2 bucket**; the `Fellowship` MongoDB document stores only the **R2 object key**. A portable helper lets the **separate admin dashboard repo** (Next.js, same MongoDB) display the photo by signing its own short-lived GET URL from the stored key.

## 2. Non-goals

- No presigned/browser-direct uploads — the photo is small; server-side upload is simpler and atomic.
- No public bucket. Photos are private; access is via signed URLs only.
- No multiple-image uploads. One photo per application.
- No EXIF stripping or image resizing in v1 (see §14, accepted risk).
- No changes to existing analytics, markdown proxy, or other form sections.

## 3. Chosen approach — A: Server-side upload

```
Browser                /api/fellowship              R2 (private)        MongoDB
  |                          |                          |                  |
  |--POST multipart-------->|                          |                  |
  |   (fields + photo)       |                          |                  |
  |                          |--validate ALL fields +   |                  |
  |                          |  photo (type/size/bytes) |                  |
  |                          |--PutObject(photo)------->|                  |
  |                          |--prisma.create{photoKey}------------------>  |
  |<-------201 {id}----------|                          |                  |
```

**Why A over presigned/browser-direct (B) or native R2 binding (C):**
- Single request, atomic — no orphaned photos if the user abandons the form.
- No R2 CORS configuration needed (the browser never talks to R2 directly).
- Validation runs server-side *before* anything is stored.
- Works identically in `next dev` and on Cloudflare Workers.
- A single small photo means the bytes-through-the-server cost is negligible.

## 4. Contract (single source of truth)

`Fellowship.photoKey` is the **full R2 object key**, e.g.
`fellowship-applications/Ada-Lovelace-a1b2c3.jpg`.

- Key prefix: `fellowship-applications/`
- Key body: `<NameSlug>-<random-6-hex>` — the applicant's name (Unicode preserved, separators/unsafe chars normalized) so the object is identifiable in the R2 dashboard, plus a short random suffix because R2 **overwrites identical keys** (prevents two same-name applicants or a resubmit from colliding). Falls back to `applicant` when no name.
- Extension: derived from the validated MIME type (`jpg` | `png` | `webp`).
- **Custom metadata** is attached to each object (visible in the R2 dashboard): `fullName`, `email`, `phone`, `country`, `university`. Values are **ASCII-sanitized** before storing — non-Latin bytes can't travel safely in HTTP header values, and the applicant pool is global; the full Unicode name is preserved in the **key** instead.
- Email/phone/etc. are NOT in the key (only the name); full PII also lives in MongoDB.
- To display a photo, any repo holding the R2 credentials signs the key:
  `await getSignedPhotoUrl(photoKey)` → temporary `<img src>` URL (~15 min), or `null` for legacy records.

## 5. Files

| File | Change | Purpose |
|---|---|---|
| `lib/r2.js` | **new** | Framework-agnostic S3 client + `uploadPhoto(file)` + `getSignedPhotoUrl(key)` |
| `app/api/fellowship/route.js` | modify | Parse `formData()`; validate everything; `uploadPhoto`; store `photoKey` |
| `app/apply/ApplyForm.js` | modify | Required `<input type="file">` + live preview; submit `FormData` |
| `prisma/schema.prisma` | modify | Add `photoKey String?` to `Fellowship` (see §10) |
| `.env` / `.env.example` | modify | Add 4 R2 vars |
| `package.json` | modify | Add `@aws-sdk/client-s3` + `@aws-sdk/s3-request-presigner` (recent v3; ≥ 3.700) |

> The fellowship-repo **view route is deferred** from v1 (would be an unauthenticated signing oracle; this repo has no admin auth). The **admin dashboard signs its own URLs via the portable helper** (§13). A view route can be added later behind admin auth if direct links are needed.

## 6. `lib/r2.js` — portable module

Self-contained, no Next.js/server-only imports, fully env-driven so the admin repo can copy it verbatim. Module-scoped client; uses the Web Crypto API (works in Node 20+ and Workers with **no** compat flag).

```js
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const KEY_PREFIX = "fellowship-applications/";
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

// Declared MIME -> file extension + magic-byte signature for that type.
const TYPES = {
  "image/jpeg": { ext: "jpg", sniff: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  "image/png":  { ext: "png", sniff: (b) =>
      b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47 },
  "image/webp": { ext: "webp", sniff: (b) =>
      b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && // "RIFF"
      b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50 }, // "WEBP"
};

// Tagged error so the route can map validation failures -> 400 vs 500.
export class PhotoValidationError extends Error {}

// Reused S3 client (lazy; env read at call time, like lib/prisma.js).
let _client;
function client() {
  _client ??= new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });
  return _client;
}

// Cheap pre-checks on the browser File. Throws PhotoValidationError on failure.
export function validatePhoto(file) {
  if (!(file instanceof File)) {
    throw new PhotoValidationError("A profile photo is required.");
  }
  if (file.size === 0) {
    throw new PhotoValidationError("A profile photo is required.");
  }
  if (file.size > MAX_BYTES) {
    throw new PhotoValidationError("Photo must be 5 MB or smaller.");
  }
  if (!TYPES[file.type]) {
    throw new PhotoValidationError("Photo must be a JPG, PNG, or WebP image.");
  }
  return file;
}

// Upload a validated file. Returns { key }. Throws PhotoValidationError on
// bad bytes/type; other errors propagate (caller maps to 500).
//
// meta (optional): applicant details attached as custom R2 metadata, e.g.
// { fullName, email, phone, country, university }. The object is named after
// the applicant (see §4). Helpers slugifyName() + buildMetadata() are defined
// in lib/r2.js; buildMetadata ASCII-sanitizes values for header safety.
export async function uploadPhoto(file, meta = {}) {
  validatePhoto(file);
  const buf = new Uint8Array(await file.arrayBuffer()); // read once
  const spec = TYPES[file.type];
  if (!spec.sniff(buf)) { // magic-bytes check — don't trust client MIME
    throw new PhotoValidationError("Photo file appears corrupt or is not a real image.");
  }
  const key = `${KEY_PREFIX}${slugifyName(meta.fullName)}-${rand6()}.${spec.ext}`;
  await client().send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: buf, // Uint8Array — version-independent (no reliance on File Body support)
      ContentType: file.type,
      Metadata: buildMetadata(meta),
    })
  );
  return { key };
}

// Sign a short-lived GET URL for any key. Returns null for missing/legacy keys.
export async function getSignedPhotoUrl(key, expiresInSec = 900) {
  if (!key) return null;
  return getSignedUrl(
    client(),
    new GetObjectCommand({ Bucket: process.env.R2_BUCKET_NAME, Key: key }),
    { expiresIn: expiresInSec }
  );
}

function rand6() {
  const b = globalThis.crypto.getRandomValues(new Uint8Array(3));
  return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
}
```

## 7. API route — `app/api/fellowship/route.js`

Switch from `request.json()` to `await request.formData()`.

**Field migration mapping** (JSON → FormData), verified against the existing route + form:
- Scalars (fullName, email, phone, linkedin, continent, country, situation, gradMonth, gradYear, university, major, projects, apis, aiml, why, career, learn, fulltime, timezone, conflicts, proud, stuck, collab, anythingElse): `fd.get(name)` → `str(...)`.
- Checkbox arrays (`languages`, `aiInterests`): `fd.getAll(name)` → trim/filter.
- Photo: `fd.get("photo")` → a `File` (field name `photo` is **not** used by any existing field — confirmed free).

**Order of operations (important — prevents orphaned uploads on doomed requests):**
1. Parse FormData.
2. Validate **all** required text/email fields AND the photo (`validatePhoto`) — reject (`400`) before touching R2.
3. Only if everything passes: `await uploadPhoto(file)` → `{ key }`.
4. `prisma.fellowship.create({ ..., photoKey: key })`.
5. If DB create fails after a successful upload → log + `500`; orphaned photo is an accepted rare edge (§17).

**Error routing:** catch `PhotoValidationError` → `400` with its message. Any other thrown error → `500` with the generic message. No string-matching.

**Size guard:** raise the content-length cap from `200_000` to `6_000_000`. Justification: multipart binary parts are *not* base64-encoded, so overhead is only the boundary headers (~hundreds of bytes per part); 1 MB headroom over the 5 MB photo limit is comfortable and avoids rejecting valid submissions near the limit.

`REQUIRED` array and `str()` helper stay; only the parsing source and the photo step change.

## 8. Display path (no fellowship-repo view route in v1)

The **admin dashboard displays photos via the portable `getSignedPhotoUrl` helper** (§13) — it reads `photoKey` from the shared MongoDB and signs its own URL. No `<img>` CORS is needed: a cross-origin signed URL rendered in `<img src>` displays without CORS headers (display only; no pixel read).

A fellowship-repo view route (`/api/fellowship/[id]/photo`) is **deferred** — this repo has no admin auth, so it would be an unauthenticated signing oracle for any known ID. If direct links/emails are needed later, add the route **behind admin auth**.

## 9. Form — `app/apply/ApplyForm.js`

- **Field name `photo`** — confirmed unused by any existing field in the current form.
- **Placement:** in Section 01 (Basic Info), as a new full-width `Field` after the country row, to keep the multi-section Bootstrap layout consistent.
- **Markup:** an `<input type="file" name="photo" accept="image/jpeg,image/png,image/webp" required>` styled with the existing `form-control form-control-lg bg-light border-0 rounded-4` classes; a live preview `<img>` (object URL) below it; inline error text for client-side guard failures. Matches the existing `Field`/`inputClass` pattern.
- **Client guards before submit:** file present, `≤ 5 MB`, declared type in the allowed set; show inline error otherwise (server remains authoritative).
- **Submit switches from JSON to `FormData`:**
  - Build a new `FormData` and `append(name, value)` for each scalar.
  - Append each checked value for `languages` and `aiInterests`.
  - `append("photo", file)`.
  - `fetch("/api/fellowship", { method: "POST", body: fd })` — **omit `Content-Type`** so the browser sets the multipart boundary.
- **Double-submit guard:** the existing `submitting` state + button-disable is the intended idempotency guard for v1 (no idempotency key). State this in code comments.
- Preserve the existing `idle → submitting → (submitted | error)` state machine and success/error UI.

## 10. Prisma schema change

```prisma
model Fellowship {
  ...
  photoKey     String?   // OPTIONAL in the schema (see note); required for NEW submissions
  ...
}
```

**Why `String?` and not `String`:** MongoDB is schemaless. `prisma db push` adds the field to the Prisma schema but does **not** backfill existing documents, so legacy applications will have **no** `photoKey` at runtime. Declaring the field optional makes the Prisma client type *honest* about that reality (`photoKey: string | null`); the `getSignedPhotoUrl(key)` `null` guard (§6) and the admin UI placeholder (§13) handle legacy records.

This does **not** relax the business rule: the photo is **required for new applications**, enforced at the **form (`required`)** and **API (`validatePhoto` + required-field check)** layers — not by Prisma nullability. (Distinct layers: "user must supply a photo" ≠ "Mongo field is non-null for all historical docs.")

## 11. Environment variables

Add to `.env` and `.env.example`:

```
# Cloudflare R2 — applicant profile photos (private bucket; access via signed URLs)
R2_ACCOUNT_ID=your_cloudflare_account_id
R2_BUCKET_NAME=fellowship-applications
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
```

R2 API token scope: **Object Read & Write** on this bucket only.

## 12. Cloudflare Workers / OpenNext notes (fellowship repo)

- The AWS S3 SDK v3 requires the **`nodejs_compat`** compatibility flag in the OpenNext/wrangler config. The project already runs `@prisma/client/edge`, so edge constraints are familiar.
- 5 MB body is well within Workers' request limits.
- `globalThis.crypto` and `arrayBuffer()` on `File` work under `nodejs_compat` with no extra flags.
- **Deploy verification step:** confirm `PutObject` and `getSignedUrl` succeed on Workers (not just in `next dev`).

## 13. Admin dashboard (other repo) integration

The admin repo is Next.js and reads the same MongoDB `fellowship` collection. Integration is a 4-step drop-in:

1. Copy `lib/r2.js` into the admin repo (verbatim).
2. Add the same 4 R2 env vars.
3. Ensure the admin repo's Prisma schema includes `photoKey String?` on its `Fellowship` model and selects it in the list query (else `app.photoKey` is `undefined`).
4. Ensure the admin repo's deployment has **`nodejs_compat`** enabled (same edge constraint as §12).
5. Where applications are listed, sign each photo:
   ```jsx
   const url = await getSignedPhotoUrl(app.photoKey); // null for legacy records
   // render <img src={url} ... /> or a placeholder when url is null
   ```

No API coupling to the fellowship repo; the admin keeps working during fellowship redeploys.

## 14. Validation & limits (summary)

- **Required:** one photo per application (form + API enforced).
- **Max size:** 5 MB.
- **Allowed MIME:** `image/jpeg`, `image/png`, `image/webp` — checked by declared type **and** magic bytes (§6); client-provided MIME is not trusted.
- Client-side preview + guards; server is authoritative.
- **EXIF/GPS metadata:** photos may carry location/device EXIF. Stripping it needs an image lib that doesn't run cleanly on Workers, so it is an **accepted risk for v1**, tracked as a follow-up (§17). Flag to applicants ("your photo is shared with reviewers") if desired.

## 15. Security considerations

| Risk | v1 stance |
|---|---|
| **Public upload endpoint abuse** — `/api/fellowship` is unauthenticated and accepts 6 MB POSTs; an attacker could exhaust R2 storage or burn Worker CPU. | **Accepted risk for v1.** Mitigations to add as a follow-up: Cloudflare WAF rate-limiting on the route, and/or Cloudflare Turnstile for human verification. Documented here as a tracked item. |
| **Signing oracle** — a public view route would mint signed URLs for any known Fellowship ID. | **Eliminated:** no view route in v1; admin signs its own URLs server-side from keys it already has via DB access. |
| **Malicious file content** — non-image bytes with a spoofed `Content-Type`. | **Mitigated:** magic-bytes sniff in §6 rejects mismatched content. |
| **PII in object keys** | **Mitigated:** keys contain only timestamp + random hex; PII lives in Mongo. |

## 16. Error handling

| Case | Behavior |
|---|---|
| No photo / not a File / empty | `400` "A profile photo is required." — nothing stored |
| Wrong declared type | `400` "Photo must be a JPG, PNG, or WebP image." |
| Magic-bytes mismatch | `400` "Photo file appears corrupt or is not a real image." |
| Too large | `400` "Photo must be 5 MB or smaller." |
| Missing required text field / bad email | `400` (existing logic) — runs **before** any R2 call |
| R2 upload error | `500` — no DB record created, logged |
| DB create fails after upload | `500` — orphaned photo, logged (rare) |
| Missing R2 creds in dev | Graceful `500`, not a crash |
| Client network error | "Network error…" (existing message) |
| Legacy record (no `photoKey`) | admin shows placeholder; `getSignedPhotoUrl` returns `null` |

## 17. Testing

No test runner in the project → **manual + targeted checks:**

1. Valid jpg/png/webp upload → object exists in R2, DB has `photoKey`, admin helper renders it.
2. Submit without photo → `400` required message, no R2 object.
3. Oversized file → rejected client-side and server-side.
4. Wrong type (e.g. `.gif`, `.pdf` renamed to `.jpg`) → rejected by magic-bytes sniff.
5. Missing a required text field together with a valid photo → `400`, **no** R2 object (ordering check).
6. R2 credentials absent in `next dev` → graceful error.
7. Legacy record (no `photoKey`) → admin shows placeholder.
8. Admin repo drop-in: copy helper + env + Prisma field + `nodejs_compat` → signed URL renders.
9. **Deploy verification:** `PutObject` + `getSignedUrl` work on Cloudflare Workers with `nodejs_compat`.

## 18. Follow-ups (tracked, out of v1 scope)

- Cloudflare WAF rate-limit / Turnstile on the public upload endpoint (§15).
- EXIF/GPS metadata stripping (§14).
- Bucket lifecycle rule to delete orphaned objects (e.g. after N days with no DB reference) — handles the rare DB-failure-after-upload case (§7).
- Optional fellowship-repo view route behind admin auth for direct links (§8).

## 19. Resolved review questions

- `crypto` on Workers: use `globalThis.crypto.getRandomValues` (no compat flag needed). ✅
- `Body` from a Web `File`: read `arrayBuffer()` once and send `Uint8Array` (version-independent). ✅
- Prisma required-field vs Mongo schemaless: field is `String?`; requiredness enforced at app layer. ✅
- `validatePhoto` accepts only real `File` objects (`instanceof File`). ✅
- Error class routing via tagged `PhotoValidationError`. ✅
