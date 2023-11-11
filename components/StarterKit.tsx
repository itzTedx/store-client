import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const StarterKit = () => {
  return (
    <div className="container max-w-5xl lg:rounded-xl bg-[#102A2B] text-background py-9">
      {/* Jumpstart business offer section */}
      <div className="grid gap-4 md:grid-cols-3 gap-y-9">
        <div className="flex flex-col justify-between col-span-2 gap-5 sm:col-span-1 md:gap-3">
          <div className="space-y-4 md:space-y-2">
            <h5 className="text-5xl text-transparent md:text-5xl lg:text-3xl font-glirock bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
              STARTER KIT OFFER
            </h5>
            <p className="font-light sm:text-xl md:text-base lg:text-xl">
              Get a head start on your business with our all-in-one Starter Kit
              combo offer - including a professional business card, letterhead,
              and eye-catching A5 flyer.
            </p>
          </div>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-fit text-lime-500 hover:bg-lime-300/30 text-lg hover:text-lime-200 font-bold"
            )}
          >
            Starts at 548AED
          </Link>
        </div>
        <div className="grid col-span-2 grid-rows-2 gap-2 sm:grid-cols-3">
          <div className="row-span-2 p-3 bg-[#F2F649] rounded-md relative text-blue-800">
            <h6 className="text-3xl font-bold lg:text-[42px] lg:leading-[1.1]">
              Standard Business Card
            </h6>
            <div className="mt-3 space-x-3 font-xs">
              <span>500pcs</span>
              <span>350gsm</span>
            </div>
            <Image
              src="/images/business-card.png"
              alt="Standard Business Card"
              height={211}
              width={187}
              className="absolute left-0 bottom-2"
            />
          </div>
          <div className="relative p-3 bg-red-500 rounded-md aspect-square">
            <h5 className="text-3xl font-extrabold leading-8 lg:leading-[1.05] md:text-[32px] lg:text-[42px]">
              Jump Start Your Business
            </h5>
            <p className="absolute inline-flex items-center text-xl font-medium text-red-900 -rotate-90 top-9 -right-3">
              Now <ArrowRight className="ml-2" />
            </p>
          </div>
          <div className="relative p-3 bg-red-300 rounded-md aspect-square">
            <div className="absolute z-20 -rotate-90 -left-8 top-12">
              <h6 className="text-2xl font-extrabold">Letterhead</h6>
              <div className="space-x-3 font-xs">
                <span>500pcs</span>
                <span>170gsm</span>
              </div>
            </div>
            <Image
              src="/images/Letterhead.jpg"
              fill
              alt="Letterhead"
              className="z-0 object-cover"
            />
          </div>
          <div className="col-span-2 p-3 rounded-md bg-violet-500">
            <h6 className="text-2xl font-bold text-lime-400">A5 Flyer</h6>
            <div className="space-x-3 font-xs">
              <span>500pcs</span>
              <span>170gsm</span>
            </div>
            <Image
              src="/images/a5-flyer.png"
              height={190}
              width={161}
              alt="A5 Flyer"
              className="mx-3 mb-2 ml-auto -mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarterKit
