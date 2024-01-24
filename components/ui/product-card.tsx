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
        <div className="aspect-[4/3] relative rounded-md overflow-hidden">
          <Link href={`/d/${data.slug}`}>
            {data.images && (
              <Image
                src={data.images?.[0]?.url}
                alt={data.name}
                title={data.name}
                fill
                className="object-cover hover:scale-105 transition "
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
            title={data.name}
          >
            {data.name}
          </Link>
          <p className="text-sm text-gray-600 leading-tight line-clamp-2 lg:line-clamp-none text-pretty">
            {data.description}
          </p>
        </div>
      </div>
      {/* Price & Reiew */}
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5 items-center">
          <div className="font-bold">
            <Currency
              value={
                data.discountPrice > 0 ? data.discountPrice : data.actualPrice
              }
            />
          </div>

          {isMounted && data.discountPrice > 0 ? (
            <Badge variant="destructive" className="">
              <span className="sm:mr-1 hidden sm:block tracking-tighter">
                Save
              </span>
              <div className="line-through sm:no-underline tracking-tight">
                <Currency
                  value={data.actualPrice - data.discountPrice}
                  fraction={0}
                />
              </div>
            </Badge>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
