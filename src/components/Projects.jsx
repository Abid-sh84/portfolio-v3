import { motion } from 'framer-motion'
import { projects } from '@/lib/constants'
import { ExternalLink, CheckCircle2, Clock } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 screen-line">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">03 — What I've Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Real-world applications designed, built, and deployed from scratch.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bento-card overflow-hidden">
                {/* Top row */}
                <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex flex-col gap-2 flex-1">
                    {/* Meta row */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono border ${
                          project.status === 'Deployed'
                            ? 'border-emerald-500/30 text-emerald-500 bg-emerald-500/5'
                            : 'border-amber-500/30 text-amber-500 bg-amber-500/5'
                        }`}
                      >
                        {project.status === 'Deployed'
                          ? <CheckCircle2 size={10} />
                          : <Clock size={10} />
                        }
                        {project.status}
                      </div>
                      <span className="text-xs font-mono text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        {project.stack}
                      </span>
                    </div>

                    {/* Title & subtitle */}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 flex-shrink-0">
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank" rel="noreferrer"
                        aria-label="GitHub"
                        className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-ring transition-all no-underline"
                      >
                        <i className="fab fa-github text-sm" />
                      </a>
                    )}
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank" rel="noreferrer"
                        aria-label="Live"
                        className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-ring transition-all no-underline"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mx-6" />

                {/* Description + highlights */}
                <div className="px-6 py-4 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Highlights as schematic list */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className="font-mono text-muted-foreground/50 shrink-0 mt-0.5">→</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border" />

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(tech => (
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
