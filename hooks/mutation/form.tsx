import { graphqlClient } from '@/api'
import { CreateFormData, DeleteFormInput, UpdateFormInput } from '@/gql/graphql'
import {
  CreateFormMutation,
  DeleteFormMutation,
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
export const useDeleteForm = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data: DeleteFormInput) =>
      graphqlClient.request(DeleteFormMutation, { data }),
    onSuccess: async (values, variables) => {
      await queryClient.invalidateQueries(['forms', variables.id])
    },
  })
  return mutation
}
