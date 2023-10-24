import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <p>{data.description}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />

      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Size:</h3>
        <div>{data?.size?.name}</div>
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Color:</h3>
        <div
          className="h-6 w-6 rounded-full"
          style={{ backgroundColor: data?.color?.value }}
        />
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Category:</h3>
        <div>{data?.category?.name}</div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white hover:opacity-75 transition flex items-center gap-2">
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
