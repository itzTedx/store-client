import getCategory from "@/actions/get-category";
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

  return (
    <div className="container mx-auto ">
      <Breadcrumb page={category.name} subPage={subcategory.name} />
    </div>
  );
};

export default SubCategoryPage;
