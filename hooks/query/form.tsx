import { graphqlClient } from '@/api'
import { GetFormsInput } from '@/gql/graphql'
import { getFormsInProjectQuery } from '@/graphql/queries/form'
import { useQuery } from '@tanstack/react-query'

export const useListForms = (projectId?: string) => {
  const query = useQuery({
    queryKey: ['forms', { projectId }],
    queryFn: () =>
      projectId
        ? graphqlClient.request(getFormsInProjectQuery, {
            input: { projectId },
          })
        : null,
  })
  return { ...query, forms: query.data?.getForms }
}
