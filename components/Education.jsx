import { GraduationCap, Trophy } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6"
      aria-labelledby="education-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span
            className="text-xs font-mono tracking-widest uppercase mb-2 block"
            style={{ color: "hsl(var(--green))" }}
          >
            05. Education
          </span>
          <h2
            id="education-heading"
            className="text-3xl font-bold text-foreground"
          >
            Education
          </h2>
          <div
            className="mt-2 h-px w-12"
            style={{ backgroundColor: "hsl(var(--green))" }}
            aria-hidden="true"
          />
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <article
              key={edu.id}
              id={`edu-${edu.id}`}
              className="rounded-xl border p-6 transition-all duration-300 hover:border-green-500/50 hover:shadow-md"
              style={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              aria-label={`${edu.degree} at ${edu.institution}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 h-10 w-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "hsl(var(--green) / 0.1)" }}
                    aria-hidden="true"
                  >
                    <GraduationCap
                      className="h-5 w-5"
                      style={{ color: "hsl(var(--green))" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-sm font-medium" style={{ color: "hsl(var(--green))" }}>
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Right side: dates + GPA */}
                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground">{edu.duration}</span>

                  {/* GPA highlight */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: "hsl(var(--green) / 0.1)",
                      borderColor: "hsl(var(--green) / 0.3)",
                    }}
                    aria-label={`GPA: ${edu.cgpa}`}
                  >
                    <Trophy
                      className="h-3.5 w-3.5"
                      style={{ color: "hsl(var(--green))" }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: "hsl(var(--green))" }}
                    >
                      GPA: {edu.cgpa}
                    </span>
                  </div>

                  {/* Status badge */}
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full border w-fit"
                    style={
                      edu.status === "Graduated"
                        ? {
                            color: "hsl(var(--green))",
                            borderColor: "hsl(var(--green) / 0.3)",
                            backgroundColor: "hsl(var(--green) / 0.1)",
                          }
                        : {
                            color: "hsl(var(--muted-foreground))",
                            borderColor: "hsl(var(--border))",
                          }
                    }
                    aria-label={`Status: ${edu.status}`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {edu.description}
              </p>

              {/* Coursework */}
              {edu.coursework && (
                <div
                  className="pt-3 border-t"
                  style={{ borderColor: "hsl(var(--border))" }}
                >
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                    Relevant Coursework
                  </h4>
                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label="Coursework"
                  >
                    {edu.coursework.map((course) => (
                      <li key={course} className="tech-tag" role="listitem">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
