import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useCurrentUser } from '@/hooks/query/user'

const DashBoardPage: NextPage = () => {
  const router = useRouter()
  const user = useCurrentUser()
  const { projects } = useUserProjects()
  const { project: selectedProject } = useSelectedProject()

  useEffect(() => {
    if (!user.user) {
      router.push('/signin')
    }
  }, [router, user])

  const redirectToProject = useMemo(() => {
    if (!selectedProject) {
      if (projects && projects.length > 0) return projects[0]
    }
  }, [projects, selectedProject])

  useEffect(() => {
    if (redirectToProject) {
      router.push(`/dashboard/${redirectToProject.subdomain}`)
    }
  }, [redirectToProject, router])

  if (!user.user) {
    return null
  }

  return (
    <DashboardLayout>
      <section className="flex h-[80vh] w-full items-center justify-center">
        <h1>Dashboard Page</h1>
      </section>
    </DashboardLayout>
  )
}

export default DashBoardPage
