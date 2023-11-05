import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ThemeToggle'
import ReviewAppLogo from '@/public/ebraj/landing-page/images/review-app-logo.png'
import { MaxWidthContainer } from '.'

import { AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const allNavLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: 'about' },
  { title: 'Blogs', url: 'blogs' },
  { title: 'Contact', url: 'contact' },
]

export const Navbar = () => {
  const router = useRouter()
  const handleLogoCLick = () => {
    router.push('/')
  }
  const [showNavbar, setShowNavbar] = useState<boolean>(true)
  const handleShowNavbar = () => {
    setShowNavbar((val) => !val)
  }
  return (
    <nav className="fixed z-[1000] w-full bg-white/80 pl-[calc(100vw-100%)] text-black ring-1 ring-slate-300 backdrop-blur-[100px] dark:bg-slate-900/20 dark:text-gray-50 dark:ring-slate-800/80">
      <MaxWidthContainer>
        <div className="grid grid-cols-2 items-center space-x-5 py-5 md:grid-cols-[1fr_3fr_1fr]">
          <div
            className="flex cursor-pointer items-center space-x-1"
            onClick={handleLogoCLick}
          >
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
