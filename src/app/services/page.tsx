import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"

export const dynamic = "force-dynamic"
export const metadata = { title: "Soluzioni" }

const SERVICES = [
  { id: "sw-misure-ambientali", icon: "◉", title: "Software per misure ambientali e nucleari", longDesc: "Progettiamo software embedded e desktop per strumentazione scientifica dedicata al monitoraggio di ambienti potenzialmente contaminati. Le nostre soluzioni integrano acquisizione in tempo reale, algoritmi di correzione e interfacce certificate per operatori qualificati.", targetClients: "Enti pubblici, ARPA, ospedali, università, industria nucleare", keyFeatures: ["Acquisizione real-time multi-canale", "Algoritmi di spettroscopia gamma", "Dashboard certificata", "Export IAEA-compliant"] },
  { id: "supervisione-ambienti-critici", icon: "◈", title: "Sistemi di supervisione e telecontrollo", longDesc: "Realizziamo sistemi SCADA e piattaforme di supervisione per ambienti in cui la presenza umana è limitata o impossibile. Ogni componente è progettato per affidabilità in condizioni estreme.", targetClients: "Industria chimica, impianti energetici, infrastrutture critiche, difesa", keyFeatures: ["Architettura ridondante fault-tolerant", "Latenza < 10ms", "Protocolli OPC-UA, Modbus, MQTT", "Cybersecurity by design"] },
  { id: "sistemi-cyber-fisici", icon: "⬡", title: "Sistemi cyber-fisici P2M · M2P · M2M", longDesc: "Progettiamo l'intera catena sensoristica-elaborazione-attuazione per applicazioni in campo medico, biotecnologico e di sostenibilità ambientale.", targetClients: "Startup biotech, aziende pharma, centri di ricerca, ESA/ASI partner", keyFeatures: ["Digital twin di processo", "Fusione dati multi-sensore", "Modelli fisici computazionali", "Prototipi funzionali in 90 giorni"] },
  { id: "audio-ai", icon: "◎", title: "Analisi e sintesi sonora con AI", longDesc: "Applichiamo l'intelligenza artificiale all'elaborazione del segnale acustico: dalla classificazione automatica di suoni ambientali alla sintesi di segnali audio per testing strumentale.", targetClients: "Industria medicale, ricerca acustica, produzione musicale, università", keyFeatures: ["Classificazione audio real-time", "Sintesi neurale", "Analisi spettrale avanzata", "SDK integrabile"] },
  { id: "formazione", icon: "◻", title: "Formazione tecnologica finanziata e su commessa", longDesc: "Erogattiamo formazione tecnica avanzata a tecnici, ingegneri e operatori. I nostri corsi combinano teoria scientifica rigorosa con laboratori pratici su strumentazione reale.", targetClients: "Aziende manifatturiere, ospedali, università, PA, forze dell'ordine", keyFeatures: ["Corsi finanziabili FNC", "Laboratori certificati", "Docenti con esperienza industriale", "Attestati riconosciuti"] },
  { id: "consulenza", icon: "◆", title: "Consulenza per innovazione HW/SW", longDesc: "Dalla valutazione di fattibilità al prototipo funzionale, affianchiamo aziende e startup nella definizione e realizzazione di soluzioni tecnologiche innovative.", targetClients: "PMI tecnologiche, startup deep-tech, grandi aziende con divisioni R&D", keyFeatures: ["Technology assessment", "Roadmap di innovazione", "Prototipazione rapida", "Supporto bandi PNRR, Horizon"] },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <section className="section" style={{ paddingBottom: "2rem" }}>
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ display: "block", marginBottom: "0.75rem" }}>Cosa facciamo</span>
            <h1 style={{ maxWidth: "640px", marginBottom: "1.5rem" }}>Soluzioni per ambienti dove i margini di errore sono prossimi a zero</h1>
          </div>
        </section>
        <section className="section" style={{ paddingTop: "2rem" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {SERVICES.map((s, i) => (
                <div key={s.id} id={s.id} style={{ display: "grid", gridTemplateColumns: "64px 1fr 280px", gap: "2.5rem", alignItems: "start", padding: "2.5rem", background: "var(--bg-surface)", border: "1px solid var(--bg-border)", borderRadius: "var(--radius-md)" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", color: "var(--accent)", lineHeight: 1, marginBottom: "0.4rem" }}>{s.icon}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600 }}>0{i + 1}</div>
                  </div>
                  <div>
                    <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>{s.title}</h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.25rem", lineHeight: "1.8" }}>{s.longDesc}</p>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {s.keyFeatures.map(f => <span key={f} className="tag">{f}</span>)}
                    </div>
                  </div>
                  <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--bg-border)", borderRadius: "var(--radius-md)", padding: "1.25rem" }}>
                    <span className="label" style={{ display: "block", marginBottom: "0.6rem", fontSize: "0.65rem" }}>Per chi</span>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>{s.targetClients}</p>
                    <Link href="/contact" style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.8rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>Richiedi info →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
