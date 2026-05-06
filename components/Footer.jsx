import { personalInfo } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: "hsl(var(--border))" }}
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="text-[10px] select-none"
            style={{ fontFamily: "'Press Start 2P', monospace", color: "hsl(var(--green))" }}
            aria-label="AS colon initials"
          >
            AS:
          </span>
          <span className="text-xs text-muted-foreground">
            © {year} {personalInfo.name}. All rights reserved.
          </span>
          <Link
            href="/blog"
            className="text-xs font-mono text-muted-foreground hover:text-green-500 transition-colors"
          >
            Blog
          </Link>
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          Built with{" "}
          <span style={{ color: "hsl(var(--green))" }}>Next.js</span>
          {" · "}
          <span style={{ color: "hsl(var(--green))" }}>Tailwind CSS</span>
          {" · "}
          <span style={{ color: "hsl(var(--green))" }}>MDX</span>
        </p>
      </div>
    </footer>
  );
}
