"use client"

import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <div className="flex items-center">
      <Link href="/" className="z-0 mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="text-lg font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }) => {
  // >(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href} passHref legacyBehavior {...props}>
        <NavigationMenuLink
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"
