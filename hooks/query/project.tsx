import { graphqlClient } from '@/api'
import {
  getProjectByDomain,
  getUserProjectsQuery,
} from '@/graphql/queries/project'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const useUserProjects = () => {
  const result = useQuery({
    queryKey: ['user-projects'],
    queryFn: () => graphqlClient.request(getUserProjectsQuery),
  })
  return { ...result, projects: result.data?.getUserProjects }
}

export const useSelectedProject = () => {
  const rout = useParams()
  const router={query:{...rout}}
  const domain = useMemo(() => {
    if (router && router.query && router.query.domain)
      return router.query.domain as string
    return null
  }, [rout])

  const result = useQuery({
    queryKey: ['user-projects', domain],
    queryFn: () =>
      domain ? graphqlClient.request(getProjectByDomain, { domain }) : null,
  })

  return { ...result, project: result.data?.getProjectByDomain }
}
