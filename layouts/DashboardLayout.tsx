import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar'
import Head from 'next/head'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Review App : Dashboard</title>
        <meta
          name="description"
          content="Simplies the process of adding
a review system to your website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
    </>
  )
}

export default DashboardLayout
