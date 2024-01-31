import {
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextNav,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import getCategories from "@/actions/get-categories";
import { cn } from "@/lib/utils";

import getAllProducts from "@/actions/get-all-products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import Helpline from "./Helpline";
import { ModeToggle } from "./ModeToggle";
import NavbarActions from "./NavbarActions";
import { ProfileActions } from "./ProfileActions";
import { SearchBar } from "./SearchBarv2";
import { DropdownMenu } from "./dropdown-navbar";
import Logo from "@/components/ui/Logo";
import { Suspense } from "react";

const Navbar = async () => {
  const categories = await getCategories();
  const products = await getAllProducts();

  return (
    <>
      <NextNav
        isBordered
        shouldHideOnScroll
        height="4rem"
        maxWidth="xl"
        aria-label="Navigate"
        className="z-[999999]"
      >
        <div className="flex items-center w-full gap-3 md:justify-between">
          <Link
            href="/"
            className="relative col-span-2 sm:col-auto h-14 w-44 shrink-0"
            title="Go to homepage"
          >
            <Logo />
          </Link>
          <div className="flex ml-auto gap-x-3">
            <div className="md:hidden flex items-center">
              {/* <Button variant="bounce" className="mr-2 font-bold">
                Log-in
              </Button> */}
              <ModeToggle />
            </div>

            <div className="hidden md:block">
              <SearchBar data={categories} products={products} />
            </div>
            <div className="ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open Menu"
              >
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
            <Helpline />
            {/* <ProfileActions /> */}

            <Suspense>
              <NavbarActions />
            </Suspense>
          </div>
        </div>

        <NavbarMenu className="flex flex-col justify-between z-50 h-[100dvh]">
          <div className="space-y-3">
            <NavbarItem className="space-y-4">
              <Accordion type="multiple">
                <span className="text-xs font-semibold text-gray-400 ">
                  Products
                </span>
                {categories.map((item, i) => (
                  <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger>
                      <NavbarMenuItem>
                        <Link href={`/${item.slug}`}>{item.name}</Link>
                      </NavbarMenuItem>
                    </AccordionTrigger>
                    {item.subcategory.map((sub, i) => (
                      <AccordionContent key={i}>
                        <NavbarMenuItem>
                          <Link href={`/${item.slug}/${sub.slug}`}>
                            {sub.name}
                          </Link>
                        </NavbarMenuItem>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="space-y-3">
                <span className="text-xs font-semibold text-gray-400 ">
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
                        "bg-transparent px-0 py-0 text-red-600 h-0"
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
            <NavbarItem>
              <Link href="/about">About us</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact">Contact</Link>
            </NavbarItem>
          </div>
        </NavbarMenu>
      </NextNav>
      <div className="border-b bg-background">
        <DropdownMenu data={categories} />
      </div>
    </>
  );
};

export default Navbar;
