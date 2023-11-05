"use client"

import Image from "next/image"
import { MouseEventHandler } from "react"
import { Expand, ShoppingBag, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

import { Product, Subcategory } from "@/types"
import Link from "next/link"

interface CategoryCardProps {
  data: Subcategory
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/category/${data?.slug}`)
  }

  return (
    <Link
      href={`/category/${data.slug}`}
      className="group cursor-pointer space-y-4 flex flex-col justify-between"
    >
      {/* Image */}
      <div className="">
        <div className="aspect-[4/3] bg-gray-100 relative">
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
        <div className="mt-3">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-foreground-500 line-clamp-2 lg:line-clamp-none text-light">
            {data.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
