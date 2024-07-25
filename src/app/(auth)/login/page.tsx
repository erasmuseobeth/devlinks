"use client"
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock } from '@/components/Icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const formSchema = z.object({
  username: z.string().min(3, {
    message: "Can't be empty.",
  }),
  password: z.string().min(8, {
    message: "Please check again.",
  }),
});

export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Submit handler
 // Submit handler
async function onSubmit(values: z.infer<typeof formSchema>) {
  // Send the login request
  const response = await fetch('/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (response.ok) {
    // Parse the response
    const result = await response.json();
    
    // Redirect to the profile page with query parameters
    const queryParams = new URLSearchParams({
      user: JSON.stringify(result.user),
    }).toString();
    
    router.push(`/profile?${queryParams}`);
  }
}


  return (
    <div className="w-full bg-white flex flex-col items-start justify-start gap-4 
          sm:p-6 
          md:p-10 md:gap-10 md:self-stretch lg:p-8 font-instrument">
      {/* form heading */}
      <div className="w-full flex flex-col items-start justify-start">
        <h2 className="self-stretch font-bold font-instrument leading-9 text-darkGrey text-2xl 
        md:text-[2rem] md:leading-12 md:font-bold lg:text-3xl">
          Login
        </h2>
        <div className="self-stretch text-base font-normal non-italic leading-6 text-grey font-instrument md:pt-1 lg:text-xl">
          Add your details below to get back into the app
        </div>
      </div>

      {/* Login form fields */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="text-xs font-normal non-italic leading-[1.12rem]">
                  Email address
                </FormLabel>
                <Mail className="absolute top-10 left-4 w-4 h-4" />
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder="e.g. alex@email.com"
                    className="bg-transparent"
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
              <FormItem className="relative mt-6">
                <FormLabel className="text-xs font-normal non-italic leading-[1.125rem]">
                  Password
                </FormLabel>
                <Lock className="absolute top-10 left-4 w-4 h-4" />
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-purple rounded-lg font-semibold leading-6 font-instrument mt-6"
          >
            Submit
          </Button>
        </form>
      </Form>
      
      <div className="w-full flex self-stretch flex-col items-center justify-start font-normal leading-6 md:flex-row md:justify-center md:items-center">
        <span className="text-grey text-base">Don&apos;t have an account? </span>
        <Link href="/register" className="text-purple text-base transition md:pl-1 hover:opacity-70 hover:shadow-btn-active"> Create account</Link>
       </div>
    </div>
  );
}
