export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="mx-auto max-w-5xl divide-y divide-gray-900 px-4 sm:px-6 md:px-8 xl:max-w-5xl">
        <ul className="grid gap-y-10 text-sm font-medium sm:grid-cols-2 sm:pb-20 md:grid-cols-3 lg:grid-cols-4">
          <li className="row-span-2 space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Company</h2>
            <ul className="text-md space-y-4">
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Merch
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Brand
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Meetups
                </a>
              </li>
            </ul>
          </li>
          <li className="row-span-2 space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Newsroom</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="row-span-2 space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Products</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Hosting
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Domains
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  SSL
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Connect</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-xl font-semibold transition-colors duration-200 hover:text-white"
                  href="/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between border-t border-black bg-top pb-4 pt-5 lg:flex-row">
          <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <a
              href="/"
              className="text-md hover:text-deep-purple-accent-400 font-semibold tracking-tight text-gray-200 transition-colors duration-300 hover:text-white"
            >
              © 2021 Company Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}
