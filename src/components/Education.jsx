import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { education } from '@/lib/constants'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">05 — Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">Education</h2>
          <p className="text-sm text-muted-foreground max-w-md">Academic foundation that supports my technical expertise.</p>
        </motion.div>

        <div className="max-w-3xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="hover:border-zinc-600 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={18} className="text-zinc-400" />
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">{edu.degree}</h3>
                      </div>
                      <p className="text-sm font-medium text-zinc-400">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="text-xs font-normal">
                        {edu.status}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                        <Calendar size={11} />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

                  {/* CGPA */}
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border w-fit">
                    <Award size={14} className="text-zinc-400" />
                    <span className="text-xs font-mono text-muted-foreground">CGPA</span>
                    <span className="text-sm font-bold font-mono text-foreground">{edu.cgpa}</span>
                  </div>

                  <Separator />

                  {/* Coursework */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={13} className="text-muted-foreground" />
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map(course => (
                        <Badge key={course} variant="outline" className="text-xs font-normal font-mono text-muted-foreground">
                          {course}
                        </Badge>
                      ))}
                    </div>
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
