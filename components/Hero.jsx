"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/data";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "AI Integration Specialist",
  "Problem Solver",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [time, setTime] = useState("");

  /* Typing effect */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : charIndex === current.length ? 1800 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex <= current.length) {
          setDisplayText(current.slice(0, charIndex));
          setCharIndex((c) => c + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  /* Live time */
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-14 px-6"
      aria-label="Hero section"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Pixel logo banner */}
        <div
          className="flex items-center justify-center py-10 mb-10 border-b"
          style={{ borderBottomColor: "hsl(var(--green))" }}
        >
          <span
            className="text-2xl md:text-4xl text-foreground select-none"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
            aria-label="AS colon - Abid Shaikh initials"
          >
            AS:
          </span>
        </div>

        {/* Profile card */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div
                className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-2"
                style={{ borderColor: "hsl(var(--green))" }}
              >
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  fill
                  sizes="(max-width: 768px) 96px, 112px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Online indicator */}
              <span
                className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-background"
                style={{ backgroundColor: "hsl(var(--green))" }}
                aria-label="Available for work"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                {personalInfo.name}
              </h1>
              <p
                className="mt-1 text-sm font-medium min-h-[20px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "hsl(var(--green))",
                }}
                aria-live="polite"
                aria-label={`Current role: ${displayText}`}
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin
                  className="h-3.5 w-3.5 shrink-0"
                  style={{ color: "hsl(var(--green))" }}
                  aria-hidden="true"
                />
                <span className="text-sm text-muted-foreground font-mono">
                  {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail
                  className="h-3.5 w-3.5 shrink-0"
                  style={{ color: "hsl(var(--green))" }}
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-mono text-muted-foreground hover:text-green-500 transition-colors"
                  aria-label={`Email ${personalInfo.name}`}
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <svg
                  className="h-3.5 w-3.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  style={{ color: "hsl(var(--green))" }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm font-mono text-muted-foreground">{time}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: "hsl(var(--green))" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-mono"
                  style={{ color: "hsl(var(--green))" }}
                >
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mt-1">
              {personalInfo.description}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
              <Button
                id="view-projects-btn"
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-green-600 hover:bg-green-500 text-white dark:bg-green-600 dark:hover:bg-green-500"
                aria-label="View Abid's projects"
              >
                View Projects
              </Button>
              <Button
                id="contact-btn"
                variant="outline"
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Get in touch with Abid"
              >
                Get in Touch
              </Button>

              {/* Social links */}
              <div className="flex gap-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github-link"
                  aria-label="Abid Shaikh GitHub"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:border-green-500 hover:text-green-500 text-muted-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="linkedin-link"
                  aria-label="Abid Shaikh LinkedIn"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:border-green-500 hover:text-green-500 text-muted-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="twitter-link"
                  aria-label="Abid Shaikh on X (Twitter)"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:border-green-500 hover:text-green-500 text-muted-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            id="scroll-down-btn"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-mono">scroll down</span>
            <ArrowDown
              className="h-4 w-4 animate-bounce"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
