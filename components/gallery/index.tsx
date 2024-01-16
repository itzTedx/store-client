"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
  alt: string;
}

const Gallery = ({ images, alt }: GalleryProps) => {
  return (
    <div>
      <Tab.Group as="div" className="flex flex-col-reverse">
        {images.length > 1 ? (
          <div className="mx-auto my-4 xl:my-6 w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-3 xl:gap-6">
              {images.map((image) => (
                <GalleryTab key={image.id} image={image} />
              ))}
            </Tab.List>
          </div>
        ) : (
          ""
        )}
        <Tab.Panels className="w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id}>
              <div
                className="aspect-[4/3] sm:aspect-square lg:aspect-[4/3] relative h-full w-full rounded-lg overflow-hidden"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <Image
                  fill
                  itemProp="contentUrl"
                  src={image.url}
                  alt={alt}
                  className="object-cover object-center"
                  quality={75}
                />
                <span itemProp="creditText" className="hidden">
                  Digital Desk
                </span>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Gallery;
