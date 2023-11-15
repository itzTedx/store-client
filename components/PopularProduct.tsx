import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { popularProducts } from "@/constants/popular-products";

const PopularProduct = () => {
  return (
    <div className="container grid grid-cols-4 gap-3">
      <h3 className="col-span-4 py-3 text-3xl text-center font-glirock">
        Our Popular Products
      </h3>
      {popularProducts.map((product, i) => (
        <div
          key={i}
          className="bg-foreground-100 rounded-lg p-6 flex justify-between flex-col relative hover:bg-lime-200 transition"
        >
          <div>
            <h5 className="font-bold md:text-3xl">{product.title}</h5>
            <p className="">{product.description}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="justify-start w-fit px-4"
          >
            <Link href={product.href}>Buy</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PopularProduct;
