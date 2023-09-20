const ReviewForm: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-800 p-4">
      <div className="rounded-md bg-gray-100 p-3">
        <h1 className="text-xl font-medium">Share a testimonial!</h1>
        <p className="my-2 text-sm text-gray-500">
          Do you love using our product? We&apos;d love to hear about it!
        </p>
        <ul>
          <li className="text-sm text-gray-700">
            Share your experience with a quick video or text testimonial
          </li>
          <li className="text-sm text-gray-700">
            Recording a video? Don&apos;t forget to smile 😊
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ReviewForm
