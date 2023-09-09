import { graphql } from '@/gql'

export const getFormsInProjectQuery = graphql(`
  #graphql
  query GetForms($input: GetFormsInput!) {
    getForms(input: $input) {
      id
      name
      slug
      createdAt
      updatedAt
    }
  }
`)
