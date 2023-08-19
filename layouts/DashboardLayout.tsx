import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex w-72 flex-col fixed inset-y-0 bg-gray-900">
        <DashboardSidebar />
      </div>
      <div className="margin_left_72 pb-10">
        <DashboardNavbar />
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
