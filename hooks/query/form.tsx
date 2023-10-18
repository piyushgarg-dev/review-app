import { graphqlClient } from '@/api'
import { GetFormsInput } from '@/gql/graphql'
import {
  getFormByIdQuery,
  getFormResponsesByFormIdQuery,
  getFormResponsesByProjectidQuery,
  getFormsInProjectQuery,
} from '@/graphql/queries/form'
import { useQuery } from '@tanstack/react-query'

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

export const useGetFormResponsesByFormId = (formId: string) => {
  const query = useQuery({
    queryKey: ['forms', 'form-responses', formId],
    queryFn: () =>
      graphqlClient.request(getFormResponsesByFormIdQuery, {
        input: { formId },
      }),
  })
  return { ...query, responses: query.data?.getFormResponsesByFormId }
}

export const useGetFormResponsesByProjectId = (projectId: string) => {
  const query = useQuery({
    queryKey: ['project', 'form-responses', projectId],
    queryFn: () =>
      graphqlClient.request(getFormResponsesByProjectidQuery, {
        input: { projectId },
      }),
  })
  return { ...query, responses: query.data?.getFormResponsesByProjectId }
}
