import { useEffect, useRef, useState } from 'react'
import { personalInfo, socialLinks } from '@/lib/constants'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
      )
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div id="hero">
      {/* ── Pixel logo block — shown in both themes ── */}
      <div className="flex items-center justify-center py-12 border-b"
           style={{ borderBottomColor: 'hsl(142 71% 45%)' }}>
        <span className="font-pixel text-foreground select-none" style={{ fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: 1 }}>
          AS:
        </span>
      </div>

      {/* ── Profile header ── */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Profile row */}
        <div className="relative flex items-end gap-5 pt-8 pb-6 border-b border-border hero-header-line">
          {/* Avatar */}
          <div className="avatar-ring" style={{ width: 90, height: 90 }}>
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.style.background = 'hsl(var(--secondary))'
              }}
            />
          </div>

          {/* Name + title */}
          <div className="flex flex-col gap-1 pb-1">
            {/* Debug hint (hidden in prod) */}
            <span className="text-muted-foreground font-mono" style={{ fontSize: '9px', opacity: 0.4 }}>
              text-3xl text-zinc-950 font-medium
            </span>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-none" style={{ letterSpacing: '-0.02em' }}>
                {personalInfo.name}
              </h1>
              {/* Verified badge */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1d9bf0" style={{ flexShrink: 0 }}>
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.68.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.66 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
              </svg>
              {/* Speaker icon */}
              <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" aria-label="Pronounce name">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                </svg>
              </button>
            </div>
            <p className="font-mono text-muted-foreground" style={{ fontSize: '12px', letterSpacing: '0.03em' }}>
              {personalInfo.title}
            </p>
          </div>


        </div>

        {/* ── Info grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-b border-border py-5">
          {/* Left column */}
          <div className="flex flex-col">
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-muted-foreground">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              <span>
                <strong className="text-foreground font-semibold">Full Stack Developer</strong>
                {' '}& MERN Specialist
              </span>
            </div>
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              <span>Building <span className="text-foreground font-mono text-xs">@QuickBite</span></span>
            </div>
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{personalInfo.location}</span>
            </div>
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href={`tel:+919326XXXXXX`} className="link-green font-mono text-xs">+91 93XX XXX XXX</a>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="font-mono text-xs text-foreground">he/him</span>
            </div>
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="font-mono text-xs">
                <span className="text-foreground">{time}</span>
                <span className="text-muted-foreground"> // same time</span>
              </span>
            </div>
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="font-mono text-xs text-muted-foreground">Thane, India</span>
            </div>
            <div className="info-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a href={`mailto:${personalInfo.email}`} className="link-green font-mono text-xs">{personalInfo.email}</a>
            </div>
          </div>
        </div>

        {/* ── Social links grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-border">
          {/* LinkedIn */}
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-card border-r border-border sm:border-r">
            <span className="social-card-icon" style={{ background: '#0077b5', color: '#fff', borderRadius: 10 }}>
              <i className="fab fa-linkedin-in" style={{ fontSize: 18 }} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-sm text-foreground">LinkedIn</span>
              <span className="font-mono text-xs text-muted-foreground">@shkabid40</span>
            </div>
            <span className="social-card-arrow">↗</span>
          </a>

          {/* GitHub */}
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-card">
            <span className="social-card-icon" style={{ background: '#24292f', color: '#fff', borderRadius: 10 }}>
              <i className="fab fa-github" style={{ fontSize: 18 }} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-sm text-foreground">GitHub</span>
              <span className="font-mono text-xs text-muted-foreground">@Abid-sh84</span>
            </div>
            <span className="social-card-arrow">↗</span>
          </a>

          {/* X / Twitter */}
          <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="social-card border-r border-border sm:border-r border-t border-border">
            <span className="social-card-icon" style={{ background: '#000', color: '#fff', borderRadius: 10 }}>
              <i className="fab fa-x-twitter" style={{ fontSize: 17 }} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-sm text-foreground">X (Formerly Twitter)</span>
              <span className="font-mono text-xs text-muted-foreground">@AbidShaikh550</span>
            </div>
            <span className="social-card-arrow">↗</span>
          </a>

          {/* Email */}
          <a href={`mailto:${personalInfo.email}`} className="social-card border-t border-border">
            <span className="social-card-icon" style={{ background: '#ea4335', color: '#fff', borderRadius: 10 }}>
              <i className="fas fa-envelope" style={{ fontSize: 17 }} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-sm text-foreground">Email</span>
              <span className="font-mono text-xs text-muted-foreground">muhammadabid9326@gmail.com</span>
            </div>
            <span className="social-card-arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
