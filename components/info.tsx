"use client";

import { ChevronDown, ShoppingCart } from "lucide-react";

import { Category, Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { toPlural } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface InfoProps {
  data: Product;
  category: Category;
}

const Info = ({ data, category }: InfoProps) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
    console.log(data);
  };

  return (
    <div className="space-y-3 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold dark:text-gray-200 text-gray-900">
        {data.name}
      </h1>
      <p className="text-muted-foreground font-light">{data.description}</p>

      <section className="bg-foreground-100 rounded-md border p-6 sm:p-9 space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold">Size:</h3>
          <div className="border rounded-md bg-background px-4 py-3 flex justify-between items-center">
            <p>{data?.size?.name}</p>
            <ChevronDown />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Quantity:</h3>
          <div className="border border-lime-400 bg-background px-4 py-2 rounded-md w-fit">
            {data?.quantity?.name}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Lamination:</h3>
          <div className="border px-4 py-3 rounded-md">Matte</div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">Timeframe:</h3>
          <div className="border px-4 py-3 rounded-md">
            {data?.timeFrame} {toPlural("Working Day", data?.timeFrame)}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Category:</h3>
          <div>{data?.subcategory?.name}</div>
        </div>
        <div className="flex justify-between">
          <div className="">- 1 +</div>
          <div className="flex gap-3">
            {data.discountPrice > 0 ? (
              <Badge variant="destructive">
                Save{` `}
                <Currency
                  value={data.actualPrice - data.discountPrice}
                  fraction={0}
                />
              </Badge>
            ) : null}

            <h6 className="font-bold">
              <Currency
                value={
                  data.discountPrice > 0 ? data.discountPrice : data.actualPrice
                }
              />
            </h6>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <Button
            onClick={onAddToCart}
            className="rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white hover:opacity-90 transition flex items-center gap-2 w-full text-lg font-semi-bold"
          >
            Add to Cart
            <ShoppingCart size={16} className="stroke-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Info;
