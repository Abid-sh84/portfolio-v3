import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span
            className="text-xs font-mono tracking-widest uppercase mb-2 block"
            style={{ color: "hsl(var(--green))" }}
          >
            06. Contact
          </span>
          <h2
            id="contact-heading"
            className="text-3xl font-bold text-foreground"
          >
            Get In Touch
          </h2>
          <div
            className="mt-2 h-px w-12"
            style={{ backgroundColor: "hsl(var(--green))" }}
            aria-hidden="true"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: text */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              I&apos;m currently open to full-time opportunities and interesting freelance projects.
              Whether you have a question, want to collaborate, or just want to say hi — my inbox
              is always open!
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I&apos;ll try my best to get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "hsl(var(--green) / 0.1)" }}
                  aria-hidden="true"
                >
                  <Mail className="h-4 w-4" style={{ color: "hsl(var(--green))" }} />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-mono hover:text-green-500 transition-colors text-foreground"
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "hsl(var(--green) / 0.1)" }}
                  aria-hidden="true"
                >
                  <MapPin className="h-4 w-4" style={{ color: "hsl(var(--green))" }} />
                </div>
                <span className="text-sm font-mono text-foreground">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <a href={`mailto:${personalInfo.email}`} aria-label="Send email to Abid Shaikh">
                <Button
                  id="send-email-btn"
                  className="bg-green-600 hover:bg-green-500 text-white gap-2"
                >
                  Say Hello
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right: social links */}
          <div
            className="rounded-xl border p-6 space-y-4"
            style={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
            }}
          >
            <h3 className="text-sm font-semibold text-foreground">Connect with me</h3>
            <div className="space-y-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github"
                aria-label="Visit Abid's GitHub profile"
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-green-500/50 hover:bg-accent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground font-mono">@Abid-sh84</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
                aria-label="Visit Abid's LinkedIn profile"
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-green-500/50 hover:bg-accent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted-foreground font-mono">@shkabid40</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </a>

              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-twitter"
                aria-label="Visit Abid's X (Twitter) profile"
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-green-500/50 hover:bg-accent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">X (Twitter)</p>
                    <p className="text-xs text-muted-foreground font-mono">@AbidShaikh550</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
