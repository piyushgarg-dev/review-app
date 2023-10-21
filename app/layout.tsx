import '@/styles/globals.css'

export const metadata = {
  title: 'App Router',
  description: 'Review App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
