"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="dark: bg-white px-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGitHubLoading(true)
          void signIn("github")
        }}
        disabled={isGoogleLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGoogleLoading(true)
          void signIn("google")
        }}
        disabled={isGoogleLoading || isGitHubLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </button>
    </div>
  )
}
