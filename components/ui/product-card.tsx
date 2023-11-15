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

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

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
                className="object-cover hover:scale-105 transition"
              />
            )}
          </Link>
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton onClick={onPreview} icon={<Expand size={20} />} />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={20} />}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-3">
          <Link
            href={`/d/${data.slug}`}
            className="font-bold hover:text-lime-500 transition"
          >
            {data.name}
          </Link>
          <p className="text-sm text-gray-600 line-clamp-2 lg:line-clamp-none">
            {data.description}
          </p>
        </div>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center gap-2 dark:hover:text-lime-600 hover:text-lime-900 font-medium transition">
        Buy Now
        <div className="p-2 bg-lime-300 dark:bg-lime-400 rounded-full text-lime-900 ">
          <ShoppingBag size={13} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
