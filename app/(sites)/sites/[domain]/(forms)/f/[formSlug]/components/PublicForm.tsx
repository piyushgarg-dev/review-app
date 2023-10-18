'use client'

import ReviewForm from '@/components/Dashboard/ReviewForm'
import type { FormPublicData } from '@/gql/graphql'

interface PublicFormProps {
  form: FormPublicData
}

const PublicForm: React.FC<PublicFormProps> = ({ form }) => {
  return (
    <div className="relative flex h-screen w-full flex-none flex-col overflow-hidden">
      <ReviewForm formData={form} isPreview={false} />
    </div>
  )
}

export default PublicForm
