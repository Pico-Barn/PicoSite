import { Navbar } from '@/components/layout/Navbar'
import { getTeam } from '@/lib/sanity'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata = { title: 'Team' }

export default async function TeamPage() {
  const team = await getTeam()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <section className="section">
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Le persone</span>
            <h1 style={{ marginBottom: '1rem', maxWidth: '480px' }}>Il team che trasforma la fisica in software</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '4rem', lineHeight: '1.8' }}>
              Fisici, ingegneri elettronici, sviluppatori embedded e specialisti AI.
              Un team multidisciplinare costruito intorno a un metodo comune.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {team.map((m: any) => (
                <div key={m.name} className="card">
                  {/* Avatar placeholder */}
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'var(--bg-elevated)', border: '1px solid var(--bg-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.2rem', color: 'var(--accent)',
                    marginBottom: '1.25rem',
                  }}>
                    {m.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                  </div>

                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>{m.name}</h3>
                  <span className="label" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'block' }}>
                    {m.role}
                  </span>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                    {m.bio}
                  </p>

                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--bg-border)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.expertise}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA recruiting */}
            <div style={{
              marginTop: '4rem',
              padding: '2.5rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem',
            }}>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Lavora con noi</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '440px' }}>
                  Siamo sempre alla ricerca di fisici, ingegneri e sviluppatori con la passione per i
                  sistemi che operano ai limiti del possibile.
                </p>
              </div>
              <Link href="/contact" className="btn-ghost" style={{ whiteSpace: 'nowrap' }}>Contattaci →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
