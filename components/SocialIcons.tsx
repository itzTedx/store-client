"use client";

import useResponsive from "@/hooks/use-responsive";
import { Magnetic } from "./ui/Magnetic";
import { Facebook, Instagram, Pin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export const SocialIcons = () => {
  const isSmallerThan600 = useResponsive(600);
  return (
    <>
      {isSmallerThan600 ? (
        <div className="flex gap-3 text-white">
          <Link
            href="/"
            className="aspect-square bg-[#1877F2] rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8"
          >
            <Facebook />
          </Link>

          <Link
            href="/"
            className="aspect-square bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600 rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8"
          >
            <Instagram />
          </Link>

          <Link
            href="/"
            className="aspect-square bg-[#CB2027] rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8"
          >
            <Pin />
          </Link>

          <Link
            href="/"
            className="aspect-square bg-white text-black rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8"
          >
            <Twitter />
          </Link>

          <Link
            href="/"
            className="aspect-square bg-[#B00] rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8"
          >
            <Youtube />
          </Link>
        </div>
      ) : (
        <div className="flex gap-3 text-white">
          <Magnetic>
            <div className="aspect-square bg-[#1877F2] rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8">
              <Facebook />
            </div>
          </Magnetic>
          <Magnetic>
            <div className="aspect-square bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600 rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8">
              <Instagram />
            </div>
          </Magnetic>
          <Magnetic>
            <div className="aspect-square bg-[#CB2027] rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8">
              <Pin />
            </div>
          </Magnetic>
          <Magnetic>
            <div className="aspect-square bg-white text-black rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8">
              <Twitter />
            </div>
          </Magnetic>
          <Magnetic>
            <div className="aspect-square bg-[#B00] rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8">
              <Youtube />
            </div>
          </Magnetic>
        </div>
      )}
    </>
  );
};
