import { NextResponse } from 'next/server'

import { getMarkdown, slugForPath } from '@/lib/agentMarkdown'

/**
 * Markdown for Agents: when a client prefers text/markdown over HTML, return the
 * hand-authored markdown for the page directly. Mirrors Cloudflare's
 * "Markdown for Agents":
 *   - Browsers send Accept: text/html,... and never text/markdown -> they get HTML.
 *   - Agents send Accept: text/markdown -> they get the markdown body.
 *
 * Pages without a markdown version fall through to normal HTML.
 *
 * Next 16 renamed the "middleware" file convention to "proxy" (same capabilities,
 * new name) — hence proxy.js and the `proxy` export.
 *
 * We return the body from the proxy rather than rewriting to a route handler so the
 * markdown map can stay a single source of truth and avoid App Router's
 * underscore-prefixed "private folder" routing rule.
 */
export function proxy(request) {
  const accept = (request.headers.get('accept') || '').toLowerCase()

  if (!accept.includes('text/markdown')) {
    return NextResponse.next()
  }

  const slug = slugForPath(request.nextUrl.pathname)
  if (!slug) {
    return NextResponse.next()
  }

  const markdown = getMarkdown(slug)
  if (!markdown) {
    return NextResponse.next()
  }

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      // The same URL serves different bodies depending on Accept (HTML vs markdown).
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}

export const config = {
  // Run on real pages only; skip Next internals, well-known files, and static
  // assets (paths containing a dot).
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
}
