"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
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
  subsets: ['latin-ext'],
  weight: ['400'],
})

export default function ClientLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
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
            <>{children} </>
          </NextThemesProvider>
        </AuthenticationProvider>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  )
}
