import { useState } from 'react'
import { motion } from 'framer-motion'
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

  const inputClass = `
    w-full bg-secondary border border-border rounded-lg px-4 py-2.5
    text-sm text-foreground placeholder:text-muted-foreground
    font-sans transition-all duration-200
  `

  return (
    <section id="contact" className="py-24 screen-line bg-card/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">06 — Let's Talk</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Get In Touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Have a project or want to connect? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Info card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bento-card h-full p-6 flex flex-col gap-6">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">Let's build together</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether it's a full-stack project, a collaboration, or just a technical conversation — feel free to reach out.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 group no-underline"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 font-mono">Email</p>
                    <p className="text-xs text-foreground group-hover:underline font-medium break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 font-mono">Location</p>
                    <p className="text-sm text-foreground font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Social links */}
              <div className="flex flex-col gap-2">
                {[
                  { href: socialLinks.github, iconClass: 'fab fa-github', label: 'GitHub' },
                  { href: socialLinks.linkedin, iconClass: 'fab fa-linkedin', label: 'LinkedIn' },
                  { href: socialLinks.twitter, iconClass: 'fab fa-x-twitter', label: 'Twitter / X' },
                ].map(({ href, iconClass, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border hover:bg-accent no-underline text-foreground transition-colors group text-sm font-medium"
                  >
                    <i className={`${iconClass} w-4 text-center`} />
                    {label}
                    <span className="ml-auto font-mono text-xs text-muted-foreground group-hover:text-foreground">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bento-card p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {sent && (
                  <div className="flex items-center gap-2 text-sm text-foreground bg-secondary rounded-lg px-4 py-3 border border-border">
                    <CheckCircle size={14} className="text-emerald-500" />
                    Mail client opened — thanks for reaching out!
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Send size={13} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
