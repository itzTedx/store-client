"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Card } from "./Card";

const ScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      What we Really do?
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollCarousel;

export type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Offset Printing",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Digital Printing",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Large Format Printing",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Packaging",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Promotional Gifts",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Branding",
    id: 6,
  },
];
