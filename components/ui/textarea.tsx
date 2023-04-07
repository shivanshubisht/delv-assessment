import * as React from "react"

import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-6 w-full resize-none rounded-md bg-transparent px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-50 dark:focus:ring-slate-400",
          className
        )}
        rows={1}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
