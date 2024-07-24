import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-auto w-full rounded-md border border-input bg-background px-4 pl-11 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none hover:ring-1 hover:ring-purple hover:ring-offset-0 active:ring-1 active:ring-purple active:ring-offset-0 focus:ring-1 focus:ring-purple focus:ring-offset-0  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
)
Input.displayName = "Input"

export { Input }
