import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span
            className="text-xs font-mono tracking-widest uppercase mb-2 block"
            style={{ color: "hsl(var(--green))" }}
          >
            04. Experience
          </span>
          <h2
            id="experience-heading"
            className="text-3xl font-bold text-foreground"
          >
            Work Experience
          </h2>
          <div
            className="mt-2 h-px w-12"
            style={{ backgroundColor: "hsl(var(--green))" }}
            aria-hidden="true"
          />
        </div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-6 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "hsl(var(--border))" }}
            aria-hidden="true"
          />

          {experience.map((job) => (
            <article
              key={job.id}
              id={`exp-${job.id}`}
              className="relative md:pl-14"
              aria-label={`${job.title} at ${job.company}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-3.5 top-6 h-3 w-3 rounded-full border-2 hidden md:block"
                style={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--green))",
                }}
                aria-hidden="true"
              />

              <div
                className="rounded-xl border p-6 transition-all duration-300 hover:border-green-500/50 hover:shadow-md"
                style={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground">{job.title}</h3>
                    <p className="text-sm font-medium" style={{ color: "hsl(var(--green))" }}>
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs font-mono text-muted-foreground">{job.duration}</span>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full border w-fit"
                      style={{
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--muted-foreground))",
                      }}
                      aria-label={`Job type: ${job.type}`}
                    >
                      <Briefcase className="h-3 w-3 inline mr-1" aria-hidden="true" />
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Highlights */}
                <ul
                  className="space-y-1.5 mb-4"
                  aria-label={`Key responsibilities at ${job.company}`}
                >
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
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
                  aria-label={`Technologies used at ${job.company}`}
                >
                  {job.technologies.map((tech) => (
                    <span key={tech} className="tech-tag" role="listitem">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
