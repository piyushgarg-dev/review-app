import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/query/user'

const HomePage: NextPage = () => {
  const { user, error, isLoading } = useCurrentUser()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (error) {
      setErrorMessage('An error occurred while fetching user data. Please try again later.')
    }

    if (user && !isLoading) {
      router.replace('/dashboard')
    }

    if (!user && !isLoading) {
      router.replace('/signin')
    }
  }, [router, user, error, isLoading])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Review App</title>
      </Head>
      <main className="flex h-screen w-screen items-center justify-center">
        <div className="space-y-6 text-center">
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
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
