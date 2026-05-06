/**
 * components/blog/TableOfContents.jsx
 *
 * Sticky TOC sidebar rendered from extracted headings.
 * Highlights the active section as the user scrolls.
 * Server-rendered structure; active tracking done client-side.
 */

"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TableOfContents({ toc }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!toc.length) return;

    const headingElements = toc
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-64px 0% -70% 0%",
        threshold: 0,
      }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  if (!toc.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 rounded-xl border border-border bg-card p-5 text-sm"
    >
      <div className="flex items-center gap-2 mb-4 font-semibold text-foreground">
        <List className="h-4 w-4 text-green-500" />
        <span>Contents</span>
      </div>

      <ol className="space-y-1">
        {toc.map(({ id, text, level }) => (
          <li key={id} className={level === 3 ? "pl-4" : ""}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setActiveId(id);
              }}
              className={cn(
                "block py-1 text-xs leading-snug transition-colors duration-150 border-l-2 pl-3",
                activeId === id
                  ? "border-green-500 text-green-500 font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
