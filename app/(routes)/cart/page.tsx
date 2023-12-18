'use client'

import getProduct from '@/actions/get-product'
import CartItem from '@/components/CartItem'
import Summary from '@/components/Summary'
import Container from '@/components/ui/container'
import Skeleton from '@/components/ui/skeleton'
import useCart from '@/hooks/use-cart'
import { Loader2 } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const CartPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const addByUrl = searchParams.get('add')
      if (!addByUrl) {
        return
      }

      const product = await getProduct(addByUrl)
      if (!product) {
        return toast.error('No Product found')
      }
      cart.addItem(product)
    }

    fetchData()
    router.push('/cart')
  }, [cart, searchParams, router])

  if (!isMounted) {
    return (
      <Container>
        <div className="px-4 py-6 md:py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold flex gap-x-2 items-center">
            Shopping Cart
            <Loader2 className="w-6 h-6 stroke-2 animate-spin text-primary-800" />
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              <Skeleton className="h-24 w-24 rounded-md sm:h-40 sm:w-40" />
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="px-4 py-6 md:py-16 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold flex gap-x-2">
          Shopping Cart
          {isMounted && cart.items.length > 0 && (
            <span>
              {'('}
              {cart.items.length}
              {')'}
            </span>
          )}
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {isMounted && cart.items.length === 0 && (
              <p className="text-neutral-500 mb-6">No items added to cart</p>
            )}
            <ul>
              {isMounted &&
                cart.items.map((data) => (
                  <CartItem data={data} key={data.id} />
                ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  )
}

export default CartPage
