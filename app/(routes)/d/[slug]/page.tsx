import getCategory from "@/actions/get-category";
import getProduct from "@/actions/get-product";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.slug);
  const category = await getCategory(params.slug);

  const suggestedProducts = product.subcategory.products;

  console.log(category);

  return (
    <div className="bg-background">
      <div className="px-4 py-10 sm:px-6 lg:px-8 container">
        {/* <Breadcrumb page={category.subcategory} /> */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:items-start md:gap-x-8 pb-12 relative">
          <div className="md:sticky md:top-12 lg:col-span-2">
            <Gallery images={product.images} />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
            <Info data={product} />
          </div>
        </div>

        <ProductList
          title="Related products you may like"
          items={suggestedProducts}
        />
      </div>
    </div>
  );
};

export default ProductPage;
