import { Laptop, Smartphone } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

const FormPreview: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="relative flex h-full w-full flex-col items-center">
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
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-800 p-4">
          <div className="rounded-md bg-gray-100 p-3">
            <h1 className="text-xl font-medium">Share a testimonial!</h1>
            <p className="my-2 text-sm text-gray-500">
              Do you love using our product? We&apos;d love to hear about it!
            </p>
            <ul>
              <li className="text-sm text-gray-700">
                Share your experience with a quick video or text testimonial
              </li>
              <li className="text-sm text-gray-700">
                Recording a video? Don&apos;t forget to smile 😊
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPreview
