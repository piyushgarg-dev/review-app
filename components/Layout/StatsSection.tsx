/**
 * All Stats Lists & Component...
 */

import { MaxWidthContainer, GridContainer } from '.'

const allStats = [
  {
    title: '2023',
    description: 'Review App Journey Officially Started On',
  },
  {
    title: '50+',
    description:
      'Team member actively working on this project to make it better.',
  },
  {
    title: '100+',
    description: 'Recently we have crossed 100+ active users on our platform.',
  },
]
export const StatsSection = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-20">
      <GridContainer className="divide-y-2 divide-dashed rounded-md bg-white p-5 py-8 text-sm ring-1 ring-gray-100 dark:bg-slate-800/20 dark:ring-slate-800/70 md:grid-cols-3  md:divide-x-2 md:divide-y-0">
        {allStats.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex h-full flex-col items-center justify-center space-y-5 text-center"
            >
              <h3 className="pt-8 text-4xl font-bold sm:text-5xl md:text-6xl">
                {feature.title}
              </h3>
              <p className="max-w-[80%] items-center pb-5 text-lg text-slate-500">
                {feature.description}
              </p>
            </div>
          )
        })}
      </GridContainer>
    </MaxWidthContainer>
  )
}
