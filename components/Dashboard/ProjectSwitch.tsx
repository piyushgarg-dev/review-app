import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

import React, { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown, FolderOpenDot, PlusCircle } from 'lucide-react'
import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import { useRouter } from 'next/router'
import { Modal } from '../ui/modal'
import { useCreateProject } from '@/hooks/mutation/project'

const ProjectSwitch: React.FC = () => {
  const { projects } = useUserProjects()
  const router = useRouter()

  const { project: selectedProject, isLoading: projectsLoading } =
    useSelectedProject()

  const { mutateAsync: createProjectAsync } = useCreateProject()

  const [createProjectModelOpen, setCreateProjectModalOpen] = useState(false)

  const handleSelectProject = useCallback(
    (slug: string) => {
      router.replace(`/dashboard/${slug}`)
    },
    [router]
  )

  const handleCreateNewProjectItem = useCallback(
    () => setCreateProjectModalOpen(true),
    []
  )

  const handleCreateProject = useCallback(() => {}, [])

  useEffect(() => {
    if (projects?.length === 0 && !projectsLoading) {
      setCreateProjectModalOpen(true)
    }
  }, [projects, projectsLoading])

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
                  onSelect={handleCreateNewProjectItem}
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
        isOpen={createProjectModelOpen}
        onClose={() =>
          projects?.length !== 0 ? setCreateProjectModalOpen(false) : null
        }
      >
        {
          // Add Two Input Fields here
        }
      </Modal>
    </>
  )
}

export default ProjectSwitch
