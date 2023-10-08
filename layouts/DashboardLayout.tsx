import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="relative h-full">
      <div
        className="fixed hidden h-full flex-col md:flex"
        style={{ width: '14rem' }}
      >
        <DashboardSidebar />
      </div>
      <div className="margin_left_14 pb-10">
        <DashboardNavbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
