import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useProjectModal } from '@/store/useProjectModal'

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
      router.push(`/dashboard/${redirectToProject.slug}`)
    }
  }, [redirectToProject, router])

  const handleCreateProject = () => {
    projectModal.openCreateProjectModal()
  }

  return (
    <DashboardLayout>
      {projects && projects.length > 0 ? (
        <section className="flex h-[80vh] w-full items-center justify-center">
          <h1>No project selected</h1>
        </section>
      ) : (
        <section className="flex h-[80vh] w-full items-center justify-center">
          <section className="flex flex-col items-center">
            <h1 className="mb-4 text-2xl font-semibold">
              You don't have any project yet.
            </h1>
            <button
              onClick={handleCreateProject}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Create First Project
            </button>
          </section>
        </section>
      )}
    </DashboardLayout>
  )
}

export default DashBoardPage
