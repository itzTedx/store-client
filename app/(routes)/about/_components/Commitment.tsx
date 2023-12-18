'use client'

import { motion } from 'framer-motion'

import { Badge } from '@/components/ui/badge'

const Commitment = () => {
  return (
    <section className="relative h-screen">
      <div className="max-w-5xl mx-auto py-9 pb-40 px-4 bg-[url('/grid-bg.svg')] bg-cover bg-no-repeat w-full bg-center md:bg-top">
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

      <div className="absolute bottom-1/4 inset-x-0 gap-9 grid grid-cols-4 px-6">
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
          }}
          className="aspect-[3/4] bg-lime-500"
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
          className="aspect-[3/4] bg-lime-500"
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
          className="aspect-[3/4] bg-lime-500"
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
          className="aspect-[3/4] bg-lime-500"
        >
          Hello
        </motion.div>
      </div>
    </section>
  )
}

export default Commitment
