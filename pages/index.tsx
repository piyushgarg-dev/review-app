import {
  Navbar,
  HeroSection,
  MainProductImage,
  Features,
  WorkingSteps,
  JoinOurCommunity,
  Footer,
} from '@/components/Layout'

const index = () => {
  return (
    <>
      <main className="z-10 flex min-h-screen w-full flex-col bg-white text-gray-900 dark:bg-[#05051E] dark:text-white">
        {/* Navbar */}
        <Navbar />

        {/* Body Part */}
        <section className="flex-1">
          <HeroSection />
          <MainProductImage />
          <Features />
          <WorkingSteps />
          <JoinOurCommunity />
        </section>

        {/* Bottom sticky footer */}
        <Footer />
      </main>
    </>
  )
}

export default index
