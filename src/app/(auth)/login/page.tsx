"use client";
import Link from "next/link";
import { Mail, Lock } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  username: z.string().min(2, {
    message: "Can't be empty.",
  }),
  password: z.string().min(1, {
    message: "Please check again.",
  }),
});

export default function Page() {
  //  form defination
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full flex flex-col items-start justify-start gap-6 sm:p-6 lg:p-8 font-instrument" >
      {/* form heading */}
      <div className="w-full flex flex-col items-start justify-start">
        <h2
          className="self-stretch font-bold font-instrument leading-9 text-darkGrey text-2xl 
        sm:text-xl
        lg:text-2xl"
        >
          Login
        </h2>
        <div
          className="self-stretch text-base font-normal non-italic leading-6 text-grey font-instrument
         sm:text-lg  
         lg:text-xl"
        >
          Add your details below to get back into the app
        </div>
      </div>

      {/* Login form fields */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full gap-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="text-xs font-normal non-italic leading-[1.125rem]">
                  Email address
                </FormLabel>
                <Mail className="absolute top-10 left-4 w-4 h-4 " />
                <FormControl>
                  <Input
                    // type="email"
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
              <FormItem className="relative">
                <FormLabel className="text-xs font-normal non-italic leading-[1.125rem]">
                  Password
                </FormLabel>
                <Lock className="absolute top-10 left-4 w-4 h-4 " />
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
      
      <div className="w-full flex self-stretch flex-col items-center justify-center font-normal leading-6">
        <span className="text-grey text-base">Don&apos;t have an account?</span>
        <Link href="/register" className="text-purple transition hover:opacity-70 shadow-btn-active">Create account</Link>
       </div>

    </div>
  );
}
