import getCategory from "@/actions/get-category";
import Billboard from "@/components/Billboard";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation";
import getCategories from "@/actions/get-categories";
import { BreadcrumbList, WithContext } from "schema-dts";

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const revalidate = 30;
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => category.slug);
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  // fetch data
  const category = await getCategory(params.slug);

  if (!category) {
    notFound();
  }

  return {
    title: category.billboard.label,
    description: category.billboard.description,
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const category = await getCategory(params.slug);

  if (!category) {
    notFound();
  }

  //JSON-LD
  const jsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: category.name,
      },
    ],
  };

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Billboard data={category.billboard} />
      <div className="container mx-auto py-3">
        <Breadcrumb page={category} />
      </div>
      <div className="container mx-auto mb-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          {category.subcategory.map((sub) => (
            <Link
              href={`/${params.slug}/${sub.slug}`}
              className="group cursor-pointer space-y-4 flex flex-col justify-between"
              key={sub.id}
            >
              <div className="">
                <div className="aspect-[4/3] bg-foreground-100 relative rounded-md overflow-hidden">
                  {sub.products[0]?.images && (
                    <Image
                      src={sub.products[0]?.images[0]?.url}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Description */}
                <div className="mt-3">
                  <p className="font-semibold">{sub.name}</p>
                  <p className="text-sm text-foreground-500 line-clamp-2 lg:line-clamp-3 text-light">
                    {sub.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
