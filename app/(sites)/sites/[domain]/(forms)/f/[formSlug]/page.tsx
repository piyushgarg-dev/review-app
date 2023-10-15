import { graphqlClient } from '@/api'
import { notFound } from 'next/navigation'
import { GetPublicFormDataInput } from '@/gql/graphql'
import { getPublicFormDataQuery } from '@/graphql/queries/form'

interface PublicFormPageProps {
  params: {
    domain?: string
    formSlug?: string
  }
  searchParams: any
}

async function getFormByDomainAndSlug(input: GetPublicFormDataInput) {
  const result = await graphqlClient.request(getPublicFormDataQuery, { input })
  return result.getPublicFormData
}

export default async function PublicFormPage({ params }: PublicFormPageProps) {
  const domain = params.domain?.trim()
  const slug = params.formSlug?.trim()

  if (!domain || !slug) return notFound()

  const form = await getFormByDomainAndSlug({ domain, formSlug: slug })

  if (!form) return notFound()

  return <div>Form Page {JSON.stringify(form, undefined, 10)}</div>
}
