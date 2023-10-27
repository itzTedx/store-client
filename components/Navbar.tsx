import Link from "next/link";

import MainNav from "@/components/MainNav";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./NavbarActions";
import MobMainNav from "./MobMainNav";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex w-full items-center justify-between mt-4">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl ">STORE</p>
          </Link>
          <MainNav data={categories} />

          <NavbarActions />
        </div>
        <hr className="my-4 block sm:hidden" />
        <MobMainNav data={categories} />
      </Container>
    </div>
  );
};

export default Navbar;
