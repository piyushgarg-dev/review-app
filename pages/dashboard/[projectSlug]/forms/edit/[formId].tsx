import { AtSign, Briefcase, Building, Globe, User } from 'lucide-react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import type { Form as TReviewForm } from '@/gql/graphql'
import { useFormById } from '@/hooks/query/form'
import { useSelectedProject } from '@/hooks/query/project'
import advance_icon from '@/public/FormEditIcons/advance_icon.svg'
import custom_domain_icon from '@/public/FormEditIcons/custom_domain_icon.svg'
import customer_details_page_icon from '@/public/FormEditIcons/customer_details_page_icon.svg'
import customize_labels_icon from '@/public/FormEditIcons/customize_labels_icon.svg'
import design_icon from '@/public/FormEditIcons/design_icon.svg'
import edit_icon from '@/public/FormEditIcons/edit_icon.svg'
import premium_icon from '@/public/FormEditIcons/premium_icon.svg'
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

  const { form: reviewForm, isLoading } = useFormById(formId)

  const { project: selectedProject } = useSelectedProject()

  const form = useForm<TReviewForm>({
    defaultValues: {
      ...reviewForm, // from props & this will always be there
    },
  })

  const onSubmit = useCallback(async (values: TReviewForm) => {
    console.log(values)
    toast.success('Check console to see the updated values')
  }, [])

  if (isLoading) return <p>Loading....</p>

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-hidden overflow-x-visible  lg:h-screen lg:flex-row">
      <div className="flex h-full w-full max-w-xl flex-col px-8 py-8">
        <Link
          className="flex w-fit justify-between rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
          href={`/dashboard/${selectedProject?.slug}/forms`}
        >
          <span className="pr-2">←</span>
          Forms
        </Link>

        {/* {
          reviewForm && <FormComponent form={reviewForm} />
          CHANGES:
          - REMOVE CUSTOM DOMAIN
          - REMOVE CUSTOMISE LABELS
          - https://omgovich.github.io/react-colorful/
          - CTA in Thankyou Page
        } */}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-full flex-col pb-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative mt-4 w-fit">
                      <input
                        disabled={form.formState.isSubmitting}
                        className="w-[7.5rem] rounded bg-transparent px-1 py-1 text-xl font-bold outline-dashed outline-1 outline-transparent duration-100 hover:outline-gray-300 focus:outline-gray-300"
                        {...field}
                      />
                      <Image
                        src={edit_icon}
                        alt="edit_icon"
                        className="pointer-events-none absolute -right-5 bottom-2.5"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mask_both relative h-full w-full flex-grow overflow-hidden">
              <div className="h-full overflow-y-auto overflow-x-visible pb-12">
                <Accordion
                  type="single"
                  collapsible
                  className="mt-4 w-full pb-6"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <Image src={design_icon} alt="design_icon" />
                      Design
                    </AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="primaryColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Color</FormLabel>
                            <FormControl>
                              <Input
                                disabled={form.formState.isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                      <FormField
                        control={form.control}
                        name="introTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Welcome Page Title</FormLabel>
                            <FormControl>
                              <Input
                                disabled={form.formState.isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="introMessage"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Introductory Message</FormLabel>
                            <FormControl>
                              <Textarea
                                disabled={form.formState.isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <Image
                        src={response_page_icon}
                        alt="response_page_icon"
                      />
                      Response page
                    </AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="promptTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prompt</FormLabel>
                            <FormControl>
                              <Textarea
                                disabled={form.formState.isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                    <AccordionContent className="rounded-lg border px-1">
                      <FormField
                        control={form.control}
                        name="collectEmail"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-4 space-y-0 border-b pb-4 pt-2">
                            <AtSign className="mt-1 self-start text-gray-500" />
                            <div>
                              <FormLabel className="text-sm font-medium">
                                Collect Email Address
                              </FormLabel>
                              <FormDescription className="text-xs font-normal">
                                Collect email addresses so you can stay in touch
                                and send a thank you note
                              </FormDescription>
                            </div>
                            <div className="flex-grow"></div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="collectJobTitle"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-4 space-y-0 border-b py-4">
                            <Briefcase className="mt-1 self-start text-gray-500" />
                            <div>
                              <FormLabel className="text-sm font-medium">
                                Collect Job Title
                              </FormLabel>
                              <FormDescription className="text-xs font-normal">
                                Collect job titles so you search by title, and
                                group testimonials in some widgets.
                              </FormDescription>
                            </div>
                            <div className="flex-grow"></div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="collectUserImage"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-4 space-y-0 border-b py-4">
                            <User className="mt-1 self-start text-gray-500" />
                            <div>
                              <FormLabel className="text-sm font-medium">
                                Collect User Photo
                              </FormLabel>
                              <FormDescription className="text-xs font-normal">
                                Collect user photos to make widgets that convert
                                better because they look more authentic.
                              </FormDescription>
                            </div>
                            <div className="flex-grow"></div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="collectWebsiteURL"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-4 space-y-0 border-b py-4">
                            <Globe className="mt-1 self-start text-gray-500" />
                            <div>
                              <FormLabel className="text-sm font-medium">
                                Collect Website URL
                              </FormLabel>
                              <FormDescription className="text-xs font-normal">
                                Collect website URL so you can learn more about
                                your customers, and include a link in some
                                widgets.
                              </FormDescription>
                            </div>
                            <div className="flex-grow"></div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="collectCompany"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-4 space-y-0 pt-4">
                            <Building className="mt-1 self-start text-gray-500" />
                            <div>
                              <FormLabel className="text-sm font-medium">
                                Collect Company
                              </FormLabel>
                              <FormDescription className="text-xs font-normal">
                                Collect company name so you can search for
                                testimonials from the same company, and display
                                it in some widgets.
                              </FormDescription>
                            </div>
                            <div className="flex-grow"></div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      <Image
                        src={thankyou_page_icon}
                        alt="thankyou_page_icon"
                      />
                      Thank you page
                    </AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="thankyouTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Page Title</FormLabel>
                            <FormControl>
                              <Input
                                disabled={form.formState.isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="thankyouMessage"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                disabled={form.formState.isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                    <AccordionContent>...</AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      <Image
                        src={custom_domain_icon}
                        alt="custom_domain_icon"
                      />
                      Custom domain
                    </AccordionTrigger>
                    <AccordionContent>
                      <button className="bg-primary-base/5 flex items-center gap-4 rounded-md  text-left text-[13px] font-medium text-primary duration-200 hover:scale-[1.01] active:scale-[.99]">
                        <Image
                          className="self-start text-2xl"
                          src={premium_icon}
                          alt="premium_icon"
                        />
                        Upgrade to add a custom domain to your form.
                      </button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger>
                      <Image src={logo} width={20} height={20} alt="logo" />
                      Remove review branding
                    </AccordionTrigger>
                    <AccordionContent>
                      <button className="bg-primary-base/5 flex items-center gap-4 rounded-md  text-left text-[13px] font-medium text-primary duration-200 hover:scale-[1.01] active:scale-[.99]">
                        <Image
                          className="self-start text-2xl"
                          src={premium_icon}
                          alt="premium_icon"
                        />
                        Upgrade to remove review branding from your form.
                      </button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9">
                    <AccordionTrigger>
                      <Image src={advance_icon} alt="advance_icon" />
                      Advanced
                    </AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="autoApproveTestimonials"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center gap-3">
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  id="auto-approve-testimonials"
                                />
                                <Label htmlFor="auto-approve-testimonials">
                                  Auto Approve Testimonials
                                </Label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="hover:shadow-primary-600/20 block w-full appearance-none rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white duration-100 hover:scale-[1.02] hover:shadow-xl focus:outline-transparent active:scale-[0.98] disabled:opacity-80"
              >
                Save changes
              </button>
            </div>
          </form>
        </Form>
      </div>

      <div id="preview" className="h-screen w-full flex-grow bg-gray-200">
        <div className="flex h-full flex-col items-center overflow-y-scroll p-8 pb-12 pt-8">
          {reviewForm && JSON?.stringify(reviewForm, null, 2)}
        </div>
      </div>
    </div>
  )
}

export default FormEditPage
