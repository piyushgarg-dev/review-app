import '@/styles/globals.css'

export const metadata = {
  title: 'Melon Review',
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
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍉</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
