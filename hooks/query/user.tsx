import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '@/api'
import { getSessionUserQuery } from '@/graphql/queries/user'

export const useCurrentUser = () => {
  const response = useQuery({
    queryKey: ['current-user'],
    queryFn: () => graphqlClient.request(getSessionUserQuery),
  })
  return { ...response, user: response.data?.getSessionUser }
}
