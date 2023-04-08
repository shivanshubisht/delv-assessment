import { type SearchResults } from "@/types/results"

export type RelatedSearch = {
  query: string
  link: string
}

export type PaginationLinks = {
  [page: string]: string
}

export type Pagination = {
  current: number
  next: string
  other_pages: PaginationLinks
}

export type SearchMetadata = {
  id: string
  status: string
  json_endpoint: string
  created_at: string
  processed_at: string
  google_scholar_url: string
  raw_html_file: string
  total_time_taken: number
}

export type SearchParameters = {
  engine: string
  q: string
  hl: string
}

export type SearchInformation = {
  organic_results_state: string
  total_results: number
  time_taken_displayed: number
  query_displayed: string
}

export type SearchResponse = {
  search_metadata: SearchMetadata
  search_parameters: SearchParameters
  search_information: SearchInformation
  organic_results: SearchResults
  related_searches: RelatedSearch[]
  pagination: Pagination
  serpapi_pagination: Pagination
}
