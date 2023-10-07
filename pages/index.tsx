import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/query/user'
import Navbar from '@/components/ui/navbar'
import Main from '@/components/ui/main'
import Footer from '@/components/ui/footer'

const HomePage: NextPage = () => {
  const { user } = useCurrentUser()
  const router = useRouter()

  // useEffect(() => {
  //   if (!user) {
  //     router.replace('/signin')
  //   }
  // }, [router, user])

  return (
    <div>
      <Head>
        <title>Review App</title>
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default HomePage
