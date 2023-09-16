import { AtSign, Briefcase, Building, Globe, User } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import advance_icon from '@/public/FormEditIcons/advance_icon.svg'
import customer_details_page_icon from '@/public/FormEditIcons/customer_details_page_icon.svg'
import design_icon from '@/public/FormEditIcons/design_icon.svg'
import edit_icon from '@/public/FormEditIcons/edit_icon.svg'
import premium_icon from '@/public/FormEditIcons/premium_icon.svg'
import response_page_icon from '@/public/FormEditIcons/response_page_icon.svg'
import thankyou_page_icon from '@/public/FormEditIcons/thankyou_page_icon.svg'
import welcome_page_icon from '@/public/FormEditIcons/welcome_page_icon.svg'
import logo from '@/public/logo.svg'

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
import type { Form as TReviewForm, UpdateFormInput } from '@/gql/graphql'
import { useUpdateForm } from '@/hooks/mutation/form'

export interface FormEditProps {
  reviewForm: TReviewForm
}

const FormEdit: React.FC<FormEditProps> = ({ reviewForm }) => {
  const [isCta, setIsCta] = useState(false)

  const { mutateAsync: updateFormAsync } = useUpdateForm()

  const form = useForm<TReviewForm>({
    defaultValues: {
      ...reviewForm,
    },
  })

  const onSubmit = useCallback(
    async (values: TReviewForm) => {
      toast.loading('Please wait', { id: reviewForm.id })
      await updateFormAsync({
        id: values.id,
        autoAddTags: values.autoAddTags,
        autoApproveTestimonials: values.autoApproveTestimonials,
        backgroundColor: values.backgroundColor,
        collectCompany: values.collectCompany,
        collectEmail: values.collectEmail,
        collectImages: values.collectImages,
        collectJobTitle: values.collectJobTitle,
        collectRatings: values.collectRatings,
        collectTextTestimonials: values.collectTextTestimonials,
        collectUserImage: values.collectUserImage,
        collectVideoTestimonials: values.collectVideoTestimonials,
        collectWebsiteURL: values.collectWebsiteURL,
        ctaTitle: values.ctaTitle,
        ctaURL: values.ctaURL,
        enableCTA: values.enableCTA,
        introMessage: values.introMessage,
        introTitle: values.introTitle,
        isActive: values.isActive,
        name: values.name,
        primaryColor: values.primaryColor,
        promptDescription: values.promptDescription,
        promptTitle: values.promptTitle,
        thankyouMessage: values.thankyouMessage,
        thankyouTitle: values.thankyouTitle,
      })
      toast.success('Form updated successs', { id: reviewForm.id })
    },
    [reviewForm.id, updateFormAsync]
  )

  return (
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
            <Accordion type="single" collapsible className="mt-4 w-full pb-6">
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
                            value={field.value || ''}
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
                  <Image src={response_page_icon} alt="response_page_icon" />
                  Response page
                </AccordionTrigger>
                <AccordionContent>
                  <FormField
                    control={form.control}
                    name="promptTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prompt Title</FormLabel>
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
                    name="promptDescription"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>Prompt Description</FormLabel>
                        <FormControl>
                          <Textarea
                            disabled={form.formState.isSubmitting}
                            {...field}
                            value={field.value || ''}
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
                            Collect email addresses so you can stay in touch and
                            send a thank you note
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
                            Collect job titles so you search by title, and group
                            testimonials in some widgets.
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
                            Collect website URL so you can learn more about your
                            customers, and include a link in some widgets.
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
                            testimonials from the same company, and display it
                            in some widgets.
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
                  <Image src={thankyou_page_icon} alt="thankyou_page_icon" />
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
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="mt-4 flex w-full justify-between">
                    <p>Call to action</p>
                    <Switch
                      checked={isCta}
                      onCheckedChange={() => setIsCta(!isCta)}
                    />
                  </div>
                  {isCta && (
                    <>
                      <FormField
                        control={form.control}
                        name="ctaTitle"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormControl>
                              <Input
                                disabled={form.formState.isSubmitting}
                                placeholder="e.g. 'Get started'"
                                {...field}
                                value={field.value || ''}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ctaURL"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormControl>
                              <Input
                                disabled={form.formState.isSubmitting}
                                placeholder="e.g. https://reviewapp.io"
                                {...field}
                                value={field.value || ''}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <Image src={logo} width={20} height={20} alt="logo" />
                  Remove review branding
                </AccordionTrigger>
                <AccordionContent>
                  <button
                    type="button"
                    className="offset_ring bg-primary-base/5 flex items-center gap-4 rounded-md  text-left text-[13px] font-medium text-primary duration-200 hover:scale-[1.01] active:scale-[.99]"
                  >
                    <Image
                      className="self-start text-2xl"
                      src={premium_icon}
                      alt="premium_icon"
                    />
                    Upgrade to remove review branding from your form.
                  </button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
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
  )
}

export default FormEdit
