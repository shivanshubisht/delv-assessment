import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { SearchDataProvider } from "@/components/search-context"
import SideSearch from "@/components/side-search"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Delv Assessment",
  description: "Delv Assessment",
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-800 dark:text-slate-50",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1 items-start md:grid md:grid-cols-[24rem_minmax(0,1fr)] lg:grid-cols-[24rem_minmax(0,1fr)]">
              <SearchDataProvider initialData={null}>
                <aside className="dark:blue-50 fixed top-14 z-30 hidden h-screen shrink-0 overflow-y-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-900 md:sticky md:flex md:flex-col">
                  <SideSearch />
                </aside>
                {children}
              </SearchDataProvider>
            </div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
