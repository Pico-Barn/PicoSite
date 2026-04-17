import { Navbar } from '@/components/layout/Navbar'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Team' }

const TEAM = [
  { name: 'Marco Esposito', role: 'CEO & Co-founder', expertise: 'Fisica nucleare applicata, sistemi embedded, direzione tecnica', bio: 'Fisico nucleare con 18 anni di esperienza tra ricerca accademica e sviluppo industriale. Ha fondato Pico con l'obiettivo di portare la strumentazione di ricerca fuori dai laboratori.' },
  { name: 'Sofia Russo', role: 'CTO & Co-founder', expertise: 'Sistemi cyber-fisici, AI, architetture embedded', bio: 'Ingegnere elettronico con PhD in sistemi cyber-fisici. Guida il team R&D e supervisiona l'architettura di tutti i prodotti Pico.' },
  { name: 'Andrea Ferrara', role: 'Lead Software Engineer', expertise: 'Embedded C/C++, DSP, protocolli industriali', bio: 'Specialista nello sviluppo di firmware real-time e software di acquisizione dati per strumentazione scientifica. 12 anni nel settore.' },
  { name: 'Giulia Marinelli', role: 'AI & Signal Processing Engineer', expertise: 'Reti neurali, elaborazione del segnale, Python/TensorFlow', bio: 'Ingegnere delle telecomunicazioni con specializzazione in ML applicato a segnali fisici. Responsabile dei moduli AI nei prodotti Pico.' },
  { name: 'Luca Conti', role: 'Project Manager & Formatore', expertise: 'Gestione progetti R&D, formazione tecnica, fondi europei', bio: 'PMP certificato con esperienza nella gestione di progetti PNRR e Horizon. Coordina i programmi di formazione e i rapporti con enti pubblici.' },
]

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <section className="section">
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Le persone</span>
            <h1 style={{ marginBottom: '1rem', maxWidth: '480px' }}>Il team che trasforma la fisica in software</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '4rem', lineHeight: '1.8' }}>Fisici, ingegneri elettronici, sviluppatori embedded e specialisti AI. Un team multidisciplinare costruito intorno a un metodo comune.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {TEAM.map(m => (
                <div key={m.name} className="card">
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--bg-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.25rem' }}>
                    {m.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>{m.name}</h3>
                  <span className="label" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'block' }}>{m.role}</span>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1rem' }}>{m.bio}</p>
                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--bg-border)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.expertise}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Lavora con noi</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '440px' }}>Siamo sempre alla ricerca di fisici, ingegneri e sviluppatori con la passione per i sistemi che operano ai limiti del possibile.</p>
              </div>
              <Link href="/contact" className="btn-ghost" style={{ whiteSpace: 'nowrap' }}>Contattaci →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
