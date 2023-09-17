import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import FormEdit from '@/components/Dashboard/FormEdit'
import { useFormById } from '@/hooks/query/form'

interface PageProps {
  formId: string
  projectSlug: string
}

const FormEditPage: NextPage<PageProps> = ({ formId, projectSlug }) => {
  const { form: reviewForm, isLoading } = useFormById(formId)

  if (isLoading) return <p>Loading....</p>

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-hidden overflow-x-visible  lg:h-screen lg:flex-row">
      <section className="flex h-full w-full max-w-xl flex-col px-8 py-8">
        <Link
          className="offset_ring flex w-fit justify-between rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
          href={`/dashboard/${projectSlug}/forms`}
        >
          <span className="pr-2">←</span>
          Forms
        </Link>

        {reviewForm && <FormEdit reviewForm={reviewForm} />}
      </section>

      <section id="preview" className="h-screen w-full flex-grow bg-gray-200">
        <div className="flex h-full flex-col items-center overflow-y-scroll p-8 pb-12 pt-8">
          {reviewForm && JSON?.stringify(reviewForm, null, 2)}
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const q = context.query
  return {
    props: {
      formId: q.formId as string,
      projectSlug: q.projectSlug as string,
    },
  }
}

export default FormEditPage
