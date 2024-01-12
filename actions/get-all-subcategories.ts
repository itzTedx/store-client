import { Subcategory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_KEY}/categories/subcategory/getAll`;

const getAllSubcategories = async (): Promise<Subcategory[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getAllSubcategories;
