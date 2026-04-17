'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/about',    label: 'Chi siamo' },
  { href: '/services', label: 'Soluzioni' },
  { href: '/projects', label: 'Progetti' },
  { href: '/team',     label: 'Team' },
  { href: '/contact',  label: 'Contatti' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid var(--bg-border)',
      background: 'rgba(8,12,16,0.88)',
      backdropFilter: 'blur(12px)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '2rem' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.4rem', letterSpacing: '-0.03em', color: 'var(--text-primary)',
          }}>PICO</span>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--accent)', display: 'block', marginTop: '2px',
          }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '0.25rem', marginLeft: 'auto' }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              color: pathname === href ? 'var(--accent)' : 'var(--text-secondary)',
              background: pathname === href ? 'var(--accent-glow)' : 'transparent',
              transition: 'var(--transition)',
            }}>{label}</Link>
          ))}
        </nav>

        {/* Helpdesk CTA */}
        <Link href="/helpdesk" className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}>
          Area riservata
        </Link>
      </div>
    </header>
  )
}
