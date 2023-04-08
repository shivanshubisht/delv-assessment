import { type SearchResults } from "@/types/results"
// @ts-expect-error no type-defs found
import SerpApi from "google-search-results-nodejs"

type ParamsType = {
  engine: "google_scholar"
  q: string
}

export async function POST(request: Request) {
  const { query } = await request.json()
  console.log(query)
  const search = new SerpApi.GoogleSearch(process.env.SERP_API_KEY)

  const params = {
    engine: "google_scholar",
    q: `${query}`,
  } as const

  function searchAsync(params: ParamsType) {
    return new Promise((resolve, reject) => {
      search.json(params, (data: SearchResults) => {
        resolve(data)
      })
    })
  }
  const data = (await searchAsync(params)) as SearchResults
  return new Response(JSON.stringify(data["organic_results"]))
}
