import { NextResponse } from 'next/server'

// Helpdesk temporaneamente disabilitato — configurare Clerk prima di riabilitare
export async function GET() {
  return NextResponse.json({ error: 'Helpdesk non ancora configurato' }, { status: 503 })
}

export async function POST() {
  return NextResponse.json({ error: 'Helpdesk non ancora configurato' }, { status: 503 })
}

