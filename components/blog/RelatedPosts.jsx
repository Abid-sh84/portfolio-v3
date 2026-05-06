/**
 * components/blog/RelatedPosts.jsx
 *
 * Shows up to 3 related blog posts based on shared tags/category.
 * Displayed at the bottom of a blog post page.
 */

import BlogCard from "./BlogCard";
import { Sparkles } from "lucide-react";

export default function RelatedPosts({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border" aria-label="Related articles">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-green-500" />
        <h2 className="text-lg font-semibold text-foreground">Related Articles</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} blog={post} />
        ))}
      </div>
    </section>
  );
}
