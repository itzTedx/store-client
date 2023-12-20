"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { Product } from "@/types";
import IconButton from "./ui/icon-button";
import useCart from "@/hooks/use-cart";
import Currency from "./ui/currency";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <>
      <li className="py-6 border-b last:border-b-0 first:pt-0">
        <div className="grid grid-cols-4 sm:grid-cols-3 sm:gap-6">
          <div className="aspect-square relative">
            <Image
              fill
              src={data.images[0].url}
              alt={data.name}
              className="object-cover rounded-md"
            />
          </div>
          <div className="col-span-2 sm:col-span-1 space-y-2 sm:space-y-3 flex flex-col justify-between px-3 sm:px-0 sm:py-4">
            <div className="flex flex-col">
              <Badge variant="outline" className="w-fit">
                {data.subcategory?.name}
              </Badge>
              <Link href={`/d/${data.slug}`} className="text-lg font-bold">
                {data.name}
              </Link>

              <div className="mt-1 flex text-sm gap-3 ">
                <p className="text-gray-500 shrink-0">
                  Quantity: {data.quantity?.name}
                </p>
                <Separator orientation="vertical" className="h-5" />
                <p className="text-gray-500 shrink-0">
                  Size: {data?.size?.value}
                </p>
              </div>
            </div>
            <Currency value={data.discountPrice} />
          </div>
          <div className="justify-self-end">
            <IconButton icon={<X />} onClick={onRemove} />
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
