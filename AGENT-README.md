# Agent-Readiness — learnrithm.com

What this marketing site does to be discoverable and usable by AI agents / answer
engines. Full design: `docs/superpowers/specs/2026-07-31-agent-readiness-design.md`.

Scope decision: this repo is the **marketing site only**. It has no API, no auth server,
and no MCP server. Discovery metadata is published **only for resources that actually
exist**.

## Shipped

| Feature | Where | What it does |
|---|---|---|
| **Link headers** (RFC 8288) | `next.config.mjs` | On `/`, `/features`, `/pricing`, `/faq`, `/about-us`: advertises the sitemap (`rel="sitemap"`) and the markdown alternate (`rel="alternate"; type="text/markdown"`). `Vary: Accept` is set on the markdown response by `proxy.js`. |
| **Content Signals** | `public/robots.txt` | Declares AI usage preferences: `Content-Signal: search=yes, ai-input=yes, ai-train=no`. |
| **Markdown for Agents** | `proxy.js`, `lib/agentMarkdown.js` | Requests with `Accept: text/markdown` return a hand-authored markdown version of the 5 key pages (`Content-Type: text/markdown`); browsers still get HTML. (`proxy.js` is Next 16's name for the former `middleware.js`.) |

## Documented (not code — you run it)

| Item | Where |
|---|---|
| DNS-AID + DNSSEC on Cloudflare | `docs/agent-readiness/dns-aid-runbook.md` |

## Deliberately skipped (no backend to describe)

Publishing these would advertise services that do not exist, misdirecting agents:

- API catalog (RFC 9727) — no API.
- OAuth/OIDC discovery (RFC 8414) — no auth server / protected API.
- OAuth Protected Resource Metadata (RFC 9728) — no protected resources.
- `auth.md` — no agent registration / auth flow.
- MCP Server Card (SEP-1649) — no MCP server.
- Agent-skills discovery index — no real skills to describe.
- WebMCP — experimental browser API, no shipping-browser value for a landing page.

Revisit these if a real backend (API, auth, MCP) is added.

## Maintenance notes

- **Keep markdown in sync.** When the copy on `/`, `/features`, `/pricing`, `/faq`, or
  `/about-us` changes, update the matching entry in `lib/agentMarkdown.js`. The markdown
  contains only facts from the public site (prices, plans, FAQs) — do not invent content.
- **Adding/removing a markdown page:** add the slug to `MARKDOWN` in
  `lib/agentMarkdown.js` (this is the single source of truth for middleware + the route)
  and add a matching `Link` header in `next.config.mjs`.
- **Content-Signal values** are a business decision; edit the line in `public/robots.txt`.

## Verify locally

```bash
npm run build

# Markdown negotiation (returns text/markdown)
curl -sI -H 'Accept: text/markdown' http://localhost:3000/pricing
curl -sH  'Accept: text/markdown' http://localhost:3000/        # body is markdown

# HTML still default for browsers
curl -sI http://localhost:3000/pricing                            # text/html

# Link + Vary headers on the homepage
curl -sI http://localhost:3000/ | grep -iE 'link|vary'

# Content Signals in robots.txt
curl -s http://localhost:3000/robots.txt
```
