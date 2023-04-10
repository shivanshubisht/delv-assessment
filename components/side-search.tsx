"use client"

import { useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import { type SearchResults } from "@/types/results"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/scroll-area"
import { useSearchData } from "@/components/search-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SideSearch() {
  const messageRef = useRef<HTMLInputElement>(null)
  const [results, setResults] = useState<SearchResults | null>(null)
  const [searchData, setSearchData] = useSearchData()

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log(messageRef.current?.value)
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const responseResults = (await (
      await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: messageRef.current?.value,
        }),
      })
    ).json()) as SearchResults
    setResults(responseResults)
    setSearchData(responseResults)
    localStorage.setItem("searchResults", JSON.stringify(responseResults))
    // console.log(responseResults)
  }
  return (
    <>
      {/* <div className="bg-gray-300/70 p-5 dark:bg-gray-950/70"> */}
      <div className="p-5">
        <span className="inline-block pb-2 text-3xl font-semibold">Search</span>
        <br></br>
        <span className="hidden pb-4 text-sm sm:inline-block">
          Search for articles in google scholar
        </span>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit}>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search" ref={messageRef} />
            <Button type="submit">Search</Button>
          </div>
        </form>
      </div>
      <ScrollArea className="h-36 p-5 md:h-auto">
        {results !== null ? <ResultItems items={results} pathname="" /> : null}
      </ScrollArea>
    </>
  )
}

interface ResultProps {
  items: SearchResults
  pathname: string | null
}

export function ResultItems({ items, pathname }: ResultProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.link ? (
          <Link
            key={index}
            href={item.link}
            className={cn(
              "group flex w-full flex-col items-baseline gap-1 rounded-md px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800",
              {
                "bg-slate-100 dark:bg-slate-800": pathname === item.link,
              }
            )}
            target="_blank"
            rel="noreferrer"
          >
            {item.title}
            {item.snippet && (
              <span className="ml-2 rounded-md bg-teal-100 px-1.5 py-0.5 text-xs no-underline group-hover:no-underline dark:text-slate-900">
                {item.snippet}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60 hover:underline"
          >
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null
}
