import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { getHighlightProjects, getServices } from '@/lib/sanity'

export const dynamic = 'force-dynamic'

const STATS = [
  { value: '6+',    label: 'Anni di R&D' },
  { value: '18',    label: 'Progetti consegnati' },
  { value: '5',     label: 'Settori serviti' },
  { value: '99.7%', label: 'Uptime sistemi critici' },
]

export default async function HomePage() {
  const [projects, services] = await Promise.all([
    getHighlightProjects(),
    getServices(),
  ])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* ── HERO ────────────────────────────────────── */}
        <section style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex', alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Grid di sfondo */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(var(--bg-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--bg-border) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.4,
          }} />
          {/* Glow centrale */}
          <div style={{
            position: 'absolute', top: '20%', left: '50%',
            transform: 'translateX(-50%)',
            width: '600px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '780px' }}>
              <span className="label" style={{ marginBottom: '1.5rem', display: 'block' }}>
                Deep-tech · Napoli, Italia
              </span>
              <h1 style={{ marginBottom: '1.5rem' }}>
                Dove la fisica<br />
                <span style={{ color: 'var(--accent)' }}>incontra</span> l'intelligenza<br />
                digitale
              </h1>
              <p style={{
                fontSize: '1.15rem', color: 'var(--text-secondary)',
                maxWidth: '560px', marginBottom: '2.5rem', lineHeight: '1.8',
              }}>
                Pico progetta sistemi cyber-fisici ad alto valore tecnologico per misure ambientali,
                sicurezza critica e biomedicale. Dal sensore al software, dall'idea al prodotto certificato.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn-primary">Scopri le soluzioni</Link>
                <Link href="/contact" className="btn-ghost">Parla con un esperto</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ───────────────────────────────────── */}
        <section style={{ borderTop: '1px solid var(--bg-border)', borderBottom: '1px solid var(--bg-border)' }}>
          <div className="container" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0', padding: '0 clamp(1.25rem, 4vw, 3rem)',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                padding: '2.5rem 2rem',
                borderRight: i < 3 ? '1px solid var(--bg-border)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '2.8rem', color: 'var(--accent)', lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>{s.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVIZI (primi 3) ────────────────────────── */}
        <section className="section">
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ marginBottom: '0.75rem', display: 'block' }}>Cosa facciamo</span>
            <h2 style={{ marginBottom: '3.5rem', maxWidth: '520px' }}>
              Soluzioni per ambienti<br />dove i margini di errore<br />sono prossimi a zero
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {services.slice(0, 3).map((s: any) => (
                <Link key={s.id} href={`/services#${s.id}`} className="card" style={{ textDecoration: 'none' }}>
                  <span className="label" style={{ marginBottom: '1rem', display: 'block' }}>{s.icon || '◈'}</span>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                    {s.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/services" className="btn-ghost">Tutte le soluzioni →</Link>
            </div>
          </div>
        </section>

        {/* ── PROGETTI IN EVIDENZA ─────────────────────── */}
        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ marginBottom: '0.75rem', display: 'block' }}>Progetti selezionati</span>
            <h2 style={{ marginBottom: '3.5rem' }}>Casi studio</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {projects.map((p: any, i: number) => (
                <Link key={p.id} href={`/projects/${p.id}`} style={{
                  textDecoration: 'none',
                  display: 'grid', gridTemplateColumns: '1fr 3fr auto',
                  alignItems: 'center', gap: '2rem',
                  padding: '1.75rem 2rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'var(--transition)',
                }}>
                  <div>
                    <span className="label" style={{ color: 'var(--text-muted)' }}>{p.year}</span>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{p.sector}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{p.results}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {p.tags?.slice(0, 2).map((t: string) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/projects" className="btn-ghost">Tutti i progetti →</Link>
            </div>
          </div>
        </section>

        {/* ── CTA FINALE ──────────────────────────────── */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="label" style={{ marginBottom: '1rem', display: 'block' }}>Inizia una conversazione</span>
            <h2 style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              Hai un problema fisico<br />da risolvere?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              Raccontacelo. Che sia una misura impossibile, un ambiente ostile o un processo da
              automatizzare, il nostro team valuta ogni sfida con rigore scientifico.
            </p>
            <Link href="/contact" className="btn-primary">Scrivici →</Link>
          </div>
        </section>

        {/* Footer minimale */}
        <footer style={{
          borderTop: '1px solid var(--bg-border)',
          padding: '2rem 0',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.82rem',
        }}>
          <div className="container">
            <p>© {new Date().getFullYear()} Pico S.r.l. — Napoli, Italia · P.IVA 00000000000</p>
          </div>
        </footer>

      </main>
    </>
  )
}
