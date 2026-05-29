/**
 * components/blog/BlogHeader.jsx
 *
 * Full hero header for a blog post page:
 * - Breadcrumb navigation
 * - Category + tags
 * - Title (h1)
 * - Description
 * - Author info, date, reading time
 * - Cover image
 */

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ChevronRight, Home, RefreshCw } from "lucide-react";
import { formatDate } from "@/lib/blog";

export default function BlogHeader({ frontmatter, readingTime, slug }) {
  return (
    <header className="mb-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 font-mono"
      >
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-green-500 transition-colors"
        >
          <Home className="h-3 w-3" />
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/blog" className="hover:text-green-500 transition-colors">
          Blog
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground truncate max-w-[200px]">
          {frontmatter.title}
        </span>
      </nav>

      {/* Category */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
          {frontmatter.category}
        </span>
        {frontmatter.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs text-muted-foreground font-mono"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground mb-4">
        {frontmatter.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        {frontmatter.description}
      </p>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
        <span className="flex items-center gap-1.5">
          <User className="h-4 w-4 text-green-500" />
          <span className="text-foreground font-medium">{frontmatter.author}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
        </span>
        {frontmatter.lastModified && frontmatter.lastModified !== frontmatter.date && (
          <span className="flex items-center gap-1.5 text-green-500/70" title="This article was updated after original publication">
            <RefreshCw className="h-3.5 w-3.5" />
            Updated <time dateTime={frontmatter.lastModified}>{formatDate(frontmatter.lastModified)}</time>
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {readingTime}
        </span>
      </div>

      {/* Cover Image */}
      {frontmatter.coverImage && (
        <div className="relative mt-6 h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden bg-muted">
          <Image
            src={frontmatter.coverImage}
            alt={`Cover image for: ${frontmatter.title}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
    </header>
  );
}
