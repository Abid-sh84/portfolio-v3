/**
 * app/sitemap.js — Dynamic Sitemap
 *
 * Auto-served at /sitemap.xml via Next.js Metadata API.
 *
 * HOW IT WORKS:
 * - Core pages are listed statically with their priorities
 * - Blog posts are pulled dynamically from content/blogs/*.mdx
 * - Every time you add a new .mdx file, it AUTOMATICALLY appears here
 * - No manual update ever needed
 *
 * CRAWL PRIORITY SCALE:
 *   1.0 → Homepage (most important)
 *   0.9 → Blog listing + high-traffic sections
 *   0.8 → Individual blog posts + contact
 *   0.7 → Sub-sections (skills, education, experience)
 */

import { getAllBlogs } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.abids.tech";

export default function sitemap() {
  // ── Dynamically load all published blog posts ──────────────────────────
  // getAllBlogs() reads every .mdx file in /content/blogs, filters drafts,
  // and returns them sorted newest-first. This is the key to scalability:
  // drop a new .mdx file → it's in the sitemap on the next build/request.
  const blogs = getAllBlogs();

  const blogUrls = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    // Always use today so Google re-crawls after any deployment/edit
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    // ── Homepage ─────────────────────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // ── Blog listing page ─────────────────────────────────────────────────
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ── All blog posts — auto-generated from /content/blogs/*.mdx ─────────
    ...blogUrls,
  ];

}
