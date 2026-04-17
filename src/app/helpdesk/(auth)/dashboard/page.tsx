import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const metadata = { title: 'Helpdesk' }

export default async function HelpdeskDashboard() {
  const { userId } = await auth()
  if (!userId) redirect('/helpdesk/sign-in')

  const user = await currentUser()
  const role = (user?.publicMetadata?.role as string) || 'client'

  const SECTIONS = [
    { id: 'tickets',   label: 'I miei ticket',     desc: 'Apri e traccia le richieste di supporto', roles: ['client','lead','partner','admin'] },
    { id: 'kb',        label: 'Knowledge base',     desc: 'Documentazione tecnica e guide',          roles: ['client','partner','admin'] },
    { id: 'downloads', label: 'Download materiali', desc: 'Datasheet, certificazioni, report',       roles: ['partner','admin'] },
    { id: 'admin',     label: 'Pannello admin',      desc: 'Gestione utenti e ticket',                roles: ['admin'] },
  ].filter(s => s.roles.includes(role))

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)', paddingTop: '64px' }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <div>
            <span className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Area riservata</span>
            <h1 style={{ fontSize: '2rem' }}>Benvenuto, {user?.firstName || 'Utente'}</h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              Ruolo: <span style={{ color: 'var(--accent)', textTransform: 'capitalize' }}>{role}</span>
            </p>
          </div>
          <Link href="/" className="btn-ghost" style={{ fontSize: '0.8rem' }}>← Torna al sito</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {SECTIONS.map(s => (
            <Link key={s.id} href={`/helpdesk/${s.id}`} className="card" style={{ textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{s.label}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
