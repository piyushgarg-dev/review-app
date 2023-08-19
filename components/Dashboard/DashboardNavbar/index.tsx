import { useRouter } from 'next/navigation'

import DashboardMobileSidebar from '@/components/Dashboard/DashboardMobileSidebar'
import ProjectSwitch from '@/components/Dashboard/ProjectSwitch'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/Authentication'
import { useCurrentUser } from '@/hooks/query/user'

const DashboardNavbar: React.FC = () => {
  const { user } = useCurrentUser()
  const { signOut } = useAuth()
  const router = useRouter()

  return (
    <header className="flex items-center border-b pr-2 md:px-4">
      <DashboardMobileSidebar />
      <div className="flex h-16 items-center gap-2 sm:gap-4 w-full justify-end">
        <ProjectSwitch />
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          {user ? (
            <Button onClick={signOut}>Logout</Button>
          ) : (
            <Button onClick={() => router.push('/signin')} className="">
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default DashboardNavbar
