import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ThemeToggle'
import ProductImageUIEbraj from '../../../public/ebraj/landing-page/images/product-ui.png'
import ReviewAppLogo from '../../../public/ebraj/landing-page/images/review-app-logo.png'
import Step01 from '../../../public/ebraj/landing-page/images/step-01.png'
import Step02 from '../../../public/ebraj/landing-page/images/step-02.png'

import {
  AlignJustify,
  Fan,
  PencilRuler,
  BadgePlus,
  AreaChart,
  LayoutDashboard,
  MonitorSmartphone,
  X,
  ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type MaxWidthContainerProps = {
  children: React.ReactNode
  className?: string
}
type GridContainerProps = {
  children: React.ReactNode
  className?: string
}

/**
 * MaxWidthContainer - A container that has a max width of 1120px inorder to keep the almost all the container as of the same width
 */
export const MaxWidthContainer = ({
  children,
  className,
}: MaxWidthContainerProps) => {
  return (
    <div
      className={cn('mx-auto w-[100%] max-w-[1280px] px-5 md:px-10', className)}
    >
      {children}
    </div>
  )
}
export const GridContainer = ({ children, className }: GridContainerProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Navbar Section...
 */
const allNavLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/templates/ebraj/about' },
  { title: 'Blogs', url: '/templates/ebraj/blogs' },
  { title: 'Contact', url: '/templates/ebraj/contact' },
]

export const Navbar = () => {
  const router=useRouter();
  const handleLogoCLick=()=>{
    router.push("/");
  }
  const [showNavbar, setShowNavbar] = useState<boolean>(true)
  const handleShowNavbar = () => {
    setShowNavbar((val) => !val)
  }
  return (
    <nav className="fixed z-[1000] w-full bg-white/80 text-black ring-1 ring-slate-300 backdrop-blur-[100px] dark:bg-slate-900/20 dark:text-gray-50 dark:ring-slate-800/80">
      <MaxWidthContainer>
        <div className="grid grid-cols-2 items-center space-x-5 py-5 md:grid-cols-[1fr_3fr_1fr]">
          <div className="flex items-center space-x-1 cursor-pointer" onClick={handleLogoCLick}>
            <Image
              src={ReviewAppLogo}
              width={100}
              height={100}
              className="h-12 w-auto"
              alt="Review App Logo"
            />
            <h1>Review App</h1>
          </div>
          <div className="mx-auto hidden self-center md:block">
            <ul className="mx-auto max-w-max items-center justify-center space-x-5 rounded-full  bg-slate-100/50 px-6 py-2 ring-1 ring-slate-300 backdrop-blur-[10px] dark:bg-slate-800/20 dark:text-gray-50 dark:ring-slate-700/60 md:flex">
              {allNavLinks.map((singleSubItem: any, index: number) => {
                return (
                  <Link
                    href={singleSubItem.url}
                    key={index}
                    className="block text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    <li key={index}>{singleSubItem.title}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className="absolute left-0 right-0 top-[90%] mx-auto self-center pr-5 md:hidden">
            <ul
              className={cn(
                'mx-auto flex flex-col justify-center space-y-4 rounded-md bg-black  px-6 py-5 text-gray-50 ring-1 ring-slate-700/60 backdrop-blur-[10px] md:hidden',
                showNavbar ? 'hidden' : 'block md:hidden'
              )}
            >
              {allNavLinks.map((singleSubItem: any, index: number) => {
                return (
                  <Link
                    href={singleSubItem.url}
                    key={index}
                    className="block text-slate-400 hover:text-slate-100"
                  >
                    <li key={index}>{singleSubItem.title}</li>
                  </Link>
                )
              })}
            </ul>
          </div>

          <div className="ml-auto flex items-center justify-end">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="ml-2 md:ml-0 md:hidden"
              onClick={handleShowNavbar}
            >
              {!showNavbar ? (
                <X className="h-6 w-6" />
              ) : (
                <AlignJustify className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </MaxWidthContainer>
    </nav>
  )
}

/**
 * Hero Section...
 */
export const HeroSection = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-20 pt-36">
      <div className="absolute inset-0 left-0 top-0 -z-10  opacity-20">
        <div className="h-60 bg-gradient-to-br from-violet-500 to-violet-600 blur-[200px] dark:from-sky-900 dark:to-sky-950"></div>
        <div className="h-60 bg-gradient-to-r from-violet-500 to-violet-600 blur-[200px] dark:from-sky-800 dark:to-sky-900"></div>
      </div>
      <main className="text-center">
        <div className="space-y-4">
          <p className="inset-3 inline-block rounded-full bg-violet-800/50 px-5 py-2 text-sm text-gray-50 ring-1 ring-slate-200/60 backdrop-blur-[10px] dark:bg-slate-600/20 dark:ring-slate-600/60">
            Releasing Soon 🎊
          </p>
          <h1 className="custom-animated-text text-5xl font-black sm:text-6xl md:text-7xl">
            Review App
          </h1>
          <p className="text-xl text-slate-500 md:text-2xl">
            Simplies the process of adding <br /> a review system to your
            website.
          </p>
        </div>

        <Link
          href={'/signup'}
          type="submit"
          className="mt-8 rounded-md bg-gradient-to-r from-[#845df1] via-[#e94389] to-[#e0ab18] px-10 py-4 text-lg text-white transition-all hover:scale-105"
        >
          Get Started for Free
        </Link>
      </main>
    </MaxWidthContainer>
  )
}

/**
 * Main Product Image
 */
const MainProductImage = () => {
  return (
    <div className="relative py-2 pb-20 before:absolute before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:content-[''] dark:from-[#05051E] dark:via-[#05051E]/80 dark:to-slate-900/0">
      <MaxWidthContainer className="">
        <div className="rounded-md bg-white px-2 py-2 text-sm ring-1 ring-slate-200 backdrop-blur-[10px] dark:bg-slate-600/20 dark:ring-slate-600/60">
          <Image
            src={ProductImageUIEbraj}
            style={{ objectFit: 'cover' }}
            className="rounded-md "
            alt="Product UI Image"
          />
        </div>
      </MaxWidthContainer>
    </div>
  )
}

/**
 * Features
 */
const allFeatures = [
  {
    title: 'Easy Integration',
    description:
      'Quickly add a review system to your website without the need for complex backend development.',
    imageSrc: <Fan />,
  },
  {
    title: 'Customization',
    description:
      'Customize the look and feel of the review widget to match your websites design.',
    imageSrc: <PencilRuler />,
  },
  {
    title: 'Moderation',
    description:
      'Review submissions can be moderated to ensure quality and prevent spam.',
    imageSrc: <BadgePlus />,
  },
  {
    title: 'Scalable',
    description:
      'Designed to handle a growing number of reviews, making it suitable for websites of all sizes.',
    imageSrc: <AreaChart />,
  },
  {
    title: 'Analytics',
    description:
      'Gain insights into user feedback with built-in analytics and reporting features.',
    imageSrc: <LayoutDashboard />,
  },
  {
    title: 'Responsive',
    description:
      'Review App is responsive and works seamlessly on various devices and screen sizes.',
    imageSrc: <MonitorSmartphone />,
  },
]
const Features = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-20">
      <div className="absolute inset-0 left-0 top-0 -z-10  opacity-20">
        <div className="h-60 bg-gradient-to-br from-green-500 to-sky-600 blur-[106px] dark:from-sky-900 dark:to-sky-950"></div>
        <div className="h-60 bg-gradient-to-r from-sky-500 to-green-600 blur-[200px] dark:from-sky-800 dark:to-sky-900"></div>
      </div>
      <h2 className="custom-animated-text py-10 text-center text-4xl font-black md:text-5xl">
        Features
      </h2>
      <GridContainer>
        {allFeatures.map((feature, index) => {
          return (
            <div
              key={index}
              className="space-y-4 rounded-md bg-white p-5 py-8 text-sm ring-1 ring-gray-100  dark:bg-slate-800/20 dark:ring-slate-800/70"
            >
              <div className="">{feature.imageSrc}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-lg text-slate-500">{feature.description}</p>
            </div>
          )
        })}
      </GridContainer>
    </MaxWidthContainer>
  )
}

/**
 * Working Steps
 */
const allSteps = [
  {
    title: 'Sign up for new account',
    description:
      'Quickly add a review system to your website without the need for complex backend development.',
    imageSrc: Step01,
  },
  {
    title: 'Create you new project',
    description:
      'Customize the look and feel of the review widget to match your websites design.',
    imageSrc: Step02,
  },
  {
    title: 'Edit your review widget UI',
    description:
      'Review submissions can be moderated to ensure quality and prevent spam.',
    imageSrc: ProductImageUIEbraj,
  },
  {
    title: 'Embed the review widget on your website',
    description:
      'Review submissions can be moderated to ensure quality and prevent spam.',
    imageSrc: ProductImageUIEbraj,
  },
]
const WorkingSteps = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-10">
      <div className="absolute inset-0 left-0 top-0 -z-10  opacity-20">
        <div className="h-60 bg-gradient-to-br from-violet-500 to-violet-600 blur-[200px] dark:from-sky-900 dark:to-sky-950"></div>
        <div className="h-60 bg-gradient-to-r from-violet-500 to-violet-600 blur-[200px] dark:from-sky-800 dark:to-sky-900"></div>
      </div>
      <h2 className="custom-animated-text pb-5 text-center text-4xl font-black md:text-5xl">
        Setting up is easy
      </h2>
      <div className="md:py-12">
        {allSteps.map((single, index) => {
          return (
            <GridContainer
              key={index}
              className="place-items-center gap-10 md:grid-cols-12 md:py-12 lg:grid-cols-12"
            >
              <div
                className={cn(
                  'order-2 md:order-1 md:col-span-5',
                  index % 2 != 0 && 'md:order-3'
                )}
              >
                <div className="rounded-md bg-white px-2 py-2 text-sm ring-1 ring-slate-200 backdrop-blur-[10px] dark:bg-slate-600/20 dark:ring-slate-600/60">
                  <Image
                    src={single.imageSrc}
                    style={{ objectFit: 'cover' }}
                    className="rounded-md "
                    alt="Product UI Image"
                  />
                </div>
              </div>
              <div className="relative order-1 mt-24 flex h-full w-full items-center justify-center md:order-2 md:col-span-2 md:mt-0">
                <div className="absolute left-[50%] h-[calc(100%-80px)] w-0 translate-x-[-50%] translate-y-[-50%] border border-dashed md:top-[50%] md:h-full"></div>
                <div className="relative flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#845df1] via-[#e94389] to-[#e0ab18]">
                    <span className="text-2xl font-black text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'order-3 space-y-5 md:order-3 md:col-span-5 md:py-10',
                  index % 2 != 0 && 'md:order-1'
                )}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                  {single.title}
                </h3>
                <p className="text-lg text-slate-500">{single.description}</p>
              </div>
            </GridContainer>
          )
        })}
      </div>
    </MaxWidthContainer>
  )
}

