import getAllProducts from "@/actions/get-all-products";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  return products.map((product) => ({
    url: `${process.env.BASE_URL}/d/${product.slug}`,
    lastModified: product.updatedAt,
  }));
}
