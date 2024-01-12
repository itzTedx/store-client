import getAllProducts from "@/actions/get-all-products";
import getCategories from "@/actions/get-categories";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  const categories = await getCategories();

  const productEntries: MetadataRoute.Sitemap = products.map(
    ({ slug, updatedAt }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/d/${slug}`,
      lastModified: updatedAt,
    })
  );
  const categoriesEntries: MetadataRoute.Sitemap = categories.map(
    ({ slug, updatedAt }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
      lastModified: updatedAt,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
    },
    ...categoriesEntries,
    ...productEntries,
  ];
}
