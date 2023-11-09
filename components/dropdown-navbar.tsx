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
  }));

  return (
    <NavigationMenu className="container w-full mx-auto md:flex flex-col lg:flex-row items-center md:justify-between py-3 hidden border-b">
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
            <NavigationMenuTrigger>
              <NavigationMenuLink href={route.href}>
                {route.label}
              </NavigationMenuLink>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="relative z-[999]">
              <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[880px] lg:grid-cols-[.80fr_1fr]">
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
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem className="space-x-4 mt-3">
          <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
