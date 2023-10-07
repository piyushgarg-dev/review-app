import type { NextPage } from 'next'

import { useSelectedProject } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'

const DashboardMainPage: NextPage = () => {
  const { project } = useSelectedProject()

  return (
    <DashboardLayout>
      <section className="w-100 flex h-[50vh] items-center justify-center">
        <div>
          <h1>Select project ID: {project?.id}</h1>
          <h1>Select project Name: {project?.name}</h1>
          <h1>Select project Slug: {project?.slug}</h1>
        </div>
      </section>
    </DashboardLayout>
  )
}

export default DashboardMainPage
