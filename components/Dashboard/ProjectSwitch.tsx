import { zodResolver } from '@hookform/resolvers/zod'
import slugify from 'slugify'
import { Check, ChevronsUpDown, FolderOpenDot, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useCreateProject } from '@/hooks/mutation/project'
import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import { cn } from '@/lib/utils'
import { useProjectModal } from '@/store/useProjectModal'

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Project name must be atleast 3 characters long' })
    .max(25, { message: 'Project name must be less than 25 characters' }),
  slug: z
    .string()
    .min(3, { message: 'Project slug must be atleast 3 characters long' })
    .max(10, { message: 'Project slug must be less than 10 characters' }),
})

const ProjectSwitch: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const projectModal = useProjectModal()

  const { projects } = useUserProjects()
  const router = useRouter()

  const { project: selectedProject, isLoading: projectsLoading } =
    useSelectedProject()

  const { mutateAsync: createProjectAsync } = useCreateProject()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
    },
  })

  const handleSelectProject = useCallback(
    (slug: string) => {
      router.replace(`/dashboard/${slug}`)
    },
    [router]
  )

  const handleCreateProject = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      setLoading(true)
      const res = await createProjectAsync({
        name: values.name,
        slug: values.slug,
      })
      if (res.createProject?.id) {
        toast.success('Project created successfully')
        handleSelectProject(values.slug)
        projectModal.onClose()
      }
      setLoading(false)
    },
    [createProjectAsync, handleSelectProject, projectModal]
  )

  const modalClose = () =>
    projects?.length !== 0 ? projectModal.onClose() : projectModal.onOpen()

  useEffect(() => {
    if (projects?.length === 0 && !projectsLoading) {
      projectModal.onOpen()
    }
  }, [projectModal, projects, projectsLoading])

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            role="combobox"
            aria-label="Select a project"
            className={cn('w-[200px] justify-between')}
          >
            <FolderOpenDot className="mr-2 h-4 w-4" />
            {selectedProject?.name}
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search project..." />
              <CommandEmpty>No project found.</CommandEmpty>
              <CommandGroup heading="Projects">
                {projects?.map((project) => (
                  <CommandItem
                    key={project?.id}
                    onSelect={() =>
                      project ? handleSelectProject(project?.slug) : null
                    }
                    className="text-sm cursor-pointer"
                  >
                    <FolderOpenDot className="mr-2 h-4 w-4" />
                    {project?.name}
                    <Check
                      className={cn(
                        'ml-auto h-4 w-4',
                        selectedProject?.id === project?.id
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <CommandItem
                  className="cursor-pointer"
                  onSelect={() => projectModal.onOpen()}
                >
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create Project
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Modal
        title="Create Project"
        description=""
        isOpen={projectModal.isOpen}
        onClose={() => modalClose()}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateProject)}>
            <div className="flex flex-col gap-y-3">
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
                onClick={() => modalClose()}
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
    </>
  )
}

export default ProjectSwitch
