'use client'

import Image from 'next/image'

import { Product } from '@/types'
import IconButton from '@/components/ui/icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import Link from 'next/link'

interface ProductCardProps {
  data: Product
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${data?.id}`}
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
    >
      <div className='aspect-square bg-gray-100 relative'>
        <Image
          src={data?.images?.[0]?.url}
          alt={data.name}
          title={data.name}
          fill
          className='object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 absolute w-full px-6 bottom-5 transition-opacity'>
          <div className='flex gap-x-4 justify-center'>
            <IconButton onClick={() => {}} icon={<Expand size={20} />} />
            <IconButton onClick={() => {}} icon={<ShoppingCart size={20} />} />
          </div>
        </div>
      </div>
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category?.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={data.price} />
      </div>
    </Link>
  )
}

export default ProductCard
