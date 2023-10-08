import Link from 'next/link'

export default function Footer() {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <footer className="pb-4 text-gray-500 dark:text-gray-200">
      <div className="mx-auto max-w-5xl divide-y divide-gray-900 px-4 sm:px-6 md:px-8 xl:max-w-5xl">
        <div className="mb-3 flex flex-col items-center justify-center space-y-2 sm:flex-row  lg:mb-0">
          <div>
            <Link
              href="/"
              className="text-md hover:text-deep-purple-accent-400 font-semibold tracking-tight transition-colors duration-300  dark:text-gray-200"
            >
              © {year} Review App Inc.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
