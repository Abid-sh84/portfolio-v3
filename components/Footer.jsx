import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: "hsl(var(--border))" }}
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
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
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          Built with{" "}
          <span style={{ color: "hsl(var(--green))" }}>Next.js</span>
          {" · "}
          <span style={{ color: "hsl(var(--green))" }}>Tailwind CSS</span>
          {" · "}
          <span style={{ color: "hsl(var(--green))" }}>shadcn/ui</span>
        </p>
      </div>
    </footer>
  );
}
