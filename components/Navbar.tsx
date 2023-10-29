import Link from "next/link"

import MainNav from "@/components/MainNav"
import Container from "@/components/ui/container"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./NavbarActions"
import SearchBar from "./search-bar"
import getProducts from "@/actions/get-products"

const Navbar = async () => {
  const categories = await getCategories()
  const products = await getProducts({ isFeatured: true })

  return (
    <nav className="sticky top-0 bg-white/60 z-[998] backdrop-blur-lg">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex w-full items-center justify-between pt-4 gap-3">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl ">STORE</p>
          </Link>

          <SearchBar data={products} />
          <NavbarActions />
        </div>
        <hr className="mt-4 block" />
        <MainNav data={categories} />
      </Container>
    </nav>
  )
}

export default Navbar
