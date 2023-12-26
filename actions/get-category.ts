import { Category } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_KEY}/categories/slug`;

const getCategory = async (slug: string): Promise<Category> => {
  const res = await fetch(`${URL}/${slug}`);

  return res.json();
};

export default getCategory;
