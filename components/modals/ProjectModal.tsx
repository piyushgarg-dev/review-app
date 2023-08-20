import { zodResolver } from '@hookform/resolvers/zod'
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
import { useProjectModal } from '@/store/useProjectModalStore'

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Project name must be atleast 3 characters long' })
    .max(17, { message: 'Project name must be less than 17 characters' }),
  slug: z
    .string()
    .min(3, { message: 'Project slug must be atleast 3 characters long' })
    .max(10, { message: 'Project slug must be less than 10 characters' }),
})

export const ProjectModal: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const projectModal = useProjectModal()

  const { mutateAsync: createProjectAsync } = useCreateProject()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
    },
  })

  const handleCreateProject = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      setLoading(true)
      let slug = values.slug // Why?
      try {
        const res = await createProjectAsync({
          name: values.name,
          slug: values.slug,
        })
        if (res.createProject?.id) {
          toast.success('Project created successfully')
          window.location.assign(`/dashboard/${values.slug}`) // Why not Next Router?
        }
      } catch (error) {
        toast.error('Something went wrong')
      } finally {
        setLoading(false)
      }
    },
    [createProjectAsync]
  )

  return (
    <Modal
      title="Create Project"
      description="Add a new project to manage all of your testimonials"
      isOpen={projectModal.isOpen}
      onClose={projectModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateProject)}>
          <div className="flex flex-col mt-1 gap-y-7">
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
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Slug</FormLabel>
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
          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
            <Button
              disabled={loading}
              variant="outline"
              onClick={projectModal.onClose}
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
