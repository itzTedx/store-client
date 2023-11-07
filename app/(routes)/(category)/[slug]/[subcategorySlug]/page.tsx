import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getSubcategory from "@/actions/get-subcategory";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Metadata } from "next";

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

  return {
    title: `${subcategory.name} - ${category.name}`,
    description: subcategory.description,
  };
}

const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  // fetch data
  const subcategory = await getSubcategory(params.subcategorySlug);
  const category = await getCategory(params.slug);
  const products = await getProducts(subcategory.id);

  console.log(products);

  return (
    <div className="container mx-auto space-y-9">
      <Breadcrumb page={category} subPage={subcategory} />
      <div className="bg-red-200">{products.id}</div>
    </div>
  );
};

export default SubCategoryPage;
