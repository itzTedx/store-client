"use client"

import { useState, useEffect } from "react"
import { LogIn, ShoppingBag } from "lucide-react"

import Button from "@/components/ui/button"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  const cart = useCart()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="ml-auto flex items-center gap-x-4">
        <Button
          onClick={() => router.push("/cart")}
          className="flex items-center rounded-full bg-lime-400 border border-black px-4 py-2"
        >
          <ShoppingBag size={20} color="black" />
          <span className="ml-2 text-sm font-medium text-black">+</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-lime-400 border border-black px-4 py-2"
      >
        <ShoppingBag size={20} color="black" />
        <span className="ml-2 text-sm font-medium text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
