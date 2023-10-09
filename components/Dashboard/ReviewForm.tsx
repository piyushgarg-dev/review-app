import { HeartFilledIcon, StarFilledIcon } from '@radix-ui/react-icons'
import { ArrowLeft, Pencil } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { Form as ReviewFormData } from '@/gql/graphql'
import { cn } from '@/lib/utils'
import user_img from '@/public/FormEditIcons/user.png'
import { FormStepId } from '@/types'

interface ReviewFormProps {
  formData: ReviewFormData
  currentStepId: FormStepId
}

export interface starProps {
  index: number
  handleClick: (index: number) => void
  ratingValue: number
}

const ReviewForm: React.FC<ReviewFormProps> = (props) => {
  const { formData, currentStepId } = props

  const [ratingValue, setRatingValue] = useState(0)
  const [userPfpUrl, setUserPfpUrl] = useState('')

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
    e.preventDefault()
    e.stopPropagation()
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setUserPfpUrl(reader.result as string)
      }
    }
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
      <div className="flex h-full w-full items-center justify-center overflow-y-auto p-4 py-10">
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
                  <p className="mb-3 text-gray-500">{message.split('-')[0]}</p>
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
              <Button className="flex h-10 w-10 items-center justify-center rounded-full border bg-transparent p-2 text-gray-500 shadow-sm transition-all hover:bg-gray-100">
                <ArrowLeft />
              </Button>
            </div>
            <h1 className="form_title mb-4">{formData.promptTitle}</h1>
            {promptDesc.map((eachLine) => {
              return (
                <div key={eachLine}>
                  <p className="mb-2 text-gray-500">{eachLine.split('-')[0]}</p>
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
            <form>
              <Textarea
                placeholder="Write something nice ✨"
                name="testimonial"
                className="mt-4 resize-none"
                rows={7}
                required
              />
              <Button
                style={{ background: primaryColor }}
                className="mt-4 w-full"
              >
                <Pencil className="mr-2" size={16} />
                Submit
              </Button>
            </form>
          </div>
        )}

        {/* Customer Details Page  */}
        {currentStepId === 'CUSTOMER_DETAIL_PAGE' && (
          <>
            <div className="relative mb-8 mt-96 w-full max-w-lg rounded-xl bg-white p-6 pt-4 shadow-lg">
              <div className="absolute -top-3.5 right-3 flex items-center gap-2 rounded-full border bg-white px-4 py-1 text-sm dark:text-black">
                <HeartFilledIcon className="h-4 w-4" />
                Powered by Review
              </div>
              <div className="my-2">
                <HeartFilledIcon className="h-12 w-12 text-black" />
              </div>
              <h1 className="form_title">Almost done 🙌</h1>
              <form className="mt-5 flex  w-full flex-col gap-4 text-black">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    placeholder="John Smith"
                    name="name"
                    className="mt-2"
                  />
                </div>

                {formData.collectEmail && (
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      placeholder="john@yoursite.com"
                      name="email"
                      type="email"
                      className="mt-2"
                    />
                  </div>
                )}

                {formData.collectUserImage && (
                  <div>
                    <Label>Your Photo</Label>
                    <Label htmlFor="userImage">
                      <div
                        tabIndex={0}
                        className="offset_ring group mt-2 flex w-fit items-center gap-3 rounded-lg"
                      >
                        <div className="relative h-10 w-10">
                          <Image
                            src={userPfpUrl ? userPfpUrl : user_img}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-full group-hover:brightness-105"
                            alt="logo"
                          />
                        </div>
                        <p className="rounded-lg border border-input bg-background px-4 py-2 font-semibold hover:bg-accent hover:text-accent-foreground dark:text-white ">
                          Pick an image
                        </p>
                      </div>

                      <input
                        id="userImage"
                        type="file"
                        accept="image/png,image/jpg,image/jpeg,image/webp"
                        className="hidden"
                        onChange={(e) => handleOnChange(e)}
                      />
                    </Label>
                  </div>
                )}

                {formData.collectJobTitle && (
                  <div>
                    <Label htmlFor="headline">Job Title</Label>
                    <Input
                      placeholder="ex. Marketing at Linkedin."
                      name="headline"
                      className="mt-2"
                    />
                  </div>
                )}

                {formData.collectWebsiteURL && (
                  <div>
                    <Label htmlFor="site">Your Website</Label>
                    <Input
                      placeholder="https://yourwebsite.com"
                      name="site"
                      className="mt-2"
                    />
                  </div>
                )}

                {formData.collectCompany && (
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      placeholder="ex. LinkedIn"
                      name="company"
                      className="mt-2"
                    />
                  </div>
                )}
                <Button style={{ background: primaryColor }} className="mt-4">
                  Submit
                </Button>
              </form>
              <p className="mt-4 px-4 text-center text-xs text-gray-500">
                By submitting, you give us permission to use this testimonial
                across social channels and other marketing efforts
              </p>
            </div>
          </>
        )}

        {/* Thank you page  */}
        {currentStepId === 'THANKYOU_PAGE' && (
          <div className="flex w-full max-w-lg flex-col items-center justify-center">
            <div className="w-full rounded-md bg-white px-6 py-4 shadow-lg">
              <div className="my-2">
                <HeartFilledIcon className="h-12 w-12 text-black" />
              </div>
              <h1 className="form_title text-2xl">{formData.thankyouTitle}</h1>
              <p className="my-2 text-base text-gray-500">
                {formData.thankyouMessage}
              </p>
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
                style={{ background: primaryColor }}
                className="mt-4 bg-black"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewForm
