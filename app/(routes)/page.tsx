import Billboard from "@/components/Billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import { Trusted } from "./_components/Trusted";
import getCategories from "@/actions/get-categories";
import Explore from "./_components/Explore";
import { Fragment } from "react";

export const revalidate = 30;

const HomePage = async () => {
  const billboard = await getBillboard("90f88b2f-7192-4d66-ae65-9fc4170773d9");
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <div className="space-y-10 pb-10">
      <div>
        <Billboard data={billboard} />
        <div className="md:-mt-6 relative z-50 mt-6">
          <Explore />
        </div>
      </div>
      <Trusted />
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-4 container mx-auto">
        <ProductList title="Featured Products" items={products} />
      </div>
      <div className="sm:px-6 lg:px-8 px-4 container mx-auto space-y-12">
        {categories.slice(0, 2).map((category) => (
          <div key={category.id}>
            <ProductList
              title={category.name}
              items={category.product}
              link={category.id}
            />
          </div>
        ))}
        <div className="w-full h-96 bg-lime-300 grid place-content-center rounded-lg">
          Our Popular Products
        </div>
        {categories.slice(3, categories.length).map((category) => (
          <div key={category.id}>
            <ProductList
              title={category.name}
              items={category.product}
              link={category.id}
            />
          </div>
        ))}
        <div>
          <h2 className="text-2xl font-bold">Splash of Colors</h2>
          Blogs
        </div>
        <div className="max-w-6xl h-80 bg-[#102A2B] rounded-lg mx-auto"></div>
      </div>
    </div>
  );
};

export default HomePage;
