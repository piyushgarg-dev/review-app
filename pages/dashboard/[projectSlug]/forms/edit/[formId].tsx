import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Form } from '@/gql/graphql'
import { useFormById } from '@/hooks/query/form'
import { useSelectedProject } from '@/hooks/query/project'
import advance_icon from '@/public/FormEditIcons/advance_icon.svg'
import custom_domain_icon from '@/public/FormEditIcons/custom_domain_icon.svg'
import customer_details_page_icon from '@/public/FormEditIcons/customer_details_page_icon.svg'
import customize_labels_icon from '@/public/FormEditIcons/customize_labels_icon.svg'
import design_icon from '@/public/FormEditIcons/design_icon.svg'
import edit_icon from '@/public/FormEditIcons/edit_icon.svg'
import response_page_icon from '@/public/FormEditIcons/response_page_icon.svg'
import thankyou_page_icon from '@/public/FormEditIcons/thankyou_page_icon.svg'
import welcome_page_icon from '@/public/FormEditIcons/welcome_page_icon.svg'
import logo from '@/public/logo.svg'

const FormEditPage: NextPage = () => {
  const router = useRouter()
  const formId = useMemo(
    () => router.query.formId as string,
    [router.query.formId]
  )

  const { project: selectedProject } = useSelectedProject()

  const { form, isLoading } = useFormById(formId)

  if (isLoading) return <p>Loading....</p>

  return (
    <div className="flex h-screen w-full overflow-hidden overflow-x-visible">
      <div className="flex h-full w-full max-w-xl flex-col px-8 py-8">
        <Link
          className="flex w-fit justify-between rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-50"
          href={`/dashboard/${selectedProject?.slug}/forms`}
        >
          <span className="pr-2">←</span>
          Forms
        </Link>

        <div
          contentEditable={true}
          spellCheck={false}
          className="relative mt-4 inline-block w-fit rounded p-0.5 text-xl font-bold outline-dashed outline-1 outline-transparent duration-100 hover:outline-gray-300 focus:pr-0.5 focus:outline-gray-300"
        >
          <span className="editable-content">My Form</span>
          <Image
            src={edit_icon}
            alt="edit_icon"
            className="pointer-events-none absolute -right-5 bottom-[6.6px]"
          />
        </div>

        <div className="overflow-box mask_both relative h-full w-full flex-grow overflow-hidden">
          <div className="h-full overflow-y-auto overflow-x-visible pb-12">
            <Accordion type="single" collapsible className="mt-4 w-full pb-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Image src={design_icon} alt="design_icon" />
                  Design
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <Image
                    src={welcome_page_icon}
                    alt="welcome_page_icon"
                    className="rotate-45"
                  />
                  Welcome page
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <Image src={response_page_icon} alt="response_page_icon" />
                  Response page
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <Image
                    src={customer_details_page_icon}
                    alt="customer_details_page_icon"
                  />
                  Customer details page
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <Image src={thankyou_page_icon} alt="thankyou_page_icon" />
                  Thank you page
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <Image
                    src={customize_labels_icon}
                    alt="customize_labels_icon"
                  />
                  Customize labels
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  <Image src={custom_domain_icon} alt="custom_domain_icon" />
                  Custom domain
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  <Image src={logo} width={20} height={20} alt="logo" />
                  Remove review branding
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>
                  <Image src={advance_icon} alt="advance_icon" />
                  Advanced
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="hover:shadow-primary-600/20 block w-full appearance-none rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white duration-100 hover:scale-[1.02] hover:shadow-xl focus:outline-transparent active:scale-[0.98] disabled:opacity-80"
          >
            <div className="relative flex items-center justify-center ">
              <div className="undefined false duration-100">Save changes</div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0">
                <div className="">
                  <svg
                    id="dots"
                    width="32px"
                    viewBox="0 0 132 58"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="svelte-oniw8b"
                  >
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="dots"
                        fill="currentColor"
                        className="svelte-oniw8b"
                      >
                        <circle
                          id="dot1"
                          cx="25"
                          cy="30"
                          r="13"
                          className="svelte-oniw8b"
                        ></circle>
                        <circle
                          id="dot2"
                          cx="65"
                          cy="30"
                          r="13"
                          className="svelte-oniw8b"
                        ></circle>
                        <circle
                          id="dot3"
                          cx="105"
                          cy="30"
                          r="13"
                          className="svelte-oniw8b"
                        ></circle>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div
        id="preview"
        className="hidden h-screen flex-grow bg-gray-200 md:block"
      >
        <div className="flex h-full flex-col items-center overflow-y-scroll p-8 pb-12 pt-8">
          Preview
        </div>
      </div>
    </div>
  )
}

export default FormEditPage
