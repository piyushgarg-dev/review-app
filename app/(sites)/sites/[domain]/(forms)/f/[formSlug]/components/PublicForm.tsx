'use client'

import ReviewForm, {
  FormSubmissionData,
} from '@/components/Dashboard/ReviewForm'
import type { FormPublicData } from '@/gql/graphql'
import { useCallback } from 'react'
import { handleSubmitFormSubmissionAction } from '../actions'

interface PublicFormProps {
  form: FormPublicData
}

const PublicForm: React.FC<PublicFormProps> = ({ form }) => {
  const handleFormSubmit = useCallback(
    async (data: FormSubmissionData) => {
      const {
        name,
        company,
        email,
        imageURL,
        jobTitle,
        rating,
        testimonial,
        websiteUrl,
      } = data
      await handleSubmitFormSubmissionAction({
        formId: form.id,
        name,
        company,
        testimonial,
        email,
        imageURL,
        jobTitle,
        rating,
        websiteUrl,
      })
      return true
    },
    [form.id]
  )
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
