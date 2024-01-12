"use client";

import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Skeleton from "@/components/ui/skeleton";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

interface PopularProductProps {
  className?: string;
  data: Product[];
}

const PopularProduct = ({ className, data }: PopularProductProps) => {
  const isMounted = useIsMounted();

  return (
    <div className="container px-3">
      <h3 className={cn("py-6 text-3xl text-center font-glirock", className)}>
        Our Popular Products
      </h3>

      {isMounted ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {data.map((product, i) => (
            <SwiperSlide
              key={i}
              className="transition-all rounded-md overflow-hidden"
            >
              <Link
                className="flex aspect-square cursor-grab active:cursor-grabbing select-none flex-col justify-end bg-background/20 sm:bg-transparent bg-gradient-to-b from-background/0 via-background/0 hover:via-background/20 to-background/40 hover:to-background/80 p-2 md:p-4 lg:p-6 no-underline outline-none focus:shadow-md relative overflow-hidden group"
                href={`/d/${product.slug}`}
              >
                <Image
                  src={product.images[0].url}
                  alt={product.name}
                  fill
                  className="object-cover -z-50 scale-100 group-hover:scale-105 transition-all"
                />

                <div className="justify-start">
                  <div className="mb-1.5 sm:text-lg leading-tight font-bold hover:text-primary transition-colors">
                    {product.name}
                  </div>
                  <p className="text-[12px] sm:text-sm font-medium text-foreground-700 line-clamp-2 md:line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        //Loader
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Skeleton className="aspect-square" />
          <Skeleton className="aspect-square" />
          <Skeleton className="aspect-square lg:block hidden" />
          <Skeleton className="aspect-square lg:block hidden" />
        </div>
      )}
    </div>
  );
};

export default PopularProduct;
