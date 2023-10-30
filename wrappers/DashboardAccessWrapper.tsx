import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import { useProjectModal } from '@/store/useProjectModal'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

interface DashboardAccessWrapperProps {
  children: React.ReactNode
}

const DashboardAccessWrapper: React.FC<DashboardAccessWrapperProps> = ({
  children,
}) => {
  const pathname = usePathname()
  const { projects } = useUserProjects()
  const projectModal = useProjectModal()

  useEffect(() => {
    if (projects && projects.length === 0 && pathname?.includes('/dashboard')) {
      toast.error('Accessing Review App requires a project to be created.', {
        id: 'validate-project',
      })
      projectModal.openCreateProjectModal()
    }
  }, [projects, pathname])

  return <>{children}</>
}

export default DashboardAccessWrapper
