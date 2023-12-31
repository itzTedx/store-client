"use client";

import { useState } from "react";

import { Quantity, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Quantity[];
}

const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 md:hidden">
        Filters
        <Plus size={20} />
        <Dialog
          open={open}
          as="div"
          className="relative z-50 lg:hidden"
          onClose={onClose}
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={20} />} onClick={onClose} />
              </div>
              <div className="p-4">
                <Filter valueKey="sizeId" data={sizes} name="Sizes" />
                <Filter valueKey="colorId" data={colors} name="Colors" />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Button>
    </>
  );
};

export default MobileFilters;
