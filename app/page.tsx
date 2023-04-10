import ChatArea from "@/components/chat-area"
import { SearchDataProvider } from "@/components/search-context"
import SideSearch from "@/components/side-search"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 items-start md:grid md:grid-cols-[24rem_minmax(0,1fr)] lg:grid-cols-[24rem_minmax(0,1fr)]">
        <SearchDataProvider initialData={null}>
          <aside className="dark:blue-50 fixed top-14 z-30 hidden h-screen shrink-0 overflow-y-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-900 md:sticky md:flex md:flex-col">
            <SideSearch />
          </aside>
          <main className="flex h-screen flex-col justify-between">
            <SiteHeader />
            <ChatArea />
          </main>
        </SearchDataProvider>
      </div>
    </div>
  )
}
