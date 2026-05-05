/**
 * robots.js — Next.js Metadata API
 * Auto-served at /robots.txt with correct Content-Type
 * Update SITE_URL when you deploy to your domain.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abids.tech";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
