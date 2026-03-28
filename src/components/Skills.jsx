import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { skills } from '@/lib/constants'

const categories = ['All', ...Object.keys(skills)]

export default function Skills() {
  const [active, setActive] = useState('All')

  const displayed =
    active === 'All'
      ? Object.entries(skills).flatMap(([cat, items]) => items.map(s => ({ ...s, cat })))
      : (skills[active] || []).map(s => ({ ...s, cat: active }))

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">02 — What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">Skills & Technologies</h2>
          <p className="text-sm text-muted-foreground max-w-md">The tools and technologies I use to build full-stack applications.</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs px-3 py-1.5 rounded-md border font-medium font-mono transition-all duration-200 cursor-pointer
                ${active === cat
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-zinc-500'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
              >
                <Card className="hover:border-zinc-600 transition-colors cursor-default group">
                  <CardContent className="py-4 px-3 flex flex-col items-center gap-2 text-center">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                      {skill.name}
                    </span>
                    <Badge variant="outline" className="text-xs font-normal text-muted-foreground px-1.5 py-0">
                      {skill.cat}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}