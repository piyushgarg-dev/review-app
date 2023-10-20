import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useCurrentUser } from '@/hooks/query/user'
import { Loader } from 'lucide-react'

const SignInPage: NextPage = () => {
  const router = useRouter()
  const { user, isLoading: currentUserLoading } = useCurrentUser()

  useEffect(() => {
    if (currentUserLoading) return
    if (user && user.id) {
      router.replace('/dashboard')
    } else {
      router.replace('/signin')
    }
  }, [router, user, currentUserLoading])

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="animate-spin">
        <Loader size={40} />
      </div>
    </main>
  )
}

export default SignInPage
