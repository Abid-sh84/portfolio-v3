/**
 * app/blog/page.js — Blog Listing Page
 *
 * Route: /blog
 * - Server Component (SSG by default)
 * - Renders all published blogs with category/tag filters
 * - Featured posts section at the top
 * - Full SEO: metadata, Open Graph, JSON-LD WebSite schema
 */

import { Suspense } from "react";
import {
  getAllBlogs,
  getFeaturedBlogs,
  getAllCategories,
  getAllTags,
  getBlogsByCategory,
  getBlogsByTag,
} from "@/lib/blog";
import { generateWebSiteSchema, SITE_URL } from "@/lib/seo";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import { BookOpen, Rss } from "lucide-react";

// ── Metadata ───────────────────────────────────────────────────────────────
// Static metadata for the main /blog listing page.
// NOTE: This is NOT used when filters (?category= or ?tag=) are active;
//       those filtered pages get noindex via the Page Component below
//       (see the <meta name="robots"> injection approach).
export const metadata = {
  title: "Blog — Abid Shaikh | Full Stack Developer",
  description:
    "Technical articles on Full Stack Development, Next.js, MERN stack, SEO strategy, and AI integration by Abid Shaikh.",
  keywords: [
    "developer blog",
    "Next.js tutorials",
    "MERN stack",
    "full stack development",
    "technical SEO",
    "AI integration",
    "Abid Shaikh",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog — Abid Shaikh",
    description:
      "Technical articles on Full Stack Development, Next.js, MERN stack, SEO, and AI by Abid Shaikh.",
    siteName: "Abid Shaikh",
    images: [
      {
        url: `${SITE_URL}/og-blog-default.png`,
        width: 1200,
        height: 630,
        alt: "Abid Shaikh Developer Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Abid Shaikh",
    description: "Technical blog on Full Stack Dev, SEO, AI Integration",
    creator: "@AbidShaikh550",
    images: [`${SITE_URL}/og-blog-default.png`],
  },
};


// ── Page Component ─────────────────────────────────────────────────────────
export default async function BlogPage({ searchParams }) {
  // Support URL-based filtering: /blog?category=SEO or /blog?tag=nextjs
  const params = await searchParams;
  const activeCategory = params?.category || null;
  const activeTag = params?.tag || null;
  const isFiltered = !!activeCategory || !!activeTag;

  const allBlogs = getAllBlogs();
  const featuredBlogs = getFeaturedBlogs();
  const categories = getAllCategories();
  const tags = getAllTags();

  // Apply filter
  let displayedBlogs = allBlogs;
  if (activeCategory) {
    displayedBlogs = getBlogsByCategory(activeCategory);
  } else if (activeTag) {
    displayedBlogs = getBlogsByTag(activeTag);
  }

  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      {/* Prevent filtered URLs (/blog?category=X or /blog?tag=Y) from being
          indexed — they are thin duplicate views of the main /blog listing.
          The main /blog page (no filters) is unaffected (index: true via metadata). */}
      {isFiltered && (
        <meta name="robots" content="noindex, follow" />
      )}

      {/* JSON-LD WebSite schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <main className="min-h-screen bg-background">
        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="relative pt-28 pb-16 px-6 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 text-xs font-mono text-green-500 border border-green-500/20 bg-green-500/5 px-3 py-1 rounded-full">
                <Rss className="h-3 w-3" />
                {allBlogs.length} articles published
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Developer{" "}
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Deep-dives into Full Stack Development, Next.js, MERN stack,
              Technical SEO, and AI integration. Written for developers who
              care about production-quality code.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 pb-20">

          {/* ── Featured Posts ────────────────────────────────────────────── */}
          {!activeCategory && !activeTag && featuredBlogs.length > 0 && (
            <section className="mb-14" aria-label="Featured articles">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-green-500" />
                <h2 className="text-xl font-semibold text-foreground">
                  Featured
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                {featuredBlogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} featured />
                ))}
              </div>
            </section>
          )}

          {/* ── Filters + All Posts ───────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 items-start">
            {/* Posts grid */}
            <section aria-label="All articles">
              {/* Section header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">
                  {activeCategory
                    ? `Category: ${activeCategory}`
                    : activeTag
                    ? `Tag: #${activeTag}`
                    : "All Articles"}
                </h2>
                <span className="text-sm text-muted-foreground font-mono">
                  {displayedBlogs.length} post{displayedBlogs.length !== 1 ? "s" : ""}
                </span>
              </div>

              {displayedBlogs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {displayedBlogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-muted-foreground">
                  <p className="text-lg mb-2">No posts found</p>
                  <p className="text-sm font-mono">
                    Try a different filter or check back soon.
                  </p>
                </div>
              )}
            </section>

            {/* Sidebar filter — wrapped in Suspense for client navigation */}
            <div className="lg:sticky lg:top-24">
              <Suspense fallback={null}>
                <BlogFilter
                  categories={categories}
                  tags={tags}
                  activeCategory={activeCategory}
                  activeTag={activeTag}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
