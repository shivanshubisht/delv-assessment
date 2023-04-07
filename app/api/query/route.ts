// @ts-expect-error no type-defs found
import SerpApi from "google-search-results-nodejs"

type ParamsType = {
  engine: "google_scholar"
  q: string
}

type PublicationInfo = {
  authors: string[]
  publicationDate: string
  publisher: string
}

type Resource = {
  type: string
  link: string
}

type InlineLink = {
  title: string
  link: string
}

type OrganicResult = {
  position: number
  title: string
  result_id?: string
  type?: string
  link: string
  snippet: string
  publication_info: PublicationInfo
  resources: Resource[]
  inline_links: InlineLink[]
}

type SearchInformation = {
  organic_results_state: string
  total_results: number
  time_taken_displayed: number
  query_displayed: string
}

type SearchMetadata = {
  id: string
  status: string
  json_endpoint: string
  created_at: string
  processed_at: string
  google_scholar_url: string
  raw_html_file: string
  total_time_taken: number
}

type SearchParameters = {
  engine: string
  q: string
  hl: string
}

type SearchResults = {
  search_metadata: SearchMetadata
  search_parameters: SearchParameters
  search_information: SearchInformation
  organic_results: OrganicResult[]
}

export async function GET() {
  // eslint-disable-next-line
  const search = new SerpApi.GoogleSearch(process.env.SERP_API_KEY)

  const params = {
    engine: "google_scholar",
    q: "maths",
  } as const

  function searchAsync(params: ParamsType) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      search.json(params, (data: SearchResults) => {
        resolve(data)
      })
    })
  }
  const data = (await searchAsync(params)) as SearchResults
  return new Response(JSON.stringify(data["organic_results"]))
}
