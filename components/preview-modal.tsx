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
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7 space-y-3">
          {/* <Info data={product} /> */}
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="font-light">{product.description}</p>
          <Button
            onClick={onAddToCart}
            className="rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white hover:opacity-90 transition flex items-center gap-2 w-full text-lg font-semi-bold"
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
