import { Navbar } from '@/components/layout/Navbar'
import { getPartners } from '@/lib/sanity'

export const metadata = { title: 'Chi siamo' }

const VALUES = [
  { title: 'Rigore scientifico', body: 'Ogni affermazione tecnica è verificabile. Ogni scelta progettuale ha una motivazione fisica quantificabile.' },
  { title: 'Innovazione responsabile', body: 'Operiamo in settori critici. La responsabilità verso il cliente, l\'utente finale e l\'ambiente è parte integrante del metodo.' },
  { title: 'Impatto reale', body: 'Non sviluppiamo prototipi da laboratorio. Ogni sistema Pico è progettato per operare sul campo, in condizioni reali, con uptime misurabile.' },
]

const TIMELINE = [
  { year: '2018', event: 'Fondazione a Napoli. Primo contratto R&D con ente di ricerca.' },
  { year: '2019', event: 'Sviluppo primo sistema di monitoraggio radiometrico embedded.' },
  { year: '2020', event: 'Certificazione ISO 9001:2015. Avvio programmi di formazione finanziata.' },
  { year: '2021', event: 'Ingresso nel settore Homeland Security. Partnership con Leonardo S.p.A.' },
  { year: '2022', event: 'Primo sistema SCADA in area Seveso II. Avvio divisione AI & Signal Processing.' },
  { year: '2023', event: 'Rete radiometrica regionale per ARPA Campania. Sistema P2M per ospedale universitario.' },
  { year: '2024', event: 'Espansione divisione biomedicale. Lancio piattaforma diagnostica vibrazionale con AI.' },
]

export default async function AboutPage() {
  const partners = await getPartners()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section className="section">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="accent-line" />
              <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Chi siamo</span>
              <h1 style={{ marginBottom: '1.5rem' }}>Nati in laboratorio.<br />Cresciuti sul campo.</h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '1.25rem' }}>
                Pico nasce dall'incontro tra fisici, ingegneri e sviluppatori con un'ossessione comune:
                costruire strumenti che misurano, controllano e capiscono il mondo fisico meglio di
                qualsiasi soluzione preconfezionata.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                Non partiamo dalla tecnologia disponibile — partiamo dal problema fisico da risolvere.
                Questa differenza determina tutto: l'architettura del sistema, la scelta dei sensori,
                il design del software, i criteri di collaudo.
              </p>
            </div>
            {/* Stat box */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--bg-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              {[
                { v: '2018', l: 'Anno di fondazione' },
                { v: 'Napoli', l: 'Sede principale' },
                { v: 'ISO 9001', l: 'Certificazione qualità' },
                { v: '5', l: 'Settori di operatività' },
              ].map(({ v, l }) => (
                <div key={l} style={{ background: 'var(--bg-surface)', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>{v}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valori */}
        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>I nostri valori</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
              {VALUES.map(v => (
                <div key={v.title} className="card">
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section">
          <div className="container" style={{ maxWidth: '720px' }}>
            <span className="accent-line" />
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Storia</span>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {TIMELINE.map((t, i) => (
                <div key={t.year} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '1.5rem', position: 'relative' }}>
                  {/* Linea verticale */}
                  {i < TIMELINE.length - 1 && (
                    <div style={{ position: 'absolute', left: '35px', top: '28px', bottom: '-1px', width: '1px', background: 'var(--bg-border)' }} />
                  )}
                  <div style={{ textAlign: 'right', paddingTop: '0.1rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent)' }}>{t.year}</span>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', margin: '0.4rem 0 0 auto' }} />
                  </div>
                  <div style={{ paddingBottom: '2rem' }}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingTop: '0.05rem' }}>{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner */}
        {partners.length > 0 && (
          <section className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
            <div className="container">
              <span className="label" style={{ display: 'block', marginBottom: '1.5rem', textAlign: 'center' }}>
                Partner e istituzioni
              </span>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {partners.map((p: any) => (
                  <div key={p.name} style={{
                    padding: '0.75rem 1.5rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--bg-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem', color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}>
                    {p.name}
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({p.type})</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  )
}
