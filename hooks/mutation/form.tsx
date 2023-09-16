import { graphqlClient } from '@/api'
import { CreateFormData, UpdateFormInput } from '@/gql/graphql'
import {
  CreateFormMutation,
  UpdateFormMutation,
} from '@/graphql/mutations/form'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateForm = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data: CreateFormData) =>
      graphqlClient.request(CreateFormMutation, { data }),
    onSuccess: async (values, variables) => {
      await queryClient.invalidateQueries(['forms', variables.projectId])
    },
  })
  return mutation
}

export const useUpdateForm = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data: UpdateFormInput) =>
      graphqlClient.request(UpdateFormMutation, { data }),
    onSuccess: async (values, variables) => {
      await queryClient.invalidateQueries(['forms', variables.id])
    },
  })
  return mutation
}