/**
 * Join Our Community
 */
export const JoinOurCommunity = () => {
  const formSubmitFunction = (e: any) => {
    e.preventDefault()
    console.log('Form Submitted')
  }
  return (
    <MaxWidthContainer className="flex w-full items-center justify-center pb-20 pt-12 text-slate-900 dark:text-gray-100">
      <div className="w-full space-y-8">
        <h2 className="text-center text-5xl font-black sm:text-6xl">
          Join our
          <br />
          Community
        </h2>
        <form
          className="mx-auto flex max-w-[450px] flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
          onSubmit={formSubmitFunction}
        >
          <Input className="w-[100%] bg-slate-100 py-7 dark:bg-slate-800/20 dark:ring-slate-800/70" />
          <Button
            type="submit"
            className="min-w-max bg-gradient-to-r from-[#845df1] via-[#e94389] to-[#e0ab18] px-10 py-7 text-lg transition-all hover:scale-105"
          >
            Join Now <ArrowUpRight className="ml-2" />
          </Button>
        </form>
      </div>
    </MaxWidthContainer>
  )
}

/**
 * Footers Section...
 */
const footerItems = [
  {
    title: 'Pages',
    links: allNavLinks,
  },
  {
    title: 'Others',
    links: [
      { title: 'Terms & Policy', url: '/terms-and-policy' },
      { title: 'Cache Policy', url: '/cache-policy' },
    ],
  },
  {
    title: 'Socials',
    links: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/untitleddev25/',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/UntitledDev25',
      },
      {
        title: 'Tiktok',
        url: 'https://www.tiktok.com/@untitleddev25',
      },
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/@untitleddev25',
      },
      {
        title: 'Github',
        url: 'https://github.com/UntitledDeev',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className=" bg-white pt-12 text-lg ring-1 ring-slate-200 backdrop-blur-[10px] dark:bg-slate-800/20 dark:ring-slate-800/70">
      <MaxWidthContainer>
        {/* Upper Section */}
        <GridContainer className="grid gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <div className="space-y-2">
              <div>
                <Image
                  src={ReviewAppLogo}
                  width={100}
                  height={100}
                  className="h-12 w-auto"
                  alt="logo"
                />
                <h2 className="font-black">Review App.</h2>
              </div>
              <p className="text-slate-500 md:max-w-[60%]">
                Simplies the process of adding a review system to your website.
              </p>
            </div>
          </div>

          <GridContainer className="gap-8 sm:grid-cols-3">
            {footerItems.map((singleItem, index: number) => {
              return (
                <div key={index} className="space-y-4">
                  <h3 className="">{singleItem.title}</h3>
                  <ul className="space-y-3">
                    {singleItem.links.map(
                      (singleSubItem: any, index: number) => {
                        return (
                          <Link
                            href={singleSubItem.url}
                            key={index}
                            className="block text-slate-500 dark:hover:text-gray-100 hover:text-gray-950"
                          >
                            <li key={index}>{singleSubItem.title}</li>
                          </Link>
                        )
                      }
                    )}
                  </ul>
                </div>
              )
            })}
          </GridContainer>
        </GridContainer>

        {/* Lower Section */}
        <div className="mt-5 border-t-[0.5px] border-slate-200 py-5 text-center dark:border-slate-800">
          <p className="text-sm text-gray-400">
            All rights reserved. {new Date().getFullYear()}. Review App.
          </p>
        </div>
      </MaxWidthContainer>
    </footer>
  )
}

const index = () => {
  return (
    <main className="z-10 flex min-h-screen w-full flex-col bg-white text-gray-900 dark:bg-[#05051E] dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Body Part */}
      <section className="flex-1">
        <HeroSection />
        <MainProductImage />
        <Features />
        <WorkingSteps />
        <JoinOurCommunity />
      </section>

      {/* Bottom sticky footer */}
      <Footer />
    </main>
  )
}

export default index
