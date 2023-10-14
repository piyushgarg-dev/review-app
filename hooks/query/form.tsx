import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '@/api'
import { GetFormsInput } from '@/gql/graphql'
import {
  getFormByIdQuery,
  getFormsInProjectQuery,
} from '@/graphql/queries/form'

export const useListForms = (projectId?: string) => {
  const query = useQuery({
    queryKey: ['forms', projectId],
    queryFn: () =>
      projectId
        ? graphqlClient.request(getFormsInProjectQuery, {
            input: { projectId },
          })
        : null,
  })
  return { ...query, forms: query.data?.getForms }
}

export const useFormById = (id: string) => {
  const query = useQuery({
    queryKey: ['forms', id],
    queryFn: () =>
      graphqlClient.request(getFormByIdQuery, { getFormByIdId: id }),
  })
  return { ...query, form: query.data?.getFormById }
}
