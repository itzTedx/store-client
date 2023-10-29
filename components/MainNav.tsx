"use client"
import { cn } from "@/lib/utils"
import { Category } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <>
      <div className="border-b py-4 flex items-center justify-betweens ">
        <ul className="md:flex items-center gap-6 lg:px-8 flex-1 hidden">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "tracking-tight font-medium transition-colors hover:text-black",
                route.active ? "text-lime-700" : "text-neutral-600"
              )}
            >
              <li>{route.label}</li>
            </Link>
          ))}
        </ul>
        <ul className="flex gap-8 mx-auto">
          <div className="h-auto w-px bg-neutral-200 hidden md:block" />
          <li>Blogs</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default MainNav
