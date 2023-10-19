import { graphql } from '@/gql'

export const CreateFormMutation = graphql(`
  #graphql
  mutation CreateForm($data: CreateFormData!) {
    createForm(data: $data)
  }
`)

export const UpdateFormMutation = graphql(`
  #graphql
  mutation UpdateForm($data: UpdateFormInput!) {
    updateForm(data: $data)
  }
`)

export const submitFormResponseMutation = graphql(`
  #graphql
  mutation SubmitFormResponse($input: SubmitFormResponseData!) {
    submitFormResponse(data: $input)
  }
`)
