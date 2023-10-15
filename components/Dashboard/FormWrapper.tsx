import Link from 'next/link'

import FormEdit from '@/components/Dashboard/FormEdit'
import FormPreview from '@/components/Dashboard/FormPreview'
import type { Form as TReviewForm } from '@/gql/graphql'
import { FormStepId } from '@/types'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormWrapperProps {
  reviewForm: TReviewForm
  domain: string
}

const FormWrapper = ({ reviewForm, domain }: FormWrapperProps) => {
  const [currentStepIndex, setCurrentStepIndex] =
    useState<FormStepId>('WELCOME_PAGE')

  const form = useForm<TReviewForm>({
    defaultValues: {
      ...reviewForm,
    },
  })

  return (
    <>
      <section className="flex h-full w-full max-w-xl flex-col px-8 py-8">
        <Link
          className="offset_ring flex w-fit justify-between rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
          href={`/dashboard/${domain}/forms`}
        >
          <span className="pr-2">←</span>
          Forms
        </Link>

        {reviewForm && (
          <FormEdit onStepChange={setCurrentStepIndex} form={form} />
        )}
      </section>

      <section id="preview" className="h-screen w-full flex-grow bg-gray-200">
        <div className="flex h-full flex-col items-center overflow-y-auto overflow-x-hidden p-8 pt-8 lg:pb-12 dark:bg-gray-800">
          {reviewForm && (
            <FormPreview
              currentStepId={currentStepIndex}
              reviewForm={form.watch()}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default FormWrapper
