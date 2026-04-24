import { motion } from 'framer-motion'
import { experience } from '@/lib/constants'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 screen-line bg-card/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">04 — Where I've Worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Experience
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Professional work that shaped my development skills.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="timeline-item mb-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <Briefcase size={7} className="text-muted-foreground" />
              </div>

              <div className="bento-card overflow-hidden">
                {/* Card header */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono border border-border bg-secondary text-muted-foreground">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                        <Calendar size={10} />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border mx-6" />

                <div className="px-6 py-4 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-col gap-2">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className="font-mono text-muted-foreground/50 shrink-0 mt-0.5">→</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-border" />

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="tag-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
