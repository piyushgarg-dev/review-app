import { NextRequest, NextResponse } from 'next/server'
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /examples (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|__sentry/|_next/|_static/|[\\w-]+\\.\\w+).*)',
  ],
}
export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const hostname = req.headers.get('host')
  const path = url.pathname

  if (!hostname) return

  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname
          .replace(`.${process.env.NEXT_PUBLIC_APP_PUBLIC_DOMAIN}`, '')
          .replace(`.${process.env.NEXT_PUBLIC_APP_CUSTOM_DOMAIN}`, '')
      : hostname.replace(`.localhost:3000`, '')

  console.log({
    hostname,
    currentHost,
    NEXT_PUBLIC_APP_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_APP_PUBLIC_DOMAIN,
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
  })

  if (
    !currentHost ||
    currentHost === process.env.NEXT_PUBLIC_APP_DOMAIN ||
    currentHost === `www`
  ) {
    if (path == '/signin' || path == '/signup') {
      return NextResponse.redirect(
        `${url.protocol}//${process.env.NEXT_PUBLIC_APP_DASHBOARD_DOMAIN}.${process.env.NEXT_PUBLIC_APP_PUBLIC_DOMAIN}${path}`
      )
    }
    return
  }

  if (
    currentHost &&
    currentHost === process.env.NEXT_PUBLIC_APP_DASHBOARD_DOMAIN
  ) {
    return NextResponse.rewrite(new URL(`/__app${path}${url.search}`, req.url))
  }

  return NextResponse.rewrite(
    new URL(`/sites/${currentHost}${path}${url.search}`, req.url)
  )
}
