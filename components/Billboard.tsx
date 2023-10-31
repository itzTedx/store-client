import { Billboard as BillboardType } from "@/types"
import Image from "next/image"
import { Gloock } from "next/font/google"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface BillboardProps {
  data: BillboardType
}

const gloock = Gloock({ subsets: ["latin"], weight: "400" })

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <section className=" bg-[url('/bg-hero.jpg')] dark:bg-[url('/hero-dark.jpeg')] bg-cover relative">
      <div className="p-4 pb-12 sm:p-12 sm:pb-16 rounded-xl flex flex-col-reverse md:grid md:grid-cols-2 overflow-hidden gap-11 max-w-7xl mx-auto">
        <div className="h-full w-full flex flex-col justify-center gap-y-6 sm:gap-y-8">
          <h1
            className={`${gloock.className} block font-bold text-4xl lg:text-6xl sm:max-w-xl dark:bg-gray-800 bg-gray-100 dark:sm:bg-transparent sm:bg-transparent p-6 leading-[1.4] text-center sm:text-left`}
          >
            {data?.label}
          </h1>

          <p className="sm:text-xl lg:text-3xl tracking-tight leading-[1.75] font-light">
            {data?.description}
          </p>
          <div className="flex justify-between">
            <Link
              href="/products"
              className="px-6 py-3 bg-lime-500 shadow-[0_0_0_1.5px_#000] border-black rounded-full font-bold hover:shadow-[0_0_0_1.5px_#000,0_7px_0_1.5px_#000] hover:translate-y-[-10px] transition-all dark:bg-lime-400 dark:text-gray-950"
            >
              Order Now
            </Link>
            <Link
              href="/"
              className="group flex items-center gap-4 text-right font-medium"
            >
              Browse
              <br />
              Catalogue
              <span className="rounded-full border border-black p-3 group-hover:bg-lime-100">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="rounded-[53px] relative aspect-square overflow-hidden !bg-cover ">
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
