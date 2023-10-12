import { zodResolver } from '@hookform/resolvers/zod'
import { LucideHeartCrack } from 'lucide-react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/context/Authentication'
import { useCurrentUser } from '@/hooks/query/user'
import { onGraphqlErrorToast } from '@/lib/error'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
})



const SignInPage: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setpasswordType] = useState("password")

  const router = useRouter()

  const { signInWithEmailAndPassword } = useAuth()
  const { user, isLoading: currentUserLoading } = useCurrentUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setpasswordType(showPassword ? 'password' : 'text');
  };
  

  useEffect(() => {
    if (user && user.id) {
      router.replace('/dashboard')
    }
  }, [router, user])

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      setLoading(true)
      try {
        toast.loading('Please wait...', { id: 'signin-loading' })
        if (signInWithEmailAndPassword)
          await signInWithEmailAndPassword({
            email: values.email,
            password: values.password,
          })
        toast.success('Signed in successfully', { id: 'signin-loading' })
      } catch (error: any) {
        onGraphqlErrorToast(error, 'signin-loading')
      } finally {
        setLoading(false)
      }
    },
    [signInWithEmailAndPassword]
  )

 

  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <section className="flex h-full w-full items-center justify-center px-8 pb-20 pt-12 duration-200 md:px-12 lg:px-16">
        <div className="max-w-md flex-grow">
          <div className="flex items-end gap-3">
            <LucideHeartCrack className="h-10 w-10 text-violet-700" />
          </div>
          <div className="mt-4 flex w-full flex-col gap-2">
            <h1 className="text-2xl font-medium">Login to Review App</h1>
            <p className="text-gray-500">
              This app helps you start collecting, managing and sharing your
              testimonials in minutes, not days.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-4 flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                        <Input
                          type={passwordType}
                          disabled={loading}
                          placeholder="••••••••"
                          {...field}
                        />
                        <Button onClick={togglePasswordVisibility} className="absolute top-1/4 transform -translate-y-1/2 right-2"
                        type='button' style={{opacity:'0.9',height:'25px',marginTop:'10px'}}>
                          {passwordType!=="password"?<svg width="15" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>:<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
                        </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="flex justify-between gap-2">
                  <Link
                    href="/signup"
                    className="text-sm font-medium text-primary"
                  >
                    Forgot Password?
                  </Link>
                </p>
                <Button
                  disabled={loading}
                  type="submit"
                  className="mt-2 w-full"
                >
                  Login
                </Button>
                <p className="text-sm text-gray-500">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="font-medium text-primary">
                    Sign up
                  </Link>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <section className="hidden flex-col justify-center bg-primary bg-gradient-to-br from-violet-500 bg-cover md:flex">
        <div className="relative mx-auto h-full w-96">
          <Image
            src="/vercel.svg"
            alt="signup_image"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </section>
    </main>
  )
}

export default SignInPage
