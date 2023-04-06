import './globals.css'

export const metadata = {
  title: 'Delv Assessment',
  description: 'Delv Assessment',
}

import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex min-h-screen flex-col'>
            <SiteHeader />
            <main className='flex-1 items-start md:grid md:grid-cols-[6rem_minmax(0,1fr)] md:gap-6 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-10'>
              <div>sidearea</div>
              {children}
            </main>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
