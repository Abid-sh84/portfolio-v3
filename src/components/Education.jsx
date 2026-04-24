import { motion } from 'framer-motion'
import { education } from '@/lib/constants'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24 screen-line">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">05 — Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Education
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Academic foundation that supports my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="timeline-item mb-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <GraduationCap size={7} className="text-muted-foreground" />
              </div>

              <div className="bento-card overflow-hidden">
                {/* Card header */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground font-medium mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono border border-border bg-secondary text-muted-foreground">
                        {edu.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                        <Calendar size={10} />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border mx-6" />

                <div className="px-6 py-4 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

                  {/* CGPA badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/60 border border-border w-fit">
                    <Award size={13} className="text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground">CGPA</span>
                    <span className="text-sm font-bold font-mono text-foreground">{edu.cgpa}</span>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Coursework */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={12} className="text-muted-foreground" />
                      <span className="section-label text-xs">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map(course => (
                        <span key={course} className="tag-pill">{course}</span>
                      ))}
                    </div>
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
