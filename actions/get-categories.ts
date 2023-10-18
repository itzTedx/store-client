import { Category } from "@/types";
const URL = `http://localhost:3000/api/429608f7-02e0-4d11-a0a6-753b44491332/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;
