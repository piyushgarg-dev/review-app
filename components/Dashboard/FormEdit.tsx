import {
  AtSign,
  Briefcase,
  Building,
  Globe,
  ImagePlus,
  User,
  Pencil
} from 'lucide-react'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { UseFormReturn, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  dialogClose,
} from '@/components/ui/dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
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
import type { Form as TReviewForm } from '@/gql/graphql'
import { useUpdateForm } from '@/hooks/mutation/form'
import { FormStepId } from '@/types'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

export interface FormEditProps {
  form: UseFormReturn<TReviewForm, any, undefined>
  onStepChange: (id: FormStepId) => void
}

const FormEdit: React.FC<FormEditProps> = ({ form, onStepChange }) => {
  const [logoUrl, setLogoUrl] = useState('')
  const inputref = useRef<HTMLInputElement | null>(null);

  const { mutateAsync: updateFormAsync } = useUpdateForm()

  const onSubmit = useCallback(
    async (values: TReviewForm) => {
      try {
        toast.loading('Please wait', { id: form.getValues().id })
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
        toast.success('Form updated successsfully', { id: form.getValues().id })
      } catch (error) {
        toast.error('Something went wrong', { id: form.getValues().id })
      }
    },
    [form, updateFormAsync]
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
                    {...field}
                    ref={inputref}
                    disabled={form.formState.isSubmitting}
                    className="w-[7.5rem] rounded bg-transparent px-1 py-1 text-xl font-bold outline-dashed outline-1 outline-transparent duration-100 hover:outline-gray-300 focus:outline-gray-300"
                    
                  />
                  <Button
                    type='button'
                    style={{ backgroundColor: 'transparent' }}
                    onClick={() => 
                      inputref?.current?.focus()
                    }
                    >
                    <Pencil size={15}/>
                    </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mask_both relative h-full w-full flex-grow overflow-hidden">
          <div className="h-full overflow-y-auto overflow-x-visible pb-12">
            <Accordion type="single" collapsible className="mt-4 w-full pb-6">
              <AccordionItem
                onClick={() => onStepChange('WELCOME_PAGE')}
                value="item-1"
              >
                <AccordionTrigger>
                  <Image src={design_icon} alt="design_icon" />
                  Design
                </AccordionTrigger>
                <AccordionContent>
                  <Dialog>
                    <DialogTrigger className="offset_ring group mb-4 rounded-lg border border-input bg-background p-2 hover:bg-accent hover:text-accent-foreground dark:bg-white">
                      <Image
                        src={logoUrl ? logoUrl : logo}
                        width={104}
                        height={104}
                        className="bg-cover group-hover:brightness-105"
                        alt="logo"
                      />
                    </DialogTrigger>
                    <DialogContent
                      closeAble={false}
                      className="sm:max-w-[425px] lg:max-w-[556px]"
                    >
                      <DialogDescription>
                        <Label tabIndex={0}>
                          <div className="flex w-full cursor-pointer justify-center rounded-md border-2 border-dashed border-gray-200 px-8 py-24 duration-150 hover:scale-[1.02] hover:border-primary">
                            <div className="flex flex-col items-center gap-2 text-center text-base font-normal text-gray-600">
                              <ImagePlus size={32} />
                              <p>Upload an image</p>
                              <p className="text-sm text-gray-400">
                                Max file size: 5MB, accepted: jpeg, jpg, png,
                                gif
                              </p>
                            </div>
                            {/* <div className="absolute inset-0 flex items-center justify-center city-0">
                                <div className="scale-110 text-primary">
                                  Loading..
                                </div>
                              </div> */}
                          </div>
                          <input
                            type="file"
                            multiple={false}
                            accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                const reader = new FileReader()
                                reader.readAsDataURL(file)
                                reader.onload = () => {
                                  setLogoUrl(reader.result as string)
                                }
                              }
                              dialogClose()
                            }}
                          />
                        </Label>
                      </DialogDescription>
                    </DialogContent>
                    <DialogClose tabIndex={-1} />
                  </Dialog>

                  <FormField
                    control={form.control}
                    name="primaryColor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Color</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Popover>
                              <PopoverTrigger asChild>
                                <div
                                  className="absolute bottom-2 left-2 h-6 w-6 rounded-full"
                                  style={{ background: field.value }}
                                />
                              </PopoverTrigger>
                              <PopoverContent className="ml-10 w-fit p-0">
                                <HexColorPicker
                                  color={field.value}
                                  onChange={field.onChange}
                                />
                              </PopoverContent>
                            </Popover>

                            <Input
                              disabled={form.formState.isSubmitting}
                              {...field}
                              className="pl-10"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="backgroundColor"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>Background Color</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Popover>
                              <PopoverTrigger asChild>
                                <div
                                  className="absolute bottom-2 left-2 h-6 w-6 rounded-full"
                                  style={{ background: field.value }}
                                />
                              </PopoverTrigger>
                              <PopoverContent className="ml-10 w-fit p-0">
                                <HexColorPicker
                                  color={field.value}
                                  onChange={field.onChange}
                                />
                              </PopoverContent>
                            </Popover>

                            <Input
                              disabled={form.formState.isSubmitting}
                              {...field}
                              className="pl-10"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                onClick={() => onStepChange('WELCOME_PAGE')}
                value="item-2"
              >
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

              <AccordionItem
                onClick={() => onStepChange('RESPONSE_PAGE')}
                value="item-3"
              >
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

                  <FormField
                    control={form.control}
                    name="collectRatings"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormControl>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="ratings"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                            <Label htmlFor="ratings">Collect Ratings</Label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                onClick={() => onStepChange('CUSTOMER_DETAIL_PAGE')}
                value="item-4"
              >
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

              <AccordionItem
                onClick={() => onStepChange('THANKYOU_PAGE')}
                value="item-5"
              >
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
                      checked={form.getValues().enableCTA}
                      onCheckedChange={() => {
                        form.setValue('enableCTA', !form.getValues().enableCTA)
                      }}
                    />
                  </div>
                  {form.getValues().enableCTA && (
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

              <AccordionItem
                onClick={() => onStepChange('RESPONSE_PAGE')}
                value="item-6"
              >
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
                      className="self-start text-2xl "
                      src={premium_icon}
                      alt="premium_icon"
                    />
                    Upgrade to remove review branding from your form.
                  </button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                onClick={() => onStepChange('RESPONSE_PAGE')}
                value="item-7"
              >
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
