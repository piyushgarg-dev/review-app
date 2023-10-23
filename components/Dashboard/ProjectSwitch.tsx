import { Check, ChevronsUpDown, FolderOpenDot, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useSelectedProject, useUserProjects } from '@/hooks/query/project'
import { useProjectModal } from '@/store/useProjectModal'
import { cn } from '@/lib/utils'

const ProjectSwitch: React.FC = () => {
  const { projects } = useUserProjects()
  const projectModal = useProjectModal()
  const router = useRouter()

  const { project: selectedProject } = useSelectedProject()

  const handleSelectProject = useCallback(
    (domain: string) => {
      router.replace(`/dashboard/${domain}`)
    },
    [router]
  )

  return (
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
                    project ? handleSelectProject(project?.subdomain) : null
                  }
                  className="cursor-pointer text-sm"
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
              <Button
                className="flex h-full w-full justify-start px-2 py-1.5 font-normal hover:bg-primary/80"
                onClick={() => projectModal.openCreateProjectModal()}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Project
              </Button>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ProjectSwitch
