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

export const getPublicFormDataQuery = graphql(`
  #graphql
  query GetPublicFormData($input: GetPublicFormDataInput!) {
    getPublicFormData(input: $input) {
      primaryColor
      backgroundColor
      introTitle
      introMessage
      promptTitle
      promptDescription
      thankyouTitle
      thankyouMessage
      name
      enableCTA
      ctaTitle
      ctaURL
      collectVideoTestimonials
      collectTextTestimonials
      collectRatings
      collectImages
      collectEmail
      collectJobTitle
      collectUserImage
      collectWebsiteURL
      collectCompany
      lang
    }
  }
`)
