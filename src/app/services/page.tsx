import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { getServices } from '@/lib/sanity'

export const metadata = { title: 'Soluzioni' }

const ICON_MAP: Record<string, string> = {
  radiation:   '◉',
  control:     '◈',
  physics:     '⬡',
  audio:       '◎',
  education:   '◻',
  consulting:  '◆',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero sezione */}
        <section className="section" style={{ paddingBottom: '2rem' }}>
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Cosa facciamo</span>
            <h1 style={{ maxWidth: '640px', marginBottom: '1.5rem' }}>
              Soluzioni per ambienti dove i margini di errore sono prossimi a zero
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: '1.8' }}>
              Ogni prodotto Pico nasce dall'analisi del problema fisico sottostante.
              Non vendiamo tecnologia — progettiamo la risposta esatta alla sfida del cliente.
            </p>
          </div>
        </section>

        {/* Lista servizi */}
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {services.map((s: any, i: number) => (
                <div key={s.id} id={s.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr 280px',
                  gap: '2.5rem',
                  alignItems: 'start',
                  padding: '2.5rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'var(--transition)',
                }}>
                  {/* Numero e icona */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800,
                      fontSize: '2rem', color: 'var(--accent)',
                      lineHeight: 1, marginBottom: '0.4rem',
                    }}>
                      {ICON_MAP[s.icon] || '◈'}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      0{i + 1}
                    </div>
                  </div>

                  {/* Contenuto principale */}
                  <div>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{s.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.8' }}>
                      {s.longDesc}
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {s.keyFeatures?.map((f: string) => (
                        <span key={f} className="tag">{f}</span>
                      ))}
                    </div>
                  </div>

                  {/* Target clienti */}
                  <div style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--bg-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                  }}>
                    <span className="label" style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.65rem' }}>
                      Per chi
                    </span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      {s.targetClients}
                    </p>
                    <Link href="/contact" style={{
                      display: 'inline-block', marginTop: '1rem',
                      fontSize: '0.8rem', color: 'var(--accent)',
                      textDecoration: 'none', fontWeight: 600,
                    }}>
                      Richiedi info →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Non trovi quello che cerchi?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 2rem' }}>
              Ogni progetto Pico inizia da una conversazione tecnica.
              Descriviamo il problema insieme e valutiamo la fattibilità.
            </p>
            <Link href="/contact" className="btn-primary">Parla con il team →</Link>
          </div>
        </section>

      </main>
    </>
  )
}
