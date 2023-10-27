"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "./currency";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt={data.name}
          title={data.name}
          fill
          className="object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute w-full px-6 bottom-5 transition-opacity">
          <div className="flex gap-x-4 justify-center">
            <IconButton onClick={onPreview} icon={<Expand size={20} />} />
            <IconButton onClick={() => {}} icon={<ShoppingCart size={20} />} />
          </div>
        </div>
      </div>
      <div>
        <Link href={`/product/${data?.id}`}>
          <p className="font-semibold text-lg">{data.name}</p>
        </Link>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
