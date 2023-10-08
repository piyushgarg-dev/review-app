
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SignUpPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
   router.push(`http://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`)
  }, [router])

  return (
    <></>
  )
}

export default SignUpPage
