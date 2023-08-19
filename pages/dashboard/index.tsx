import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import { useCurrentUser } from '@/hooks/query/user'
import { useProjectModal } from '@/store/useProjectModal'

const DashBoardPage: NextPage = () => {
  const { projects } = useUserProjects()
  const { project: selectedProject } = useSelectedProject()
  const router = useRouter()

  const [isOpen, onOpen] = useProjectModal((state) => [state.isOpen, state.onOpen]);
  const { user } = useCurrentUser()

  const redirectToProject = useMemo(() => {
    if (!selectedProject) {
      if (projects && projects.length > 0) return projects[projects.length - 1]
    }
  }, [projects, selectedProject])

  useEffect(() => {
    if (!user) router.push('/')
    else if (redirectToProject && user) router.push(`/dashboard/${redirectToProject.slug}`)
    else if (!isOpen && !redirectToProject) onOpen()
  }, [redirectToProject, isOpen, onOpen, user, router])

  return null
}

export default DashBoardPage
