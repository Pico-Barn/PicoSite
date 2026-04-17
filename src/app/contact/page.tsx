'use client'
import { Navbar } from '@/components/layout/Navbar'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // TODO: collegare a endpoint /api/contact o servizio email (Resend, Nodemailer)
    await new Promise(r => setTimeout(r, 900))
    setSent(true)
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'var(--bg-elevated)', border: '1px solid var(--bg-border)',
    borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
    outline: 'none', transition: 'var(--transition)',
  } as React.CSSProperties

  const labelStyle = {
    display: 'block', fontSize: '0.78rem', fontWeight: 600,
    color: 'var(--text-secondary)', marginBottom: '0.4rem',
    letterSpacing: '0.04em', textTransform: 'uppercase' as const,
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <section className="section">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}>

            {/* Left: copy */}
            <div>
              <span className="accent-line" />
              <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Contatti</span>
              <h1 style={{ marginBottom: '1.25rem' }}>Hai un problema fisico da risolvere?</h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '2.5rem' }}>
                Raccontacelo. Che sia una misura impossibile, un ambiente ostile o un processo da
                automatizzare, il nostro team valuta ogni sfida con rigore scientifico.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Email', value: 'info@pico.it' },
                  { label: 'Telefono', value: '+39 081 000 0000' },
                  { label: 'Sede', value: 'Via Esempio 1, 80100 Napoli NA' },
                  { label: 'Orari', value: 'Lun–Ven, 9:00–18:00' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span style={{ ...labelStyle, marginBottom: '0.2rem' }}>{label}</span>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div style={{
              background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
              borderRadius: 'var(--radius-lg)', padding: '2.5rem',
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>✓</div>
                  <h3 style={{ marginBottom: '0.75rem' }}>Messaggio inviato</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Ti risponderemo entro 1 giorno lavorativo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Nome e cognome *</label>
                      <input required style={inputStyle} type="text" placeholder="Mario Rossi" />
                    </div>
                    <div>
                      <label style={labelStyle}>Azienda</label>
                      <input style={inputStyle} type="text" placeholder="Azienda S.r.l." />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input required style={inputStyle} type="email" placeholder="m.rossi@azienda.it" />
                  </div>

                  <div>
                    <label style={labelStyle}>Settore di riferimento</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Seleziona...</option>
                      <option>Misure ambientali / nucleari</option>
                      <option>Homeland Security / Difesa</option>
                      <option>Biomedicale / Elettromedicale</option>
                      <option>Industria / SCADA</option>
                      <option>Formazione</option>
                      <option>Altro</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Descrizione del progetto *</label>
                    <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="Descrivi la sfida tecnica, l'ambiente operativo, i vincoli principali..." />
                  </div>

                  <div>
                    <label style={labelStyle}>Budget indicativo (opzionale)</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Preferisco non indicarlo</option>
                      <option>&lt; €10.000</option>
                      <option>€10.000 – €50.000</option>
                      <option>€50.000 – €150.000</option>
                      <option>&gt; €150.000</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary"
                    style={{ marginTop: '0.5rem', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                    disabled={loading}>
                    {loading ? 'Invio in corso...' : 'Invia messaggio →'}
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    I tuoi dati sono trattati secondo la nostra{' '}
                    <a href="/privacy" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
