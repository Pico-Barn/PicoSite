import { Navbar } from '@/components/layout/Navbar'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const PROJECTS: Record<string, any> = {
  'radmon-arpa': { title: 'RadMon – Rete di monitoraggio radiometrico regionale', client: 'ARPA Campania', year: 2023, location: 'Campania, 18 stazioni', sector: 'Misure ambientali e nucleari', challenge: 'Realizzare 18 stazioni di monitoraggio radioattività con acquisizione continua e alerting automatico.', solution: 'Nodi embedded ARM Cortex-M7, supervisione centralizzata, MQTT over TLS, dashboard web con mappa interattiva.', results: 'Uptime 99.7% · Rilevamento anomalia < 90s · Prima rete regionale certificata IAEA', tags: ['Embedded', 'MQTT', 'Monitoraggio ambientale'] },
  'cyberphysical-ospedale': { title: 'Sistema P2M per sala operatoria', client: 'Ospedale Universitario Federico II', year: 2023, location: 'Napoli', sector: 'Biomedicale', challenge: 'Integrare sensori eterogenei con il sistema informativo ospedaliero.', solution: 'Gateway cyber-fisico multi-sensore, digital twin della sala, integrazione HL7 FHIR.', results: '-40% interventi manuali · Conformità automatica UNI EN ISO 14644', tags: ['Digital Twin', 'HL7 FHIR'] },
  'homeland-security-porto': { title: 'Piattaforma rilevamento infrastruttura portuale', client: 'Autorità Portuale (NDA)', year: 2022, location: 'Porto Sud Italia', sector: 'Homeland Security', challenge: 'Sistema di rilevamento radiologico per varchi portuali con bassa probabilità di falsi positivi.', solution: 'Array sensori a scintillazione con algoritmo di discriminazione spettrale proprietario.', results: 'Falsi positivi: 2% vs 18% · Collaudo ministeriale superato', tags: ['Homeland Security', 'Spettroscopia'] },
  'audio-diagnostica': { title: 'AudioMed – Diagnostica vibrazionale con AI', client: 'Gruppo manifatturiero', year: 2024, location: 'Puglia', sector: 'Audio AI & Industria 4.0', challenge: 'Identificare guasti nascenti tramite analisi di segnali vibrazionali.', solution: 'Rete neurale feedforward su database proprietario. Alert predittivo con 72h di anticipo.', results: '-60% fermi macchina non pianificati · ROI 4x', tags: ['AI Predittiva', 'Reti neurali'] },
  'formazione-nucleare': { title: 'Programma formativo Fisica delle Radiazioni – 120h', client: 'Consorzio ospedaliero', year: 2023, location: 'Napoli e remoto', sector: 'Formazione tecnologica', challenge: 'Formare 45 tecnici di radiologia su strumentazione digitale moderna.', solution: '4 moduli: fondamenti fisici, strumentazione, software Pico, casi studio.', results: '45 professionisti certificati · Valutazione 4.7/5 · Finanziato al 70%', tags: ['Formazione', 'Fisica medica'] },
  'scada-impianto-chimico': { title: 'Sistema SCADA impianto chimico Seveso II', client: 'Industria chimica (NDA)', year: 2022, location: 'Caserta', sector: 'Supervisione ambienti critici', challenge: 'Sostituzione SCADA obsoleto con continuità operativa e conformità IEC 62443.', solution: 'Migrazione live in 3 fasi, architettura ridondante, HMI touch ATEX.', results: 'Zero fermate · Audit IEC 62443 con 0 non conformità · MTTR da 4h a 22min', tags: ['SCADA', 'IEC 62443'] },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const p = PROJECTS[params.id]
  if (!p) notFound()
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <Link href="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem' }}>← Tutti i progetti</Link>
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>{p.sector}</span>
            <h1 style={{ marginBottom: '1rem' }}>{p.title}</h1>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span>{p.year}</span><span>·</span><span>{p.location}</span><span>·</span><span>{p.client}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              {[['La sfida', p.challenge], ['La soluzione', p.solution]].map(([label, text]) => (
                <div key={label} style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
                  <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>{label}</span>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)', borderRadius: 'var(--radius-md)', padding: '1.75rem', marginBottom: '2.5rem' }}>
              <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Risultati</span>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>{p.results}</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tags.map((t: string) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
