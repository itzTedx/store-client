import { Category, Product, Subcategory } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "./ui/product-card";
import { Gloock } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryCard from "./ui/category-card";

interface CategorysListProps {
  title: string;
  items: Subcategory[];
  link?: string;
}

const gloock = Gloock({ subsets: ["latin"], weight: "400" });

const CategoryList: React.FC<CategorysListProps> = ({ title, items, link }) => {
  // const limitedItems = items.slice(0, 3)
  return (
    <div className="space-y-4 px-2">
      <div className="grid grid-cols-3 md:grid-cols-5 justify-between items-center sticky top-3 sm:top-0 py-3 bg-foreground-50/40 backdrop-blur-md z-10 px-4 container mx-auto rounded-full sm:rounded-md border sm:border-0 sm:border-b shadow-sm shadow-background/10 sm:shadow-none">
        <h3
          className={`${gloock.className} text-xl sm:text-3xl font-bold col-span-2 md:col-span-4`}
        >
          {title}
        </h3>
        {link && (
          <Link
            href={`/category/${link}`}
            className="flex gap-2 items-center hover:text-lime-500 text-xs sm:text-sm hover:font-semibold transition-all flex-1 justify-end"
          >
            Explore More <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-3 container mx-auto">
        {items.map((item) => (
          <CategoryCard key={item.id} data={item} />
        ))}
        {/* {items.map((item, i) => (
          <ProductCard key={i} data={item} />
        ))} */}
      </div>
    </div>
  );
};

export default CategoryList;
