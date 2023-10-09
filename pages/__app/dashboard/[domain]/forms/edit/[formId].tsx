import type { GetServerSideProps, NextPage } from 'next'

import FormWrapper from '@/components/Dashboard/FormWrapper'
import { useFormById } from '@/hooks/query/form'

interface PageProps {
  formId: string
  domain: string
}

const FormEditPage: NextPage<PageProps> = ({ formId, domain }) => {
  const { form: reviewForm, isLoading } = useFormById(formId)

  if (isLoading) return <p>Loading....</p>

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-hidden overflow-x-visible  lg:h-screen lg:flex-row">
      <FormWrapper reviewForm={reviewForm!} domain={domain} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const q = context.query
  return {
    props: {
      formId: q.formId as string,
      domain: q.domain as string,
    },
  }
}

export default FormEditPage
