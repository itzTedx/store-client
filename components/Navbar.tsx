import Link from "next/link"
import {
  Navbar as NextNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./NavbarActions"
// import SearchBar from "./search-bar";
import { ModeToggle } from "./mode-toggle"
import { Separator } from "./ui/separator"
import { SearchBar } from "./SearchBarv2"
import { DropdownMenu } from "./dropdown-navbar"

const Navbar = async () => {
  const categories = await getCategories()
  // const allProducts = await getAllProducts()

  // const [open, setOpen] = useState(false)

  return (
    <>
      <NextNav isBordered shouldHideOnScroll height="4rem" maxWidth="2xl">
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/">
              <p className="font-bold text-inherit">DIGITAL DESK</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarBrand>
            <Link href="/">
              <p className="font-bold text-inherit">DIGITAL DESK</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {/* <NavbarContent>
          <NavbarItem className="flex-1 w-full hidden sm:block">
            <SearchBar data={categories} />
          </NavbarItem>
        </NavbarContent> */}

        <NavbarContent className="py-4 gap-2 sm:gap-4" justify="end">
          <NavbarItem className="">
            <ModeToggle />
          </NavbarItem>
          <Separator orientation="vertical" className="h-6 hidden md:flex" />
          <NavbarItem className="hidden md:flex">
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
          <NavbarItem className="">
            <SearchBar data={categories} />
          </NavbarItem>
          <NavbarItem className="sm:hidden">
            <Button variant="ghost" size="icon">
              <NavbarMenuToggle as="div" className="text-sky-500 " />
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="flex flex-col justify-between">
          <div className="space-y-3">
            <NavbarItem className="">
              <SearchBar data={categories} />
            </NavbarItem>
            <Separator />
            <NavbarItem className="space-y-4">
              {categories.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link className="w-full" href={`/category/${item.slug}`}>
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarItem>
          </div>
          <div className="flex justify-between my-16">
            <NavbarItem>Blogs</NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
          </div>
        </NavbarMenu>
      </NextNav>
      <div className="flex">
        <DropdownMenu data={categories} />
        {/* <MainNav data={categories} /> */}
      </div>
    </>
  )
}

export default Navbar
