import { graphqlClient } from '@/api'
import { FormResponse, GetFormsInput } from '@/gql/graphql'
import {
  getFormByIdQuery,
  getFormResponsesByFormIdQuery,
  getFormResponsesByProjectidQuery,
  getFormsInProjectQuery,
} from '@/graphql/queries/form'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

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
  const query = useInfiniteQuery({
    queryKey: ['project', 'form-responses', projectId],
    queryFn: ({ pageParam }) =>
      graphqlClient.request(getFormResponsesByProjectidQuery, {
        input: { projectId, cursor: pageParam ?? undefined },
      }),
    getPreviousPageParam: ({ getFormResponsesByProjectId }) => {
      if (
        !getFormResponsesByProjectId ||
        getFormResponsesByProjectId.length <= 0
      )
        return null
      return getFormResponsesByProjectId[0]?.id
    },
    getNextPageParam: ({ getFormResponsesByProjectId }) => {
      if (
        !getFormResponsesByProjectId ||
        getFormResponsesByProjectId.length <= 0
      )
        return null
      const lastElementIndex = getFormResponsesByProjectId.length - 1
      if (getFormResponsesByProjectId[lastElementIndex])
        return getFormResponsesByProjectId[lastElementIndex]?.id
    },
    keepPreviousData: true,
  })

  return {
    ...query,
    responses: query.data?.pages
      .map((e) => e.getFormResponsesByProjectId as FormResponse[])
      .flat(),
  }
}
