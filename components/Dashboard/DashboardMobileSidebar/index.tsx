import { useEffect, useRef } from 'react'

import DashboardSidebar from '@/components/Dashboard/DashboardSidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Menu } from 'lucide-react'

const DashboardMobileSidebar: React.FC = () => {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = true
    return () => {
      ref.current = false
    }
  }, [])

  if (!ref.current) return null

  return (
    <Sheet>
      <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <DashboardSidebar />
      </SheetContent>
    </Sheet>
  )
}

export default DashboardMobileSidebar
