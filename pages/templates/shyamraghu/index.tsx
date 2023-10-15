import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'

const HomePage: NextPage = () => {
  const { setTheme, theme } = useTheme()
  const [bgImage, setBgImage] = useState('url(homePageImages/header.png)')

  useEffect(() => {
    if (theme === 'light') {
      setBgImage('none')
    } else {
      setBgImage('url(homePageImages/header.png)')
    }
  }, [theme])

  return (
    <>
      <Head>
        <title>Review App</title>
      </Head>
      <main
        className={`bg-cover bg-fixed leading-normal tracking-normal text-indigo-600 dark:text-indigo-400`}
        style={{ backgroundImage: bgImage }}
      >
        <div className="h-full pt-5">
          <div className="container mx-auto w-full">
            <div className="flex w-full items-center justify-between">
              <a
                className="flex items-center text-2xl font-bold no-underline hover:no-underline dark:text-indigo-400 lg:text-4xl"
                href="/"
              >
                Review
                <span className="bg-gradient-to-r bg-clip-text text-indigo-600 text-transparent dark:from-green-400 dark:via-pink-500 dark:to-purple-500">
                  App
                </span>
              </a>

              <div className="flex w-1/2 content-center items-center justify-end">
                <ThemeToggle />
                <Link
                  href={'https://github.com/piyushgarg-dev/review-app'}
                  className="hover:text-underline darktext-blue-300 inline-block h-10 transform p-2 text-center no-underline duration-300 ease-in-out hover:scale-125 dark:hover:text-pink-500 md:h-auto md:p-4"
                >
                  <Github className="mx-6" />
                </Link>
                <Link href={'http://app.localhost:3000/signup'}>
                  <button
                    className="transform rounded border border-indigo-600 bg-gradient-to-r px-4 py-2 font-bold transition duration-300 ease-in-out hover:scale-105 hover:bg-indigo-400 hover:to-green-500 hover:text-white focus:ring dark:from-purple-800 dark:to-green-500 dark:text-white dark:hover:from-pink-500"
                    type="button"
                  >
                    Go to App
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex flex-col flex-wrap items-center pt-24 md:flex-row md:pt-20">
            <div className="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5">
              <h1 className="my-4 text-center font-mono text-3xl font-extrabold leading-tight opacity-75 dark:text-white md:text-left md:text-5xl">
                Make
                <span className="bg-gradient-to-r bg-clip-text text-indigo-600 text-transparent dark:from-green-400 dark:via-pink-500 dark:to-purple-500">
                  &nbsp;And Share
                </span>
                &nbsp;your Testimonials.
              </h1>
              <p className="mb-8 text-center text-base leading-normal md:text-left md:text-2xl">
                Making Testimonial are easy Now with ReviewApp
              </p>

              <form className="mb-4 w-full rounded-lg px-8 pb-8 pt-6 opacity-75 shadow-lg dark:bg-gray-900">
                <div className="mb-4">
                  <label
                    className="mb-2 block py-2 font-bold dark:text-blue-300"
                    htmlFor="emailaddress"
                  >
                    Example Testimonial
                  </label>
                  <img
                    alt="img"
                    className="rounded-2xl dark:border-l-purple-950"
                    src="/homePageImages/exampletest.png"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Link href={'http://app.localhost:3000/signup'}>
                    <button
                      className="transform rounded border border-indigo-600 bg-gradient-to-r px-4 py-2 font-bold transition duration-300 ease-in-out hover:scale-105 hover:bg-indigo-400 hover:to-green-500 hover:text-white focus:ring dark:from-purple-800 dark:to-green-500 dark:text-white dark:hover:from-pink-500"
                      type="button"
                    >
                      Go to App
                    </button>
                  </Link>
                </div>
              </form>
            </div>

            <div className="w-full overflow-hidden p-12 xl:w-3/5">
              <img
              alt="img"
                className="mx-auto w-full -rotate-6 transform transition duration-700 ease-in-out hover:rotate-6 hover:scale-105 md:w-4/5"
                src="/homePageImages/macbook.png"
              />
            </div>

            <div className="w-full pb-6 pt-16 text-center text-sm fade-in md:text-left">
              <a
                className="no-underline hover:no-underline dark:text-gray-500"
                href="#"
              >
                &copy; 2023
              </a>

              <a
                className="no-underline hover:no-underline dark:text-gray-500"
                href="/"
              >
                &nbsp;ReviewApp.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
