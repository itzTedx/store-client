import Currency from "./ui/currency";
import { Button } from "./ui/button";
import useCart from "@/hooks/use-cart";
import { redirect, useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
      const orderId = searchParams.get("orderId");

      redirect(`/my-orders?orderId=${orderId}`);
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return (
      total +
      Number(item.discountPrice == 0 ? item.actualPrice : item.discountPrice)
    );
  }, 0);

  const taxPrice = totalPrice * 0.05;

  const grandTotal = taxPrice + totalPrice;

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_KEY}/checkout`,
      {
        productIds: items.map((item) => item.id),
      },
      { withCredentials: false }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-15 sticky top-20 rounded-lg bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg text-foreground">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t pt-4">
          <div className="text-base">Order Total</div>
          <Currency value={totalPrice} />
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <div className="text-base">Tax 5%</div>
          <Currency value={taxPrice} />
        </div>
        <div className="flex items-center justify-between border-t  pt-4">
          <div className="text-base font-medium">Grand Total</div>
          <span className="font-bold">
            <Currency value={grandTotal} />
          </span>
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="w-full mt-9 font-bold text-lg"
        variant="bounce"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
