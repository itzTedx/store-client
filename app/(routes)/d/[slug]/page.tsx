import getCategory from "@/actions/get-category";
import getProduct from "@/actions/get-product";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductTab from "../../_components/ProductTab";
import { Faq } from "../../_components/Faq";
import Image from "next/image";
import PopularProduct from "@/components/PopularProduct";

interface ProductPageProps {
  params: {
    slug: string;
  };
}
export const revalidate = 300;

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.slug);
  const category = await getCategory(params.slug);

  const suggestedProducts = product.subcategory.products;

  return (
    <div className="bg-background">
      <div className="px-4 py-10 sm:px-6 lg:px-8 container space-y-12">
        {/* <Breadcrumb page={category.subcategory} /> */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:items-start md:gap-x-8 pb-12 relative">
          <div className="md:sticky md:top-12 lg:col-span-2">
            <Gallery images={product.images} />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
            <Info data={product} />
          </div>
        </div>
        <ProductTab />
        <section className="grid md:grid-cols-3 md:gap-9 gap-y-9 py-12 sm:py-32 max-w-6xl mx-auto">
          <div className="p-6 bg-sky-100 h-fit">
            <Image
              src="/icons/airplane.svg"
              height={60}
              width={60}
              alt="Contact"
            />
            <h5 className="font-glirock text-2xl">We're here to help</h5>
            <p>Contact our customer service team for any questions you have.</p>
          </div>
          <Faq />
        </section>
        <PopularProduct />
        <ProductList
          title="Related products you may like"
          items={suggestedProducts}
        />
      </div>
    </div>
  );
};

export default ProductPage;
