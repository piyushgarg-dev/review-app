import { graphql } from '@/gql'

export const createProjectMutation = graphql(`
  #graphql
  mutation CreateProject($data: CreateProjectData!) {
    createProject(data: $data) {
      id
      subdomain
      customDomain
    }
  }
`)
