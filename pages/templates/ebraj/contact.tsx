import React from 'react';
import {
  MaxWidthContainer,
  Footer,
  Navbar,
} from '.';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';



/**
 * ContactUsHeadingSection Component...
 */
export const ContactUsHeadingSection = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-20 pt-36">
      <main className="text-center">
        <div className="space-y-4">
          <h1 className="custom-animated-text text-5xl font-black sm:text-6xl md:text-7xl">
            Contact Us
          </h1>
        </div>
      </main>
    </MaxWidthContainer>
  )
}
// Create ContactUs component
export const ContactUs: React.FC = () => {
  return (
    <>
      {/* Navbar (assuming you want the same navbar on the Contact Us page) */}
      <Navbar />

      {/* Contact Us content */}
      <section className="flex-1 flex justify-center items-center">
        {/* Contact form */}
        <MaxWidthContainer className="py-1">
          <form className="bg-white p-6 rounded-md shadow-md ring-1 ring-gray-200 dark:bg-slate-800/20 dark:ring-slate-400/70">
            {/* Your contact form fields here */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-[100%] bg-slate-100 px-4  py-7 text-lg dark:bg-slate-800/20 dark:ring-slate-400/70"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-[100%] bg-slate-100 px-4  py-7 text-lg dark:bg-slate-800/20 dark:ring-slate-400/70"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-[100%] bg-slate-100 px-4  py-7 text-lg dark:bg-slate-800/20 dark:ring-slate-400/70"
                rows={4}
              ></textarea>
            </div>
            <Button
              type="submit"
              className="min-w-max bg-gradient-to-r from-[#845df1] via-[#e94389] to-[#e0ab18] py-7  text-lg font-semibold  transition-all hover:scale-105"
            >
              Submit
            </Button>
          </form>
        </MaxWidthContainer>
      </section>
    </>
  );
};



const contact = () => {
  return (
    <>
      <main className="z-10 flex min-h-screen w-full flex-col bg-white text-gray-900 dark:bg-[#05051E] dark:text-white">
        {/* Navbar */}
        <Navbar />
        {/* Body Part */}
        <section className="flex-1">
          <ContactUsHeadingSection />
        </section>
        <ContactUs />
          {/* Bottom sticky footer */}
        <Footer />
      </main>
    </>
  )
}

export default contact;

