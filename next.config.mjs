/** @type {import('next').NextConfig} */

// Pages that publish a markdown representation (served via Accept: text/markdown).
// Each gets a Link header advertising the markdown alternate + Vary: Accept.
const MARKDOWN_ROUTES = [
  { source: '/', mdPath: '/' },
  { source: '/features', mdPath: '/features' },
  { source: '/pricing', mdPath: '/pricing' },
  { source: '/faq', mdPath: '/faq' },
  { source: '/about-us', mdPath: '/about-us' },
]

const nextConfig = {
  reactStrictMode: false,

  // RFC 8288 Link headers for agent discovery. Only truthful links are emitted:
  //  - rel="sitemap" -> the real sitemap
  //  - rel="alternate"; type="text/markdown" -> pages that negotiate to markdown
  // No api-catalog / service-doc links, because this site exposes no API.
  // (Vary: Accept is set by proxy.js on the markdown response; Next manages Vary
  // on HTML responses itself, so it is not set here.)
  async headers() {
    return MARKDOWN_ROUTES.map(({ source, mdPath }) => ({
      source,
      headers: [
        {
          key: 'Link',
          value: `</sitemap.xml>; rel="sitemap", <${mdPath}>; rel="alternate"; type="text/markdown"`,
        },
      ],
    }))
  },
}

export default nextConfig
