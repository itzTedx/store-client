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
import Link from "next/link";
import Breadcrumb from "@/components/ui/breadcrumb";

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
  // fetch data
  const category = await getCategory(params.slug);

  return {
    title: category.billboard.label,
    description: category.billboard.description,
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const category = await getCategory(params.slug);

  return (
    <>
      <Billboard data={category.billboard} />
      <div className="container mx-auto py-12">
        <Breadcrumb page={category.name} />
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {category.subcategory.map((sub) => (
            <Link
              href={`/category/${sub.slug}`}
              className="group cursor-pointer space-y-4 flex flex-col justify-between"
              key={sub.id}
            >
              <div className="">
                <div className="aspect-[4/3] bg-gray-100 relative"></div>

                {/* Description */}
                <div className="mt-3">
                  <p className="font-semibold">{sub.name}</p>
                  <p className="text-sm text-foreground-500 line-clamp-2 lg:line-clamp-none text-light">
                    {sub.description}
                  </p>
                </div>
              </div>
            </Link>
            // <div key={sub.id}>{sub.name}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
