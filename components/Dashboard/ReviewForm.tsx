import { Edit, Pencil } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const ReviewForm: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-800 p-4">
      {/* Design  */}
      <div className="w-full max-w-lg rounded-md bg-gray-100 p-4">
        <h1 className="form_title">Share a testimonial!</h1>
        <p className="my-2 text-gray-500">
          Do you love using our product? We&apos;d love to hear about it!
        </p>
        <ul>
          <li className="text-sm text-gray-700">
            - Share your experience with a quick video or text testimonial
          </li>
          <li className="text-sm text-gray-700">
            - Recording a video? Don&apos;t forget to smile 😊
          </li>
        </ul>
      </div>

      {/* Response Page  */}
      {/* <div className="w-full max-w-lg rounded-md bg-gray-100 p-4">
        <h1 className="form_title mb-4">Write a text testimonial</h1>
        <ul>
          <li className="text-sm text-gray-700">
            What do you like most about us?
          </li>
          <li className="text-sm text-gray-700">
            Would you recommend us to a friend?
          </li>
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

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              placeholder="john@yoursite.com"
              name="email"
              type="email"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="avatar">Your Photo</Label>
            <Input type="file" name="avatar" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="headline">Job Title</Label>
            <Input
              placeholder="ex. Marketing at Linkedin."
              name="headline"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="site">Your Website</Label>
            <Input
              placeholder="https://yourwebsite.com"
              name="site"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input placeholder="ex. LinkedIn" name="company" className="mt-2" />
          </div>
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
          <h1 className="form_title text-2xl">Thank you 🙏</h1>
          <p className="my-2 text-sm text-gray-500">
            Thank you so much for your support! We appreciate your support and
            we hope you enjoy using our product.
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
