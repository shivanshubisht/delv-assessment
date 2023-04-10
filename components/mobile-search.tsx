"use client"

import { useRef, useState, type FormEvent } from "react"
import { type SearchResults } from "@/types/results"

import { Icons } from "@/components/icons"
import { ScrollArea } from "@/components/scroll-area"
import { useSearchData } from "@/components/search-context"
import { ResultItems } from "@/components/side-search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileSearch() {
  const messageRef = useRef<HTMLInputElement>(null)
  const [results, setResults] = useState<SearchResults | null>(null)
  const [, setData] = useSearchData()

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
    setData(responseResults)
    localStorage.setItem("searchResults", JSON.stringify(responseResults))
    // console.log(responseResults)
  }
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-slate-300 p-3 dark:bg-slate-700/60">
            <Icons.search />
          </Button>
        </SheetTrigger>
        <SheetContent position="right" size="full">
          <SheetHeader>
            <SheetTitle className="pl-4 pt-4 text-3xl">Search</SheetTitle>
            <SheetDescription className="pb-5 pl-4">
              Search for articles in google scholar
            </SheetDescription>
          </SheetHeader>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit}>
            <div className="flex w-full items-center space-x-2 p-4">
              <Input type="search" placeholder="Search" ref={messageRef} />
              <Button type="submit">Search</Button>
            </div>
          </form>
          <ScrollArea>
            {results !== null ? (
              <ResultItems items={results} pathname="" />
            ) : null}
          </ScrollArea>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
