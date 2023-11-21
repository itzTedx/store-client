import Link from 'next/link'
import {
  Navbar as NextNav,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from '@nextui-org/react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import getCategories from '@/actions/get-categories'
import NavbarActions from './NavbarActions'
import { ModeToggle } from './ModeToggle'
import { Separator } from '../ui/separator'
import { SearchBar } from './SearchBarv2'
import { DropdownMenu } from './dropdown-navbar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { ProfileActions } from './ProfileActions'

const Navbar = async () => {
  const categories = await getCategories()
  // const allProducts = await getAllProducts()

  return (
    <>
      <NextNav isBordered shouldHideOnScroll height="4rem" maxWidth="xl">
        <div className="flex items-center w-full gap-3 md:justify-between">
          <Link
            href="/"
            className="relative col-span-2 sm:col-auto h-14 w-44 shrink-0"
          >
            <Image
              src="/digitaldesk-dark.svg"
              fill
              alt="Digital Desk Logo"
              className="object-contain dark:block hidden"
            />
            <Image
              src="/digitaldesk-light.svg"
              fill
              alt="Digital Desk Logo"
              className="object-contain dark:hidden block"
            />
          </Link>
          <div className="flex ml-auto gap-x-3">
            <div className="md:hidden">
              <ModeToggle />
            </div>
            <SearchBar data={categories} />
            <div className="ml-auto">
              <Button variant="ghost" size="icon" className="md:hidden">
                <NavbarMenuToggle
                  as="div"
                  className="text-sky-500 [&>span:before]:h-[2px] [&>span:after]:h-[2px]"
                />
              </Button>
            </div>
          </div>
          <div className="items-center hidden ml-auto gap-x-4 md:flex">
            <ModeToggle />
            <Separator orientation="vertical" className="h-6" />
            <ProfileActions />

            <div className="">
              <NavbarActions />
            </div>
          </div>
        </div>

        <NavbarMenu className="flex flex-col justify-between h-[100dvh]">
          <div className="space-y-3">
            <NavbarItem className="space-y-4">
              <Accordion type="multiple">
                <span className="text-xs font-medium text-gray-400 ">
                  Products
                </span>
                {categories.map((item, i) => (
                  <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger>
                      <Link href={`/${item.slug}`}>{item.name}</Link>
                    </AccordionTrigger>
                    {item.subcategory.map((sub, i) => (
                      <AccordionContent key={i}>
                        <Link href={`/${item.slug}/${sub.slug}`}>
                          {sub.name}
                        </Link>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="space-y-3">
                <span className="text-xs font-medium text-gray-400 ">
                  Account
                </span>
                <ul className="space-y-6 font-medium">
                  <li>
                    <Link href="/account">Account</Link>
                  </li>
                  <li>
                    <Link href="/orders">My Orders</Link>
                  </li>
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Button
                      className={cn(
                        'bg-transparent px-0 py-0 text-red-600 h-0'
                      )}
                    >
                      Log Out
                    </Button>
                  </li>
                </ul>
              </div>
            </NavbarItem>
          </div>
          <div className="flex justify-between my-20">
            <NavbarItem>
              <Link href="/blogs">Blogs</Link>
            </NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
          </div>
        </NavbarMenu>
      </NextNav>
      <nav className="border-b bg-background">
        <DropdownMenu data={categories} />
      </nav>
    </>
  )
}

export default Navbar
