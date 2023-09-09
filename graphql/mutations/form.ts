import { graphql } from '@/gql'

export const CreateFormMutation = graphql(`
  #graphql
  mutation CreateForm($data: CreateFormData!) {
    createForm(data: $data)
  }
`)
