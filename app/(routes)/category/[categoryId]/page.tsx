import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import { Metadata } from "next";

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  // read route params
  const id = params.slug;

  // fetch data
  const category = await getCategory(params.slug);

  return {
    title: category.name,
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  // const products = await getProducts({{
  //   slug: params.slug
  // }})
  // const totalProduct = await getProducts({
  //   categoryId: params.categoryId,
  // })
  // const sizes = await getSizes()
  // const colors = await getColors()
  // const categories = await getCategory(params.categoryId)

  return (
    <div className="bg-white">
      {/* <Container>
        <Billboard data={categories.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters colors={colors} sizes={sizes} />
            <div className="hidden sm:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <div className="hidden lg:flex lg:justify-end w-full">
                Showing results {products.length} of {totalProduct.length}
                <hr className="my-4" />
              </div>
              {products.length === 0 && <NoResults />}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((data) => (
                  <ProductCard data={data} key={data.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container> */}
    </div>
  );
};

export default CategoryPage;
