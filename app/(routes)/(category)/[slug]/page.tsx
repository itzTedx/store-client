import getCategory from "@/actions/get-category";
import Billboard from "@/components/Billboard";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation";
import getCategories from "@/actions/get-categories";

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const dynamic = "force-static";

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

  return (
    <>
      <Billboard data={category.billboard} />
      <div className="container mx-auto ">
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
                <div className="aspect-[4/3] bg-gray-100 relative rounded-md overflow-hidden">
                  {sub.products && (
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
