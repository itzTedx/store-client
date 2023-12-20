"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Skeleton from "@/components/ui/skeleton";
import { popularProducts } from "@/constants/popular-products";
import { cn } from "@/lib/utils";

interface PopularProductProps {
  className?: string;
}

const PopularProduct = ({ className }: PopularProductProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
          {popularProducts.map((product, i) => (
            <SwiperSlide
              key={i}
              className="transition-all rounded-md overflow-hidden"
            >
              <Link
                className="flex aspect-square cursor-grab active:cursor-grabbing select-none flex-col justify-end bg-background/20 sm:bg-transparent bg-gradient-to-b from-background/0 via-background/0 hover:via-background/20 to-background/40 hover:to-background/80 p-6 no-underline outline-none focus:shadow-md relative overflow-hidden group"
                href="/"
              >
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-cover -z-50 scale-100 group-hover:scale-105 transition-all"
                />

                <Link href={product.href} className="justify-start">
                  <div className="mb-1.5 sm:text-lg leading-tight font-bold hover:text-primary transition-colors">
                    {product.title}
                  </div>
                  <p className="text-[12px] sm:text-sm font-medium text-foreground-700">
                    {product.description}
                  </p>
                </Link>
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
