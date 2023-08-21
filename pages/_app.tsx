import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { AuthenticationProvider } from '@/context/Authentication'
import '@/styles/globals.css'

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Toaster position="top-right" />
          <Component {...pageProps} />
        </NextThemesProvider>
      </AuthenticationProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
