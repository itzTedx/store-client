import Billboard from "@/components/Billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import { Trusted } from "./_components/Trusted";
import getCategories from "@/actions/get-categories";
import { Suspense } from "react";
import Explore from "./_components/Explore";

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
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-4 max-w-7xl mx-auto">
        <ProductList title="Featured Products" items={products} />
      </div>
      <Suspense fallback={`Loading`}>
        <div className="sm:px-6 lg:px-8 px-4 max-w-7xl mx-auto space-y-4">
          {categories.map(async (categories) => {
            const allProducts = await getProducts({
              categoryId: categories.id,
            });
            return (
              <div key={categories.id}>
                <ProductList title={categories.name} items={allProducts} />
              </div>
            );
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default HomePage;
