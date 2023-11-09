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
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="col-span-2 sm:col-auto">
            <p className="font-bold text-inherit">DIGITAL DESK</p>
          </Link>
          <div className="sm:order-1 ml-auto">
            <SearchBar data={categories} />
          </div>
          <div className="flex items-center gap-x-4 sm:order-2 ml-auto">
            <ModeToggle />
            <Separator orientation="vertical" className="h-6 hidden md:flex" />
            <div className="hidden md:flex sm:order-3">
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
            <div className="sm:order-4">
              <NavbarActions />
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <Button variant="ghost" size="icon" className="md:hidden">
            <NavbarMenuToggle as="div" className="text-sky-500 " />
          </Button>
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
            <NavbarItem>Blogs</NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
          </div>
        </NavbarMenu>
      </NextNav>
      <div className="flex bg-background">
        <DropdownMenu data={categories} />
      </div>
    </>
  );
};

export default Navbar;
