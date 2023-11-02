"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.slug}`,
    label: route.name,
    active: pathname === `/category/${route.slug}`,
  }));

  return (
    <div className="border-b py-4 md:flex items-center justify-betweens hidden container mx-auto overflow-x-auto">
      <ul className="flex flex-1 items-center gap-6 lg:px-8">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "tracking-tight font-medium transition-colors hover:text-black dark:hover:text-white",
              route.active
                ? "text-lime-700"
                : "text-gray-600 dark:text-gray-300"
            )}
          >
            <li className="">{route.label}</li>
          </Link>
        ))}
      </ul>
      <ul className="flex gap-8 justify-end">
        <Separator className="h-6" orientation="vertical" />
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
