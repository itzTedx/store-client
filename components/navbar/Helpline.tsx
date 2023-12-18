import Image from "next/image";
import Link from "next/link";
import React from "react";

const Helpline = () => {
  return (
    <Link
      href="tel:+971042520300"
      className="py-2 flex gap-2 hover:bg-foreground-50 px-2 rounded-lg active:scale-95 scale-100 transition shrink-0"
    >
      <div className="w-9 h-9 relative">
        <Image fill src="/icons/helpline.svg" alt="" />
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] lg:text-[10px]">
          We&apos;re here to help:
        </span>
        <span className="text-sm lg:text-base font-bold text-primary-800">
          04 252 0300
        </span>
      </div>
    </Link>
  );
};

export default Helpline;
