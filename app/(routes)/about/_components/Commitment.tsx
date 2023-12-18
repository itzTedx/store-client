"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

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
          initial={{ y: 200 }}
          whileInView={{ y: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3"
        >
          Hello
        </motion.div>
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 38 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3"
        >
          Hello
        </motion.div>
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: -20 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3"
        >
          Hello
        </motion.div>
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 42 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
          }}
          className="aspect-[3/4] bg-lime-500 rounded-lg p-3"
        >
          Hello
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
