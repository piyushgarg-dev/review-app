/**
 * Join Our Community
 */

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUpRight } from 'lucide-react'
import { MaxWidthContainer } from '.'

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
          <Input
            className="w-[100%] bg-slate-100 px-4  py-7 text-lg dark:bg-slate-800/20 dark:ring-slate-400/70"
            placeholder="yourname@example.com"
          />
          <Button
            type="submit"
            className="min-w-max bg-gradient-to-r from-[#845df1] via-[#e94389] to-[#e0ab18] py-7  text-lg font-semibold  transition-all hover:scale-105"
          >
            Join Now <ArrowUpRight className="ml-1" />
          </Button>
        </form>
      </div>
    </MaxWidthContainer>
  )
}
