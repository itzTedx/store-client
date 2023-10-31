import Currency from "./ui/currency"
import { Button } from "./ui/button"
import useCart from "@/hooks/use-cart"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import { useEffect } from "react"
import toast from "react-hot-toast"

const Summary = () => {
  const searchParams = useSearchParams()

  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.")
      removeAll()
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.")
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const taxPrice = totalPrice * 0.05

  const grandTotal = taxPrice + totalPrice

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_KEY}/checkout`,
      {
        productIds: items.map((item) => item.id),
      },
      { withCredentials: false }
    )

    window.location = response.data.url
  }

  return (
    <div className="mt-15 rounded-lg bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:p-6 lg:col-span-5 lg; mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium">Order Total</div>
          <Currency value={totalPrice} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 py-2">
          <div className="text-base font-medium">Tax 5%</div>
          <Currency value={taxPrice} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 ">
          <div className="text-base font-medium">Grand Total</div>
          <Currency value={grandTotal} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  )
}

export default Summary
