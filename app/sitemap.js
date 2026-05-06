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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abids.tech";

export default function sitemap() {
  // ── Dynamically load all published blog posts ──────────────────────────
  // getAllBlogs() reads every .mdx file in /content/blogs, filters drafts,
  // and returns them sorted newest-first. This is the key to scalability:
  // drop a new .mdx file → it's in the sitemap on the next build/request.
  const blogs = getAllBlogs();

  const blogUrls = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    // Use the post's own publish date as lastModified so Google knows
    // exactly when each article was published
    lastModified: new Date(blog.frontmatter.date),
    // Blog content is evergreen — monthly re-crawl is appropriate
    changeFrequency: "monthly",
    // Slightly below homepage/blog-listing but above sub-sections
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

    // ── Portfolio sections (single-page anchors) ──────────────────────────
    {
      url: `${SITE_URL}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#education`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Blog listing page ─────────────────────────────────────────────────
    // Higher changeFrequency than posts because new articles are added here
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",   // crawl weekly — new posts appear here
      priority: 0.9,
    },

    // ── All blog posts — auto-generated from /content/blogs/*.mdx ─────────
    // This spread includes every current AND future blog post automatically.
    // Google will discover and index each new post via this sitemap entry.
    ...blogUrls,
  ];
}
