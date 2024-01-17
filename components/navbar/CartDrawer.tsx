"use client";

import useCart from "@/hooks/use-cart";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import CartItem from "../CartItem";
import { Button, buttonVariants } from "../ui/button";
import { DrawerClose, DrawerFooter } from "../ui/drawer";
import { useRouter } from "next/navigation";

const CartDrawer = () => {
  const cart = useCart();
  const isMounted = useIsMounted();
  const router = useRouter();

  if (isMounted && cart.items.length === 0) {
    return (
      <>
        <div className="px-4 py-6 md:py-16 sm:px-6 lg:px-8 ">
          <div className="mt-6 grid place-content-center">
            <div className="w-full h-40 relative saturate-0 mx-auto">
              <Image src="/icons/cart.svg" fill alt="" />
            </div>
            <p className="text-lg font-bold text-center mx-auto">
              Looks like you still not added anything
            </p>
            <Link
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "text-muted-foreground mb-6 px-0"
              )}
              href="/shop"
            >
              Explore our wide variety of printing services
            </Link>
          </div>
        </div>
        <DrawerClose asChild className="mx-auto w-full mb-4">
          <Button variant="outline">Continue Shopping</Button>
        </DrawerClose>
      </>
    );
  }
  return (
    <>
      <ul className="p-4 pb-0">
        {isMounted &&
          cart.items.map((data) => <CartItem data={data} key={data.id} />)}
      </ul>
      <DrawerFooter>
        <Button variant="bounce">Checkout</Button>
        <Button onClick={() => router.push("/cart")} variant="outline">
          View Cart
        </Button>
        <DrawerClose asChild>
          <Button variant="outline" size="sm">
            Continue Shopping
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </>
  );
};

export default CartDrawer;
