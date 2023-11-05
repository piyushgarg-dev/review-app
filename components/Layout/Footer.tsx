/**
 * Footers Section...
 */
import Image from 'next/image'
import Link from 'next/link'
import { MaxWidthContainer, GridContainer } from '.'
import { allNavLinks } from './Navbar'
import ReviewAppLogo from '@/public/ebraj/landing-page/images/review-app-logo.png'

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
                            className="block text-slate-500 hover:text-gray-950 dark:hover:text-gray-100"
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
