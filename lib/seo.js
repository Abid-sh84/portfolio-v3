/**
 * lib/seo.js — Blog SEO utilities
 *
 * Centralized helpers for generating metadata, canonical URLs,
 * Open Graph, Twitter card objects, and JSON-LD structured data.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.abids.tech";
const SITE_NAME = "Abid Shaikh";
const TWITTER_HANDLE = "@shkabid40";
const AUTHOR_NAME = "Abid Shaikh";

/**
 * Generate Next.js `metadata` object for a blog post page.
 * Covers title, description, keywords, canonical, OG, and Twitter.
 */
export function generateBlogMetadata(blog) {
  const { frontmatter, slug, readingTime } = blog;
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const ogImage = frontmatter.coverImage
    ? frontmatter.coverImage.startsWith("http")
      ? frontmatter.coverImage
      : `${SITE_URL}${frontmatter.coverImage}`
    : `${SITE_URL}/og-blog-default.png`;

  const title = `${frontmatter.title} | ${SITE_NAME}`;
  const description = frontmatter.description;

  return {
    // metadataBase ensures OG image paths like "/ai-indexing.jpg" resolve
    // to the full URL in production without relying on root layout cascade
    metadataBase: new URL(SITE_URL),
    title,
    description,
    // keywords tag intentionally omitted — Google ignores it entirely.
    // Having it filled with 20+ values signals low SEO literacy to auditors.
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    // Explicit per-post canonical URL — most important indexing signal
    alternates: {
      canonical: canonicalUrl,
    },
    // Explicit per-post robots — don't rely solely on root layout inheritance
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
      type: "article",
      locale: "en_IN", // consistent with homepage locale
      url: canonicalUrl,
      title: frontmatter.title,
      description,
      siteName: `${SITE_NAME} Blog`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.lastModified || frontmatter.date,
      authors: [AUTHOR_NAME],
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description,
      images: [ogImage],
      creator: TWITTER_HANDLE,
    },
    other: {
      "article:reading_time": readingTime,
    },
  };

}

/**
 * Generate BlogPosting JSON-LD schema.
 * Used in the <head> of each blog page for rich results.
 */
export function generateBlogPostingSchema(blog) {
  const { frontmatter, slug, readingTime, readingTimeMinutes } = blog;
  const pageUrl = `${SITE_URL}/blog/${slug}`;
  const imageUrl = frontmatter.coverImage
    ? frontmatter.coverImage.startsWith("http")
      ? frontmatter.coverImage
      : `${SITE_URL}${frontmatter.coverImage}`
    : `${SITE_URL}/og-blog-default.png`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: imageUrl,
    url: pageUrl,
    datePublished: frontmatter.date,
    dateModified: frontmatter.lastModified || frontmatter.date,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
      sameAs: [
        "https://github.com/Abid-sh84",
        "https://www.linkedin.com/in/shkabid40/",
        "https://x.com/shkabid40",
      ],
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    keywords: [...(frontmatter.keywords || []), ...frontmatter.tags].join(", "),
    articleSection: frontmatter.category,
    timeRequired: `PT${readingTimeMinutes}M`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema for blog posts.
 */
export function generateBreadcrumbSchema(slug, title) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };
}

/**
 * Generate WebSite JSON-LD schema with SearchAction.
 * Placed on the blog listing page.
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_NAME} — Developer Blog`,
    url: `${SITE_URL}/blog`,
    description:
      "Technical blog by Abid Shaikh covering Full Stack Development, Next.js, MERN stack, SEO, and AI integration.",
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
  };
}

export { SITE_URL, SITE_NAME, AUTHOR_NAME };
