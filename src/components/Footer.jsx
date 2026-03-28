import { Separator } from '@/components/ui/separator'
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
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-sm font-semibold text-foreground">
              <span className="text-muted-foreground">&lt;</span>
              {personalInfo.name.split(' ')[0]}
              <span className="text-muted-foreground">/&gt;</span>
            </span>
            <span className="text-xs text-muted-foreground font-mono">Full Stack Developer</span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-md hover:bg-accent no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {[
              { href: socialLinks.github, iconClass: 'fab fa-github' },
              { href: socialLinks.linkedin, iconClass: 'fab fa-linkedin' },
              { href: socialLinks.twitter, iconClass: 'fab fa-x-twitter' },
              { href: socialLinks.email, icon: Mail },
            ].map(({ href, icon: Icon, iconClass }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-zinc-500 transition-all no-underline"
              >
                {Icon ? <Icon size={14} /> : <i className={iconClass} style={{ fontSize: '14px' }}></i>}
              </a>
            ))}
          </div>
        </div>

        <Separator />

        <p className="text-xs text-muted-foreground text-center mt-6">
          © {year} {personalInfo.name} · Built with React & Framer Motion
        </p>
      </div>
    </footer>
  )
}
