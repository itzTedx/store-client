import Image from "next/image"

import Billboard from "@/components/Billboard"
import Container from "@/components/ui/container"
import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/ProductList"

const HomePage = async () => {
  const billboard = await getBillboard("90f88b2f-7192-4d66-ae65-9fc4170773d9")
  const products = await getProducts({ isFeatured: true })

  console.log(products)

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-4">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
