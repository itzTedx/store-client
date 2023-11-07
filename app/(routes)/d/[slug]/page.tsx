import getCategory from "@/actions/get-category"
import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/ProductList"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import Container from "@/components/ui/container"
import React from "react"

interface ProductPageProps {
  params: {
    slug: string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.slug)

  const suggestedProducts = product.subcategory.products

  return (
    <div className="">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            <div className="">
              <Gallery images={product.images} />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />

          <ProductList
            title="Related products you may like"
            items={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  )
}

export default ProductPage
