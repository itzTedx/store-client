import Image from "next/image"
import Link from "next/link"

const PopularProduct = () => {
  return (
    <div className="container grid grid-cols-4 gap-3">
      <h3 className="col-span-4 py-3 text-3xl text-center font-glirock">
        Our Popular Products
      </h3>
      <div className="hover:bg-lime-400/50 bg-foreground-100  aspect-[3/3.5] col-span-2 rounded-lg p-6 flex justify-between flex-col relative">
        <p className="text-3xl font-bold">
          Standard <br />
          Business Card
        </p>
        <Link href="/">Buy</Link>
        <div className="absolute bottom-0 w-48 right-6 h-60">
          <Image
            src="/images/business-card.png"
            fill
            alt="fdf"
            className="object-contain"
          />
        </div>
      </div>
      <div className="p-4 rounded-lg bg-foreground-100"></div>
      <div className="p-4 rounded-lg bg-foreground-100"></div>
    </div>
  )
}

export default PopularProduct
