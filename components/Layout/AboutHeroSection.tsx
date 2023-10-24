/**
 * About Us Hero Component...
 */

import { MaxWidthContainer } from '.'

export const AboutHeroSection = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-20 pt-36">
      <main className="text-center">
        <div className="space-y-4">
          <h1 className="custom-animated-text text-5xl font-black sm:text-6xl md:text-7xl">
            About Us
          </h1>
          <p className="mx-auto text-xl text-slate-500 md:max-w-[60%] md:text-2xl lg:max-w-[50%]">
            We are a team of developers who are working on this project to make
            it better and better.
          </p>
        </div>
      </main>
    </MaxWidthContainer>
  )
}
