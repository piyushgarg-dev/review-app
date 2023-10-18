import { zodResolver } from '@hookform/resolvers/zod'
import { HeartFilledIcon, StarFilledIcon } from '@radix-ui/react-icons'
import { ArrowLeft, Pencil } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { FormPublicData, Form as ReviewFormData } from '@/gql/graphql'
import { cn } from '@/lib/utils'
import user_img from '@/public/FormEditIcons/user.png'
import { useCurrentStepId } from '@/store/useCurrentStepId'

interface ReviewFormProps {
  formData: ReviewFormData | FormPublicData
  isPreview?: boolean
}

const schema = z.object({
  responseMessage: z.string().min(1, 'Response message is required'),
  customerName: z.string().min(1, 'Name is required'),
  customerEmail: z.string().min(1, 'Email is required'),
  customerPhoto: z.string().optional(),
  customerJobTitle: z.string().min(1, 'Job title is required'),
  customerWebsite: z.string().min(1, 'Website is required'),
  customerCompanyName: z.string().min(1, 'Company name is required'),
})

type FormType = z.infer<typeof schema>

export interface starProps {
  index: number
  handleClick: (index: number) => void
  ratingValue: number
}

const ReviewForm: React.FC<ReviewFormProps> = (props) => {
  const { formData, isPreview } = props

  const [ratingValue, setRatingValue] = useState(0)
  const [userPfpUrl, setUserPfpUrl] = useState('')
  const router = useRouter()

  const [currentStepId, setCurrentStepId] = useCurrentStepId((state) => [
    state.currentStepId,
    state.setCurrentStepId,
  ])

  let introMsg = formData.introMessage?.split('\n')!
  let promptDesc = formData.promptDescription?.split('\n')!
  let primaryColor = formData.primaryColor
  let bgColor = formData.backgroundColor

  const Star = ({ index, handleClick, ratingValue }: starProps) => {
    return (
      <StarFilledIcon
        onClick={() => handleClick(index)}
        className={cn(
          'offset_ring h-7 w-7 cursor-pointer rounded-md outline-none',
          {
            'text-yellow-400': index < ratingValue,
            'bg-transparent text-gray-400': !(index < ratingValue),
          }
        )}
      />
    )
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault()
    // e.stopPropagation()
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setUserPfpUrl(reader.result as string)
      }
    }
  }

  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      responseMessage: '',
      customerName: '',
      customerEmail: '',
      customerPhoto: '',
      customerJobTitle: '',
      customerWebsite: '',
      customerCompanyName: '',
    },
  })

  const onSubmit = (data: FormType) => {
    console.log(data)
  }

  return (
    <div className="relative z-20 h-full overflow-y-auto overflow-x-hidden">
      <div
        className="absolute -right-[30%] left-0 top-0 -z-10 h-[75%]"
        style={{
          clipPath: 'polygon(0px 0px, 0px 100%, 100% 0px)',
          background: `linear-gradient(to top right, ${primaryColor}, ${bgColor})`,
        }}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gutter_stable flex h-full w-full items-center justify-center overflow-y-auto p-4 py-10"
        >
          {/* Design  */}
          {currentStepId === 'WELCOME_PAGE' && (
            <div className="relative w-full max-w-lg rounded-xl bg-white p-6 pt-4 shadow-lg">
              <div className="absolute -top-3.5 right-3 flex items-center gap-2 rounded-full border bg-white px-4 py-1 text-sm dark:text-black">
                <HeartFilledIcon className="h-4 w-4" />
                Powered by Review
              </div>
              <div className="my-2">
                <HeartFilledIcon className="h-12 w-12 text-black" />
              </div>
              <h1 className="form_title">{formData.introTitle}</h1>
              {introMsg.map((message) => {
                return (
                  <div key={message}>
                    <p className="mb-3 text-gray-500">
                      {message.split('-')[0]}
                    </p>
                    <ul>
                      {message
                        .split('-')
                        .slice(1)
                        .map((point) => (
                          <li
                            className="flex gap-2 text-base text-gray-700"
                            key={point}
                          >
                            &bull;
                            <p className="">{point}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                )
              })}
              <Button
                type="button"
                className="mt-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                onClick={() => setCurrentStepId('RESPONSE_PAGE')}
              >
                <Pencil className="mr-2" size={16} />
                Write a testimonial
              </Button>
            </div>
          )}

          {/* Response Page  */}
          {currentStepId === 'RESPONSE_PAGE' && (
            <div className="relative w-full max-w-lg rounded-xl bg-white p-6 pt-4 shadow-lg">
              <div className="absolute -top-3.5 right-3 flex items-center gap-2 rounded-full border bg-white px-4 py-1 text-sm dark:text-black">
                <HeartFilledIcon className="h-4 w-4" />
                Powered by Review
              </div>
              <div className="my-2 flex w-full justify-between">
                <HeartFilledIcon className="h-12 w-12 text-black" />
                <Button
                  type="button"
                  onClick={() => setCurrentStepId('WELCOME_PAGE')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border bg-transparent p-2 text-gray-500 shadow-sm transition-all hover:bg-gray-100"
                >
                  <ArrowLeft />
                </Button>
              </div>
              <h1 className="form_title mb-4">{formData.promptTitle}</h1>
              {promptDesc.map((eachLine) => {
                return (
                  <div key={eachLine}>
                    <p className="mb-2 text-gray-500">
                      {eachLine.split('-')[0]}
                    </p>
                    <ul>
                      {eachLine
                        .split('-')
                        .slice(1)
                        .map((point) => (
                          <li
                            className="flex gap-2 text-base text-gray-700"
                            key={point}
                          >
                            &bull;
                            <p className="">{point}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                )
              })}
              {formData.collectRatings && (
                <div className="star-rating mt-3 flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      index={index}
                      handleClick={() => setRatingValue(index + 1)}
                      ratingValue={ratingValue}
                    />
                  ))}
                  <p className="font-sansui ml-2 text-gray-400">
                    ({ratingValue}/5)
                  </p>
                </div>
              )}
              <div>
                <FormField
                  control={form.control}
                  name="responseMessage"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative mt-4">
                          <Textarea
                            placeholder="Write something nice ✨"
                            className="mt-4 resize-none"
                            rows={7}
                            required
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  style={{ background: primaryColor }}
                  className="mt-4 w-full"
                  onClick={() => setCurrentStepId('CUSTOMER_DETAIL_PAGE')}
                >
                  <Pencil className="mr-2" size={16} />
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Customer Details Page  */}
          {currentStepId === 'CUSTOMER_DETAIL_PAGE' && (
            <div className="relative mb-8 mt-96 w-full max-w-lg rounded-xl bg-white p-6 pt-4 shadow-lg">
              <div className="absolute -top-3.5 right-3 flex items-center gap-2 rounded-full border bg-white px-4 py-1 text-sm dark:text-black">
                <HeartFilledIcon className="h-4 w-4" />
                Powered by Review
              </div>

              <div className="my-2 flex w-full justify-between">
                <HeartFilledIcon className="h-12 w-12 text-black" />
                <Button
                  type="button"
                  onClick={() => setCurrentStepId('RESPONSE_PAGE')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border bg-transparent p-2 text-gray-500 shadow-sm transition-all hover:bg-gray-100"
                >
                  <ArrowLeft />
                </Button>
              </div>

              <h1 className="form_title">Almost done 🙌</h1>

              <div className="mt-5 flex w-full flex-col gap-4 text-black">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="mt-4 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {formData.collectEmail && (
                  <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="john@yoursite.com"
                            type="email"
                            className="mt-2 dark:text-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {formData.collectUserImage && (
                  <div>
                    <Label>Your Photo</Label>
                    <div className="group mt-2 flex w-fit items-center gap-3 rounded-lg">
                      <div className="relative h-10 w-10">
                        <Image
                          src={userPfpUrl ? userPfpUrl : user_img}
                          fill
                          className="rounded-full object-cover group-hover:brightness-105"
                          alt="logo"
                        />
                      </div>

                      <Label
                        role="button"
                        tabIndex={0}
                        htmlFor="userImage"
                        className="offset_ring rounded-lg border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground dark:text-white "
                      >
                        Pick an image
                      </Label>
                    </div>

                    <Input
                      id="userImage"
                      type="file"
                      accept="image/png,image/jpg,image/jpeg,image/webp"
                      className="hidden dark:text-gray-300"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                )}

                {formData.collectJobTitle && (
                  <FormField
                    control={form.control}
                    name="customerJobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="ex. Marketing at Linkedin."
                            className="mt-2 dark:text-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {formData.collectWebsiteURL && (
                  <FormField
                    control={form.control}
                    name="customerWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Website</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="https://yourwebsite.com"
                            className="mt-2 dark:text-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {formData.collectCompany && (
                  <div>
                    <FormField
                      control={form.control}
                      name="customerCompanyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="ex. LinkedIn"
                              className="mt-2 dark:text-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  style={{ background: primaryColor }}
                  className="mt-4"
                  // onClick={() => setCurrentStepId('THANKYOU_PAGE')}
                >
                  Submit
                </Button>
              </div>

              <p className="mt-4 px-4 text-center text-xs text-gray-500">
                By submitting, you give us permission to use this testimonial
                across social channels and other marketing efforts
              </p>
            </div>
          )}

          {/* Thank you page  */}
          {currentStepId === 'THANKYOU_PAGE' && (
            <div className="flex w-full max-w-lg flex-col items-center justify-center">
              <div className="w-full rounded-md bg-white px-6 py-4 shadow-lg">
                <div className="my-2">
                  <HeartFilledIcon className="h-12 w-12 text-black" />
                </div>
                <h1 className="form_title text-2xl">
                  {formData.thankyouTitle}
                </h1>
                <p className="my-2 text-base text-gray-500">
                  {formData.thankyouMessage}
                </p>
                {formData.enableCTA &&
                  formData?.ctaTitle &&
                  formData?.ctaURL && (
                    <Button
                      type="button"
                      onClick={() => router.push(formData?.ctaURL!)}
                      style={{ background: primaryColor }}
                      className="mt-4"
                    >
                      {formData.ctaTitle}
                    </Button>
                  )}
              </div>
              <div className="relative mt-12 w-full rounded-md border bg-white p-6">
                <div className="absolute -top-3.5 right-3 flex items-center gap-2 rounded-full border bg-white p-3 text-sm">
                  <HeartFilledIcon className="h-6 w-6 text-black" />
                </div>
                <h1 className="text-xl font-bold dark:text-black">
                  You just sent a testimonial with Review
                </h1>
                <p className="my-2 text-lg text-gray-500">
                  Sign up for free to start collecting testimonials too.
                </p>
                <Button
                  type="button"
                  style={{ background: primaryColor }}
                  className="mt-4 bg-black"
                >
                  Sign up for free
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  )
}

export default ReviewForm
