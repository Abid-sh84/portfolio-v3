/**
 * app/robots.js — Next.js Metadata API
 * Auto-served at /robots.txt with correct Content-Type.
 *
 * Rules:
 *  - All crawlers can access everything (homepage, blog, images, etc.)
 *  - Only internal Next.js paths and API routes are blocked
 *  - Sitemap URL is explicitly declared so Google finds it instantly
 *
 * NOTE: Keep this simple. Multiple per-bot allow lists create parsing
 * ambiguity. A single "Allow: /" covers all public pages cleanly.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.abids.tech";

export default function robots() {
  return {
    rules: [
      {
        // Single rule for all bots — allows entire site except internals
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",      // block internal API routes
          "/_next/",    // block Next.js build artefacts
          "/private/",  // block any future private routes
        ],
      },
    ],
    // Sitemap URL — Google Search Console uses this to find all pages
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
