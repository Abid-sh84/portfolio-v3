/**
 * app/blog/[slug]/page.js — Individual Blog Post Page
 *
 * Route: /blog/[slug]
 * - Server Component (Static generation via generateStaticParams)
 * - Renders MDX content with custom components
 * - Sidebar: Table of Contents
 * - Footer: Related posts, Prev/Next navigation
 * - Full SEO: generateMetadata, JSON-LD BlogPosting + Breadcrumb
 */

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getRelatedBlogs,
  getAdjacentBlogs,
  extractTOC,
} from "@/lib/blog";
import {
  generateBlogMetadata,
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogNavigation from "@/components/blog/BlogNavigation";

// MDX options with rehype/remark plugins configured in next.config.mjs
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

// Force static generation for all blog posts.
// Ensures Google gets fast pre-rendered HTML — critical for indexing.
export const dynamic = "force-static";
export const revalidate = false; // never re-render after build (use ISR if you want freshness)

// ── Custom MDX components ─────────────────────────────────────────────────
import {
  Pipeline,
  StatRow,
  Stat,
  Comparison,
  Callout,
  ScoreBar,
  RAGFlow,
  EmbeddingViz,
  RankingFormula,
} from "@/components/blog/MDXComponents";
// (Inline here to avoid "use client" in this Server Component)
const mdxComponents = {
  h2: ({ children, id }) => (
    <h2 id={id} className="text-2xl font-bold mt-10 mb-4 text-foreground scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="text-xl font-semibold mt-8 mb-3 text-foreground scroll-mt-24">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-[15px] leading-7 text-muted-foreground">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-green-500 underline underline-offset-2 hover:text-green-400 transition-colors"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-green-500 pl-5 py-1 bg-green-500/5 rounded-r-lg italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    if (className) {
      return <code className={`${className} text-sm`}>{children}</code>;
    }
    return (
      <code className="px-1.5 py-0.5 rounded text-sm font-mono bg-muted text-green-500 border border-border">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl bg-[#0d1117] border border-border p-4 text-sm leading-relaxed">
      {children}
    </pre>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-6 space-y-2 list-disc text-muted-foreground text-[15px]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 space-y-2 list-decimal text-muted-foreground text-[15px]">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted text-foreground font-medium">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-border">{children}</tbody>,
  tr: ({ children }) => <tr className="transition-colors hover:bg-muted/50">{children}</tr>,
  th: ({ children }) => <th className="px-4 py-3">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 text-muted-foreground">{children}</td>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,

  // ── Rich visual components ────────────────────────────────────────────
  Pipeline,
  StatRow,
  Stat,
  Comparison,
  Callout,
  ScoreBar,
  RAGFlow,
  EmbeddingViz,
  RankingFormula,
};

// ── Static Generation ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ── SEO Metadata ──────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Post Not Found" };
  return generateBlogMetadata(blog);
}

// ── Page Component ────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const { frontmatter, content, readingTime } = blog;
  const toc = extractTOC(content);
  const relatedPosts = getRelatedBlogs(slug, frontmatter.tags, frontmatter.category);
  const { prev, next } = getAdjacentBlogs(slug);

  // JSON-LD schemas
  const blogPostingSchema = generateBlogPostingSchema(blog);
  const breadcrumbSchema = generateBreadcrumbSchema(slug, frontmatter.title);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Syntax highlight styles */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
      />

      <main className="min-h-screen bg-background pt-20 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Blog post header */}
          <BlogHeader
            frontmatter={frontmatter}
            readingTime={readingTime}
            slug={slug}
          />

          {/* Two-column layout: content + TOC sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 items-start">
            {/* MDX Content */}
            <article aria-label="Blog post content">
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: "wrap" }],
                      rehypeHighlight,
                    ],
                  },
                }}
              />

              {/* Bottom navigation */}
              <BlogNavigation prev={prev} next={next} />
            </article>

            {/* Table of Contents sidebar */}
            <aside aria-label="Article navigation">
              <TableOfContents toc={toc} />

              {/* Author card */}
              <div className="mt-6 rounded-xl border border-border bg-card p-5 text-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm font-mono">
                    AS
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{frontmatter.author}</p>
                    <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Building production-ready web apps with MERN stack and AI integration.
                </p>
                <a
                  href="https://github.com/Abid-sh84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs text-green-500 hover:text-green-400 transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />
        </div>
      </main>
    </>
  );
}
