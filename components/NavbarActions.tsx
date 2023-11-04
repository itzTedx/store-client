"use client";

import { useState, useEffect } from "react";
import { ChevronDown, LogIn, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="ml-auto flex items-center gap-x-4">
        <Button
          onClick={() => router.push("/cart")}
          className="flex items-center px-4 py-4"
          variant="ghost"
        >
          <div className="relative">
            <Image src="/icons/cart.svg" height={40} width={40} alt="Cart" />
            <span className="absolute top-0 right-0 text-[10px] font-semibold rounded-full border-sky-500 border-1.5 bg-gray-100 text-black h-4 w-4 flex items-center justify-center">
              -
            </span>
          </div>
          <div className="ml-2 text-sm hidden md:block">
            <p className="text-left ">My Cart</p>
            <div className="flex items-center font-bold">
              -.--AED <ChevronDown size={16} />
            </div>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => router.push("/cart")}
      className="flex items-center md:px-4 py-4"
      variant="ghost"
    >
      <div className="relative">
        <div className="relative h-8 w-8 sm:w-10 sm:h-10">
          <Image src="/icons/cart.svg" fill alt="Cart" />
        </div>
        <span className="absolute top-0 right-0 text-[8px] sm:text-[10px] font-semibold rounded-full border-sky-500 border-1.5 bg-gray-100 text-black h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
          {cart.items.length}
        </span>
      </div>
      <div className="ml-2 text-sm hidden md:block">
        <p className="text-left">My Cart</p>
        <div className="flex items-center font-bold">
          0.00AED <ChevronDown size={16} />
        </div>
      </div>
    </Button>
  );
};

export default NavbarActions;
