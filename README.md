# Learnrithm Fellowship — marketing site

Marketing site for the Learnrithm Fellowship program. Next.js App Router (JavaScript).
The build needs no environment variables — the Prisma and R2 clients resolve env lazily.
No deploy-platform configuration is committed: an OpenNext/Cloudflare Workers setup was
attempted and rolled back in commit `db4e330`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes (actual build surface)

The production build emits exactly four routes:

| Route | Source |
|---|---|
| `/` | `app/page.js` |
| `/apply` | `app/apply/page.js` |
| `POST /api/fellowship` | `app/api/fellowship/route.js` — public application submission endpoint (validated payload, Postgres via Prisma, photos in R2) |
| `/sitemap.xml` | `app/sitemap.js` |

This is the site's entire API surface: one public write endpoint (`POST /api/fellowship`).
There is no auth server and no MCP server.

## Known-stale SEO metadata

`app/sitemap.js` advertises **45 URLs** — 13 static pages, 19 `/study/*` pages and
13 `/compare/*` pages — but the build produces only the four routes above, and the
conversion page `/apply` is missing from the sitemap entirely. `next.config.mjs` also
emits `Link` headers advertising `text/markdown` alternates for five routes, four of
which are not built, and nothing serves the markdown alternate (the `proxy.js`
middleware layer was removed in commit `5dd378f` when the OpenNext deploy failed on
Node.js middleware).

Regenerate the sitemap and `Link` headers from the real route manifest before relying
on this site's discovery metadata. `AGENT-README.md` has been corrected to match.

## License

See `LICENSE` (proprietary) and `NOTICE.md` (vendored Ruboz template stylesheet and
GSAP libraries retain their upstream terms).
