'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import { Category } from '@/types'
import { Separator } from '../ui/separator'
import Image from 'next/image'

interface MainNavProps {
  data: Category[]
}

export function DropdownMenu({ data }: MainNavProps) {
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/${route.slug}`,
    label: route.name,
    active: pathname === `/${route.slug}`,
    subcategory: route.subcategory,
  }))

  return (
    <NavigationMenu className="md:flex flex-col lg:flex-row items-center md:justify-between py-3 hidden max-w-7xl container">
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
            <NavigationMenuTrigger>
              <NavigationMenuLink href={route.href}>
                {route.label}
              </NavigationMenuLink>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="relative z-[999]">
              <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[880px] lg:grid-cols-[.80fr_1fr_1fr] ">
                <li className="row-span-6">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/10 to-background/80 p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                      href="/"
                    >
                      <Image
                        src="/images/spot-uv-bcs.jpg"
                        fill
                        alt="Level up your Impression with Spot UV Business card"
                        className="object-cover -z-50 hover:scale-105"
                      />

                      <div className="mb-2 mt-4 text-lg leading-tight font-bold ">
                        Spot UV
                        <br /> Business Card
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Level up your Impression with Spot UV Business card
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {route.subcategory.map((sub) => {
                  return (
                    <ListItem
                      key={sub.id}
                      href={`${route.href}/${sub.slug}`}
                      title={sub.name}
                    >
                      <div className="text-xs text-foreground-400">
                        {sub.description}
                      </div>
                    </ListItem>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <Separator orientation="vertical" />
      <NavigationMenuList className="mr-4">
        <NavigationMenuItem className="space-x-9 hidden lg:block">
          <NavigationMenuLink href="/blogs">Blog</NavigationMenuLink>
          <NavigationMenuLink href="/about">About us</NavigationMenuLink>
          <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
