
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SignInPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
   router.push(`http://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}/signin`)
  }, [router])


  return (
    <></>
  )
}

export default SignInPage
