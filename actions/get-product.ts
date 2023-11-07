import { Product } from "@/types"
const URL = `${process.env.NEXT_PUBLIC_API_KEY}/products/product`

const getProduct = async (slug: string): Promise<Product> => {
  const res = await fetch(`${URL}/${slug}`)

  return res.json()
}

export default getProduct
