"use client"

import { useState } from "react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

type MessageProps = {
  children: React.ReactNode
  type: "query" | "response"
}

export default function Message({ children, type }: MessageProps) {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = async () => {
    if (children) {
      await navigator.clipboard.writeText(children.toString())
      setHasCopied(true)
      setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    }
  }
  return (
    <div
      className={`group w-full ${
        type === "query" ? "bg-gray-300/40 dark:bg-gray-900/30" : ""
      }`}
    >
      <div className="m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-xl lg:px-0 xl:max-w-3xl">
        <div className="relative flex w-[30px] flex-col items-end">
          <div className="relative flex">
            {type === "query" ? (
              <Icons.user className="h-6 w-6 fill-current" />
            ) : (
              <Icons.circle className="h-6 w-6 fill-current" />
            )}
          </div>
        </div>
        <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
          <div className="flex grow flex-col gap-3">
            <div className="flex min-h-[20px] flex-col items-start gap-4 whitespace-pre-wrap">
              {children}
            </div>
          </div>
          <div className="visible mt-2 flex justify-center gap-2 self-end text-gray-400 md:gap-3 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:translate-x-full lg:gap-1 lg:self-center lg:pl-2">
            <Button
              variant="ghost"
              size="sm"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={handleCopy}
              className="md:invisible md:group-hover:visible"
            >
              {hasCopied ? <Icons.check /> : <Icons.copy />}
            </Button>
          </div>
          <div className="flex justify-between lg:block"></div>
        </div>
      </div>
    </div>
  )
}
