/**
 * Features
 */

import {
  Fan,
  PencilRuler,
  BadgePlus,
  AreaChart,
  LayoutDashboard,
  MonitorSmartphone,
} from 'lucide-react'
import { GridContainer, MaxWidthContainer } from '.'

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

export const Features = () => {
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
