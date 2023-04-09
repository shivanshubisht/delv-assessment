"use client"

import React, { useState } from "react"
import { type SearchResults } from "@/types/results"

const SearchDataContext = React.createContext<
  | [
      SearchResults | null,
      React.Dispatch<React.SetStateAction<SearchResults | null>>
    ]
  | undefined
>(undefined)

export function SearchDataProvider({
  children,
  initialData,
}: {
  children: React.ReactNode
  initialData: SearchResults | null
}) {
  const [currentData, setCurrentData] = useState<SearchResults | null>(null)

  const data = currentData !== null ? currentData : initialData

  return (
    <SearchDataContext.Provider value={[data, setCurrentData]}>
      {children}
    </SearchDataContext.Provider>
  )
}

export function useSearchData() {
  const context = React.useContext(SearchDataContext)
  if (context === undefined) {
    throw new Error("useSearchData must be used within a SearchDataProvider")
  }
  return context
}
