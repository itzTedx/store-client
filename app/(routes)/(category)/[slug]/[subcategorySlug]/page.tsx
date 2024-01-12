import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import getSubcategory from "@/actions/get-subcategory";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductCard from "@/components/ui/product-card";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbList, WithContext } from "schema-dts";

interface SubCategoryPageProps {
  params: {
    slug: string;
    subcategorySlug: string;
  };
}

export const revalidate = 300;
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) =>
    category.subcategory.map((sub) => sub.slug)
  );
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

const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  // fetch data
  const subcategory = await getSubcategory(params.subcategorySlug);
  const category = await getCategory(params.slug);

  //JSON-LD
  const jsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: category.name,
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/${category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: subcategory.name,
      },
    ],
  };

  return (
    <div className="container mb-9 space-y-2">
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb page={category} subPage={subcategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subcategory.products.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
