import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useProjectModal } from '@/store/useProjectModal'
import toast from 'react-hot-toast'

const DashBoardPage: NextPage = () => {
  const router = useRouter()
  const { projects } = useUserProjects()
  const { project: selectedProject } = useSelectedProject()
  const projectModal = useProjectModal()

  const redirectToProject = useMemo(() => {
    if (!selectedProject) {
      if (projects && projects.length > 0) return projects[0]
    }
  }, [projects, selectedProject])

  useEffect(() => {
    if (redirectToProject) {
      router.push(`/dashboard/${redirectToProject.subdomain}`)
    } else {
      toast.error('Accessing Review App requires a project to be created.', {
        id: 'validate-project',
      })
      projectModal.openCreateProjectModal()
    }
  }, [redirectToProject, router])

  return (
    <DashboardLayout>
      <section className="flex h-[80vh] w-full items-center justify-center">
        <h1>Dashboard Page</h1>
      </section>
    </DashboardLayout>
  )
}

export default DashBoardPage
