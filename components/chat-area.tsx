"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { type SearchResults } from "@/types/results"

import Message from "@/components/message"
import { ScrollArea } from "@/components/scroll-area"
import { useSearchData } from "@/components/search-context"
import { Textarea } from "@/components/ui/textarea"

export default function ChatArea() {
  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const [message, setMessage] = useState<
    {
      query: string
      response: string | null
    }[]
  >([])
  const [data, setData] = useSearchData()
  console.log(data)

  // useEffect(() => {
  //   const message = localStorage.getItem("message")
  //   if (message) {
  //     const results = JSON.parse(message) as {
  //       query: string
  //       response: string | null
  //     }[]
  //     setMessage(results)
  //   }
  // }, [message])

  // const [searchResponse, setSearchResponse] = useState<SearchResults | null>(
  //   null
  // )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // can use useSWR instead of useEffect to fetch searchResults from localStorage because only of initial mount like done in chatgpt

  // hacky way to fetch searchResults from localStorage without rerendering down the component tree
  // useEffect(() => {
  //   const searchResults = localStorage.getItem("searchResults")
  //   // console.log(searchResults)
  //   if (searchResults) {
  //     // const results = JSON.parse(searchResults) as SearchResults
  //     setSearchResponse(JSON.parse(searchResults) as SearchResults)
  //     console.log(searchResponse)
  //   }
  // }, [])

  const handleEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement> &
      React.FormEvent<HTMLFormElement>
  ) => {
    if (e.key === "Enter" && isLoading === false) {
      e.preventDefault()
      setIsLoading(true)
      void handleSubmit(e)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // const searchResults = localStorage.getItem("searchResults")
    // // console.log(searchResults)
    // if (searchResults) {
    //   // const results = JSON.parse(searchResults) as SearchResults
    //   setSearchResponse(JSON.parse(searchResults) as SearchResults)
    //   console.log(searchResponse)

    //   const titles = searchResponse?.map((item) => item.title)
    //   console.log(titles)
    //   const snippets = searchResponse?.map((item) => item.snippet)
    //   console.log(snippets)
    // }

    const prompt = messageRef.current?.value
    if (prompt !== undefined) {
      setMessage([...message, { query: prompt, response: null }])
      if (messageRef.current) {
        messageRef.current.value = ""
      }
      // messageRef.current?.value ?? ""
    }

    if (!prompt) {
      return
    }

    const response = await fetch("/api/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    })
    console.log("Edge function returned.")

    console.log(response)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = response.body
    if (!data) {
      return
    }

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false

    setMessage([...message, { query: prompt, response: null }])

    let currentResponse: string[] = []
    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)
      currentResponse = [...currentResponse, chunkValue]
      setMessage([
        ...message,
        { query: prompt, response: currentResponse.join("") },
      ])
    }
    setIsLoading(false)
  }

  return (
    <>
      <ScrollArea className={message.length === 0 ? "" : "flex flex-1"}>
        {/* if message is empty display ask here */}
        {message.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
              Ask me anything!
            </h1>
            <p className="p-2 text-center text-gray-600 dark:text-gray-300">
              Try searching for articles on the sidebar and ask me about the
              results.
            </p>
          </div>
        ) : (
          message.map((item, index) => (
            <Fragment key={index}>
              <Message type="query">{item.query}</Message>
              <Message type="response">{item.response}</Message>
            </Fragment>
          ))
        )}
      </ScrollArea>
      {/* <div className="px-10 py-5"> */}
      <div className="bg-gray-300 dark:bg-gray-700/60">
        <form
          className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:my-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit}
        >
          <div className="relative flex w-full grow flex-col rounded-md bg-white py-2 shadow-md dark:bg-gray-700 dark:text-white md:py-3 md:pl-4">
            <Textarea
              placeholder="Send a message..."
              ref={messageRef}
              onKeyDown={handleEnter}
            />
            <button className="absolute bottom-1.5 right-1 rounded-md p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent dark:hover:bg-gray-900 enabled:dark:hover:text-gray-400 dark:disabled:hover:bg-transparent md:bottom-2.5 md:right-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
