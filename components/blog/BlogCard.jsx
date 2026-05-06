/**
 * components/blog/BlogCard.jsx
 *
 * Displays a single blog post preview card with:
 * - Cover image (optional)
 * - Category badge, tags
 * - Title, description, reading time, date
 * - Hover animation matching portfolio design system
 */

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/blog";
import { Calendar, Clock, Tag } from "lucide-react";

export default function BlogCard({ blog, featured = false }) {
  const { frontmatter, slug, readingTime } = blog;

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/5 hover:-translate-y-1 ${
        featured ? "md:flex" : ""
      }`}
      aria-label={`Read: ${frontmatter.title}`}
    >
      {/* Cover Image */}
      {frontmatter.coverImage && (
        <div
          className={`relative overflow-hidden bg-muted ${
            featured ? "md:w-2/5 md:shrink-0 h-52 md:h-auto" : "h-44"
          }`}
        >
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Category + Featured badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
            {frontmatter.category}
          </span>
          {featured && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
              ★ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className={`font-semibold leading-snug text-foreground group-hover:text-green-500 transition-colors ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {frontmatter.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {frontmatter.description}
        </p>

        {/* Tags */}
        {frontmatter.tags?.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            <Tag className="h-3 w-3 text-muted-foreground shrink-0" />
            {frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground font-mono hover:text-green-500 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta: date + reading time */}
        <div className="flex items-center gap-4 mt-auto pt-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(frontmatter.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
