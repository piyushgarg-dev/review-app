import { graphql } from '@/gql'

export const getUserProjectsQuery = graphql(`
  #graphql
  query GetUserProjects {
    getUserProjects {
      id
      name
      slug
    }
  }
`)

export const getProjectBySlug = graphql(`
  #graphql
  query GetProjectBySlug($slug: String!) {
    getProjectBySlug(slug: $slug) {
      id
      name
      slug
      createdAt
      updatedAt
    }
  }
`)
