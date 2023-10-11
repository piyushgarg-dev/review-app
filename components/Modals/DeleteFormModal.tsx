import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import * as z from 'zod'

import { Button } from '@/components/ui/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
// import { useCreateProject } from '@/hooks/mutation/project'
import { useDeleteFormModal } from '@/store/useDeleteFormModal'
import { useCreateForm } from '@/hooks/mutation/form'
import { useSelectedProject } from '@/hooks/query/project'

export const DeleteFormModal: React.FC = () => {
  const deleteFormModal = useDeleteFormModal()
  const { project: selectedProject, isLoading: currentProjectLoading } =
    useSelectedProject()

  const [matchData, setMatchData] = useState(true)
  const handleClick = () => {
    if (matchData) {
      toast.success('Form deleted successfully')
    }
    else{
      toast.error('Something went wrong')
    }
    deleteFormModal.closeDeleteFormModal()
  }
  return (
    <Modal
      title="Delete a form"
      description={`Deleted a from cannot be restored ${`\n `}Please enter the name of form to be deleted in the field below 
      ${deleteFormModal?.formData?.name} to permanently delete the form. `}
      isOpen={deleteFormModal.isDeleteFormModalOpen}
      onClose={deleteFormModal.closeDeleteFormModal}
    >
      <div className="mt-1 flex flex-col gap-y-4">
        <Input
          placeholder={deleteFormModal?.formData?.name}
          onChange={(e) => {
            if (e.target.value.trim() === deleteFormModal?.formData?.name)
              setMatchData(false)
            else setMatchData(true)
          }}
        />
      </div>
      <div className="flex w-full items-center justify-start space-x-2 pt-6">
        <Button disabled={matchData} onClick={() => handleClick()}>
          Delete
        </Button>
      </div>
    </Modal>
  )
}
