/**
 * app/robots.js — Next.js Metadata API
 * Auto-served at /robots.txt with correct Content-Type.
 *
 * Rules:
 *  - All crawlers can access everything (homepage, blog, images, etc.)
 *  - Only internal Next.js paths and API routes are blocked
 *  - Sitemap URL is explicitly declared so Google finds it instantly
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abids.tech";

export default function robots() {
  return {
    rules: [
      {
        // ── Main rule: allow all crawlers everywhere ──────────────
        userAgent: "*",
        allow: [
          "/",           // homepage
          "/blog",       // blog listing
          "/blog/",      // all blog posts (future-proof for any slug)
        ],
        disallow: [
          "/api/",       // block internal API routes
          "/_next/",     // block Next.js internals
          "/private/",   // block any future private routes
        ],
      },
      {
        // ── Googlebot: explicit full access + fast crawl signal ───
        userAgent: "Googlebot",
        allow: [
          "/",
          "/blog",
          "/blog/",
        ],
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
      {
        // ── Bingbot: same access ──────────────────────────────────
        userAgent: "Bingbot",
        allow: [
          "/",
          "/blog",
          "/blog/",
        ],
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],
    // Sitemap URL — Google Search Console uses this to find all pages
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Canonical host — prevents crawling of www vs non-www duplicates
    host: SITE_URL,
  };
}
