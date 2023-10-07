import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/query/user'

const HomePage: NextPage = () => {
  const { user } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace('/signin')
    }
  }, [router, user])

  return (
    <div>
      <Head>
        <title>Review App</title>
      </Head>
      <main className="flex h-screen w-screen items-center justify-center">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl">
            Hello {user?.firstName} {user?.lastName} 👋🏻
          </h1>
          <Button onClick={() => router.push('/dashboard')}>
            Go to Dashboard
          </Button>
        </div>
      </main>
    </div>
  )
}

export default HomePage
