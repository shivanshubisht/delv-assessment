import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-300 shadow-2xl dark:bg-slate-700/60">
      <div className="flex h-16 items-center">
        {/* <div className="container mx-auto flex items-center justify-between space-x-4 px-4 sm:px-6 md:px-8"> */}
        <div className="container flex">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
            <nav className="flex items-center space-x-3">
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={cn(buttonVariants)}
              >
                <Icons.gitHub className="h-6 w-6" />
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
