import { useRouter } from 'next/navigation'

import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/Authentication'
import ProjectSwitch from '../ProjectSwitch'
import { useCurrentUser } from '@/hooks/query/user'

const DashboardNavbar: React.FC = () => {
  const { user } = useCurrentUser()
  const { signOut } = useAuth()
  const router = useRouter()

  return (
    <header className="border-b flex h-16 items-center px-4">
      <ProjectSwitch />
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        {user ? (
          <Button onClick={signOut}>Logout</Button>
        ) : (
          <Button onClick={() => router.push('/signin')} className="">
            Login
          </Button>
        )}
      </div>
    </header>
  )
}

export default DashboardNavbar
