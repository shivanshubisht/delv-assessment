import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-gray-300 shadow-2xl dark:bg-gray-700/60">
      <div className="flex h-16 items-center">
        {/* <div className="container mx-auto flex items-center justify-between space-x-4 px-4 sm:px-6 md:px-8"> */}
        <div className="container flex">
          <MainNav />
          <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
            <nav className="flex items-center space-x-1">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
