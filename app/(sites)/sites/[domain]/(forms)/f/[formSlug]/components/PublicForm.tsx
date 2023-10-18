'use client'

import ReviewForm, { FormType } from '@/components/Dashboard/ReviewForm'
import type { FormPublicData } from '@/gql/graphql'
import { useCallback } from 'react'

interface PublicFormProps {
  form: FormPublicData
}

const PublicForm: React.FC<PublicFormProps> = ({ form }) => {
  const handleFormSubmit = useCallback((data: FormType) => {
    const {} = data
    console.log(data)
  }, [])
  return (
    <div className="relative flex h-screen w-full flex-none flex-col overflow-hidden">
      <ReviewForm
        onSubmit={handleFormSubmit}
        formData={form}
        isPreview={false}
      />
    </div>
  )
}

export default PublicForm
