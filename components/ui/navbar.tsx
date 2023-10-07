import React from 'react'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [flyer, setFlyer] = React.useState(false)
  const [flyerTwo, setFlyerTwo] = React.useState(false)

  return (
    <header className="clearNav fixed top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col flex-wrap p-5 md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            className="mb-4 flex text-3xl font-medium text-purple-500 md:mb-0"
          >
            Review App
          </a>
          <button
            className="ml-auto cursor-pointer content-end px-3 py-1 pb-4 leading-none text-white outline-none focus:outline-none md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'flex-grow items-center md:flex' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="font-4 text-1xl flex flex-wrap items-center justify-items-start pl-1 pt-1 md:ml-auto md:mr-auto md:justify-center md:pl-14 md:text-base">
            <a className="tr04 mr-11 cursor-pointer pr-2 font-semibold text-gray-300 hover:text-white">
              Dashboard
            </a>
            <div className="relative">
              <button
                type="button"
                className="
                   pb-8' group inline-flex items-center rounded-md text-base font-medium text-gray-300 focus:outline-none
                  "
                onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span className="tr04">Templates</span>
                <svg
                  className={
                    flyer === true
                      ? 'ml-3 h-5 w-5 rotate-180 transform transition duration-200 ease-out'
                      : 'ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? 'g327 absolute z-10 -ml-4 mt-3 w-screen max-w-sm translate-y-0 transform border px-2 opacity-100 transition duration-200 ease-out sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
                    : 'absolute z-10 -ml-4 mt-3 hidden w-screen max-w-md translate-y-1 transform px-2 opacity-0 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
                }
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                    <a
                      href="/"
                      className="tr04 -m-3 flex items-start rounded-lg p-3 hover:bg-gray-800"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          FORM #1
                        </p>
                        <p className="mt-1 text-sm text-gray-500">First Form</p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="tr04 -m-3 flex items-start rounded-lg p-3 hover:bg-gray-800"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          FORM #2
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Second Form
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="tr04 -m-3 flex items-start rounded-lg p-3 hover:bg-gray-800"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          FORM #3
                        </p>
                        <p className="mt-1 text-sm text-gray-500">Third Form</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a className="tr04 ml-0 mr-12 cursor-pointer font-semibold text-gray-300 hover:text-white md:ml-11">
              About Us
            </a>
            <a className="tr04 mr-5 cursor-pointer font-semibold text-gray-300 hover:text-white">
              Contact Us
            </a>
          </div>

          <a
            data-v-54e46119=""
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible pl-7 md:visible"
          >
            <svg
              data-v-54e46119=""
              width="30"
              height="20"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              title="GitHub logo"
              class="github-link--logo"
            >
              <path
                data-v-54e46119=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
