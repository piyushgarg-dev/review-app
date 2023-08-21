import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useCurrentUser } from '@/hooks/query/user'

const DashBoardPage: NextPage = () => {
  const router = useRouter()
  const { projects } = useUserProjects()
  const { project: selectedProject } = useSelectedProject()
  const { user } = useCurrentUser()

  const redirectToProject = useMemo(() => {
    if (!selectedProject) {
      if (projects && projects.length > 0) return projects[0]
    }
  }, [projects, selectedProject])

  useEffect(() => {
    if (!user) router.replace('/signin')
    if (redirectToProject) {
      router.push(`/dashboard/${redirectToProject.slug}`)
    }
  }, [redirectToProject, router, user])

  return (
    <DashboardLayout>
      <section className="flex justify-center items-center h-[80vh] w-screen">
        <h1>Dashboard Page</h1>
      </section>
    </DashboardLayout>
  )
}

export default DashBoardPage
