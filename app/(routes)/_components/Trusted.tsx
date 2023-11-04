import Image from "next/image";
import React from "react";

export const Trusted = () => {
  return (
    <div className="text-center flex-col py-4 px-4 flex justify-center items-center">
      <h6 className="text-neutral-900 dark:text-neutral-200 font-semibold text-lg mb-4">
        Trusted by These Great Brands
      </h6>
      <div className="grid gap-6 grid-cols-3 md:grid-cols-5 place-content-center">
        <div className="aspect-video relative h-16 m-auto">
          <Image src="/uaefa.svg" fill alt="UAEFA" className="object-contain" />
        </div>
        <div className="aspect-video relative h-9 m-auto">
          <Image src="/KBR.svg" fill alt="UAEFA" />
        </div>
        <div className="aspect-video relative h-12 m-auto">
          <Image src="/khansaheb.svg" fill alt="UAEFA" />
        </div>
        <div className="aspect-video relative h-12 m-auto">
          <Image src="/bosch.svg" fill alt="UAEFA" />
        </div>
        <div className="aspect-video relative h-12 m-auto">
          <Image src="/evonik.svg" fill alt="UAEFA" />
        </div>
      </div>
    </div>
  );
};
