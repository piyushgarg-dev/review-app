import { useAuth } from '@/context/Authentication'
import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'

interface ProtectedRouteProps {
  children?: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      if (
        router.pathname !== '/__app/signin' &&
        router.pathname !== '/__app/signup' &&
        isAuthenticated &&
        !(await isAuthenticated())
      ) {
        router.push('/signin')
      }
    }

    checkAuth()
  }, [isAuthenticated, router])

  return <>{children}</>
}

export default ProtectedRoute
