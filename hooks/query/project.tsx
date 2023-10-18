import { graphqlClient } from '@/api'
import {
  getProjectByDomain,
  getUserProjectsQuery,
} from '@/graphql/queries/project'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const useUserProjects = () => {
  const result = useQuery({
    queryKey: ['user-projects'],
    queryFn: () => graphqlClient.request(getUserProjectsQuery),
  })
  return { ...result, projects: result.data?.getUserProjects }
}

export const useSelectedProject = () => {
  const router = useRouter()
  const { projects } = useUserProjects();

  const domain = useMemo(() => {
    if (router && router.query && router.query.domain){
      const isProjectExist = projects?.findIndex(project => project?.subdomain == router.query.domain?.toLocaleString());
      if(isProjectExist == -1)
        router.replace(`/dashboard/${projects?.[0]?.subdomain as string}`)
      else 
        return router.query.domain as string
    }
    return null
  }, [router])

  const result = useQuery({
    queryKey: ['user-projects', domain],
    queryFn: () =>
      domain ? graphqlClient.request(getProjectByDomain, { domain }) : null,
  })

  return { ...result, project: result.data?.getProjectByDomain }
}
