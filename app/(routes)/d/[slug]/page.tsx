import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbList, Product, WithContext } from "schema-dts";

import getAllProducts from "@/actions/get-all-products";
import getCategoryById from "@/actions/get-category-by-id";
import getFeaturedProducts from "@/actions/get-featured-products";
import getProduct from "@/actions/get-product";
import PopularProduct from "@/app/(routes)/_components/PopularProduct";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Faq } from "../../_components/Faq";
import ProductTab from "../../_components/ProductTab";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 300;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => product.slug);
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.slug);
  const popular = await getFeaturedProducts({ isFeatured: true });
  if (!product) return notFound();

  const category = await getCategoryById(product.subcategory.categoryId);

  const suggestedProducts = product.subcategory.products.slice(0, 4);

  //JSON-LD
  const jsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: category.name,
        item: `${process.env.BASE_URL}/${category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.subcategory.name,
        item: `${process.env.BASE_URL}/${product.subcategory.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
      },
    ],
  };

  return (
    <div className="bg-background">
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 sm:px-6 lg:px-8 container space-y-4 md:space-y-12 mb-9">
        <Breadcrumb
          page={category}
          subPage={product.subcategory}
          product={product}
        />
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:items-start md:gap-x-8 pb-12 relative">
          <div className="md:sticky md:top-12 lg:col-span-2">
            <Gallery images={product.images} />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
            <Info data={product} category={category} />
          </div>
        </div>
        <ProductTab />
        <section className="grid md:grid-cols-3 md:gap-9 gap-y-9 py-12 sm:py-32 max-w-6xl mx-auto">
          <div className="p-6 bg-primary-50 h-fit">
            <Image
              src="/icons/airplane.svg"
              height={60}
              width={60}
              alt="Contact"
              className="mb-2"
            />
            <h5 className="font-glirock text-2xl">Were here to help</h5>
            <p>Contact our customer service team for any questions you have.</p>
          </div>
          <Faq />
        </section>
        <PopularProduct data={popular} className="text-left" />
        <div className="container px-3 py-9">
          <ProductList
            title="Related products you may like"
            items={suggestedProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
