import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { DM_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import NextNProgress from 'nextjs-progressbar'

import { AuthenticationProvider } from '@/context/Authentication'
import '@/styles/globals.css'
import ModalWrapper from '@/wrappers/ModalWrapper'
import Head from 'next/head'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: Infinity,
      cacheTime: Infinity,
      structuralSharing: false,
    },
  },
})

const font = DM_Sans({
  subsets: ['latin-ext'],
  weight: ['400'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Melon Review</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍉</text></svg>"
        />
      </Head>
      <NextNProgress />
      <QueryClientProvider client={queryClient}>
        <div className={font.className}>
          <AuthenticationProvider>
            <NextThemesProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              <ModalWrapper />
              <Toaster position="top-right" />
              <Component {...pageProps} />
            </NextThemesProvider>
          </AuthenticationProvider>
          <ReactQueryDevtools />
        </div>
      </QueryClientProvider>
    </>
  )
}
