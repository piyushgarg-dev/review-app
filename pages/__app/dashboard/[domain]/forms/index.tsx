import type { NextPage } from 'next'
import { toast } from 'react-hot-toast'

import FormPane from '@/components/Dashboard/FormPane'
import { useSelectedProject } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useCreateFormModal } from '@/store/useCreateFormModal'
import { IconButton } from '@/utils/IconButton'

import { PlusIcon } from 'lucide-react'

const DashboardFormPage: NextPage = () => {
  const createFormModal = useCreateFormModal()
  const { project: selectedProject } = useSelectedProject()

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
                  onClick={() => {
                    if (!selectedProject) {
                      toast.error('Please select a project first.', {
                        id: 'create-new-button',
                      })
                      return
                    }
                    createFormModal.openCreateFormModal()
                  }}
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
