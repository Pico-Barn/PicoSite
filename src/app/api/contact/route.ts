import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, sector, message, budget } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 })
    }

    // TODO: sostituire con Resend o Nodemailer
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@pico.it',
    //   to: 'info@pico.it',
    //   subject: `Nuova richiesta da ${name}`,
    //   html: `<p>Da: ${name} (${company})<br>Email: ${email}<br>Settore: ${sector}<br>Budget: ${budget}<br><br>${message}</p>`,
    // })

    console.log('[contact] Nuova richiesta:', { name, email, sector })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Errore:', err)
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 })
  }
}
