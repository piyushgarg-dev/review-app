/**
 * Working Steps
 */

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { MaxWidthContainer, GridContainer } from '.'
import ProductImageUIEbraj from '@/public/ebraj/landing-page/images/product-ui.png'
import Step01 from '@/public/ebraj/landing-page/images/step-01.png'
import Step02 from '@/public/ebraj/landing-page/images/step-02.png'

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

export const WorkingSteps = () => {
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
