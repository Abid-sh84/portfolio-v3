import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { experience } from '@/lib/constants'
import { Briefcase, Calendar, ArrowRight } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">04 — Where I've Worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">Experience</h2>
          <p className="text-sm text-muted-foreground max-w-md">Professional work that shaped my development skills.</p>
        </motion.div>

        <div className="max-w-3xl">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="hover:border-zinc-600 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                        <Briefcase size={13} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="text-xs font-normal">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                        <Calendar size={11} />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                  <Separator />

                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <ArrowRight size={13} className="text-zinc-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Separator />

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
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
