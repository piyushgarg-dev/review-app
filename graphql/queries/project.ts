import { graphql } from '@/gql'

export const getUserProjectsQuery = graphql(`
  #graphql
  query GetUserProjects {
    getUserProjects {
      id
      name
      subdomain
      customDomain
    }
  }
`)

export const getProjectByDomain = graphql(`
  #graphql
  query GetProjectByDomain($domain: String!) {
    getProjectByDomain(domain: $domain) {
      id
      name
      customDomain
      subdomain
      createdAt
      updatedAt
    }
  }
`)
