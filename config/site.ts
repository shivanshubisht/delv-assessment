interface SiteConfig {
  name: string
  description: string
  links: {
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "ScholarGPT",
  description: "A tool to generate Google Scholar search results using GPT-3",
  links: {
    github: "https://github.com/shivanshubisht/delv-assessment",
  },
}
