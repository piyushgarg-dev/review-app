import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-lg md:text-xl whitespace-wrap text-gray-600 mb-6">We apologize for the inconvenience. The page you are looking for does not exist or is under development.</p>
      <Link className="flex items-center text-blue-500 hover:text-blue-700" href="/dashboard">
          Go back to the homepage
          <ArrowBigRight className="w-6 h-6 ml-2" />
      </Link>
    </div>
  )
}

export default Custom404
