import { ExternalLink, CheckCircle, Clock } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span
            className="text-xs font-mono tracking-widest uppercase mb-2 block"
            style={{ color: "hsl(var(--green))" }}
          >
            03. Projects
          </span>
          <h2
            id="projects-heading"
            className="text-3xl font-bold text-foreground"
          >
            Featured Projects
          </h2>
          <div
            className="mt-2 h-px w-12"
            style={{ backgroundColor: "hsl(var(--green))" }}
            aria-hidden="true"
          />
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="rounded-xl border p-6 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg group"
              style={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              aria-label={`${project.title} - ${project.subtitle}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-green-500 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className="flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded-full border"
                      style={
                        project.status === "Deployed"
                          ? {
                              color: "hsl(var(--green))",
                              borderColor: "hsl(var(--green) / 0.3)",
                              backgroundColor: "hsl(var(--green) / 0.1)",
                            }
                          : {
                              color: "hsl(var(--muted-foreground))",
                              borderColor: "hsl(var(--border))",
                              backgroundColor: "hsl(var(--muted))",
                            }
                      }
                      aria-label={`Status: ${project.status}`}
                    >
                      {project.status === "Deployed" ? (
                        <CheckCircle className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <Clock className="h-3 w-3" aria-hidden="true" />
                      )}
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Links */}
                <div className="flex gap-2 shrink-0">
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`github-${project.id}`}
                      aria-label={`${project.title} GitHub repository`}
                      className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-border hover:border-green-500 hover:text-green-500 text-muted-foreground transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`live-${project.id}`}
                      aria-label={`${project.title} live demo`}
                      className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-border hover:border-green-500 hover:text-green-500 text-muted-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* Stack badge */}
              <p className="text-xs font-mono text-muted-foreground mb-3">
                Stack:{" "}
                <span style={{ color: "hsl(var(--green))" }}>{project.stack}</span>
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul
                className="space-y-1.5 mb-4"
                aria-label={`${project.title} key features`}
              >
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span
                      className="mt-0.5 shrink-0"
                      style={{ color: "hsl(var(--green))" }}
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div
                className="flex flex-wrap gap-1.5 pt-3 border-t"
                style={{ borderColor: "hsl(var(--border))" }}
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag" role="listitem">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
