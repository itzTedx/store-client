import { Orders } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_KEY}/orders`;

const getOrders = async (orderId: string | string[]): Promise<Orders> => {
  const res = await fetch(`${URL}/${orderId}`);

  return res.json();
};

export default getOrders;
