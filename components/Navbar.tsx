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

import { Button } from "@/components/ui/button";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./NavbarActions";
import SearchBar from "./search-bar";
import getProducts from "@/actions/get-products";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";

const Navbar = async () => {
  const categories = await getCategories();
  const products = await getProducts({ isFeatured: true });

  return (
    <NextNav isBordered shouldHideOnScroll height="4rem">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit">DIGITAL DESK</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand className="w-fit">
          <Link href="/">
            <p className="font-bold text-inherit">DIGITAL DESK</p>
          </Link>
        </NavbarBrand>
        <NavbarItem className="flex-1">
          <SearchBar data={products} />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="py-4">
        <NavbarItem className="hidden lg:flex">
          <ModeToggle />
        </NavbarItem>
        <Separator orientation="vertical" className="h-6 hidden lg:flex" />
        <NavbarItem className="hidden lg:flex">
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
        </NavbarItem>
        <NavbarItem>
          <NavbarActions />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem className="">
          <SearchBar data={products} />
        </NavbarItem>
        <Separator />
        {categories.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={`/category/${item.id}`}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <ModeToggle />
      </NavbarMenu>
    </NextNav>
    // <nav className="sticky top-0 bg-white/60 z-[998] backdrop-blur-lg">
    //   <Container>
    //     <div className="relative px-4 sm:px-6 lg:px-8 flex w-full items-center justify-between pt-4 gap-3">
    //       <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
    //         <p className="font-bold text-xl ">STORE</p>
    //       </Link>

    //       <SearchBar data={products} />
    //       <NavbarActions />
    //     </div>
    //     <hr className="mt-4 block" />
    //     <MainNav data={categories} />
    //   </Container>
    // </nav>
  );
};

export default Navbar;
