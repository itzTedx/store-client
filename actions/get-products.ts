import { Product, Subcategory } from "@/types"
const URL = `${process.env.NEXT_PUBLIC_API_KEY}/products/slug`

const getProducts = async (subcategoryId: string): Promise<Product> => {
  const res = await fetch(`${URL}/${subcategoryId}`)

  return res.json()
}

export default getProducts
