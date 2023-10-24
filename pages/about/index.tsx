import React from 'react'
import {
  Footer,
  Navbar,
  JoinOurCommunity,
  AboutHeroSection,
  StatsSection,
  CommunityMembers,
} from '@/components/Layout'

const about = () => {
  return (
    <>
      <main className="z-10 flex min-h-screen w-full flex-col bg-white text-gray-900 dark:bg-[#05051E] dark:text-white">
        {/* Navbar */}
        <Navbar />

        {/* Body Part */}
        <section className="flex-1">
          <AboutHeroSection />
          <StatsSection />
          <CommunityMembers />
          <JoinOurCommunity />
        </section>

        {/* Bottom sticky footer */}
        <Footer />
      </main>
    </>
  )
}

export default about

// TODO: Fetch and list the contributors dynamically
// const about = ({
//   contributors,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   console.log(contributors)
//   return (
//     <main className="z-10 flex min-h-screen w-full flex-col bg-white text-gray-900 dark:bg-[#05051E] dark:text-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Body Part */}
//       <section className="flex-1">
//         <StatsSection />
//         <CommunityMembers contributors={contributors} />
//         <JoinOurCommunity />
//       </section>

//       {/* Bottom sticky footer */}
//       <Footer />
//     </main>
//   )
// }
// export const getStaticProps = (async (context) => {
//   const res = await fetch(
//     'https://api.github.com/repos/piyushgarg-dev/review-app/contributors'
//   )
//   const contributors = await res.json()
//   return { props: { contributors } }
// }) satisfies GetStaticProps<{
//   contributors: ContributorsType[]
// }>
