"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "./Card";

const ScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-88%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex flex-col gap-9 pt-3 sm:gap-16 h-screen items-start justify-center overflow-hidden">
        <h3 className="text-center text-3xl sm:text-6xl font-glirock self-center">
          What we Really do?
        </h3>
        <motion.div style={{ x }} className="flex gap-3 sm:gap-6 md:pl-40">
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
  description: string;
};

const cards: CardType[] = [
  {
    url: "/images/Letterhead.jpg",
    title: "Offset Printing",
    description:
      "Offset printing is a cost-effective commercial printing method transferring ink from a plate to a rubber blanket before reaching the printing surface. This indirect process ensures consistent, high-quality results, making it ideal for various materials like brochures and magazines, known for its efficiency and color accuracy in handling large-volume projects economically.",
    id: 1,
  },
  {
    url: "/images/instant-bcs.jpg",
    title: "Digital Printing",
    description:
      "Digital printing is optimal for short print runs with quick setup and accommodates variable data for personalized prints. While cost-effective for smaller quantities, it may become expensive for larger volumes. It provides flexibility and speed, making it ideal for projects with tight deadlines and customization needs.",
    id: 2,
  },
  {
    url: "/images/Poster.jpg",
    title: "Large Format Printing",
    description:
      "Large format printing is specialized for creating oversized prints like banners and posters. It uses printers capable of handling various materials, producing high-resolution graphics suitable for impactful displays at events, trade shows, and retail settings.",
    id: 3,
  },
  {
    url: "/images/Laptop-Sticker.jpg",
    title: "Packaging",
    description:
      "Packaging printing applies graphics and information to packaging materials, enhancing visual appeal and conveying product details. It plays a vital role in brand identity and recognition on store shelves. Utilizing methods like offset, flexography, and digital printing, it ensures eye-catching designs for various packaging types.",
    id: 4,
  },
  {
    url: "/images/bottle.webp",
    title: "Promotional Gifts",
    description:
      "Promotional gifts are items businesses distribute to promote their brand, often featuring logos or messages. Examples include pens, keychains, and branded apparel. Widely used in marketing and events, these gifts serve to create brand awareness and foster goodwill among recipients. Their effectiveness lies in leaving a lasting impression and enhancing brand recall.",
    id: 5,
  },
  {
    url: "/images/post-1.jpg",
    title: "Branding",
    description:
      "Branding is the strategic development of a distinctive identity for a product or company, incorporating elements like logos and slogans. It aims to establish a memorable and unique image, differentiating the brand and building consumer trust. Effective branding influences perceptions, fosters loyalty, and contributes to overall business success.",
    id: 6,
  },
];
