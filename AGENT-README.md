# Agent-Readiness — learnrithm.com

What this marketing site does to be discoverable and usable by AI agents / answer
engines. Full design: `docs/superpowers/specs/2026-07-31-agent-readiness-design.md`.

Scope decision: this site is the **marketing site** for the Learnrithm Fellowship
program. It exposes exactly one public API endpoint — `POST /api/fellowship`, the
fellowship application submission endpoint (see `app/api/fellowship/route.js`) — plus
the pages `/` and `/apply`, and `/sitemap.xml`. It has no auth server and no MCP
server.

**Correction:** an earlier revision of this file claimed the site had "no API" and
that discovery metadata was published "only for resources that actually exist."
Neither is true today. The one public write endpoint above exists, and the shipped
sitemap / `Link` headers advertise ~45 URLs of which only a handful resolve to real
routes. See `README.md` → "Routes" and "Known-stale SEO metadata" for the actual
build surface.

## Shipped

| Feature | Where | What it does |
|---|---|---|
| **Link headers** (RFC 8288) | `next.config.mjs` | On `/`, `/features`, `/pricing`, `/faq`, `/about-us`: advertises the sitemap (`rel="sitemap"`) and a markdown alternate (`rel="alternate"; type="text/markdown"`). **Stale:** `/features`, `/pricing`, `/faq`, and `/about-us` are not built routes, and nothing serves the advertised markdown alternate. |
| **Content Signals** | `public/robots.txt` | Declares AI usage preferences: `Content-Signal: search=yes, ai-input=yes, ai-train=no`. |
| ~~Markdown for Agents~~ | removed | `proxy.js` (Next 16's name for the former `middleware.js`) was removed in commit `5dd378f` because the OpenNext/Cloudflare Workers adapter required Edge-runtime middleware (that OpenNext setup was later rolled back in `db4e330`). `lib/agentMarkdown.js` still exists but nothing serves it; no request negotiates to `text/markdown` anymore. |

## Documented (not code — you run it)

| Item | Where |
|---|---|
| DNS-AID + DNSSEC on Cloudflare | `docs/agent-readiness/dns-aid-runbook.md` |

## Deliberately skipped (no matching backend to describe)

Publishing these would advertise services that do not exist, misdirecting agents:

- API catalog (RFC 9727) — not published; the single public endpoint
  (`POST /api/fellowship`) is documented in `README.md` instead.
- OAuth/OIDC discovery (RFC 8414) — no auth server / protected API.
- OAuth Protected Resource Metadata (RFC 9728) — no protected resources.
- `auth.md` — no agent registration / auth flow.
- MCP Server Card (SEP-1649) — no MCP server.
- Agent-skills discovery index — no real skills to describe.
- WebMCP — experimental browser API, no shipping-browser value for a landing page.

Revisit these if an auth server or MCP server is added.

## Maintenance notes

- **Stale:** the markdown-sync guidance below predates the removal of `proxy.js`.
  `lib/agentMarkdown.js` is no longer served; keep the `Link` headers in
  `next.config.mjs` in sync with real routes only if/when markdown negotiation is
  restored.
- **Adding/removing a markdown page** (if restored): add the slug to `MARKDOWN` in
  `lib/agentMarkdown.js` and add a matching `Link` header in `next.config.mjs`.
- **Content-Signal values** are a business decision; edit the line in `public/robots.txt`.

## Verify locally

```bash
npm run build

# HTML is the only response for every page (markdown negotiation is gone)
curl -sI -H 'Accept: text/markdown' http://localhost:3000/        # text/html

# Link headers on the homepage (note: the advertised markdown alternate is stale)
curl -sI http://localhost:3000/ | grep -i link

# Content Signals in robots.txt
curl -s http://localhost:3000/robots.txt

# Public application endpoint exists
curl -sI -X POST http://localhost:3000/api/fellowship
```
