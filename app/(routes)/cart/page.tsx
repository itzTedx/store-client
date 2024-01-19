"use client";

import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import IconButton from "@/components/ui/icon-button";
import Skeleton from "@/components/ui/skeleton";
import useCart from "@/hooks/use-cart";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import { ArrowLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const cart = useCart();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <Container>
        <div className="px-4 py-6 md:py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold flex gap-x-2 items-center">
            Shopping Cart
            <Loader2 className="w-6 h-6 stroke-2 animate-spin text-primary-800" />
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7 pb-6">
              <Skeleton className="h-24 w-24 rounded-md sm:h-40 sm:w-40" />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (isMounted && cart.items.length === 0)
    return (
      <Container>
        <div className="px-4 py-6 md:py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold flex gap-x-2">
            Empty Shopping Cart
          </h1>
          <div className="mt-12 grid place-content-center">
            <div className="w-full h-40 relative saturate-0 mx-auto">
              <Image src="/icons/cart.svg" fill alt="" />
            </div>
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
      </Container>
    );

  return (
    <Container>
      <div className="px-4 py-6 md:py-16 sm:px-6 lg:px-8">
        <div className="flex gap-2 items-center">
          <IconButton
            icon={<ArrowLeft className="w-5 h-5" />}
            onClick={() => router.back()}
            className="block md:hidden"
          />

          <h1 className="text-2xl font-bold flex gap-x-2">
            Shopping Cart
            {isMounted && cart.items.length > 0 && (
              <span>
                {"("}
                {cart.items.length}
                {")"}
              </span>
            )}
          </h1>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            <ul>
              {isMounted &&
                cart.items.map((data) => (
                  <CartItem data={data} key={data.id} />
                ))}
            </ul>
          </div>

          <Summary />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
