import getAllProducts from "@/actions/get-all-products";
import getAllSubcategories from "@/actions/get-all-subcategories";
import getCategories from "@/actions/get-categories";
import getCategoryById from "@/actions/get-category-by-id";
import { sub } from "date-fns";
import { MetadataRoute } from "next";

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
  const subcategoriesEntries: MetadataRoute.Sitemap = subcategories.map(
    ({ slug, updatedAt, categoryId }) => {
      const category = categories.filter((category) =>
        category.id.includes(categoryId)
      );

      console.log("Category", category);
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${category.filter((cat) =>
          cat.id.includes(categoryId)
        )}/${slug}`,
        lastModified: updatedAt,
      };
    }
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
