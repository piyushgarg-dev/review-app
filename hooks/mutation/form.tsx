import { graphqlClient } from '@/api'
import { CreateFormData } from '@/gql/graphql'
import { CreateFormMutation } from '@/graphql/mutations/form'
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
