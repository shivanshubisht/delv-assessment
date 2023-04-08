export type Author = {
  name: string
  link: string
  serpapi_scholar_link: string
  author_id: string
}

export type PublicationInfo = {
  summary: string
  authors: Author[]
}

export type Resource = {
  title: string
  file_format: string
  link: string
}

export type CitedBy = {
  total: number
  link: string
  cites_id: string
  serpapi_scholar_link: string
}

export type InlineLinks = {
  serpapi_cite_link: string
  cited_by: CitedBy
  related_pages_link: string
  serpapi_related_pages_link: string
  versions: {
    total: number
    link: string
    cluster_id: string
    serpapi_scholar_link: string
  }
}

export type ResearchArticle = {
  position: number
  title: string
  result_id: string
  link: string
  snippet: string
  publication_info: PublicationInfo
  resources: Resource[]
  inline_links: InlineLinks
}

export type SearchResult = {
  position: number
  title: string
  result_id: string
  link: string
  snippet: string
  publication_info: PublicationInfo
  resources: Resource[]
  inline_links: InlineLinks
}

export type SearchResults = SearchResult[]
