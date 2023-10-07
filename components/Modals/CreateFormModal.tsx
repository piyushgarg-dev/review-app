import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
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
import { useCreateFormModal } from '@/store/useCreateFormModal'
import { useCreateForm } from '@/hooks/mutation/form'
import { useSelectedProject } from '@/hooks/query/project'

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Form name must be atleast 3 characters long' })
    .max(17, { message: 'Form name must be less than 17 characters' }),
  slug: z
    .string()
    .min(3, { message: 'Form slug must be atleast 3 characters long' }),
})

export const CreateFormModal: React.FC = () => {
  const router = useRouter()

  const createFormModal = useCreateFormModal()
  const { project: selectedProject, isLoading: currentProjectLoading } =
    useSelectedProject()
  const { mutateAsync: createFormAsync } = useCreateForm()

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
    },
  })

  const handleCreateForm = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      if (!selectedProject) return
      setLoading(true)
      toast.loading('Creating form...', { id: 'create-form' })
      try {
        const res = await createFormAsync({
          name: values.name,
          slug: values.slug,
          projectId: selectedProject.id,
        })

        const formId = res.createForm

        if (formId) {
          toast.success('Project created successfully', {
            id: 'create-form',
          })
          router.push(`/dashboard/${selectedProject.slug}/forms/edit/${formId}`)
        }
      } catch (error) {
        toast.error('Something went wrong', { id: 'create-form' })
      } finally {
        setLoading(false)
        createFormModal.closeCreateFormModal()
      }
    },
    [createFormAsync, createFormModal, router, selectedProject]
  )

  return (
    <Modal
      title="Create a form"
      description="You can create different forms to collect different testimonial types."
      isOpen={createFormModal.isCreateFormModalOpen}
      onClose={createFormModal.closeCreateFormModal}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateForm)}>
          <div className="mt-1 flex flex-col gap-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Form Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="My Form"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Form Slug</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder="my-slug"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            <Button
              disabled={loading}
              variant="outline"
              type="button"
              onClick={createFormModal.closeCreateFormModal}
            >
              Cancel
            </Button>
            <Button disabled={loading} type="submit">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  )
}
