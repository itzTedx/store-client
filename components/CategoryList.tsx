import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Subcategory } from '@/types'

import CategoryCard from './ui/category-card'

interface CategoryListProps {
  title: string
  items: Subcategory[]
  link?: string
}

const CategoryList: React.FC<CategoryListProps> = ({ title, items, link }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 md:grid-cols-5 justify-between items-center sticky top-3 py-3 bg-background/50 backdrop-blur-md z-10 px-6 container mx-auto rounded-full sm:rounded-md border sm:border-0 sm:border-b shadow-sm shadow-background/10 sm:shadow-none">
        <h3
          className={`font-glirock text-xl sm:text-3xl col-span-2 md:col-span-4`}
        >
          {title}
        </h3>
        {link && (
          <Link
            href={`/${link}`}
            className="flex gap-2 items-center hover:text-lime-500 text-xs sm:text-sm hover:font-semibold transition-all flex-1 justify-end"
          >
            Explore More <ArrowRight size={16} />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:gap-9 sm:px-6 container mx-auto py-3">
        {items.map((item) => (
          <CategoryCard key={item.id} data={item} category={link} />
        ))}
      </div>
    </div>
  )
}

export default CategoryList
