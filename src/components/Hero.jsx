import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { personalInfo, socialLinks } from '@/lib/constants'
import { Mail, ArrowDown, MapPin } from 'lucide-react'

const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'AI Integration Developer', 'Backend Developer']

export default function Hero() {
  const roleRef = useRef(null)
  const roleIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const typeEffect = () => {
      const current = roles[roleIndex.current]
      if (!isDeleting.current) {
        if (charIndex.current <= current.length) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current)
          charIndex.current++
          timerRef.current = setTimeout(typeEffect, 65)
        } else {
          timerRef.current = setTimeout(() => { isDeleting.current = true; typeEffect() }, 2000)
        }
      } else {
        if (charIndex.current > 0) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current - 1)
          charIndex.current--
          timerRef.current = setTimeout(typeEffect, 35)
        } else {
          isDeleting.current = false
          roleIndex.current = (roleIndex.current + 1) % roles.length
          timerRef.current = setTimeout(typeEffect, 350)
        }
      }
    }
    timerRef.current = setTimeout(typeEffect, 600)
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ paddingTop: '100px', paddingBottom: '60px' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 18% / 0.25) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(0 0% 18% / 0.25) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Text */}
          <motion.div
            className="flex-1 flex flex-col gap-5 lg:text-left text-center"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Status badge */}
            <motion.div
              className="flex lg:justify-start justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="gap-2 py-1 px-3 text-xs font-normal text-muted-foreground">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse-dot inline-block"
                />
                Available for opportunities
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="flex items-center gap-0.5 lg:justify-start justify-center text-lg sm:text-xl font-medium text-muted-foreground min-h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span ref={roleRef} />
              <span className="animate-blink text-muted-foreground font-light">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl lg:mx-0 mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.description}
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center gap-1.5 text-xs text-muted-foreground lg:justify-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <MapPin size={12} />
              {personalInfo.location}
            </motion.div>

            {/* Actions */}
            <motion.div
              className="flex flex-wrap gap-3 lg:justify-start justify-center pt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline">
                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github" style={{ fontSize: '15px' }}></i>
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin" style={{ fontSize: '15px' }}></i>
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            {/* Social row */}
            <motion.div
              className="flex items-center gap-3 pt-1 lg:justify-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              <span className="text-xs text-muted-foreground">Also on</span>
              <Separator orientation="vertical" className="h-3" />
              {[
                { href: socialLinks.twitter, iconClass: 'fab fa-x-twitter', label: 'Twitter' },
                { href: socialLinks.email, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, iconClass, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {Icon ? <Icon size={15} /> : <i className={iconClass} style={{ fontSize: '15px' }}></i>}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Code Card */}
          <motion.div
            className="flex-shrink-0 hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div
              className="animate-float rounded-xl border border-border bg-card overflow-hidden w-80 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">developer.js</span>
              </div>
              {/* Code */}
              <pre className="px-5 py-5 text-xs leading-relaxed font-mono overflow-x-auto">
                <code>
                  <span className="text-purple-400">const </span>
                  <span className="text-blue-300">developer</span>
                  <span className="text-zinc-400"> = </span>
                  {'{\n'}
                  {'  '}<span className="text-red-300">name</span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-green-300">"Abid Shaikh"</span>
                  {',\n'}
                  {'  '}<span className="text-red-300">stack</span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-green-300">"MERN"</span>
                  {',\n'}
                  {'  '}<span className="text-red-300">focus</span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-green-300">"AI + Web"</span>
                  {',\n'}
                  {'  '}<span className="text-red-300">location</span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-green-300">"India"</span>
                  {',\n'}
                  {'  '}<span className="text-red-300">openToWork</span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-orange-300">true</span>
                  {',\n'}
                  {'}'}
                </code>
              </pre>
              {/* Footer */}
              <div className="px-5 py-2.5 border-t border-border flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground font-mono">Ready to build</span>
              </div>
            </div>
            {/* Floating stats */}
            <div className="animate-float-slow absolute -top-4 -right-6 bg-card border border-border rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-xs font-medium text-muted-foreground">MERN Stack</span>
            </div>
            <div className="animate-float absolute -bottom-4 -left-6 bg-card border border-border rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-xs font-medium text-muted-foreground">2+ Projects Deployed</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group">
          <span className="text-xs font-mono uppercase tracking-widest">scroll</span>
          <ArrowDown size={13} className="animate-float" />
        </a>
      </motion.div>
    </section>
  )
}
