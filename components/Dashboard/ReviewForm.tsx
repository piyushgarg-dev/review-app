import type { Form as ReviewFormData } from '@/gql/graphql'
import { cn } from '@/lib/utils'
import { Edit, Pencil } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface ReviewFormProps {
  formData: ReviewFormData
  currentStep: number
}

const ReviewForm: React.FC<ReviewFormProps> = (props) => {
  const { formData, currentStep } = props
  let introMsg = formData.introMessage?.split('\n')!
  let promptDesc = formData.promptDescription?.split('\n')!
  let primaryColor = formData.primaryColor
  let bgColor = formData.backgroundColor

  return (
    <div
      style={{
        background: `linear-gradient(to top right, ${primaryColor}, ${bgColor})`,
      }}
      className="flex h-full w-full items-center justify-center overflow-y-auto p-4"
    >
      {/* Design  */}
      <div className="w-full max-w-lg rounded-md bg-gray-100 p-4">
        <h1 className="form_title">{formData.introTitle}</h1>
        <p className="my-2 text-gray-500">{introMsg[0]}</p>
        <ul>
          <li className="text-sm text-gray-700">{introMsg[2]}</li>
          <li className="text-sm text-gray-700">{introMsg[3]}</li>
        </ul>
      </div>

      {/* Response Page  */}
      {/* <div className="w-full max-w-lg rounded-md bg-gray-100 p-4">
        <h1 className="form_title mb-4">{formData.promptTitle}</h1>
        <ul>
          <li className="text-sm text-gray-700">{promptDesc[0]}</li>
          <li className="text-sm text-gray-700">{promptDesc[1]}</li>
        </ul>
        <form>
          <textarea
            name="testimonial"
            id="testimonial-input"
            className="offset_ring mt-4 w-full rounded-md border border-gray-200 p-4 text-gray-600"
            placeholder="Write something nice ✨"
            rows={7}
            required
          />
          <Button className="mt-4 w-full">
            <Pencil className="mr-2" size={16} />
            Submit
          </Button>
        </form>
      </div> */}

      {/* Customer Details Page  */}
      {/* <div className="mt-48 w-full max-w-lg rounded-md bg-gray-100 p-4">
        <h1 className="form_title">Almost done 🙌</h1>
        <form className="mt-5 flex w-full flex-col gap-4 text-black">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input placeholder="John Smith" name="name" className="mt-2" />
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
              <Label htmlFor="avatar">Your Photo</Label>
              <Input type="file" name="avatar" className="mt-2" />
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
          <Button className="mt-4">Submit</Button>
        </form>
        <p className="mt-4 px-4 text-center text-xs text-gray-500">
          By submitting, you give us permission to use this testimonial across
          social channels and other marketing efforts
        </p>
      </div> */}

      {/* Thank you page  */}
      {/* <div className="flex w-full max-w-lg flex-col items-center justify-center gap-8">
        <div className="w-full rounded-md bg-gray-100 p-4">
          <h1 className="form_title text-2xl">{formData.thankyouTitle}</h1>
          <p className="my-2 text-sm text-gray-500">
            {formData.thankyouMessage}
          </p>
        </div>
        <div className="w-full rounded-md border bg-gray-100 p-6">
          <h1 className="text-xl font-bold">
            You just sent a testimonial with Review
          </h1>
          <p className="my-2 text-lg text-gray-500">
            Sign up for free to start collecting testimonials too.
          </p>
          <Button className="mt-4 bg-black">Sign up for free</Button>
        </div>
      </div> */}
    </div>
  )
}

export default ReviewForm
