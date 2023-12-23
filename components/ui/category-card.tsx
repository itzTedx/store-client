import { Subcategory } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  data: Subcategory;
  category: string | undefined;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data, category }) => {
  return (
    <Link href={`/${category}/${data.slug}`} className="group cursor-pointer">
      {/* Image */}
      <figure className="sm:space-y-4 grid grid-cols-5 sm:gap-0 sm:flex sm:flex-col">
        <div className="aspect-square sm:aspect-[4/3] bg-gray-100 relative col-span-2 rounded-md overflow-hidden">
          {data.products?.[0]?.images && (
            <Image
              src={data.products?.[0]?.images?.[0]?.url}
              alt={data.products?.[0]?.name}
              fill
              className="object-cover scale-100 hover:scale-105 transition"
            />
          )}
        </div>

        {/* Description */}
        <figcaption className="space-y-1.5 col-span-3 px-5 sm:px-0">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-foreground-500 line-clamp-3 lg:line-clamp-none text-light text-pretty">
            {data.description}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default CategoryCard;
