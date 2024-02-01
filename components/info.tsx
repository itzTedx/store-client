"use client";

import { ChevronDown, ShoppingCart } from "lucide-react";

import { Category, Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { toPlural } from "@/lib/utils";
import { Badge } from "./ui/badge";
import useCartDrawer from "@/store/use-cart-drawer";
import Link from "next/link";

interface InfoProps {
  data: Product;
  category: Category;
}

const Info = ({ data, category }: InfoProps) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
    // useCartDrawer((state) => state.isOpen);
  };

  return (
    <div className="space-y-3">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">
        {data.name}
      </h1>
      <p className="text-muted-foreground text-pretty">{data.description}</p>
      <div className="flex gap-3 items-center pb-3 sm:pb-9">
        <span className="font-bold text-2xl">
          <Currency
            value={
              data.discountPrice > 0 ? data.discountPrice : data.actualPrice
            }
          />
        </span>
        {data.discountPrice > 0 ? (
          <Badge variant="destructive">
            Save{` `}
            <Currency
              value={data.actualPrice - data.discountPrice}
              fraction={0}
            />
          </Badge>
        ) : null}
      </div>

      <section className="bg-foreground-100 rounded-md border p-6 sm:p-9 space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold">Size:</h3>
          <div className="border rounded-md bg-background px-4 py-3 flex justify-between items-center">
            <p>
              {data?.size?.name} - {data.size.value}
            </p>
            {/* <ChevronDown /> */}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Quantity:</h3>
          <div className="border border-lime-400 bg-background px-4 py-2 rounded-md w-fit">
            {data?.quantity?.name}
          </div>
        </div>
        {/* <div className="space-y-3">
          <h3 className="font-semibold">Lamination:</h3>
          <div className="border px-4 py-3 rounded-md">Matte</div>
        </div> */}
        <div className="space-y-4">
          <h3 className="font-semibold">Timeframe:</h3>
          <div className="border px-4 py-3 rounded-md">
            {data?.timeFrame} {toPlural("Working Day", data?.timeFrame)}
          </div>
        </div>
        {/* <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Category :</h3>
          <div>{data?.subcategory?.name}</div>
        </div> */}
        {/* <div className="flex justify-end">
         <div className="">- 1 +</div>
          <div className="flex gap-3">
            {data.discountPrice > 0 ? (
              <Badge variant="destructive" className="h-fit my-auto">
                Save{` `}
                <Currency
                  value={data.actualPrice - data.discountPrice}
                  fraction={0}
                />
              </Badge>
            ) : null}

            <h6 className="font-bold text-2xl">
              <Currency
                value={
                  data.discountPrice > 0 ? data.discountPrice : data.actualPrice
                }
              />
            </h6>
          </div>
        </div> */}

        <div className="flex items-center flex-col-reverse justify-center gap-3">
          <Button
            variant="link"
            onClick={onAddToCart}
            className="transition gap-2 font-semibold px-0"
            asChild
          >
            <Link href={`/`} title="Enquire in Whatsapp">
              Enquire in Whatsapp
            </Link>
          </Button>
          <Button
            variant="bounce"
            onClick={onAddToCart}
            className=" transition gap-2 font-semibold"
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
