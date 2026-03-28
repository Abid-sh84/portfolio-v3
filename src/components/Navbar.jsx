import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { personalInfo } from '@/lib/constants'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('nav-scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => menuRef.current?.classList.toggle('menu-open')
  const closeMenu = () => menuRef.current?.classList.remove('menu-open')

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: '18px 0',
        }}
      >
        <div
          className="nav-inner max-w-5xl mx-auto px-6 flex items-center gap-8"
          style={{ backdropFilter: 'none', transition: 'all 0.3s ease' }}
        >
          {/* Logo */}
          <a href="#hero" className="font-mono text-base font-semibold text-foreground mr-auto no-underline flex items-center gap-0.5">
            <span className="text-muted-foreground">&lt;</span>
            <span>{personalInfo.name.split(' ')[0]}</span>
            <span className="text-muted-foreground">/&gt;</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-accent no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Link (desktop) */}
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex text-xs">
            <a href={`mailto:${personalInfo.email}`}>Contact</a>
          </Button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-foreground rounded" />
            <span className="block w-5 h-0.5 bg-foreground rounded" />
            <span className="block w-5 h-0.5 bg-foreground rounded" />
          </button>
        </div>

        {/* Scrolled border */}
        <div
          id="nav-border"
          className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-0 transition-opacity duration-300"
        />
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="mobile-overlay fixed inset-0 z-40 bg-background flex-col items-center justify-center hidden"
        style={{ display: 'none' }}
      >
        <ul className="flex flex-col items-center gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-semibold text-foreground no-underline hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={closeMenu}
              className="text-2xl font-semibold text-muted-foreground no-underline hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        nav.nav-scrolled {
          background: hsl(0 0% 6% / 0.95) !important;
          padding-top: 12px !important;
          padding-bottom: 12px !important;
          backdrop-filter: blur(20px) !important;
          border-bottom: 1px solid hsl(var(--border));
        }
        .mobile-overlay.menu-open {
          display: flex !important;
        }
      `}</style>
    </>
  )
}
