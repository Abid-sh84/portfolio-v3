import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { personalInfo, socialLinks } from '@/lib/constants'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">06 — Let's Talk</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">Get In Touch</h2>
          <p className="text-sm text-muted-foreground max-w-md">Have a project or want to connect? My inbox is open.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6 flex flex-col gap-6 h-full">
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Let's build together</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Whether it's a full-stack project, a collaboration, or just a technical conversation — feel free to reach out.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 group no-underline">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Mail size={14} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                      <p className="text-sm text-foreground group-hover:text-zinc-300 transition-colors font-medium">{personalInfo.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <MapPin size={14} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                      <p className="text-sm text-foreground font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-2">
                  {[
                    { href: socialLinks.github, iconClass: 'fab fa-github', label: 'GitHub' },
                    { href: socialLinks.linkedin, iconClass: 'fab fa-linkedin', label: 'LinkedIn' },
                    { href: socialLinks.twitter, iconClass: 'fab fa-x-twitter', label: 'Twitter' },
                  ].map(({ href, iconClass, label }) => (
                    <Button key={label} asChild variant="outline" size="icon">
                      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                        <i className={iconClass} style={{ fontSize: '15px' }}></i>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-muted-foreground">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-zinc-500 transition-colors font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-muted-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-zinc-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-muted-foreground">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full bg-secondary border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-zinc-500 transition-colors resize-none font-sans"
                    />
                  </div>

                  {sent && (
                    <div className="flex items-center gap-2 text-sm text-zinc-300 bg-secondary rounded-md px-4 py-3 border border-border">
                      <CheckCircle size={14} className="text-zinc-400" />
                      Mail client opened — thanks for reaching out!
                    </div>
                  )}

                  <Button type="submit" className="w-full">
                    <Send size={14} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
