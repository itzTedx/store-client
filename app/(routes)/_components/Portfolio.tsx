'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

const slider1 = [
  {
    color: '#e3e5e7',
    src: 'c2.jpg',
  },
  {
    color: '#d6d7dc',
    src: 'decimal.jpg',
  },
  {
    color: '#e3e3e3',
    src: 'funny.jpg',
  },
  {
    color: '#21242b',
    src: 'google.jpg',
  },
  {
    color: '#e5e0e1',
    src: 'panda.jpg',
  },
]

const slider2 = [
  {
    color: '#d4e3ec',
    src: 'maven.jpg',
  },
  {
    color: '#e5e0e1',
    src: 'panda.jpg',
  },
  {
    color: '#d7d4cf',
    src: 'powell.jpg',
  },
  {
    color: '#e1dad6',
    src: 'wix.jpg',
  },
  {
    color: '#e5e0e1',
    src: 'panda.jpg',
  },
]

export default function Portfolio() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <div ref={container} className="flex flex-col gap-3 relative my-9 z-[1]">
      <h5 className="font-glirock text-3xl text-center">Portfolio Showcase</h5>
      <p className="text-center max-w-sm mx-auto">
        Discover Our Creative Achievements: A Showcase of Our Impressive Works
        and Projects.
      </p>
      <motion.div
        style={{ x: x1 }}
        className="flex relative gap-[3vw] w-[120vw] -left-[20vw] mt-6"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div className="relative w-[80%] h-[80%]">
                <Image
                  fill={true}
                  alt={'image'}
                  src={`/images/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          )
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-[3vw] w-[120vw] -left-[20vw]"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative w-[80%] h-[80%]">
                <Image
                  fill
                  alt={'image'}
                  src={`/images/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
// } from "framer-motion";
// import { wrap } from "@motionone/utils";

// interface ParallaxProps {
//   children: string;
//   baseVelocity: number;
// }

// function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef<number>(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 5000);

//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   /**
//    * The number of times to repeat the child text should be dynamically calculated
//    * based on the size of the text and viewport. Likewise, the x motion value is
//    * currently wrapped between -20 and -45% - this 25% is derived from the fact
//    * we have four children (100% / 4). This would also want deriving from the
//    * dynamically generated number of children.
//    */
//   return (
//     <div className="overflow-hidden">
//       <motion.div className="flex flex-nowrap whitespace-nowrap " style={{ x }}>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//         <span className="block mr-8">{children} </span>
//       </motion.div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
//       <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
//     </section>
//   );
// }
