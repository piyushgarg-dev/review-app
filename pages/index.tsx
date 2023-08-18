import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'

import { useCurrentUser } from '@/hooks/query/user'
import { Button } from '@/components/ui/button'

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
      <main className="flex justify-center items-center h-screen w-screen">
        <div className="text-center space-y-6">
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
