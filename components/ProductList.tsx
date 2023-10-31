import { Product } from "@/types"
import NoResults from "@/components/ui/no-results"
import ProductCard from "./ui/product-card"
import { Gloock } from "next/font/google"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProductsListProps {
  title: string
  items: Product[]
  link?: string
}

const gloock = Gloock({ subsets: ["latin"], weight: "400" })

const ProductList: React.FC<ProductsListProps> = ({ title, items, link }) => {
  const limitedItems = items.slice(0, 4)
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className={`${gloock.className} text-3xl font-bold`}>{title}</h3>
        {link && (
          <Link
            href={`/category/${link}`}
            className="flex gap-2 items-center hover:text-lime-500 text-sm hover:font-semibold transition-all"
          >
            Explore More <ArrowRight size={16} />
          </Link>
        )}
      </div>
      <hr />
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedItems.map((item, i) => (
          <ProductCard key={i} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
