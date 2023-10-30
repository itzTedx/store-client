import Image from "next/image";
import React from "react";

export const Trusted = () => {
  return (
    <div className="text-center flex-col py-6 flex justify-center items-center">
      <h6 className="text-neutral-900 font-semibold text-lg py-4">
        Trusted by These Great Brands
      </h6>
      <div className="grid grid-flow-col gap-6 ">
        <div className="aspect-video relative h-16">
          <Image src="/uaefa.svg" fill alt="UAEFA" className="object-contain" />
        </div>
        <div className="aspect-video relative h-9">
          <Image src="/KBR.svg" fill alt="UAEFA" />
        </div>
        <div className="aspect-video relative h-12">
          <Image src="/khansaheb.svg" fill alt="UAEFA" />
        </div>
        <div className="aspect-video relative h-12">
          <Image src="/bosch.svg" fill alt="UAEFA" />
        </div>
        <div className="aspect-video relative h-12">
          <Image src="/evonik.svg" fill alt="UAEFA" />
        </div>
      </div>
    </div>
  );
};
