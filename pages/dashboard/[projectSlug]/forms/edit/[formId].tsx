import { useFormById } from '@/hooks/query/form'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const FormEditPage: NextPage = () => {
  const router = useRouter()
  const formId = useMemo(
    () => router.query.formId as string,
    [router.query.formId]
  )

  const { form, isLoading } = useFormById(formId)

  if (isLoading) return <p>Loading....</p>

  return (
    <div>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  )
}

export default FormEditPage
