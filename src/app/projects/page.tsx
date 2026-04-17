import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Progetti' }

const PROJECTS = [
  { id: 'radmon-arpa', year: 2023, location: 'Campania, 18 stazioni', sector: 'Misure ambientali e nucleari', title: 'RadMon – Rete di monitoraggio radiometrico regionale', challenge: 'Realizzare 18 stazioni di monitoraggio radioattività ambientale con acquisizione continua e alerting automatico.', tags: ['Embedded', 'MQTT', 'Monitoraggio ambientale', 'Dashboard real-time'] },
  { id: 'cyberphysical-ospedale', year: 2023, location: 'Napoli', sector: 'Biomedicale & Elettromedicale', title: 'Sistema P2M per sala operatoria', challenge: 'Integrare sensori eterogenei di sala operatoria con il sistema informativo ospedaliero, con alerting real-time.', tags: ['Digital Twin', 'HL7 FHIR', 'Sensori IoT', 'Biomedica'] },
  { id: 'homeland-security-porto', year: 2022, location: 'Porto Sud Italia', sector: 'Homeland Security', title: 'Piattaforma rilevamento infrastruttura portuale', challenge: 'Sistema integrato di rilevamento radiologico per varchi portuali con bassa probabilità di falsi positivi.', tags: ['Homeland Security', 'Spettroscopia', 'Embedded AI'] },
  { id: 'audio-diagnostica', year: 2024, location: 'Puglia', sector: 'Audio AI & Industria 4.0', title: 'AudioMed – Diagnostica vibrazionale con AI', challenge: 'Identificare guasti nascenti in macchinari industriali tramite analisi continua di segnali vibrazionali.', tags: ['AI Predittiva', 'Reti neurali', 'Industria 4.0'] },
  { id: 'formazione-nucleare', year: 2023, location: 'Napoli e remoto', sector: 'Formazione tecnologica', title: 'Programma formativo Fisica delle Radiazioni – 120h', challenge: 'Formare 45 tecnici di radiologia e fisici medici su strumentazione digitale moderna.', tags: ['Formazione finanziata', 'Fisica medica', 'Laboratorio'] },
  { id: 'scada-impianto-chimico', year: 2022, location: 'Caserta', sector: 'Supervisione ambienti critici', title: 'Sistema SCADA impianto chimico area Seveso II', challenge: 'Sostituzione SCADA obsoleto in impianto Seveso II con continuità operativa e conformità IEC 62443.', tags: ['SCADA', 'IEC 62443', 'Seveso II', 'OT Security'] },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <section className="section">
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Portfolio</span>
            <h1 style={{ marginBottom: '1rem' }}>Progetti realizzati</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', marginBottom: '4rem' }}>Una selezione di commesse che documentano la nostra capacità di operare in ambienti tecnici complessi.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {PROJECTS.map(p => (
                <article key={p.id} className="card" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }}>{p.year}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{p.location}</div>
                  </div>
                  <div>
                    <span className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>{p.sector}</span>
                    <h3 style={{ marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.challenge}</p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
