import { Copy, Pencil, PlusIcon, Share2, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useSelectedProject } from '@/hooks/query/project'
import { useListForms } from '@/hooks/query/form'
import {
  convertSecondsToTimeObject,
  formatToLocalDateTime,
  getTimeDistance,
} from '@/utils/time'

const actionButtons = [
  {
    label: 'Share',
    icon: Share2,
  },
  {
    label: 'Edit',
    icon: Pencil,
  },
  {
    label: 'Copy',
    icon: Copy,
  },
  {
    label: 'Delete',
    icon: Trash2,
    color: 'text-red-500',
  },
]

const FormPane: React.FC = () => {
  const { project } = useSelectedProject()
  const { forms } = useListForms(project?.id)

  const [selectedRow, setSelectedRow] = useState(false)

  console.log(forms)

  return (
    <div className="mt-4 flex flex-col gap-1">
      {forms?.map((form) => (
        <div
          key={form?.id}
          className={cn(
            'block rounded-lg hover:bg-gray-50 hover:dark:bg-gray-900',
            {
              'bg-gray-50 dark:bg-gray-900': selectedRow,
            }
          )}
        >
          <div className="group flex items-center gap-4 px-4 py-2.5">
            <Checkbox
              checked={selectedRow}
              onCheckedChange={() => setSelectedRow(!selectedRow)}
              className="border-gray-300 dark:border-gray-700"
            />

            <div
              onClick={() => {}}
              className="flex flex-grow items-center gap-4 overflow-x-hidden"
            >
              <div className="rounded-md border bg-white px-0.5 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="rgb(239 68 68)" d="M16 6H3"></path>
                  <path stroke="rgb(59 130 246)" d="M11 12H3"></path>
                  <path stroke="rgb(59 130 246)" d="M21 12h-6"></path>
                  <path stroke="rgb(245 158 11)" d="M16 18H3"></path>
                </svg>
              </div>
              <div>
                <div className="flex w-full">
                  <div className="truncate text-lg font-medium">
                    {form?.name}
                  </div>
                </div>
                <div className="flex items-center gap-1 truncate text-sm text-gray-500">
                  0 responses. Created{' '}
                  {form?.createdAt && formatToLocalDateTime(form?.createdAt)}
                </div>
              </div>
            </div>

            <div className="flex items-center text-gray-500">
              <button
                tabIndex={-1}
                className="mx-1 hidden rounded-full border border-gray-100 bg-gray-50 px-2 py-1 text-gray-500 hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 hover:dark:bg-gray-700 xl:block"
              >
                <p className="flex items-center gap-2 truncate text-sm">
                  http://localhost/{form?.slug}
                </p>
              </button>

              {actionButtons.map(({ label, icon: Icon, color }, i) => (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger
                      className={cn(
                        'offset_ring rounded-md p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800',
                        color && color
                      )}
                    >
                      <Icon size={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FormPane
