import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { socialLinks } from '@/lib/constants'

const navLinks = [
  { label: 'Portfolio', href: '#hero' },
  { label: 'Blog', href: '#' },
  { label: 'Products', href: '#' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href === '#') return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="site-nav">
      <div className="max-w-5xl mx-auto px-6 w-full flex items-center gap-6">

        {/* Pixel logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-pixel text-sm text-foreground no-underline flex-shrink-0 leading-none"
          style={{ fontSize: '13px', letterSpacing: '0.05em' }}
          aria-label="Home"
        >
          AS:
        </a>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId && link.href !== '#'
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1 rounded text-sm no-underline transition-colors ${
                  isActive
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Search */}
        <button
          className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded border border-border bg-transparent text-muted-foreground text-xs cursor-pointer hover:border-ring transition-colors"
          aria-label="Search"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span className="font-mono text-[10px]">Ctrl K</span>
        </button>

        {/* GitHub */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-foreground transition-colors no-underline"
          aria-label="GitHub"
        >
          <i className="fab fa-github text-base" />
        </a>

        {/* Divider */}
        <div className="hidden md:block w-px h-4 bg-border" />

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Mobile hamburger — simple */}
        <button
          id="mobile-menu-btn"
          className="md:hidden w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            if (menu) menu.classList.toggle('hidden')
          }}
          aria-label="Menu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className="hidden absolute top-12 left-0 right-0 border-b border-border bg-background flex-col py-2"
      >
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              handleNavClick(e, link.href)
              document.getElementById('mobile-menu')?.classList.add('hidden')
            }}
            className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent no-underline transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent no-underline transition-colors flex items-center gap-2"
        >
          <i className="fab fa-github" />
          GitHub
        </a>
      </div>
    </nav>
  )
}
