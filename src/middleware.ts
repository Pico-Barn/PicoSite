import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware temporaneamente disabilitato — Clerk non ancora configurato
// Riabilitare dopo aver inserito le chiavi reali NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY e CLERK_SECRET_KEY
export function middleware(req: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
