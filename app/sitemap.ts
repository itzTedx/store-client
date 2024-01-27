import { MetadataRoute } from "next";

import getAllProducts from "@/actions/get-all-products";
import getCategories from "@/actions/get-categories";
import getAllSubcategories from "@/actions/get-all-subcategories";
import getSubcategory from "@/actions/get-subcategory";

export const revalidate = 15;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  const categories = await getCategories();
  const subcategories = await getAllSubcategories();

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
