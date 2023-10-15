import type { NextPage } from 'next'

import { useSelectedProject } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useCurrentUser } from '@/hooks/query/user'
import { useEffect } from 'react'
import router from 'next/router'

const DashboardMainPage: NextPage = () => {
  const user = useCurrentUser()

  useEffect(() => {
    if (!user.user) {
      router.push('/signin')
    }
  }, [router, user])

  const { project } = useSelectedProject()

  if (!user.user) {
    return null
  }

  return (
    <DashboardLayout>
      <section className="w-100 flex h-[50vh] items-center justify-center">
        <div>
          <h1>Select project ID: {project?.id}</h1>
          <h1>Select project Name: {project?.name}</h1>
          <h1>Select project Subdomain: {project?.subdomain}</h1>
          <h1>Select project Custom Domain: {project?.customDomain}</h1>
        </div>
      </section>
    </DashboardLayout>
  )
}

export default DashboardMainPage
