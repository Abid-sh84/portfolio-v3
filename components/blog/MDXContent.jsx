/**
 * components/blog/MDXContent.jsx
 *
 * Client component wrapper for next-mdx-remote.
 * Applies custom prose components for:
 * - Syntax highlighted code blocks (rehype-highlight applied at build)
 * - Custom blockquotes, headings, links
 */

"use client";

import { MDXRemote } from "next-mdx-remote";
import "highlight.js/styles/github-dark.css";

// Custom MDX component overrides — styled to match the portfolio design
const components = {
  // Headings with anchor support (rehype-autolink-headings adds anchor tags inside)
  h2: ({ children, id, ...props }) => (
    <h2
      id={id}
      className="text-2xl font-bold mt-10 mb-4 text-foreground scroll-mt-24 group"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, id, ...props }) => (
    <h3
      id={id}
      className="text-xl font-semibold mt-8 mb-3 text-foreground scroll-mt-24 group"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="mb-4 text-[15px] leading-7 text-muted-foreground">{children}</p>
  ),

  // Links — opens external links in new tab
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-green-500 underline underline-offset-2 hover:text-green-400 transition-colors"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  },

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-green-500 pl-5 py-1 bg-green-500/5 rounded-r-lg italic text-muted-foreground">
      {children}
    </blockquote>
  ),

  // Inline code
  code: ({ children, className, ...props }) => {
    // Block code — rehype-highlight adds className like "language-js"
    if (className) {
      return (
        <code className={`${className} text-sm`} {...props}>
          {children}
        </code>
      );
    }
    // Inline code
    return (
      <code
        className="px-1.5 py-0.5 rounded text-sm font-mono bg-muted text-green-500 border border-border"
        {...props}
      >
        {children}
      </code>
    );
  },

  // Code block wrapper — rehype-highlight handles syntax; we style the shell
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl bg-[#0d1117] border border-border p-4 text-sm leading-relaxed">
      {children}
    </pre>
  ),

  // Unordered list
  ul: ({ children }) => (
    <ul className="my-4 ml-6 space-y-2 list-disc text-muted-foreground text-[15px]">
      {children}
    </ul>
  ),

  // Ordered list
  ol: ({ children }) => (
    <ol className="my-4 ml-6 space-y-2 list-decimal text-muted-foreground text-[15px]">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),

  // Horizontal rule
  hr: () => <hr className="my-8 border-border" />,

  // Tables
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-muted text-foreground font-medium">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),
  tr: ({ children }) => <tr className="transition-colors hover:bg-muted/50">{children}</tr>,
  th: ({ children }) => <th className="px-4 py-3">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 text-muted-foreground">{children}</td>,

  // Strong / emphasis
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
};

export default function MDXContent({ source }) {
  return (
    <article className="max-w-none">
      <MDXRemote {...source} components={components} />
    </article>
  );
}
