# Fellowship Application Storage — MongoDB + Prisma

**Date:** 2026-08-07
**Project:** `learnrithm-fellowship` (Next.js 16.2.6, React 19, Bootstrap 5.3)
**Status:** Approved design, pending implementation plan

## 1. Problem

The `/apply` page collects a ~26-field fellowship application in a client component
(`app/apply/ApplyForm.js`). Today the form's `handleSubmit` only flips a `submitted`
boolean and renders a success screen — **the submitted data is never persisted**.
Submissions are silently lost.

## 2. Goal

When a user submits `/apply`, store the full application as one document in MongoDB
(model/collection: **fellowship**) using Prisma as the ORM. Display the existing success
screen on success, and an inline error on failure. No other behavior changes.

## 3. Non-goals (YAGNI)

- Admin UI, listing, or export of stored applications.
- Authentication / authorization on the endpoint.
- Rate limiting, spam protection, or honeypot.
- Email de-duping — each submission creates a new record.
- Automated test framework (none exists in the repo).
- Changes to the homepage or any other route.

## 4. Architecture

Single new POST endpoint + Prisma client. The existing client component gains a
`fetch` call; its UX (success screen, scroll-to-top) is preserved.

```
ApplyForm.js  --POST JSON-->  app/api/fellowship/route.js  --create-->  Prisma  -->  MongoDB (collection: fellowship)
   (client)                       (server route handler)         (@prisma/client)
```

### Files

| File | Action | Purpose |
|---|---|---|
| `prisma/schema.prisma` | create | `Fellowship` model + MongoDB datasource |
| `lib/prisma.js` | create | Singleton `PrismaClient` |
| `app/api/fellowship/route.js` | create | `POST` handler: validate + insert |
| `app/apply/ApplyForm.js` | modify | `handleSubmit` gathers `FormData`, POSTs, handles errors |
| `.env.example` | modify | Set `DATABASE_URL` placeholder, update comment |
| `.env.local` | modify | Add `DATABASE_URL` placeholder (gitignored) |
| `package.json` | modify | Add `prisma`/`@prisma/client` deps + scripts |

### Dependencies & scripts

- `@prisma/client` (dependency), `prisma` (devDependency).
- Scripts: `"prisma:generate": "prisma generate"`, `"prisma:push": "prisma db push"`.
- Use `prisma db push` (not `migrate`) — Prisma's recommended sync flow for MongoDB.
- Add `prisma generate` to a `postinstall` hook so deploy builds get the client.

## 5. Data model

MongoDB collection is named **`fellowship`** explicitly via `@@map("fellowship")` so the
stored collection matches the requested record name.

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["mongodb"]
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Fellowship {
  id           String   @id @db.ObjectId
  status       String   @default("submitted")
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  // Section 1 — Basic Info
  fullName     String
  email        String
  phone        String
  linkedin     String
  continent    String
  country      String

  // Section 2 — Background
  situation    String
  gradMonth    String?
  gradYear     String?
  university   String
  major        String

  // Section 3 — Technical Skills
  languages    String[]
  projects     String?
  apis         String?
  aiml         String?

  // Section 4 — Motivation & Goals
  why          String
  aiInterests  String[]
  career       String?
  learn        String?

  // Section 5 — Commitment
  fulltime     String
  timezone     String
  conflicts    String?

  // Section 6 — Vetting
  proud        String?
  stuck        String?
  collab       String?

  // Section 7 — Open-Ended (form field name "else" -> reserved word)
  anythingElse String?

  @@map("fellowship")
}
```

Notes:
- `gradYear` is `String?` (not `Int`) to store the select value verbatim and avoid
  parse/coercion edge cases. Trivial to change later.
- No `@unique` constraints — duplicates allowed by design.
- MongoDB ObjectId is the primary key (`@db.ObjectId`).

## 6. Data flow

1. User fills the uncontrolled form and clicks **Submit application**.
2. `handleSubmit` (still client-side) builds a JSON payload from `FormData`:
   - scalar fields → strings (trimmed server-side),
   - `languages` and `aiInterests` checkboxes → arrays,
   - the `else` field → serialized as `anythingElse`.
3. `fetch("/api/fellowship", { method: "POST", body: JSON })`.
4. Route handler validates, inserts via `prisma.fellowship.create()`.
5. On **201**: client shows the existing success screen + scrolls to top (unchanged UX).
6. On **4xx/5xx**: client shows an inline error banner above the form, preserves entered
   data (no page reload), does not show the success screen.

## 7. Validation

Server-side, minimal but real:
- Required fields present and non-empty after trim: `fullName`, `email`, `phone`,
  `linkedin`, `continent`, `country`, `situation`, `university`, `major`, `why`,
  `fulltime`, `timezone`.
- `email` matches a simple email regex.
- Optional fields stored as-is (or `null`/empty).
- Any failure → **400** with a human-readable message.

The form's existing native `required` attributes remain as the first line of defense;
server validation is the authoritative check.

## 8. Error handling

| Case | Response | Client behavior |
|---|---|---|
| Missing required / invalid email | `400` JSON `{ error }` | Inline banner; data preserved |
| `DATABASE_URL` unset / unreachable | `500` JSON `{ error: "Something went wrong..." }` | Inline banner |
| Unexpected Prisma error | `500` (caught) | Inline banner |

All Prisma calls wrapped in try/catch. The page never hard-crashes; worst case the user
sees the error banner and can retry.

## 9. Security considerations

- The endpoint is public (no auth) — acceptable for a public application form, noted as a
  non-goal to revisit if abuse occurs.
- Inputs are stored as opaque strings; rendered nowhere admin-facing yet, so XSS surface
  is nil today. If an admin view is added later, it must escape on render.
- `.env.local` (containing the real `DATABASE_URL`) stays gitignored.

## 10. Testing & verification

No test framework in the repo, so verification is manual + end-to-end:
1. **Unit-level check:** `curl -X POST http://localhost:<port>/api/fellowship` with a
   sample body → expect `201` and a document in the `fellowship` collection.
2. **End-to-end:** with `DATABASE_URL` set, drive the real `/apply` page (via the project
   `verify` skill) and confirm a record appears in MongoDB, success screen renders.
3. **Negative:** submit with a missing required field → `400` + banner.

## 11. Open decisions (resolved)

- **Approach A** (Next.js Route Handler) chosen over Server Actions for transparency
  and independent testability.
- New record per submit (no de-duping).
- `else` field stored as `anythingElse`.
- `gradYear` stored as `String?`.
- `DATABASE_URL` left as a documented placeholder; nothing persists until the user fills
  it in.
