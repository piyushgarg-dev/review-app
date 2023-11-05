/**
 * Hero Section...
 */
import Link from 'next/link'
import { MaxWidthContainer } from '.'

export const HeroSection = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-20 pt-36">
      <div className="absolute inset-0 left-0 top-0 -z-10  opacity-20">
        <div className="h-60 bg-gradient-to-br from-violet-500 to-violet-600 blur-[200px] dark:from-sky-900 dark:to-sky-950"></div>
        <div className="h-60 bg-gradient-to-r from-violet-500 to-violet-600 blur-[200px] dark:from-sky-800 dark:to-sky-900"></div>
      </div>
      <main className="flex flex-col items-center justify-center text-center">
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
