/**
 * components/blog/BlogNavigation.jsx
 *
 * Previous / Next article navigation bar at the bottom of each blog post.
 * Prev = newer post (earlier in sorted-newest-first list)
 * Next = older post
 */

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/blog";

export default function BlogNavigation({ prev, next }) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Blog post navigation"
      className="mt-12 pt-8 border-t border-border"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous (newer) post */}
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-4 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-200"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
              Previous
            </span>
            <span className="text-sm font-semibold text-foreground group-hover:text-green-500 transition-colors line-clamp-2 leading-snug">
              {prev.frontmatter.title}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatDate(prev.frontmatter.date)}
            </span>
          </Link>
        ) : (
          <div /> /* empty placeholder to keep grid alignment */
        )}

        {/* Next (older) post */}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-4 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-200 sm:text-right sm:items-end"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono sm:flex-row-reverse">
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              Next
            </span>
            <span className="text-sm font-semibold text-foreground group-hover:text-green-500 transition-colors line-clamp-2 leading-snug">
              {next.frontmatter.title}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatDate(next.frontmatter.date)}
            </span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
