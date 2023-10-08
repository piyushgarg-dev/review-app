import type { NextPage } from 'next'
import { PlusIcon } from 'lucide-react'

import DashboardLayout from '@/layouts/DashboardLayout'
import FormPane from '@/components/Dashboard/FormPane'
import { IconButton } from '@/utils/IconButton'
import { useCreateFormModal } from '@/store/useCreateFormModal'

const DashboardFormPage: NextPage = () => {
  const createFormModal = useCreateFormModal()

  return (
    <DashboardLayout>
      <div
        className="relative h-full flex-grow px-6 sm:px-10"
        id="page-container"
      >
        <div className="h-full pb-16 pt-8 sm:pt-10">
          <div className="h-full">
            <div className="flex items-center gap-2">
              <div>
                <h1 className="text-xl font-semibold">Your Forms</h1>{' '}
                <p className="mt-1 text-zinc-500">
                  Use forms to collect testimonials from your users.
                </p>
              </div>
              <div className="flex-grow"></div>{' '}
              <div className="flex">
                <IconButton
                  icon={PlusIcon}
                  onClick={createFormModal.openCreateFormModal}
                >
                  Create new
                </IconButton>
              </div>
            </div>
            <FormPane />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardFormPage
