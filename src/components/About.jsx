import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { personalInfo, socialLinks } from '@/lib/constants'
import { Mail, MapPin, Code2 } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Projects Built' },
  { value: '1', label: 'Internship' },
  { value: 'MERN', label: 'Core Stack' },
  { value: 'AI', label: 'Focus Area' },
]

const workingWith = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO',
  'REST APIs', 'Gemini AI', 'Clerk', 'Razorpay', 'FCM',
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">01 — Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with strong expertise in the MERN stack, building production-ready web applications from the ground up. I focus on writing clean, scalable code and delivering seamless user experiences.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I'm passionate about integrating <span className="text-foreground font-medium">AI capabilities</span> into web applications — from conversational tutoring and vector search to eye/lip attention tracking. I believe AI will be at the core of every impactful product.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-foreground font-medium">BSc in Computer Science</span> from Mumbai University while actively building real-world projects and expanding my technical depth.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={12} />
              {personalInfo.location}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail size={14} />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github" style={{ fontSize: '14px' }}></i>
                  View GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <Card key={i} className="hover:border-zinc-600 transition-colors cursor-default">
                  <CardContent className="pt-5 pb-5 text-center flex flex-col gap-1">
                    <span className="text-2xl font-bold font-mono tracking-tight text-foreground">{s.value}</span>
                    <span className="text-xs text-muted-foreground">{s.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working with */}
            <Card>
              <CardContent className="pt-5">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 size={13} className="text-muted-foreground" />
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Working with</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {workingWith.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
