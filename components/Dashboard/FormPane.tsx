import { Copy, Pencil, Share2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useListForms } from '@/hooks/query/form'
import { useSelectedProject } from '@/hooks/query/project'
import { cn } from '@/lib/utils'
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

  const router = useRouter()

  const [selectedRow, setSelectedRow] = useState(false)

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

            <Link
              href={`/dashboard/${project?.slug}/forms/edit/${form?.id}`}
              className="offset_ring flex flex-grow items-center gap-4 overflow-x-hidden rounded-lg"
            >
              <Image
                src="/formIcon.svg"
                width={20}
                height={20}
                className="rounded-md border bg-white px-0.5 py-1"
                alt="form-icon"
              />
              <p className="flex w-full flex-col">
                <span className="truncate text-lg font-medium">
                  {form?.name}
                </span>
                <span className="flex items-center gap-1 truncate text-sm text-gray-500">
                  0 responses. Created{' '}
                  {form?.createdAt && formatToLocalDateTime(form?.createdAt)}
                </span>
              </p>
            </Link>

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
                      onClick={() =>
                        label.toLowerCase() === 'edit'
                          ? router.push(
                              `/dashboard/${project?.slug}/forms/edit/${form?.id}`
                            )
                          : null
                      }
                      className={cn(
                        'offset_ring rounded-md p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800',
                        color && color
                      )}
                    >
                      <Icon size={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>{label}</span>
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
