"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const StarterKit = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-12 text-foreground-800 rounded-lg">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-xl text-4xl font-bold text-foreground-800">
            Jump start you business
            <br />
            <span className="text-foreground-400"> with our Starter Kit</span>
          </h2>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "bounce" }),
              "text-lg font-bold"
            )}
          >
            Enquire Now
          </Link>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Standard Business Card</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-28 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="text-center font-semibold text-indigo-50 grid place-content-center">
                <Image
                  src="/images/business-card.png"
                  alt="Standard Business Card"
                  height={211}
                  width={187}
                  className=""
                />
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8 hidden sm:block">
            <CardTitle>Starter Kit Offer</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-lg font-semibold text-orange-950">
                Get a head start on your business with our all-in-one Starter
                Kit combo offer - including a professional business card,
                letterhead, and eye-catching A5 flyer.
              </span>
            </div>
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>A5 Flyer</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="text-center font-semibold text-emerald-50 grid place-content-center aspect-square relative">
                <Image
                  src="/images/a5-flyer.png"
                  fill
                  alt="A5 Flyer"
                  className="object-contain"
                />
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4 hidden sm:block">
            <CardTitle>Jump Start Your Business Now</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="text-center font-semibold text-emerald-50 flex">
                Now <ArrowRight className="ml-2" />
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Letterhead</CardTitle>
            <motion.div
              initial={{ y: 120, rotate: 0 }}
              whileInView={{ y: 0 }}
              whileHover={{ rotate: 2, y: 16 }}
              className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] overflow-hidden"
            >
              <span className="block text-center font-semibold text-red-50">
                <Image
                  src="/images/Letterhead.jpg"
                  fill
                  alt="Letterhead"
                  className="z-0 object-cover"
                />
              </span>
            </motion.div>
          </BounceCard>
        </div>
      </section>
      {/* <div className="container max-w-5xl lg:rounded-xl bg-[#102A2B] text-background py-9">
        <div className="grid gap-4 md:grid-cols-3 gap-y-9">
          <div className="flex flex-col justify-between col-span-2 gap-5 sm:col-span-1 md:gap-3">
            <div className="space-y-4 md:space-y-2">
              <h5 className="text-5xl text-transparent md:text-5xl lg:text-3xl font-glirock bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
                STARTER KIT OFFER
              </h5>
              <p className="font-light sm:text-xl md:text-base lg:text-xl text-lime-50">
                Get a head start on your business with our all-in-one Starter
                Kit combo offer - including a professional business card,
                letterhead, and eye-catching A5 flyer.
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
              <h5 className="text-3xl font-extrabold leading-8 lg:leading-[1.05] md:text-[32px] lg:text-[42px] text-white">
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
      </div> */}
    </>
  );
};

export default StarterKit;

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-foreground-100 p-8 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="mx-auto text-center text-3xl font-bold">{children}</h3>;
};
