import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Subcategory } from "@/types";

import CategoryCard from "./ui/category-card";
import { Heading } from "./ui/Heading";

interface CategoryListProps {
  title: string;
  items: Subcategory[];
  link?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ title, items, link }) => {
  return (
    <div className="space-y-4 px-1.5">
      <Heading title={title} link={link} />

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:gap-9 sm:px-6 container mx-auto py-3">
        {items.map((item) => (
          <CategoryCard key={item.id} data={item} category={link} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
