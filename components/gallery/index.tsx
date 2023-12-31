"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div>
      <Tab.Group as="div" className="flex flex-col-reverse">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          {images.length > 1 ? (
            <Tab.List className="grid grid-cols-4 gap-6">
              {images.map((image) => (
                <GalleryTab key={image.id} image={image} />
              ))}
            </Tab.List>
          ) : (
            ""
          )}
        </div>
        <Tab.Panels className="aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3] w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id}>
              <div className="aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3] relative h-full w-full sm:rounded-lg overflow-hidden">
                <Image
                  fill
                  src={image.url}
                  alt="Images"
                  className="object-cover object-center"
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Gallery;
