import '@/styles/globals.css'

export const metadata = {
  title: 'Review App',
  description:
    'Simplies the process of adding a review system to your website.',
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
