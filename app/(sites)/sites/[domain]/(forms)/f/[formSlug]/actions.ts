'use server'

import { graphqlClient } from '@/api'
import { SubmitFormResponseData } from '@/gql/graphql'
import { submitFormResponseMutation } from '@/graphql/mutations/form'

export async function handleSubmitFormSubmissionAction(
  params: SubmitFormResponseData
) {
  return graphqlClient.request(submitFormResponseMutation, {
    input: params,
  })
}
