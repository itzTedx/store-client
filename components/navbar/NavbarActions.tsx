"use client";

import { useState, useEffect } from "react";
import { ChevronDown, LogIn, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Currency from "../ui/currency";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const items = cart.items.map((item) => item);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.discountPrice);
  }, 0);

  if (!isMounted) {
    return (
      <>
        <Button
          onClick={() => router.push("/cart")}
          className="hidden sm:flex items-center md:px-4 py-4"
          variant="ghost"
          aria-label="cart"
        >
          <div className="relative">
            <div className="relative h-8 w-8 sm:w-10 sm:h-10">
              <Image src="/icons/cart.svg" fill alt="Cart" />
            </div>
            <span className="absolute top-0 right-0 text-[8px] sm:text-[10px] font-semibold rounded-full border-sky-500 border-1.5 bg-gray-100 text-black h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
              -
            </span>
          </div>
          <div className="ml-2 text-sm hidden md:block">
            <p className="text-left">My Cart</p>
            <div className="flex items-center font-bold">
              -.--AED <ChevronDown size={16} />
            </div>
          </div>
        </Button>
        {/* <Button
          onClick={() => router.push("/cart")}
          className="flex sm:hidden items-center md:px-4 py-4"
          variant="ghost"
          size="icon"
        >
          <div className="relative">
            <div className="relative h-8 w-8 sm:w-10 sm:h-10">
              <Image src="/icons/cart.svg" fill alt="Cart" />
            </div>
            <span className="absolute top-0 right-0 text-[8px] sm:text-[10px] font-semibold rounded-full border-sky-500 border-1.5 bg-gray-100 text-black h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
              {cart.items.length}
            </span>
          </div>
        </Button> */}
      </>
    );
  }

  return (
    <>
      <Button
        onClick={() => router.push("/cart")}
        className="hidden sm:flex items-center md:px-2 py-4"
        variant="ghost"
        aria-label="Cart"
      >
        <div className="relative">
          <div className="relative h-8 w-8 sm:w-10 sm:h-10">
            <Image src="/icons/cart.svg" fill alt="Cart" aria-hidden />
          </div>
          <span
            className="absolute top-0 right-0 text-[8px] sm:text-[10px] font-semibold rounded-full border-sky-500 border-1.5 bg-gray-100 text-black h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center"
            aria-label={`${cart.items.length} ${
              cart.items.length > 1 ? "items" : "item"
            } in the cart`}
          >
            {cart.items.length}
          </span>
        </div>
        <div className="ml-2 text-sm hidden md:block">
          <p className="text-left" aria-hidden>
            My Cart
          </p>
          <div
            className="flex items-center font-bold"
            aria-label={cart.items.length ? "Total Amount in cart" : ""}
          >
            <Currency value={totalPrice} />
            {/* <ChevronDown size={16} /> */}
          </div>
        </div>
      </Button>
      {/* <Button
        onClick={() => router.push("/cart")}
        className="flex sm:hidden items-center md:px-4 py-4"
        variant="ghost"
        size="icon"
      >
        <div className="relative">
          <div className="relative h-8 w-8 sm:w-10 sm:h-10">
            <Image src="/icons/cart.svg" fill alt="Cart" />
          </div>
          <span className="absolute top-0 right-0 text-[8px] sm:text-[10px] font-semibold rounded-full border-sky-500 border-1.5 bg-gray-100 text-black h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
            {cart.items.length}
          </span>
        </div>
      </Button> */}
    </>
  );
};

export default NavbarActions;
