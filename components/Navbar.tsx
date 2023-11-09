import Link from "next/link";
import {
  Navbar as NextNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./NavbarActions";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import { SearchBar } from "./SearchBarv2";
import { DropdownMenu } from "./dropdown-navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = async () => {
  const categories = await getCategories();
  // const allProducts = await getAllProducts()

  return (
    <>
      <NextNav isBordered shouldHideOnScroll height="4rem" maxWidth="xl">
        <div className="flex md:justify-between items-center w-full gap-3">
          <Link href="/" className="col-span-2 sm:col-auto relative h-14 w-44">
            <Image
              src="/digitaldesk.svg"
              fill
              alt="Digital Desk Logo"
              className="object-contain"
            />
          </Link>
          <div className="ml-auto flex gap-x-3">
            <div className="md:hidden">
              <ModeToggle />
            </div>
            <SearchBar data={categories} />
            <div className="ml-auto">
              <Button variant="ghost" size="icon" className="md:hidden">
                <NavbarMenuToggle as="div" className="text-sky-500 " />
              </Button>
            </div>
          </div>
          <div className="items-center gap-x-4 ml-auto hidden md:flex">
            <ModeToggle />
            <Separator orientation="vertical" className="h-6" />
            <div className="hidden md:flex">
              <Image
                src="/icons/account.svg"
                width={40}
                height={40}
                alt="My Account"
              />
              <div className="ml-2">
                <p className="text-sm">Hello, Digital</p>
                <Button variant="ghost" className="p-0 h-auto font-bold">
                  My Account <ChevronDown size={16} />
                </Button>
              </div>
            </div>
            <div className="">
              <NavbarActions />
            </div>
          </div>
        </div>

        <NavbarMenu className="flex flex-col justify-between">
          <div className="space-y-3">
            <NavbarItem className="space-y-4">
              <Accordion type="multiple">
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
      <div className="bg-background border-b">
        <DropdownMenu data={categories} />
      </div>
    </>
  );
};

export default Navbar;
