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
  if(hostname==`${process.env.NEXT_PUBLIC_APP_DOMAIN}`){ 
    return NextResponse.redirect(`${url.protocol}//${process.env.NEXT_PUBLIC_APP_DASHBOARD_DOMAIN}.${process.env.NEXT_PUBLIC_APP_DOMAIN}${path}`);
  }
  
  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname.replace(`.${process.env.NEXT_PUBLIC_APP_PUBLIC_DOMAIN}`, '')
      : hostname.replace(`.localhost:3000`, '')

  if (
    !currentHost ||
    currentHost === process.env.NEXT_PUBLIC_APP_DOMAIN ||
    currentHost === `www.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
  )
    return

  if (
    currentHost &&
    currentHost === process.env.NEXT_PUBLIC_APP_DASHBOARD_DOMAIN
  ) {
    return NextResponse.rewrite(new URL(`/__app${path}${url.search}`, req.url))
  }

  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${path}${url.search}`, req.url)
  )
}
