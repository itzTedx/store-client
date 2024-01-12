import getAllProducts from "@/actions/get-all-products";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  return products.map((product) => ({
    url: `${process.env.BASE_URL}/d/${product.slug}`,
    lastModified: product.updatedAt,
  }));
}
