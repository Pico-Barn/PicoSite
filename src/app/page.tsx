import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'

export const dynamic = 'force-dynamic'

const STATS = [
  { value: '6+',    label: 'Anni di R&D' },
  { value: '18',    label: 'Progetti consegnati' },
  { value: '5',     label: 'Settori serviti' },
  { value: '99.7%', label: 'Uptime sistemi critici' },
]

const SERVICES_PREVIEW = [
  { id: 'sw-misure-ambientali', icon: '◉', title: 'Software per misure ambientali e nucleari', shortDesc: 'Sistemi di acquisizione, elaborazione e visualizzazione dati per misure di radioattività e contaminazione nucleare.' },
  { id: 'supervisione-ambienti-critici', icon: '◈', title: 'Sistemi di supervisione e telecontrollo', shortDesc: 'Architetture digitali avanzate per il controllo in tempo reale di processi fisici in ambienti critici.' },
  { id: 'sistemi-cyber-fisici', icon: '⬡', title: 'Sistemi cyber-fisici P2M · M2P · M2M', shortDesc: 'Ricerca e sviluppo di sistemi che integrano il mondo fisico con quello digitale.' },
]

const PROJECTS_PREVIEW = [
  { id: 'radmon-arpa', year: 2023, sector: 'Misure ambientali', title: 'RadMon – Rete di monitoraggio radiometrico regionale', results: 'Uptime 99.7% · Rilevamento anomalia < 90s · Prima rete regionale certificata IAEA', tags: ['Embedded', 'MQTT'] },
  { id: 'cyberphysical-ospedale', year: 2023, sector: 'Biomedicale', title: 'Sistema P2M per monitoraggio parametri fisici in sala operatoria', results: '-40% interventi manuali · Conformità automatica UNI EN ISO 14644', tags: ['Digital Twin', 'HL7 FHIR'] },
  { id: 'homeland-security-porto', year: 2022, sector: 'Homeland Security', title: 'Piattaforma di rilevamento per infrastruttura portuale critica', results: "Falsi positivi: 2% vs 18% · Collaudo ministeriale superato", tags: ['Spettroscopia', 'Embedded AI'] },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--bg-border) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.4 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '780px' }}>
              <span className="label" style={{ marginBottom: '1.5rem', display: 'block' }}>Deep-tech · Napoli, Italia</span>
              <h1 style={{ marginBottom: '1.5rem' }}>Dove la fisica <span style={{ color: 'var(--accent)' }}>incontra</span> l&apos;intelligenza digitale</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '560px', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Pico progetta sistemi cyber-fisici ad alto valore tecnologico per misure ambientali, sicurezza critica e biomedicale.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn-primary">Scopri le soluzioni</Link>
                <Link href="/contact" className="btn-ghost">Parla con un esperto</Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--bg-border)', borderBottom: '1px solid var(--bg-border)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '2.5rem 2rem', borderRight: i < 3 ? '1px solid var(--bg-border)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.8rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ marginBottom: '0.75rem', display: 'block' }}>Cosa facciamo</span>
            <h2 style={{ marginBottom: '3.5rem', maxWidth: '520px' }}>Soluzioni per ambienti dove i margini di errore sono prossimi a zero</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {SERVICES_PREVIEW.map(s => (
                <Link key={s.id} href={"/services#" + s.id} className="card" style={{ textDecoration: 'none' }}>
                  <span className="label" style={{ marginBottom: '1rem', display: 'block' }}>{s.icon}</span>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>{s.shortDesc}</p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/services" className="btn-ghost">Tutte le soluzioni →</Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ marginBottom: '0.75rem', display: 'block' }}>Progetti selezionati</span>
            <h2 style={{ marginBottom: '3.5rem' }}>Casi studio</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROJECTS_PREVIEW.map(p => (
                <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '1fr 3fr auto', alignItems: 'center', gap: '2rem', padding: '1.75rem 2rem', background: 'var(--bg-elevated)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-md)' }}>
                  <div>
                    <span className="label" style={{ color: 'var(--text-muted)' }}>{p.year}</span>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{p.sector}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{p.results}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/projects" className="btn-ghost">Tutti i progetti →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="label" style={{ marginBottom: '1rem', display: 'block' }}>Inizia una conversazione</span>
            <h2 style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>Hai un problema fisico da risolvere?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              Raccontacelo. Che sia una misura impossibile, un ambiente ostile o un processo da automatizzare.
            </p>
            <Link href="/contact" className="btn-primary">Scrivici →</Link>
          </div>
        </section>

        <footer style={{ borderTop: '1px solid var(--bg-border)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          <div className="container"><p>© 2025 Pico S.r.l. — Napoli, Italia</p></div>
        </footer>

      </main>
    </>
  )
}
