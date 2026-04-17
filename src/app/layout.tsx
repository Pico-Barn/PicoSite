import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Pico – Sistemi Cyber-Fisici',
    default: 'Pico – Sistemi cyber-fisici per misure ambientali, sicurezza e biomedicale',
  },
  description: 'Pico sviluppa software e sistemi embedded per misure nucleari, homeland security e applicazioni biomediche. Deep-tech italiana con sede a Napoli.',
  keywords: ['sistemi cyber-fisici', 'software misure nucleari', 'homeland security Italia', 'sistemi embedded critici'],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Pico S.r.l.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="it">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
