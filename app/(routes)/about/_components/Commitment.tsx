"use client";

import { motion, stagger } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Commitment = () => {
  return (
    // <section className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
    <section className="relative bg-[url('/grid-bg.svg')] bg-cover bg-no-repeat w-full pb-20 md:pb-40 ">
      <div className="max-w-5xl mx-auto py-9 px-4">
        <Badge
          variant="outline"
          className="tracking-normal py-2 backdrop-blur-sm"
        >
          Crafting Success Through Quality
        </Badge>
        <p className="font-bold text-4xl mt-3">
          Commitment to the highest quality production standards, a broad
          expertise, and a genuine strive to help our clients have secured us
          strategic cooperation with market-leading companies in many sectors
          and regions.
        </p>
      </div>

      <div className="gap-3 md:gap-9 grid grid-cols-4 px-3 md:px-16 md:py-6">
        <motion.div
          initial={{ y: 201 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3 overflow-hidden relative"
        >
          <Image
            src="/images/Catalogue.jpg"
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 230 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3 overflow-hidden relative"
        >
          <Image
            src="/images/Laptop-Sticker.jpg"
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 180 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.2,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3 overflow-hidden relative"
        >
          <Image
            src="/images/bottle.webp"
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 242 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3 overflow-hidden relative"
        >
          <Image
            src="/images/rollup.jpg"
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
