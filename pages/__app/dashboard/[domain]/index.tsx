import type { NextPage } from 'next'

import { useSelectedProject } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'

const DashboardMainPage: NextPage = () => {
  const { project } = useSelectedProject()

  return (
    <DashboardLayout>
      <section className="w-full flex h-[50vh] items-center justify-center">
        <div className="rounded-md shadow-md p-4">
          <h2 className="text-2xl font-semibold text-center mb-4">
            📋 Project Details
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              🆔 Project ID:
            </div>
            <div className="font-semibold">{project?.id}</div>
            <div className="flex items-center">
              🏢 Project Name:
            </div>
            <div className="font-semibold">{project?.name}</div>
            <div className="flex items-center">
              🌐 Project Subdomain:
            </div>
            <div className="font-semibold">{project?.subdomain}</div>
            <div className="flex items-center">
              🔗 Project Custom Domain:
            </div>
            <div className="font-semibold">
              {project?.customDomain || 'Not specified'}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>

  )
}

export default DashboardMainPage
