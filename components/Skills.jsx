import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span
            className="text-xs font-mono tracking-widest uppercase mb-2 block"
            style={{ color: "hsl(var(--green))" }}
          >
            02. Skills
          </span>
          <h2
            id="skills-heading"
            className="text-3xl font-bold text-foreground"
          >
            Tech Stack
          </h2>
          <div
            className="mt-2 h-px w-12"
            style={{ backgroundColor: "hsl(var(--green))" }}
            aria-hidden="true"
          />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border p-5 transition-all duration-300 hover:border-green-500/50 hover:shadow-md group"
              style={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
            >
              <h3
                className="text-xs font-mono font-semibold uppercase tracking-wider mb-4"
                style={{ color: "hsl(var(--green))" }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-tag"
                    role="listitem"
                    aria-label={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-xs font-mono text-muted-foreground text-center">
          // Always learning new technologies and tools
        </p>
      </div>
    </section>
  );
}
