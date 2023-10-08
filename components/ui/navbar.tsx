import React, { useEffect } from 'react'
import { Cross1Icon, HamburgerMenuIcon, StarIcon } from '@radix-ui/react-icons'
import { getGithubStars } from '@/api'
import { Button } from './button'
import Link from 'next/link'

export default function Navbar() {
  const ref = React.useRef<string | any>('')

  const [isNavbarOpen, setIsNavbarOpen] = React.useState<boolean>(false)
  const [flyer, setFlyer] = React.useState<boolean>(false)
  const [flyerTwo, setFlyerTwo] = React.useState<boolean>(false)
  const [githubStars, setGithubStars] = React.useState<string>('50+')

  const fetchGithubStars = async () => {
    const stars = await getGithubStars()
    setGithubStars(stars)
  }
  useEffect(() => {
    fetchGithubStars()
  }, [])

  return (
    <header className=" fixed top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col flex-wrap p-2 lg:flex-row lg:items-center lg:p-5">
        <div className="flex  flex-row items-center justify-between p-2 lg:p-1">
          <a href="/" className=" flex text-3xl font-medium text-purple-500 ">
            Review App
          </a>

          {/* Menu Button for Mobile devices */}
          <button
            className=" text-black outline-none focus:outline-none dark:text-white  lg:hidden"
            type="button"
            aria-label="button"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            <HamburgerMenuIcon className="h-7 w-7" />
          </button>
        </div>

        {/* Navbar md+ devices */}
        <div className="ml-5 hidden items-center gap-5 p-1  lg:flex lg:grow  ">
          <a
            href="#"
            className="  text-gray-700 hover:text-black  dark:text-gray-300 dark:hover:text-white    "
          >
            Docs
          </a>
          <a
            href="#"
            className="  text-gray-700 hover:text-black  dark:text-gray-300 dark:hover:text-white    "
          >
            Templates
          </a>
          <a
            href="#"
            className=" text-gray-700 hover:text-black  dark:text-gray-300 dark:hover:text-white   "
          >
            About Us
          </a>
          <a
            href="#"
            className=" text-gray-700 hover:text-black  dark:text-gray-300 dark:hover:text-white   "
          >
            Contact Us
          </a>
        </div>
        <div className="hidden items-center gap-2 p-1 lg:flex ">
          <div className="flex items-center  gap-2">
            <StarIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium dark:text-white">
              Star on Github{' '}
              <span className="rounded-md  px-2 text-base dark:bg-primary dark:text-gray-300">
                {' '}
                {githubStars}
              </span>
            </span>
          </div>
          <Link
            href={`http://${process.env.NEXT_PUBLIC_APP_DASHBOARD_DOMAIN}.${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`}
            className="text-sm font-medium text-primary"
          >
            <Button
              // disabled={loading}
              type="submit"
              className="font-meduim w-full text-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* SideMenu/Navbar for Mobile devices */}
        {isNavbarOpen && (
          <div
            ref={(node) => (ref.current = node)}
            className="overscroll-hidden absolute right-0 top-0  flex  h-screen  w-full flex-col items-end bg-black  lg:hidden"
          >
            <div className="flex w-full items-center justify-between border-b border-gray-700 p-5">
              <a
                href="/"
                className=" text-3xl font-medium text-purple-500 focus:outline-none"
              >
                Review App
              </a>

              <button
                onClick={() => setIsNavbarOpen(false)}
                className="rounded-md border-2 border-gray-600 p-2"
              >
                <Cross1Icon className="h-4 w-4 rounded-md text-gray-400" />
              </button>
            </div>
            <div className=" flex w-full grow flex-col items-start justify-start gap-5  p-5  ">
              <div className="flex items-center gap-3">
                <Link
                  href="/signup"
                  className="text-sm font-medium text-primary"
                >
                  <Button
                    // disabled={loading}
                    type="submit"
                    className=" w-full border border-primary bg-black  text-lg font-medium "
                  >
                    Sign up
                  </Button>
                </Link>
                <Link
                  href="/signin"
                  className="text-sm font-medium text-primary"
                >
                  <Button
                    // disabled={loading}
                    type="submit"
                    className="font-meduim w-full text-lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
              <a href="#" className="     text-gray-300 ">
                Docs
              </a>
              <a href="#" className="    text-gray-300 ">
                Templates
              </a>
              <a href="#" className="  text-gray-300 ">
                About Us
              </a>
              <a href="#" className="   text-gray-300 ">
                Contact Us
              </a>
            </div>

            <div className="flex w-full items-center  gap-2 border-t border-gray-700 p-5">
              <StarIcon className="h-5 w-5 text-gray-400" />
              <span className="text-xl font-medium text-white">
                Star on Github{' '}
                <span className="rounded-md bg-primary px-2 text-base text-gray-300">
                  {' '}
                  {githubStars}
                </span>
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
