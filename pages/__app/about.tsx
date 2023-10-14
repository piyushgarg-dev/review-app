import React from 'react'
import OIPImage from '@/components/image/abc.png'
import Image from 'next/image'

const AboutUsPage: React.FC = () => {
  return (
    <div
      className="flex min-h-screen items-center"
      style={{ backgroundColor: '#8b5cf6' }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-8 text-center text-white md:p-16">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">About Us</h1>
        <p className="mb-8 text-lg md:text-xl">
          Welcome to our review application, where your opinions matter!
        </p>
        <div className="items-center justify-center md:flex">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <Image
              src={OIPImage} // Use the imported image
              alt="Image Alt Text"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-lg">
              Our mission is to provide a platform for users to share their
              feedback, experiences, and opinions. Your reviews help businesses
              and individuals make informed decisions and improve their products
              and services.
            </p>
            <p className="text-lg">
              Whether you're reviewing restaurants, products, or services, we're
              here to make the process easy and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
