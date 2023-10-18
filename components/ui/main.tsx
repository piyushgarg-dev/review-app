import Image from 'next/image'
import custom from '../../public/images/custom.png'
import { CheckIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from './button'

export default function Main() {
  return (
    <section className="body-font text-gray-600">
      <div className=" mx-auto max-w-5xl animate-trans-up pb-24 pt-24 md:pt-52">
        <h1 className="mb-6 text-center text-5xl font-bold text-black dark:text-white lg:text-5xl">
          Getting your{' '}
          <span className="bg-primary bg-clip-text text-transparent">
            customer reviews
          </span>{' '}
          in a click.
        </h1>
        <h2 className="px-3 pb-11 text-center font-semibold text-gray-700 dark:text-gray-300 lg:text-2xl">
          Setting up a Review system can be quite tedious. Review App provides a
          <br />
          seamless and hassle free way to acquire feedback on your products.
        </h2>
        <div className="ml-6 flex flex-row items-center justify-center gap-10 text-center">
          <Link
            href={`http://${process.env.NEXT_PUBLIC_APP_DASHBOARD_DOMAIN}.${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`}
            className="text-sm font-medium text-primary"
          >
            <Button
              // disabled={loading}
              type="submit"
              className=" dark:bg -black dark w-full border border-primary bg-white text-lg text-black dark:bg-black dark:text-white "
            >
              Sign up
            </Button>
          </Link>
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
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Image
          className="g327 mb-10 animate-trans-right rounded-md border object-cover object-center shadow-md lg:w-3/4 lg:rounded-3xl"
          alt="Form customisation Page - Review App"
          src={custom}
        ></Image>
      </div>
      <h2 className="mb-1 bg-primary bg-clip-text pt-16 text-center text-4xl font-semibold tracking-tighter text-transparent dark:text-gray-200 md:pt-40 md:text-6xl lg:text-7xl">
        Quick and Reliable
      </h2>
      <br></br>

      <div className=" mx-auto flex max-w-4xl flex-wrap items-center gap-5 px-3 pb-24 pt-12 md:flex-col md:px-1 lg:flex-row">
        <div className=" rounded-lg p-5  dark:bg-[rgb(23,24,24)] lg:w-[45%]">
          {/* <h3 className="pt-3 text-lg font-semibold text-white">
            Lorem ipsum dolor sit amet
          </h3> */}
          <div className="h-[10em ] relative flex flex-col rounded-md ">
            <div className=" text-2xl text-purple-500 lg:text-3xl">
              Completely Customisible
            </div>
            <div className="lg:text-md lg:white mt-3 dark:text-white">
              Review App allows customers to have full control of the review
              form.
            </div>
          </div>
          <p className="value-text text-md fkrr1 pt-2 dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus.
          </p>
        </div>
        <DoubleArrowRightIcon className=" mt-24 hidden h-7 w-7 text-purple-500 lg:block" />
        <div className="ktq4 animate-trans-right rounded-lg p-5 dark:bg-[rgb(23,24,24)] lg:w-[45%]">
          <div className="flex flex-row gap-2 lg:mt-3">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm dark:text-gray-400 lg:text-xl">
              Create and Customise the form in under 1 min
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm dark:text-gray-400 lg:text-xl">
              Options to collect their Email and Name
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm dark:text-gray-400 lg:text-xl">
              Options to upload their Photo
            </p>
          </div>
        </div>
        <div className="ktq4 rounded-lg p-5  dark:bg-[rgb(23,24,24)] lg:w-[45%] ">
          {/* <h3 className="pt-3 text-lg font-semibold text-white">
            Lorem ipsum dolor sit amet
          </h3> */}
          <div className="h-[10em ] relative flex flex-col rounded-md ">
            <div className=" text-2xl text-purple-500 lg:text-3xl">
              Lorem ipsum
            </div>
            <div className="lg:text-md lg:white mt-3 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <p className="value-text text-md fkrr1 pt-2 dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, dolores?
          </p>
        </div>
        <DoubleArrowRightIcon className=" mt-20 hidden h-7 w-7 text-purple-500  lg:block" />
        <div className="ktq4 animate-trans-right rounded-lg p-5 dark:bg-[rgb(23,24,24)] lg:w-[45%]">
          <div className="flex flex-row gap-2 lg:mt-3">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm dark:text-gray-400 lg:text-xl">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm dark:text-gray-400 lg:text-xl">
              Lorem ipsum dolor sit amet, elit.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm dark:text-gray-400 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-6xl px-5 py-10 md:px-10 ">
        <div className="ktq4">
          <h3 className="pt-3 text-lg font-semibold dark:text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="value-text text-md fkrr1 pt-2 dark:text-gray-200">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div className="ktq4">
          <h3 className="pt-3 text-lg font-semibold dark:text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="value-text text-md fkrr1 pt-2 dark:text-gray-200">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div>
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="py-10 ">
            <h1 className="mb-5  text-5xl font-bold dark:text-white">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold dark:text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <div className="mx-auto  mt-2 flex max-w-3xl flex-col items-center gap-2 md:flex-row md:justify-center">
              <input
                type="email"
                placeholder="jack@example.com"
                name="email"
                autoComplete="email"
                className=" w-3/4  rounded-md border border-gray-600 px-3 py-2 text-gray-800 hover:border-gray-700 dark:bg-black md:w-2/4"
              />{' '}
              <Button
                // disabled={loading}
                type="submit"
                className=" dark  w-3/4 text-lg md:w-1/4  "
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
