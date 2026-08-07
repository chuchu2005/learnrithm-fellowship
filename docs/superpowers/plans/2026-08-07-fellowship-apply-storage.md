# Fellowship Application Storage — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Persist `/apply` form submissions to MongoDB via Prisma as `fellowship` records, through a Next.js POST route handler, with the existing success/error UX preserved.

**Architecture:** One Prisma model (`Fellowship`, MongoDB collection `fellowship`) + a singleton `PrismaClient` in `lib/prisma.js` + one `POST /api/fellowship` route handler. The client `ApplyForm.js` gains a small submit state machine (`idle → submitting → submitted|error`) that POSTs the form and renders an inline error banner on failure.

**Tech Stack:** Next.js 16.2.6 (App Router), React 19, Prisma 6.x + `@prisma/client` (MongoDB connector), MongoDB Atlas.

**Spec:** `docs/superpowers/specs/2026-08-07-fellowship-apply-storage-design.md`

---

## Preconditions & conventions

- **Working dir:** `/Users/tech/Desktop/landing learnrithm/learnrithm-fellowship` — all commands run from here.
- **Branch:** `fellowship-apply-storage` (already created and checked out). Commit here.
- **Import alias:** `@/*` maps to project root (see `jsconfig.json`). Use `@/lib/...` — this matches existing usage (`@/lib/studyData`, `@/lib/gsap`, etc.). Do NOT use long relative paths.
- **Middleware:** `proxy.js` matcher skips `/api/*`, so `/api/fellowship` is NOT intercepted. No middleware changes needed.
- **`DATABASE_URL`:** a MongoDB Atlas connection string is already present in `.env.local` (gitignored). The schema-push and end-to-end steps in Task 6 can therefore run as-is. If that string is ever invalid/removed, re-add `DATABASE_URL="mongodb+srv://..."` to `.env.local`. **Never print or commit the connection string.**
- **No test framework:** the approved spec deliberately scoped out a unit-test runner. Verification here uses `prisma validate` / `prisma generate`, `npm run build`, `npm run lint`, `curl`, and an end-to-end drive of the real page — not `jest`/`vitest`. Do not add a test framework.

## File structure

| File | Action | Responsibility |
|---|---|---|
| `prisma/schema.prisma` | create | `Fellowship` model + MongoDB datasource |
| `lib/prisma.js` | create | Singleton `PrismaClient` (survives Next dev HMR) |
| `app/api/fellowship/route.js` | create | `POST` handler: validate → insert → respond |
| `app/apply/ApplyForm.js` | modify | Submit state machine, `fetch`, drop `noValidate`, error banner, disabled button |
| `package.json` | modify | Add `prisma` + `@prisma/client`, prisma scripts, `postinstall` |
| `.env.example` | modify | Refresh the `DATABASE_URL` comment |
| `.env.local` | verify | Must contain `DATABASE_URL` (already does); must stay gitignored |

---

## Chunk 1: Prisma foundation

### Task 1: Install Prisma and define the schema

**Files:**
- Create: `prisma/schema.prisma`
- Modify: `package.json` (deps, via `npm install`)

- [ ] **Step 1: Install Prisma and the client**

```bash
npm install @prisma/client
npm install -D prisma
```

Expected: both packages added to `dependencies` / `devDependencies` in `package.json` (Prisma 6.x).

- [ ] **Step 2: Create the schema**

Create `prisma/schema.prisma`:

```prisma
// Prisma schema for the Learnrithm Fellowship application form.
// One submitted application = one document in the `fellowship` collection.

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["mongodb"]
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Fellowship {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
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

  // Section 7 — Open-Ended (HTML field name "else" is a JS reserved word)
  anythingElse String?

  @@map("fellowship")
}
```

- [ ] **Step 3: Validate the schema**

Run: `npx prisma validate`
Expected: `The schema at prisma/schema.prisma is valid 🚀`

- [ ] **Step 4: Generate the client**

Run: `npx prisma generate`
Expected: `Generated Prisma Client (...)` and no errors.

- [ ] **Step 5: Commit**

