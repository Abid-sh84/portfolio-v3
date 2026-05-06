/**
 * lib/blog.js — Core blog utilities
 *
 * Handles MDX file reading, frontmatter parsing, slug generation,
 * reading time estimation, and related/adjacent post logic.
 * All functions are server-only (no "use client").
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// ── Path to MDX content directory ──────────────────────────────────────────
const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

// ── Ensure the directory exists at build time ───────────────────────────────
function ensureBlogsDir() {
  if (!fs.existsSync(BLOGS_DIR)) {
    fs.mkdirSync(BLOGS_DIR, { recursive: true });
  }
}

/**
 * Get all blog slugs (file names without .mdx extension).
 * Used for generateStaticParams in /blog/[slug].
 */
export function getAllBlogSlugs() {
  ensureBlogsDir();
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Parse a single MDX file into a structured blog object.
 * Returns frontmatter + raw content + computed fields.
 */
export function getBlogBySlug(slug) {
  ensureBlogsDir();
  const fullPath = path.join(BLOGS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  const readingTimeResult = readingTime(content);

  return {
    slug,
    content,          // Raw MDX string — used by next-mdx-remote
    frontmatter: {
      title: frontmatter.title || "Untitled",
      description: frontmatter.description || "",
      date: frontmatter.date || new Date().toISOString(),
      author: frontmatter.author || "Abid Shaikh",
      category: frontmatter.category || "General",
      tags: frontmatter.tags || [],
      coverImage: frontmatter.coverImage || null,
      keywords: frontmatter.keywords || [],
      featured: frontmatter.featured || false,
      draft: frontmatter.draft || false,
    },
    readingTime: readingTimeResult.text,         // e.g. "5 min read"
    readingTimeMinutes: Math.ceil(readingTimeResult.minutes),
  };
}

/**
 * Get all published blogs sorted by date (newest first).
 * Filters out drafts automatically.
 */
export function getAllBlogs() {
  const slugs = getAllBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog) => blog && !blog.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return blogs;
}

/**
 * Get featured blogs (frontmatter.featured: true), max 3.
 */
export function getFeaturedBlogs() {
  return getAllBlogs()
    .filter((blog) => blog.frontmatter.featured)
    .slice(0, 3);
}

/**
 * Get related blogs based on shared tags and category.
 * Excludes the current blog; returns top 3 by relevance score.
 */
export function getRelatedBlogs(currentSlug, currentTags, currentCategory) {
  return getAllBlogs()
    .filter((blog) => blog.slug !== currentSlug)
    .map((blog) => {
      const sharedTags = blog.frontmatter.tags.filter((t) =>
        currentTags.includes(t)
      ).length;
      const sameCategory = blog.frontmatter.category === currentCategory ? 1 : 0;
      return { ...blog, _score: sharedTags + sameCategory };
    })
    .filter((blog) => blog._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, 3);
}

/**
 * Get previous and next blog for navigation.
 * Sorted list is newest-first; prev = newer, next = older.
 */
export function getAdjacentBlogs(currentSlug) {
  const blogs = getAllBlogs();
  const index = blogs.findIndex((b) => b.slug === currentSlug);
  return {
    prev: index > 0 ? blogs[index - 1] : null,          // newer post
    next: index < blogs.length - 1 ? blogs[index + 1] : null, // older post
  };
}

/**
 * Get all unique categories with post counts.
 */
export function getAllCategories() {
  const blogs = getAllBlogs();
  const counts = {};
  blogs.forEach((blog) => {
    const cat = blog.frontmatter.category;
    counts[cat] = (counts[cat] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get all unique tags with post counts.
 */
export function getAllTags() {
  const blogs = getAllBlogs();
  const counts = {};
  blogs.forEach((blog) => {
    blog.frontmatter.tags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get blogs filtered by category.
 */
export function getBlogsByCategory(category) {
  return getAllBlogs().filter(
    (blog) => blog.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get blogs filtered by tag.
 */
export function getBlogsByTag(tag) {
  return getAllBlogs().filter((blog) =>
    blog.frontmatter.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Format a date string for display.
 * e.g. "May 6, 2026"
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Build Table of Contents from MDX content.
 * Extracts ## and ### headings and generates anchor slugs.
 */
export function extractTOC(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 2 or 3
    const text = match[2].trim();
    // Generate anchor consistent with rehype-slug
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    toc.push({ level, text, id });
  }

  return toc;
}
