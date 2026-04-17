import { Navbar } from '@/components/layout/Navbar'
import { getProjectById, getProjects } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((p: any) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const p = await getProjectById(params.id)
  if (!p) return {}
  return { title: p.title, description: p.results }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const p = await getProjectById(params.id)
  if (!p) notFound()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <Link href="/projects" style={{
              color: 'var(--text-muted)', fontSize: '0.85rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              marginBottom: '2.5rem',
            }}>← Tutti i progetti</Link>

            <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>{p.sector}</span>
            <h1 style={{ marginBottom: '1rem' }}>{p.title}</h1>

            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span>{p.year}</span>
              {p.location && <><span>·</span><span>{p.location}</span></>}
              {p.client && <><span>·</span><span>{p.client}</span></>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { label: 'La sfida', text: p.challenge },
                { label: 'La soluzione', text: p.solution },
              ].map(({ label, text }) => (
                <div key={label} style={{
                  background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)', padding: '1.75rem',
                }}>
                  <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>{label}</span>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{text}</p>
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--accent-glow)', border: '1px solid var(--accent-dim)',
              borderRadius: 'var(--radius-md)', padding: '1.75rem', marginBottom: '2.5rem',
            }}>
              <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>Risultati</span>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>{p.results}</p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tags?.map((t: string) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
