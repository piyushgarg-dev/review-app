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

export const getFormByIdQuery = graphql(`
  #graphql
  query GetFormById($getFormByIdId: ID!) {
    getFormById(id: $getFormByIdId) {
      id
      name
      slug
      introTitle
      introMessage
      promptTitle
      promptDescription
      thankyouTitle
      thankyouMessage
      enableCTA
      ctaTitle
      ctaURL
      projectId
      createdByUserId
      isActive
      primaryColor
      backgroundColor
      lang
      collectVideoTestimonials
      collectTextTestimonials
      collectRatings
      collectImages
      collectEmail
      collectJobTitle
      collectUserImage
      collectWebsiteURL
      collectCompany
      autoApproveTestimonials
      autoAddTags
      createdAt
      updatedAt
    }
  }
`)
