"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock } from "@/components/Icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Send the login request
    const response = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    <div className="flex flex-col flex-grow flex-shrink-0 items-start gap-10">
      {/* form heading */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-bold font-instrument text-2xl text-darkGrey not-italic leading-9">
          Login
        </h2>
        <div className="font-instrument font-normal text-base text-grey not-italic leading-6">
          Add your details below to get back into the app
        </div>
      </div>
      {/* Login form fields */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-6 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="relative flex flex-col items-start gap-1 w-full self-stretch">
                <FormLabel className="w-full font-instrument font-normal text-xs not-italic leading-[18px]">
                  Email address
                </FormLabel>
                <div
                  className={cn(
                    "!mt-0 flex w-full items-center gap-3 self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-3 hover:border-purple focus:border-purple focus-visible:border-purple",
                    form.formState.errors.username
                      ? "border-red"
                      : "border-borders",
                  )}
                >
                  <Mail className="w-4 h-4" />
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="e.g. alex@email.com"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative flex flex-col items-start gap-1 w-full self-stretch">
                <FormLabel className="w-full font-instrument font-normal text-xs not-italic leading-[18px]">
                  Password
                </FormLabel>
                <div
                  className={cn(
                    "!mt-0 flex w-full items-center gap-3 self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-3 hover:border-purple focus:border-purple focus-visible:border-purple",
                    form.formState.errors.password
                      ? "border-red"
                      : "border-borders",
                  )}
                >
                  <Lock className="w-4 h-4" />
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Enter your password"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex flex-col justify-center items-center gap-2 bg-purple px-[1.688rem] py-[.688rem] rounded-lg w-full font-instrument font-semibold text-white not-italic leading-60 self-stretch"
          >
            Login
          </Button>
          <div className="flex flex-col justify-start md:justify-center items-center md:items-center w-full font-instr font-instrument font-normal text-base text-center not-italic leading-6 self-stretch">
            <span className="text-base text-grey">
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href="/register"
              className="hover:opacity-70 hover:shadow-btn-active md:pl-1 text-base text-purple transition"
            >
              Create account
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
