/**
 * components/blog/BlogFilter.jsx
 *
 * Client-side category and tag filter for the blog listing page.
 * Emits selected filter via URL search params for SSR-friendly filtering.
 */

"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function BlogFilter({ categories, tags, activeCategory, activeTag }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
      // Clear the other filter when setting one
      if (key === "category") params.delete("tag");
      if (key === "tag") params.delete("category");
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const clearAll = () => {
    router.push(pathname, { scroll: false });
  };

  const hasFilter = activeCategory || activeTag;

  return (
    <aside aria-label="Blog filters" className="space-y-5">
      {/* Active filter indicator */}
      {hasFilter && (
        <button
          onClick={clearAll}
          className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors font-mono"
        >
          <X className="h-3 w-3" />
          Clear filter
        </button>
      )}

      {/* Categories */}
      {categories?.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 font-mono">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(({ name, count }) => (
              <button
                key={name}
                onClick={() =>
                  setFilter("category", activeCategory === name ? "" : name)
                }
                className={`text-xs px-3 py-1.5 rounded-full border font-mono transition-all duration-200 ${
                  activeCategory === name
                    ? "border-green-500 bg-green-500/10 text-green-500"
                    : "border-border text-muted-foreground hover:border-green-500/40 hover:text-foreground"
                }`}
              >
                {name}
                <span className="ml-1 text-muted-foreground">({count})</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags?.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 font-mono">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 20).map(({ name, count }) => (
              <button
                key={name}
                onClick={() =>
                  setFilter("tag", activeTag === name ? "" : name)
                }
                className={`text-xs px-2.5 py-1 rounded-md border font-mono transition-all duration-200 ${
                  activeTag === name
                    ? "border-green-500 bg-green-500/10 text-green-500"
                    : "border-border text-muted-foreground hover:border-green-500/40 hover:text-foreground"
                }`}
              >
                #{name}
                <span className="ml-1 opacity-60">({count})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
