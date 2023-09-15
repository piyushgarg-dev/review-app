import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { DM_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { AuthenticationProvider } from '@/context/Authentication'
import '@/styles/globals.css'
import ModalWrapper from '@/wrappers/ModalWrapper'

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
  subsets: ['latin'],
  weight: ['400'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
