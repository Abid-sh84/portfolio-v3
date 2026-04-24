import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '@/lib/constants'

const categories = ['All', ...Object.keys(skills)]

// Category icons (emoji-based for visual pop)
const catIcons = {
  'Languages': '{}',
  'Frameworks & Technologies': '</>',
  'Databases': '🗄',
  'APIs & Communication': '⚡',
  'AI & Tools': '🤖',
}

export default function Skills() {
  const [active, setActive] = useState('All')

  const displayed =
    active === 'All'
      ? Object.entries(skills).flatMap(([cat, items]) => items.map(s => ({ ...s, cat })))
      : (skills[active] || []).map(s => ({ ...s, cat: active }))

  return (
    <section id="skills" className="py-24 screen-line bg-card/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">02 — What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            The tools and technologies I use to build full-stack applications.
          </p>
        </motion.div>

        {/* Category filter — pill row */}
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
              className={`text-xs px-3.5 py-1.5 rounded-full border font-mono font-medium transition-all duration-200 cursor-pointer ${
                active === cat
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-ring'
              }`}
            >
              {catIcons[cat] && <span className="mr-1.5 text-xs opacity-70">{catIcons[cat]}</span>}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.18, delay: i * 0.015 }}
              >
                <div className="bento-card py-4 px-3 flex flex-col items-center gap-2 text-center cursor-default group hover:bg-accent transition-colors">
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                    {skill.name}
                  </span>
                  <span className="text-xs text-muted-foreground/60 font-mono leading-none">
                    {skill.cat.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}