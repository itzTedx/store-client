import getCategory from "@/actions/get-category";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import getSubcategory from "@/actions/get-subcategory";
import ProductList from "@/components/ProductList";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductCard from "@/components/ui/product-card";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface SubCategoryPageProps {
  params: {
    slug: string;
    subcategorySlug: string;
  };
}

export async function generateMetadata({
  params,
}: SubCategoryPageProps): Promise<Metadata> {
  // fetch data
  const subcategory = await getSubcategory(params.subcategorySlug);
  const category = await getCategory(params.slug);

  if (!category) {
    notFound();
  }

  return {
    title: `${subcategory.name} - ${category.name}`,
    description: subcategory.description,
  };
}

export const revalidate = 300;

const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  // fetch data
  const subcategory = await getSubcategory(params.subcategorySlug);
  const category = await getCategory(params.slug);

  return (
    <div className="container mx-auto space-y-6 mb-9">
      <Breadcrumb page={category} subPage={subcategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategory.products.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
