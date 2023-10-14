import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { type } from 'os'
import { useState } from 'react'

import FormEdit from '@/components/Dashboard/FormEdit'
import FormPreview from '@/components/Dashboard/FormPreview'
import { useFormById } from '@/hooks/query/form'
import { FormStepId } from '@/types'

interface PageProps {
  formId: string
  domain: string
}

const FormEditPage: NextPage<PageProps> = ({ formId, domain }) => {
  const { form: reviewForm, isLoading } = useFormById(formId)

  const [currentStepIndex, setCurrentStepIndex] =
    useState<FormStepId>('WELCOME_PAGE')

  if (isLoading) return <p>Loading....</p>

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-hidden overflow-x-visible  lg:h-screen lg:flex-row">
      <section className="flex h-full w-full max-w-xl flex-col px-8 py-8">
        <Link
          className="offset_ring flex w-fit justify-between rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
          href={`/dashboard/${domain}/forms`}
        >
          <span className="pr-2">←</span>
          Forms
        </Link>

        {reviewForm && (
          <FormEdit
            onStepChange={setCurrentStepIndex}
            reviewForm={reviewForm}
          />
        )}
      </section>

      <section id="preview" className="h-screen w-full flex-grow bg-gray-200">
        <div className="flex h-full flex-col items-center overflow-y-auto overflow-x-hidden p-8 pt-8 lg:pb-12">
          {reviewForm && (
            <FormPreview
              currentStepId={currentStepIndex}
              reviewForm={reviewForm}
            />
          )}
        </div>
      </section>
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
