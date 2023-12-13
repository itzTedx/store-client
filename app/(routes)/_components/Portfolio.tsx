"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const slider1 = [
  {
    src: "Catalogue.jpg",
  },
  {
    src: "instant-bcs.jpg",
  },
  {
    src: "instant-lh.jpg",
  },
  {
    src: "Laptop-sticker.jpg",
  },
  {
    src: "rollup.jpg",
  },
  {
    src: "Poster.jpg",
  },
];

const slider2 = [
  {
    src: "Letterhead.jpg",
  },
  {
    src: "post-1.jpg",
  },
  {
    src: "spot-uv-bcs.jpg",
  },
  {
    src: "standard-card.jpeg",
  },
  {
    src: "bottle.webp",
  },
  {
    src: "Business-card-holding.jpg",
  },
];

export default function Portfolio() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className="flex flex-col gap-3 relative my-9 z-[1]">
      <h5 className="font-glirock text-6xl text-center">Portfolio Showcase</h5>
      <p className="text-center max-w-sm mx-auto">
        Discover Our Creative Achievements: A Showcase of Our Impressive Works
        and Projects.
      </p>
      <motion.div
        style={{ x: x1 }}
        className="flex relative gap-3 w-[200vw] md:w-[120vw] -left-[20vw] mt-6 will-change-transform"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full h-28 md:h-48 lg:h-80 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-3 w-[200vw] md:w-[120vw] -left-[10vw] will-change-transform"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center justify-center"
            >
              <div
                key={index}
                className="relative w-full h-28 md:h-48 lg:h-80 flex-1"
              >
                <Image
                  fill
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
