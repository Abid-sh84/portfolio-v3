import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { projects } from '@/lib/constants'
import { ExternalLink, CheckCircle2, Clock } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">03 — What I've Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">Featured Projects</h2>
          <p className="text-sm text-muted-foreground max-w-md">Real-world applications designed, built, and deployed from scratch.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Card className="hover:border-zinc-600 transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex flex-col gap-2">
                      {/* Badges row */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="secondary"
                          className={`gap-1.5 text-xs font-normal ${project.status === 'Deployed' ? 'text-zinc-300' : 'text-zinc-400'}`}
                        >
                          {project.status === 'Deployed'
                            ? <CheckCircle2 size={11} />
                            : <Clock size={11} />
                          }
                          {project.status}
                        </Badge>
                        <span className="text-xs font-mono text-muted-foreground">{project.stack}</span>
                      </div>
                      {/* Title */}
                      <CardTitle className="text-xl font-bold tracking-tight">{project.title}</CardTitle>
                      <CardDescription className="font-mono text-xs">{project.subtitle}</CardDescription>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 flex-shrink-0">
                      {project.githubUrl !== '#' && (
                        <Button asChild variant="outline" size="icon">
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="fab fa-github" style={{ fontSize: '15px' }}></i>
                          </a>
                        </Button>
                      )}
                      {project.liveUrl !== '#' && (
                        <Button asChild variant="outline" size="icon">
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live">
                            <ExternalLink size={15} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <Separator />

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={13} className="text-zinc-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Separator />

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs font-normal font-mono text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
