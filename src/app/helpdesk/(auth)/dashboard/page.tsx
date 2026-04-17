import Link from 'next/link'

export const metadata = { title: 'Helpdesk' }

export default function HelpdeskDashboard() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Area riservata
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          L&apos;helpdesk sarà disponibile a breve.
        </p>
        <Link href="/" style={{
          display: 'inline-block', padding: '0.75rem 1.75rem',
          background: 'var(--accent)', color: 'var(--bg-base)',
          fontFamily: 'var(--font-display)', fontWeight: 600,
          borderRadius: '4px', textDecoration: 'none',
        }}>
          ← Torna al sito
        </Link>
      </div>
    </main>
  )
}

