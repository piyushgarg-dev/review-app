import { Laptop, Smartphone } from 'lucide-react'
import { useState } from 'react'

import { Form } from '@/gql/graphql'
import { cn } from '@/lib/utils'
import ReviewForm from './ReviewForm'
import { FormStepId } from '@/types'

interface FormPreviewProps {
  reviewForm: Form
  currentStepId: FormStepId
}

const FormPreview: React.FC<FormPreviewProps> = (props) => {
  const { reviewForm, currentStepId } = props
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div
      className={cn('relative  flex h-full w-full flex-col items-center', {
        'mb-10': isMobile,
      })}
    >
      <div className="mb-4 flex justify-center rounded-lg bg-gray-300 p-1">
        <button
          className={cn(
            'offset_ring rounded-md p-1.5 transition-all',
            isMobile && 'bg-gray-100'
          )}
          onClick={() => setIsMobile(true)}
        >
          <Smartphone />
        </button>
        <button
          className={cn(
            'offset_ring rounded-md p-1.5 transition-all',
            !isMobile && 'bg-gray-100'
          )}
          onClick={() => setIsMobile(false)}
        >
          <Laptop />
        </button>
      </div>

      <div
        className={cn(
          'relative flex h-[90%] w-full flex-none flex-col overflow-hidden rounded-md bg-gray-50 shadow-xl ring-4 ring-gray-800 duration-300',
          {
            'h-[628px] w-[330px] rounded-3xl': isMobile,
          }
        )}
      >
        <ReviewForm formData={reviewForm} currentStepId={currentStepId} />
      </div>
    </div>
  )
}

export default FormPreview
