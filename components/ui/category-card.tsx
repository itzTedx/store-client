import { Subcategory } from "@/types";
import Link from "next/link";

interface CategoryCardProps {
  data: Subcategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Link
      href={`/${data.slug}`}
      className="group cursor-pointer sm:space-y-4 grid grid-cols-5 sm:gap-0 sm:flex sm:flex-col"
    >
      {/* Image */}

      <div className="aspect-square sm:aspect-[4/3] bg-gray-100 relative col-span-2">
        {/* {data.images && (
            <Image
              src={data.images?.[0]?.url}
              alt=""
              fill
              className="object-cover"
            />
          )} */}
      </div>

      {/* Description */}
      <div className="space-y-4 col-span-3 px-5 sm:px-0">
        <p className="font-semibold">{data.name}</p>
        <p className="text-sm text-foreground-500 line-clamp-3 lg:line-clamp-none text-light">
          {data.description}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
