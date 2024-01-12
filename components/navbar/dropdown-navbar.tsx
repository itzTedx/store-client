"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Category } from "@/types";
import { Separator } from "../ui/separator";
import Image from "next/image";

interface MainNavProps {
  data: Category[];
}

export function DropdownMenu({ data }: MainNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/${route.slug}`,
    label: route.name,
    active: pathname === `/${route.slug}`,
    subcategory: route.subcategory,
    billboard: route?.billboard,
  }));

  return (
    <NavigationMenu
      className="md:flex flex-col lg:flex-row items-center md:justify-between py-3 hidden max-w-7xl container relative z-[999]"
      role="navigation"
      id="main-nav"
      aria-label="Navigate our Categories"
    >
      <NavigationMenuList aria-label="Categories of products">
        {routes.map((route) => (
          <NavigationMenuItem key={route.href} aria-label={route.label}>
            <NavigationMenuTrigger>
              <NavigationMenuLink href={route.href}>
                {route.label}
              </NavigationMenuLink>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="">
              <ul className="grid gap-3 p-6 md:w-[100dvw] lg:w-[880px] md:grid-cols-[.80fr_1fr_1fr] mx-auto">
                {route.billboard ? (
                  <li className="row-span-6">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/10 to-background/80 p-6 no-underline outline-none focus:shadow-md relative overflow-hidden group "
                        href={route.href}
                      >
                        <Image
                          src={route.billboard.imageUrl}
                          fill
                          quality={10}
                          alt="Level up your Impression with Spot UV Business card"
                          className="object-cover object-center transition scale-100 group-hover:scale-105 contrast-100 group-hover:contrast-125 brightness-[.85] group-hover:brightness-90 saturate-100 group-hover:saturate-150"
                        />

                        <div className="mb-1 mt-4 relative z-10 text-lg leading-tight font-bold">
                          {route.billboard.label}
                        </div>
                        <p className="text-sm leading-4 z-10 text-foreground">
                          {route.billboard.description}
                        </p>
                        <span className="absolute h-full bg-gradient-to-b from-background/10 via-background/60 to-background/90 w-full bottom-0 left-0 select-none" />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ) : null}

                {route.subcategory.map((sub) => {
                  return (
                    <ListItem
                      key={sub.id}
                      href={`${route.href}/${sub.slug}`}
                      title={sub.name}
                      aria-label={sub.name}
                    >
                      {sub.description}
                    </ListItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {/* <Separator
          orientation="vertical"
          className="h-6 hidden md:block lg:hidden"
        />
        <NavigationMenuItem
          aria-label="About us"
          className="pl-3 hidden md:block lg:hidden relative"
        >
          <NavigationMenuTrigger>Links</NavigationMenuTrigger>
          <NavigationMenuContent className="relative z-[9999999]">
            <ul className="grid gap-3 p-6 md:w-screen mx-auto lg:w-[880px] grid-cols-3 ">
              <NavigationMenuLink
                href="/blogs"
                className="hover:bg-muted p-3 rounded-md aspect-[3/4] bg-primary-50 flex items-end text-lg font-bold"
              >
                Blog
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/about"
                className="hover:bg-muted p-3 rounded-md aspect-[3/4] bg-primary-50 flex items-end text-lg font-bold"
              >
                About us
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact"
                className="hover:bg-muted p-3 rounded-md aspect-[3/4] bg-primary-50 flex items-end text-lg font-bold"
              >
                Contact
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
      <Separator orientation="vertical" />
      <NavigationMenuList className="mr-4" aria-label="Company Details">
        <NavigationMenuItem
          className="space-x-9 hidden lg:block"
          aria-label="About us"
        >
          <NavigationMenuLink href="/blogs">Blog</NavigationMenuLink>
          <NavigationMenuLink href="/about">About us</NavigationMenuLink>
          <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs text-foreground-400 leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
