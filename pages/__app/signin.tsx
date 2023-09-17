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

  useEffect(() => {
    if (user && user.id) {
      router.replace('/')
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
                        <Input
                          type="password"
                          disabled={loading}
                          placeholder="••••••••"
                          {...field}
                        />
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
