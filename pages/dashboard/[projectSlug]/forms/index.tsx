import DashboardLayout from '@/layouts/DashboardLayout'
import { useSelectedProject } from '@/hooks/query/project'
import type { NextPage } from 'next'

const DashboardFormPage: NextPage = () => {
  const { project } = useSelectedProject()

  return (
    <DashboardLayout>
      <section>
        <h1>Form Page</h1>
      </section>
    </DashboardLayout>
  )
}

export default DashboardFormPage
