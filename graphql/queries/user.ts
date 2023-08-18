import { graphql } from '@/gql'

export const getSessionUserQuery = graphql(`
  query GetSessionUser {
    getSessionUser {
      id
      firstName
      lastName
      email
      emailVerified
      authenticationType
      profileImageURL
      role
      createdAt
      updatedAt
    }
  }
`)

export const signinWithEmailAndPasswordQuery = graphql(`
  #graphql
  query SigninWithEmailPassword($email: String!, $password: String!) {
    singinwithEmailPassword(email: $email, password: $password)
  }
`)
