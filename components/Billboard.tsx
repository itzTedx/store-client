import { Billboard as BillboardType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BillboardProps {
  data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <section className="bg-[url('/bg-hero.jpg')] dark:bg-[url('/hero-dark.jpeg')] bg-cover relative">
      <div className="px-4 xs:px-6 pt-6 sm:pt-10 pb-16 rounded-xl grid grid-cols-1 sm:grid-cols-2 overflow-hidden gap-6 sm:gap-11 max-w-7xl mx-auto">
        <div className="h-full w-full grid grid-cols-2 gap-3 sm:flex flex-col justify-center gap-y-6 sm:gap-y-8">
          <h1
            className={`font-glirock block text-2xl sm:text-3xl md:text-4xl lg:text-6xl sm:max-w-xl dark:bg-gray-800 bg-gray-100 dark:sm:bg-transparent sm:bg-transparent p-4 sm:p-0 !leading-9 sm:!leading-[1.25] text-center sm:text-left`}
          >
            {data?.label}
          </h1>

          <p className="lg:text-xl sm:!leading-9 ">{data?.description}</p>
          <div className="flex justify-between col-span-2">
            <Link
              href="/products"
              className="px-6 py-3 bg-lime-500 shadow-[0_0_0_1.5px_#000] border-black rounded-full font-bold hover:shadow-[0_0_0_1.5px_#000,0_7px_0_1.5px_#000] hover:translate-y-[-10px]  dark:bg-lime-400 dark:text-gray-950 dark:hover:shadow-[0_0_0_1.5px_#404040,0_7px_0_1.5px_#404040]
    transition-[transform,box-shadow,background] ease-btn-bounce duration-300
   "
            >
              Order Now
            </Link>
            <Link
              href="/"
              className="group flex items-center gap-4 text-right font-medium hover:font-bold transition"
            >
              Browse
              <br />
              Catalogue
              <span className="rounded-full border border-black p-3 group-hover:bg-lime-300 group-hover:text-black transition-colors">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="rounded-xl sm:rounded-[53px] relative aspect-square overflow-hidden !bg-cover order-1 sm:order-2">
          <Image
            src={data?.imageUrl}
            fill
            className="object-cover"
            alt={data?.label}
          />
        </div>
      </div>
    </section>
  )
}

export default Billboard
