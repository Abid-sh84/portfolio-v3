/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable .mdx as valid page extensions (used by @next/mdx)
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },

  // Enforce www as the canonical domain.
  // Redirects non-www → www so all canonical URLs, sitemap entries,
  // and OG tags consistently point to the same host Google has indexed.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "abids.tech" }],
        destination: "https://www.abids.tech/:path*",
        permanent: true, // 308 permanent redirect
      },
    ];
  },

  // Expose the canonical site URL to all Server and Client Components.
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://www.abids.tech",
  },
};

export default nextConfig;
