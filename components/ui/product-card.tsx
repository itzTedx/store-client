"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingBag, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Link from "next/link";
import { Badge } from "./badge";
import { useIsMounted } from "@/hooks/use-is-mounted";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const isMounted = useIsMounted();

  const handleClick = () => {
    router.push(`/d/${data?.slug}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 flex flex-col justify-between"
    >
      {/* Image & actions */}
      <div className="">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Link href={`/d/${data.slug}`}>
            {data.images && (
              <Image
                src={data.images?.[0]?.url}
                alt=""
                fill
                className="object-cover hover:scale-105 transition rounded-md"
              />
            )}
          </Link>
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton onClick={onPreview} icon={<Expand size={18} />} />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={18} />}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-2">
          <Link
            href={`/d/${data.slug}`}
            className="font-bold hover:text-lime-500 transition"
          >
            {data.name}
          </Link>
          <p className="text-sm text-gray-600 leading-tight line-clamp-2 lg:line-clamp-none text-pretty">
            {data.description}
          </p>
        </div>
      </div>
      {/* Price & Reiew */}
      <div className="flex justify-between items-end">
        <div className="flex gap-1.5 items-center">
          <div className="font-bold">
            <Currency
              value={
                data.discountPrice > 0 ? data.discountPrice : data.actualPrice
              }
            />
          </div>
          {isMounted && data.discountPrice > 0 ? (
            <Badge variant="destructive">
              Save{` `}
              <Currency
                value={data.actualPrice - data.discountPrice}
                fraction={0}
              />
            </Badge>
          ) : null}

          {/* {data.discountPrice ? (
            <div className="text-xs text-muted-foreground line-through">
              <Currency value={data.actualPrice} />
            </div>
          ) : null} */}
        </div>
        {/* <div className="flex items-center gap-2 dark:hover:text-lime-500 hover:text-lime-900 text-sm transition">
          Buy Now
          <div className="p-1.5 bg-lime-300 dark:bg-lime-400 rounded-full text-lime-900 ">
            <ShoppingBag className="w-4 h-4" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
