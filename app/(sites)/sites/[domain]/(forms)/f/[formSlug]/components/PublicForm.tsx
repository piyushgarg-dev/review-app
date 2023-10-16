'use client'

import ReviewForm from '@/components/Dashboard/ReviewForm'
import type { FormPublicData } from '@/gql/graphql'

interface PublicFormProps {
  form: FormPublicData
}

const PublicForm: React.FC<PublicFormProps> = ({ form }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <div className="relative flex h-[90%] w-full flex-none flex-col overflow-hidden rounded-md">
        <ReviewForm formData={form} currentStepId="WELCOME_PAGE" />
      </div>
    </div>
  )
}

export default PublicForm
