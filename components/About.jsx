import { personalInfo, socialLinks } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span
            className="text-xs font-mono tracking-widest uppercase mb-2 block"
            style={{ color: "hsl(var(--green))" }}
          >
            01. About
          </span>
          <h2
            id="about-heading"
            className="text-3xl font-bold text-foreground"
          >
            About Me
          </h2>
          <div
            className="mt-2 h-px w-12"
            style={{ backgroundColor: "hsl(var(--green))" }}
            aria-hidden="true"
          />
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Text content */}
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              I&apos;m <strong className="text-foreground font-semibold">Abid Shaikh</strong>, a
              Full Stack Developer based in{" "}
              <strong className="text-foreground">Thane, India</strong>, with a strong passion for
              building production-ready web applications that solve real problems.
            </p>
            <p>
              My primary stack is the <strong className="text-foreground">MERN stack</strong>{" "}
              (MongoDB, Express.js, React.js, Node.js), and I&apos;m experienced in integrating{" "}
              <strong className="text-foreground">AI capabilities</strong> into web applications
              using tools like Gemini AI and Claude (Anthropic). I recently migrated my portfolio
              to <strong className="text-foreground">Next.js</strong> for better performance and
              SEO.
            </p>
            <p>
              I&apos;ve built and deployed full-stack products including{" "}
              <a
                href="https://quickbite.abids.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium hover:underline underline-offset-2 transition-colors"
                style={{ color: "hsl(var(--green))" }}
                aria-label="QuickBite food ordering platform"
              >
                QuickBite
              </a>{" "}
              (a food ordering platform with real-time order tracking) and{" "}
              <a
                href="https://edprompt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium hover:underline underline-offset-2 transition-colors"
                style={{ color: "hsl(var(--green))" }}
                aria-label="EduPrompt AI learning platform"
              >
                EduPrompt AI
              </a>{" "}
              (an AI-powered study platform with live viva exams).
            </p>
            <p>
              Outside of coding, I&apos;m constantly learning — whether that&apos;s exploring new
              technologies, contributing to open-source, or improving my problem-solving skills.
              I&apos;m currently{" "}
              <strong className="text-foreground">open to full-time opportunities</strong> where I
              can contribute, grow, and build impactful software.
            </p>

            {/* Quick facts */}
            <ul
              className="mt-6 space-y-2 border-l-2 pl-4"
              style={{ borderLeftColor: "hsl(var(--green))" }}
              aria-label="Quick facts about Abid"
            >
              <li className="flex items-start gap-2">
                <span style={{ color: "hsl(var(--green))" }} aria-hidden="true">▸</span>
                <span>
                  <strong className="text-foreground">Education:</strong> BSc Computer Science,
                  Mumbai University — Graduated with{" "}
                  <strong className="text-foreground">9.15 GPA</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "hsl(var(--green))" }} aria-hidden="true">▸</span>
                <span>
                  <strong className="text-foreground">Experience:</strong> Backend Developer
                  Intern at Zidio Development
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "hsl(var(--green))" }} aria-hidden="true">▸</span>
                <span>
                  <strong className="text-foreground">Focus:</strong> MERN stack, REST APIs,
                  real-time communication, AI integration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "hsl(var(--green))" }} aria-hidden="true">▸</span>
                <span>
                  <strong className="text-foreground">Contact:</strong>{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono hover:underline underline-offset-2"
                    style={{ color: "hsl(var(--green))" }}
                    aria-label={`Email Abid at ${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Status card */}
          <div
            className="rounded-xl border p-5 space-y-3 min-w-[200px]"
            style={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
            }}
          >
            <h3 className="text-sm font-semibold text-foreground">Current Status</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "hsl(var(--green))" }}
                  aria-hidden="true"
                />
                <span className="text-xs font-mono text-muted-foreground">Available</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Open to full-time roles & freelance projects
              </p>
            </div>
            <hr style={{ borderColor: "hsl(var(--border))" }} />
            <div className="space-y-1.5 text-xs font-mono text-muted-foreground">
              <div>📍 Thane, India</div>
              <div>🕐 IST (UTC+5:30)</div>
              <div>💼 Full Stack Dev</div>
              <div>🎓 BSc CS (9.15 GPA)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
