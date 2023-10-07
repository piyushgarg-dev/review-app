import Image from 'next/image'
import Dashboard from '../../public/images/dashboard.png'
import custom from '../../public/images/custom.png'
import { CheckIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'

export default function Main() {
  return (
    <section className="body-font text-gray-600">
      <div className=" animate-trans-up mx-auto max-w-5xl pb-24 pt-52">
        <h1 className="font-4 lh-6 ld-04 mb-6 text-center font-bold text-white lg:text-4xl">
          Getting your customer reviews by only 1 Link
        </h1>
        <h2 className="font-4 lh-6 ld-04 pb-11 text-center font-semibold text-gray-700 lg:text-2xl">
          Setting up a Review system can be quite tedious. Review App provides a
          <br />
          seamless and hassle free way to acquire feedback on your products.
        </h2>
        <div className="ml-6 flex flex-row items-center justify-center gap-10 text-center">
          <div className="text-md focus:shadow-outline inline-flex transform animate-bounce items-center rounded-xl bg-transparent bg-white px-7 py-3 font-semibold text-black transition  md:mt-0">
            <div className="flex  text-lg">
              <span className=" justify-center text-purple-500">
                Get Started
              </span>
            </div>
          </div>
          <div className="text-md  flex cursor-pointer items-center justify-center rounded-xl bg-transparent bg-gradient-to-r from-purple-500 to-purple-800 px-14 py-3 font-semibold tracking-tighter text-white  transition-all duration-200 ease-in-out hover:scale-125 md:mt-0">
            <div className="flex text-center text-lg ">
              <span className="justify-center">SignUp</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Image
          className="g327 animate-trans-right mb-10 rounded-md border object-cover object-center shadow-md lg:w-3/4 lg:rounded-3xl"
          alt="Placeholder Image"
          src={custom}
        ></Image>
      </div>
      <h2 className="mb-1 pt-40 text-center text-2xl font-semibold tracking-tighter text-gray-200 md:text-6xl lg:text-7xl">
        Quick and Reliable
      </h2>
      <br></br>

      <div className="fsac4 lex-1 mx-auto flex max-w-4xl flex-row flex-wrap gap-5 px-3 pb-24 pt-12 md:px-1">
        <div className="ktq4 rounded-lg bg-[rgb(23,24,24)]  p-5 lg:w-[45%]">
          {/* <h3 className="pt-3 text-lg font-semibold text-white">
            Lorem ipsum dolor sit amet
          </h3> */}
          <div className="h-[10em ] relative flex flex-col rounded-md ">
            <div className=" text-2xl text-purple-500 lg:text-3xl">
              Completely Customisible
            </div>
            <div className="lg:text-md lg:white mt-3 text-white">
              Review App allows customers to have full control of the review
              form.
            </div>
          </div>
          <p className="value-text text-md fkrr1 pt-2 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus.
          </p>
        </div>
        <DoubleArrowRightIcon className=" mt-24 h-7 w-7 animate-bounce text-purple-500" />
        <div className="ktq4 animate-trans-right rounded-lg bg-[rgb(23,24,24)] p-5 lg:w-[45%]">
          <div className="flex flex-row gap-2 lg:mt-3">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm text-gray-400 lg:text-xl">
              Create and Customise the form in under 1 min
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm text-gray-400 lg:text-xl">
              Options to collect their Email and Name
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm text-gray-400 lg:text-xl">
              Options to upload their Photo
            </p>
          </div>
        </div>
        <div className="ktq4 rounded-lg bg-[rgb(23,24,24)]  p-5 lg:w-[45%] ">
          {/* <h3 className="pt-3 text-lg font-semibold text-white">
            Lorem ipsum dolor sit amet
          </h3> */}
          <div className="h-[10em ] relative flex flex-col rounded-md ">
            <div className=" text-2xl text-purple-500 lg:text-3xl">
              Lorem ipsum
            </div>
            <div className="lg:text-md lg:white mt-3 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <p className="value-text text-md fkrr1 pt-2 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, dolores?
          </p>
        </div>
        <DoubleArrowRightIcon className=" mt-20 h-7 w-7 animate-bounce text-purple-500" />
        <div className="ktq4 animate-trans-right rounded-lg bg-[rgb(23,24,24)] p-5 lg:w-[45%]">
          <div className="flex flex-row gap-2 lg:mt-3">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm text-gray-400 lg:text-xl">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm text-gray-400 lg:text-xl">
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <CheckIcon className="mt-2 h-4 w-5 text-green-500 lg:h-7 lg:w-7" />
            <p className="mt-1 text-sm text-gray-400 lg:text-xl">
              Lorem, ipsum dolor
            </p>
          </div>
        </div>
      </div>
      <div className="fsac4 mx-auto max-w-6xl px-3 pb-32 pt-32 md:px-1">
        <div className="ktq4">
          <h3 className="pt-3 text-lg font-semibold text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="value-text text-md fkrr1 pt-2 text-gray-200">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div className="ktq4">
          <h3 className="pt-3 text-lg font-semibold text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="value-text text-md fkrr1 pt-2 text-gray-200">
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
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              className="mt-2 w-1/4 rounded-md border border-gray-600 bg-black py-3 pl-2 pr-2 font-semibold text-gray-800 hover:border-gray-700"
            />{' '}
            <a
              className="ml-2 mt-2 inline-flex transform items-center rounded-lg border bg-transparent bg-white px-14 py-3 font-medium text-black transition duration-500 ease-in-out"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}
