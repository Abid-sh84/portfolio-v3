/**
 * app/blog/layout.js — Blog Section Layout
 *
 * Shared layout for /blog and /blog/[slug].
 * Wraps content with the portfolio Navbar and Footer.
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