```bash
git add prisma/schema.prisma package.json package-lock.json
git commit -m "feat(db): add Prisma + Fellowship schema (MongoDB)"
```

---

### Task 2: Add Prisma scripts and refresh env docs

**Files:**
- Modify: `package.json`
- Modify: `.env.example`

- [ ] **Step 1: Add scripts to `package.json`**

In the `"scripts"` object, add:

```json
"prisma:generate": "prisma generate",
"prisma:push": "prisma db push",
"postinstall": "prisma generate"
```

(`postinstall` ensures deploys regenerate the client. It runs only after `prisma/schema.prisma` exists, which it now does.)

- [ ] **Step 2: Refresh the `.env.example` comment**

Change the line above `DATABASE_URL` from:

```
# Database (if using MongoDB for careers API)
```

to:

```
# MongoDB — used by Prisma to store /apply fellowship applications
```

Leave the `DATABASE_URL=mongodb+srv://...` placeholder value as-is.

- [ ] **Step 3: Verify the secret stays untracked**

Run: `git status --short`
Expected: `.env.local` is NOT listed (it is gitignored). If it ever appears, stop and fix `.gitignore` before continuing — never commit `.env.local`.

- [ ] **Step 4: Commit**

```bash
git add package.json .env.example
git commit -m "chore(db): add prisma scripts + refresh DATABASE_URL docs"
```

---

### Task 3: Create the Prisma singleton client

**Files:**
- Create: `lib/prisma.js`

- [ ] **Step 1: Create the singleton**

Create `lib/prisma.js`:

```js
import { PrismaClient } from "@prisma/client";

// Reuse a single PrismaClient across hot reloads in dev so we don't exhaust
// DB connections during `next dev`. Standard Next.js + Prisma pattern.
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
```

- [ ] **Step 2: Verify the build still passes**

Run: `npm run build`
Expected: build completes with no errors (build does not connect to MongoDB).

- [ ] **Step 3: Commit**

```bash
git add lib/prisma.js
git commit -m "feat(db): add PrismaClient singleton"
```

---

## Chunk 2: Endpoint, client wiring, and verification

### Task 4: Create the POST route handler

**Files:**
- Create: `app/api/fellowship/route.js`

- [ ] **Step 1: Create the handler**

Create `app/api/fellowship/route.js`:

