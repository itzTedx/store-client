import { Subcategory } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_KEY}/categories/subcategory`;

const getSubcategory = async (
  subcategorySlug: string
): Promise<Subcategory> => {
  const res = await fetch(`${URL}/${subcategorySlug}`);

  return res.json();
};

export default getSubcategory;
