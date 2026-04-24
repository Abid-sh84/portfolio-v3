import { personalInfo, socialLinks } from '@/lib/constants'
import { Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-sm font-semibold text-foreground">
              <span className="text-muted-foreground">&lt;</span>
              {personalInfo.name.split(' ')[0]}
              <span className="text-muted-foreground">/&gt;</span>
            </span>
            <span className="text-xs text-muted-foreground font-mono">Full Stack Developer</span>
            <span className="text-xs text-muted-foreground font-mono">{personalInfo.location}</span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            <p className="section-label text-xs mb-1">Navigation</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors no-underline font-mono"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            <p className="section-label text-xs mb-1">Connect</p>
            <div className="flex flex-col gap-1">
              {[
                { href: socialLinks.github, iconClass: 'fab fa-github', label: 'GitHub' },
                { href: socialLinks.linkedin, iconClass: 'fab fa-linkedin', label: 'LinkedIn' },
                { href: socialLinks.twitter, iconClass: 'fab fa-x-twitter', label: 'Twitter' },
                { href: socialLinks.email, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, iconClass, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors no-underline font-mono"
                >
                  {Icon ? <Icon size={12} /> : <i className={iconClass} style={{ fontSize: '12px', width: '12px', textAlign: 'center' }} />}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
          <p className="text-xs text-muted-foreground font-mono">
            © {year} {personalInfo.name}
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
