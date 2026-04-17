import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { getProjects } from '@/lib/sanity'

export const metadata = { title: 'Progetti' }

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <section className="section">
          <div className="container">
            <span className="accent-line" />
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Portfolio</span>
            <h1 style={{ marginBottom: '1rem' }}>Progetti realizzati</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', marginBottom: '4rem' }}>
              Una selezione di commesse che documentano la nostra capacità di operare in ambienti tecnici
              complessi, dal laboratorio al campo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {projects.map((p: any) => (
                <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                  <article className="card" style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '2rem', alignItems: 'start',
                  }}>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700,
                        fontSize: '2rem', color: 'var(--accent)', lineHeight: 1,
                      }}>{p.year}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                        {p.location}
                      </div>
                    </div>
                    <div>
                      <span className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>
                        {p.sector}
                      </span>
                      <h3 style={{ marginBottom: '0.6rem' }}>{p.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        {p.challenge}
                      </p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {p.tags?.map((t: string) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
