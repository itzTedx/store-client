"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/modal";
import Gallery from "./gallery";
import Info from "./info";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const PreviewModal = () => {
  const previewModal = usePreviewModal();

  const product = usePreviewModal((state) => state.data);

  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(product!);
  };

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-3 md:gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-5 lg:col-span-6">
          <Gallery images={product.images} alt={product.name} />
        </div>
        <div className="sm:col-span-7 lg:col-span-6 flex flex-col justify-between items-center h-full">
          {/* <Info data={product} category={product.category} /> */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <span></span>
          </div>
          <Button
            onClick={onAddToCart}
            className="px-6 py-3 bg-lime-500 shadow-[0_0_0_1.5px_#000] border-black rounded-full font-bold hover:shadow-[0_0_0_1.5px_#000,0_7px_0_1.5px_#000] hover:translate-y-[-10px] dark:bg-lime-400 dark:text-gray-950 dark:hover:shadow-[0_0_0_1.5px_#404040,0_7px_0_1.5px_#404040] transition-[transform,box-shadow,background] ease-btn-bounce duration-300 w-full md:w-fit text-center active:translate-y-[-5px] active:shadow-[0_0_0_1.3px_#000,0_5px_0_1.5px_#000] gap-2 text-foreground mb-3"
          >
            Add to Cart
            <ShoppingCart size={16} className="stroke-2" />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
