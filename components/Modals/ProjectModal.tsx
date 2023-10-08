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
import { useCreateProject } from '@/hooks/mutation/project'
import { useProjectModal } from '@/store/useProjectModal'

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Project name must be at least 3 characters long' })
    .max(17, { message: 'Project name must be less than 17 characters' }),
  subdomain: z
    .string()
    .min(3, { message: 'Project subdomain must be at least 3 characters long' })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: 'Project subdomain must only contain letters and numbers',
    }),
})

export const ProjectModal: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const projectModal = useProjectModal()

  const { mutateAsync: createProjectAsync } = useCreateProject()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subdomain: '',
    },
  })

  const handleCreateProject = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      setLoading(true)
      toast.loading('Creating project...', { id: 'create-project' })
      try {
        const res = await createProjectAsync({
          name: values.name,
          subdomain: values.subdomain,
        })
        if (res.createProject?.id) {
          toast.success('Project created successfully', {
            id: 'create-project',
          })
          router.push(`/dashboard/${res.createProject.subdomain}`)
        }
      } catch (error) {
        toast.error('Something went wrong', { id: 'create-project' })
      } finally {
        setLoading(false)
        projectModal.closeCreateProjectModal()
      }
    },
    [createProjectAsync, projectModal, router]
  )

  return (
    <Modal
      title="Create Project"
      description="Add a new project to manage all of your testimonials"
      isOpen={projectModal.isCreateProjectModalOpen}
      onClose={projectModal.closeCreateProjectModal}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateProject)}>
          <div className="mt-1 flex flex-col gap-y-7">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="My Project"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subdomain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Subdomain</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder="something"
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
              onClick={projectModal.closeCreateProjectModal}
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
