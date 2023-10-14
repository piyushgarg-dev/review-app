import { useMutation, useQueryClient } from '@tanstack/react-query'

import { graphqlClient } from '@/api'
import { CreateUserData } from '@/gql/graphql'
import { createUserWithEmailAndPasswordMutation } from '@/graphql/mutations/user'

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (data: CreateUserData) =>
      graphqlClient.request(createUserWithEmailAndPasswordMutation, {
        data,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['current-user'] }),
  })

  return mutation
}