```js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Fields the form marks required. The form uses <form ...> (noValidate removed),
// so the browser validates these first; the server remains authoritative.
const REQUIRED = [
  "fullName",
  "email",
  "phone",
  "linkedin",
  "continent",
  "country",
  "situation",
  "university",
  "major",
  "why",
  "fulltime",
  "timezone",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Normalize an incoming value: non-empty trimmed string -> string; else null.
// Keeps optional fields consistent (null, never "").
function str(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Checkbox groups come as arrays from the client (FormData.getAll).
  const languages = Array.isArray(body.languages)
    ? body.languages.map((v) => String(v).trim()).filter(Boolean)
    : [];
  const aiInterests = Array.isArray(body.aiInterests)
    ? body.aiInterests.map((v) => String(v).trim()).filter(Boolean)
    : [];

  const missing = REQUIRED.filter((key) => !str(body[key]));
  if (missing.length) {
    return NextResponse.json(
      { error: "Missing required fields: " + missing.join(", ") + "." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(String(body.email).trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const fellowship = await prisma.fellowship.create({
      data: {
        fullName: str(body.fullName),
        email: str(body.email),
        phone: str(body.phone),
        linkedin: str(body.linkedin),
        continent: str(body.continent),
        country: str(body.country),
        situation: str(body.situation),
        gradMonth: str(body.gradMonth),
        gradYear: str(body.gradYear),
        university: str(body.university),
        major: str(body.major),
        languages,
        projects: str(body.projects),
        apis: str(body.apis),
        aiml: str(body.aiml),
        why: str(body.why),
        aiInterests,
        career: str(body.career),
        learn: str(body.learn),
        fulltime: str(body.fulltime),
        timezone: str(body.timezone),
        conflicts: str(body.conflicts),
        proud: str(body.proud),
        stuck: str(body.stuck),
        collab: str(body.collab),
        anythingElse: str(body.anythingElse),
      },
    });
    return NextResponse.json({ ok: true, id: fellowship.id }, { status: 201 });
  } catch (error) {
    console.error("[fellowship] create failed:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while saving your application. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: route compiled under `ƒ (Server) /api/fellowship`, no errors.

- [ ] **Step 3: Commit**

```bash
git add app/api/fellowship/route.js
git commit -m "feat(api): add POST /api/fellowship route handler"
```

---

### Task 5: Wire `ApplyForm.js` to submit to the API

**Files:**
- Modify: `app/apply/ApplyForm.js`

- [ ] **Step 1: Replace state + `handleSubmit` with a state machine**

In `app/apply/ApplyForm.js`, replace this block (around lines 135–146):

```js
  const [submitted, setSubmitted] = useState(false);
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const group = COUNTRY_GROUPS.find((g) => g.continent === continent);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
```

with:

```js
  // Submit state machine: idle -> submitting -> (submitted | error)
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const group = COUNTRY_GROUPS.find((g) => g.continent === continent);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: fd.get("fullName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      linkedin: fd.get("linkedin"),
      continent: fd.get("continent"),
      country: fd.get("country"),
      situation: fd.get("situation"),
      gradMonth: fd.get("gradMonth"),
      gradYear: fd.get("gradYear"),
      university: fd.get("university"),
      major: fd.get("major"),
      // Checkboxes: use getAll() — get() would only return the first checked value.
      languages: fd.getAll("languages"),
      projects: fd.get("projects"),
      apis: fd.get("apis"),
      aiml: fd.get("aiml"),
      why: fd.get("why"),
      aiInterests: fd.getAll("aiInterests"),
      career: fd.get("career"),
      learn: fd.get("learn"),
      fulltime: fd.get("fulltime"),
      timezone: fd.get("timezone"),
      conflicts: fd.get("conflicts"),
      proud: fd.get("proud"),
      stuck: fd.get("stuck"),
      collab: fd.get("collab"),
      anythingElse: fd.get("else"), // form field "else" -> stored as anythingElse
    };

    try {
      const res = await fetch("/api/fellowship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 201) {
        setStatus("submitted");
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const data = await res.json().catch(() => ({}));
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }
```

- [ ] **Step 2: Point the success branch at the new status**

Replace (around line 148):

```js
  if (submitted) {
```

with:

```js
  if (status === "submitted") {
```

- [ ] **Step 3: Drop `noValidate` so native validation runs**

Replace (around line 222):

```jsx
              <form onSubmit={handleSubmit} noValidate>
```

with:

```jsx
              <form onSubmit={handleSubmit}>
```

- [ ] **Step 4: Add the error banner just inside the form**

Immediately after the `<form onSubmit={handleSubmit}>` opening tag (before the `{/* 01 — Basic Info */}` comment), insert:

```jsx
                {status === "error" && (
                  <div
                    className="alert alert-danger d-flex align-items-center gap-2 mb-4"
                    role="alert"
                  >
                    <span aria-hidden="true">⚠️</span>
                    <span>{errorMsg}</span>
                  </div>
                )}
```

- [ ] **Step 5: Disable the submit button while submitting**

Replace (around lines 427–428):

```jsx
                  <button type="submit" className="btn btn-primary btn-lg has-icon px-4 px-md-5">
                    Submit Application
```

with:

```jsx
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg has-icon px-4 px-md-5"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Submitting…" : "Submit Application"}
```

- [ ] **Step 6: Verify build + lint**

Run: `npm run build`
Expected: no errors.

Run: `npm run lint`
Expected: no errors related to `ApplyForm.js`.

- [ ] **Step 7: Commit**

```bash
git add app/apply/ApplyForm.js
git commit -m "feat(apply): submit application to /api/fellowship with error handling"
```

---

### Task 6: Push schema and verify end-to-end

**Files:** none (verification only, unless a fix is needed)

> This task requires a reachable MongoDB. `DATABASE_URL` is already set in `.env.local`. If `prisma:push` fails with a connection error, the string is stale — update `DATABASE_URL` in `.env.local` and retry. Do not commit `.env.local`.

- [ ] **Step 1: Push the schema to MongoDB**

Run: `npm run prisma:push`
Expected: `Your database is now in sync with your Prisma schema.` and the `fellowship` collection created. (Run `npx prisma generate` after if prompted.)

- [ ] **Step 2: Start the dev server**

Run: `npm run dev`
Note the port it prints (usually `http://localhost:3000`).

- [ ] **Step 3: Positive `curl` — a full, valid payload returns 201**

Replace `$PORT` with the port from Step 2:

```bash
curl -i -X POST http://localhost:$PORT/api/fellowship \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Applicant",
    "email": "test@example.com",
    "phone": "+1 555 000 0000",
    "linkedin": "linkedin.com/in/test",
    "continent": "Africa",
    "country": "Nigeria",
    "situation": "Recent graduate",
    "gradMonth": "May",
    "gradYear": "2026",
    "university": "Test University",
    "major": "Computer Science",
    "languages": ["Python", "JavaScript"],
    "projects": "Built a small RAG demo.",
    "apis": "Called a few REST APIs.",
    "aiml": "",
    "why": "I want to build real AI apps.",
    "aiInterests": ["RAG systems", "AI tutoring"],
    "career": "AI engineer",
    "learn": "How to ship LLM features.",
    "fulltime": "yes",
    "timezone": "UTC+01:00 (Central Europe, West Africa)",
    "conflicts": "",
    "proud": "A side project I finished.",
    "stuck": "Read docs, then ask a friend.",
    "collab": "Pair-programmed at a hackathon.",
    "anythingElse": "Excited to apply."
  }'
```

Expected: `HTTP/1.1 201` and a JSON body `{"ok":true,"id":"..."}`.

- [ ] **Step 4: Negative `curl` — missing required field returns 400**

```bash
curl -i -X POST http://localhost:$PORT/api/fellowship \
  -H "Content-Type: application/json" \
  -d '{ "fullName": "No Email", "email": "not-an-email" }'
```

Expected: `HTTP/1.1 400` and a JSON body whose `error` mentions the missing fields and/or invalid email.

- [ ] **Step 5: Confirm the record landed in MongoDB**

Run: `npx prisma studio` (opens a browser UI at the Prisma Studio URL) and confirm one `Fellowship` row exists with the Step 3 data, `status: "submitted"`, and timestamps. Close it (Ctrl+C) when done.

- [ ] **Step 6: End-to-end via the real page (use the project `verify` skill)**

Drive the actual `/apply` page in the browser:
1. Open `http://localhost:$PORT/apply`.
2. Fill in all required fields and submit.
3. Confirm the success screen renders ("Application received") and the page scrolls to top.
4. Confirm a second `Fellowship` row appears in Prisma Studio / MongoDB.
5. (Optional) Submit with a required field cleared and confirm the browser's native required-popup now appears (proving `noValidate` removal worked) and that no record was created.

- [ ] **Step 7: Finalize**

If any fix was needed during verification, commit it. Otherwise the branch is complete. Leave the dev server stopped when finished.

```bash
git log --oneline main..HEAD
```
Expected: ~6 commits implementing the feature end-to-end.

---

## Notes for the implementer

- **Single source of truth for field list:** the `Fellowship` model (Task 1), the route handler `data` object (Task 4), and the client `payload` (Task 5) must all carry the same 25 application fields (plus `anythingElse`). If the form ever adds a field, update all three.
- **No de-duping:** each submit creates a new document by design. `status` defaults to `"submitted"` for future workflow work (e.g. `"reviewed"`, `"accepted"`).
- **Security:** the endpoint is intentionally public. Inputs are stored as opaque strings and rendered nowhere admin-facing yet; if an admin view is added later, escape on render.
- **Optional cosmetic follow-up (not required):** `next.config.mjs` contains a comment `// ...this site exposes no API.` Now that `/api/fellowship` exists, that comment is slightly stale; it can be reworded, but it only documents Link-header discovery and has no functional effect.
