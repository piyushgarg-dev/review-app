import { Copy, Pencil, Share2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
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
import { Form, Project } from '@/gql/graphql'

interface SelectionStateType {
  [key: string | number]: boolean
}

const actionButtons = [
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
  const [selectedRow, setSelectedRow] = useState<SelectionStateType>(
    {} as SelectionStateType
  )

  const getFormPublicLink = useCallback(
    ({
      slug,
      subdomain,
      customDomain,
    }: {
      subdomain: string
      customDomain?: string
      slug: string
    }) => {
      if (typeof window === 'undefined') return '' // This is rendered on Server

      const _state = { domain: '', slug: '' }
      const { protocol } = window.location

      if (customDomain) _state.domain = customDomain
      else _state.domain = `${subdomain}.${process.env.NEXT_PUBLIC_APP_DOMAIN}`

      _state.slug = slug

      return `${protocol}//${_state.domain}/f/${_state.slug}`
    },
    []
  )

  const handleCopyClick = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link)
      toast.success('Link Copied')
    } catch (error) {
      console.error('Failed to copy text: ', error)
    }
  }
  const router = useRouter()

  const handleCheck = (id: string | number) => {
    setSelectedRow((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const openFormUrlInNewTab = (formSlug?: string | undefined) => {
    if (formSlug) {
      const formUrl = getFormPublicLink({
        subdomain: project?.subdomain!,
        customDomain: project?.customDomain!,
        slug: formSlug,
      });
      window.open(formUrl, '_blank');
    }
  };
  

  return (
    <div className="mt-4 flex flex-col gap-1">
      {forms?.map((form, index) => (
        <div
          key={form?.id}
          className={cn(
            'block rounded-lg hover:bg-gray-50 hover:dark:bg-gray-900',
            {
              'bg-gray-50 dark:bg-gray-900': selectedRow[form?.id || index],
            }
          )}
        >
          <div className="group flex items-center gap-4 px-4 py-2.5">
            <Checkbox
              checked={selectedRow[form?.id || index] ?? false}
              onCheckedChange={() => handleCheck(form?.id || index)}
              className="border-gray-300 dark:border-gray-700"
            />

            <Link
              href={`/dashboard/${project?.subdomain}/forms/edit/${form?.id}`}
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
              className="mx-1 hidden rounded-full border border-gray-100 bg-gray-50 px-2 py-1 text-gray-500 hover:bg-gray-100 dark:border-gray-900 dark-bg-gray-800 hover:dark-bg-gray-700 xl:block"
              onClick={() => openFormUrlInNewTab(form?.slug)}
            >
              <p className="flex items-center gap-2 truncate text-sm">
                {getFormPublicLink({
                  subdomain: project?.subdomain!,
                  customDomain: project?.customDomain!,
                  slug: form?.slug!,
                })}
              </p>
              </button>

              {actionButtons.map(({ label, icon: Icon, color }, i) => (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger
                      onClick={() =>
                        label.toLowerCase() === 'edit'
                          ? router.push(
                              `/dashboard/${project?.subdomain}/forms/edit/${form?.id}`
                            )
                          : label.toLowerCase() === 'copy'
                          ? handleCopyClick(
                              getFormPublicLink({
                                subdomain: project?.subdomain!,
                                customDomain: project?.customDomain!,
                                slug: form?.slug!,
                              })
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
