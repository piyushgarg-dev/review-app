import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import Link from 'next/link';


const formSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(8),
});

const SignIn: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            const response = await axios.post("/api/projects", values);
            window.location.assign(`/${response.data.id}`)
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid min-h-screen md:grid-cols-2">
            <div className="h-full w-full">
                <div className="flex h-full items-center justify-center px-8 pt-12 pb-20 duration-200 md:px-12 lg:px-16">
                    <div className="max-w-md flex-grow">
                        <div className="flex items-end gap-3">
                            <svg width="36px" height="36px" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.84 222.51">
                                <defs fill='#6701e6'></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M239.53,111.88,128.9,222.51,93.62,187.23h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17a62.42,62.42,0,0,1,88.36,0l5.17,5.16A62.49,62.49,0,0,1,239.53,111.88Z"></path><path className="cls-2" d="M204.24,76.59,93.65,187.18l0,0h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17A62.47,62.47,0,0,1,216.66,5.91,62.5,62.5,0,0,1,204.24,76.59Z"></path><path className="cls-1" d="M128.94,35.39c-17.51,22-37.38,36.89-57.62,39.78a37.72,37.72,0,1,1-8-74.89C65.11.12,66.87,0,68.61,0A62.22,62.22,0,0,1,111.85,18.3Z"></path></g></g>
                            </svg>
                        </div>
                        <div className="mt-4 flex w-full flex-col gap-2">
                            <h1 className="text-2xl font-medium">Login to Review App</h1>
                            <p className='text-gray-500'>
                                This app helps you start collecting, managing and sharing your testimonials in minutes, not days.
                            </p>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-4 flex flex-col gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input disabled={loading} placeholder="Enter your email" {...field} />
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
                                                    <Input type='password' disabled={loading} placeholder="••••••••" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex justify-between gap-2">
                                        <Link href='/signup' className='text-primary text-sm font-medium'>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <Button disabled={loading} type="submit" className='w-full mt-2'>
                                        Login
                                    </Button>
                                    <div className="text-sm text-gray-500">
                                        Don&apos;t have an account?{" "}
                                        <Link href='/sign-up' className='text-primary font-medium'>
                                            Sign up
                                        </Link>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary hidden flex-col justify-center bg-gradient-to-br from-violet-500 bg-cover md:flex">
                <div className="relative mx-auto w-96 h-full">
                    <Image
                        src='/vercel.svg'
                        alt='signup_image'
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignIn