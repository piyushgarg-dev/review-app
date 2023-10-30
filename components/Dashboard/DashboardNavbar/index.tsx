import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
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
      <div className="flex h-16 w-full items-center justify-end gap-2 sm:gap-4">
        <ProjectSwitch />
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          {user ? (
            <Button onClick={signOut} className='flex gap-1.5'>
              <span className='hidden sm:block'>Logout</span>
              <LogOut size={17}/>
            </Button>
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
