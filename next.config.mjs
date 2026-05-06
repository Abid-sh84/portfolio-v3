/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable .mdx as valid page extensions (used by @next/mdx)
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
