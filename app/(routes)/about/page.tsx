import Image from 'next/image'
import AboutHero from './_components/Hero'
import { Badge } from '@/components/ui/badge'
import ScrollCarousel from './_components/ScrollCarousel'
import { MouseImageTrail } from './_components/ImageTrails'
import ParallaxText from './_components/ParallaxText'
import { Trusted } from '../_components/Trusted'
import Commitment from './_components/Commitment'

function About() {
  return (
    <>
      <MouseImageTrail
        renderImageBuffer={10}
        rotationRange={25}
        images={[
          '/images/bottle.webp',
          '/images/Business-card-holding.jpg',
          '/images/Catalogue.jpg',
          '/images/instant-bcs.jpg',
          '/images/Instant-lh.jpg',
          '/images/Laptop-Sticker.jpg',
          '/images/Letterhead.jpg',
          '/images/Poster.jpg',
          '/images/rollup.jpg',
          '/images/spot-uv-bcs.jpg',
          '/images/instant-bcs.jpg',
          '/images/Instant-lh.jpg',
          '/images/Laptop-Sticker.jpg',
        ]}
      >
        <AboutHero />
      </MouseImageTrail>
      <section className="relative grid mb-9 ms:mb-0">
        <ParallaxText baseVelocity={-3}>Ink, Innovation, Impact</ParallaxText>
        <div className="container relative md:my-24 order-2 md:order-1">
          <div className="space-y-2 max-w-sm">
            <Badge>15+ YEARS OF EXPERIENCE</Badge>
            <h2 className="text-2xl font-bold leading-tight">
              We&apos;ve Covered All Your Large & Small Format Printing Needs.
            </h2>
            <p>
              Digital Desk helps establish your market presence, emphasizing the
              transformative power of creativity to enhance your corporate
              image.
            </p>
          </div>
        </div>
        <div className="md:absolute md:top-12 md:right-0 lg:h-[70rem] lg:w-[70rem] order-1 md:order-2">
          <div className="relative aspect-[4/3] col-span-2 ">
            <Image
              src="/images/print-company.png"
              fill
              alt="Printing company"
              className="object-contain md:-mt-40"
              priority
              quality={100}
            />
          </div>
        </div>
      </section>
      <section className="sm:grid sm:grid-cols-6 space-y-3 sm:gap-3 h-full max-w-6xl px-6 mx-auto">
        <div className="bg-[#EF4444] sm:col-span-3 p-6 rounded-[12px] relative text-background bg-[url('/spiral-bg.svg')] bg-cover bg-center">
          <h5 className="font-glirock uppercase text-2xl tracking-wider mb-1.5">
            Our Client Support
          </h5>
          <p className="leading-tight">
            At Digital Desk, we prioritize our clients through personalized and
            professional support, addressing individual needs. <br />
            Our office is equipped to provide convenient advice, and our
            commitment to timely delivery underscores our dedication to adhering
            to deadlines.
          </p>
        </div>
        <div className="bg-[#9645D3] text-background sm:col-span-3 p-6 rounded-[12px] relative">
          <h5 className="font-glirock uppercase text-2xl tracking-wider mb-1.5">
            Our history
          </h5>
          <p className="leading-tight">
            Digital Desk has its foundation in a team with a deep comprehension
            of the intricate demands of communication and marketing. We bring
            forth exceptional skills and resources to fulfill the distinctive
            requirements of clients who recognize the essential nature of
            investing in communication and marketing for their ongoing success.
          </p>
        </div>
        <div className="bg-[#FBBF24] col-span-2 p-6 rounded-[12px] relative">
          <h5 className="font-glirock uppercase text-2xl tracking-wider mb-1.5">
            OUR ADVANTAGES
          </h5>
          <p className="leading-tight">
            Digital Desk possesses a broad network and deep knowledge of the
            marketing and communication industry. Access to diverse expertise
            from affiliated companies empowers Digital Desk to provide
            high-quality services and products.
          </p>
        </div>
        <div className="bg-lime-500 col-span-2 p-6 rounded-[12px] relative">
          <h5 className="font-glirock uppercase text-2xl tracking-wider mb-1.5">
            OUR PRINCIPLES
          </h5>
          <p className="leading-tight">
            Our commitment is to fulfill client satisfaction through
            unparalleled quality and service. We prioritize speed, timely
            delivery, order, structure, courteousness, humility, and an
            unwavering sense of fairness.
          </p>
        </div>
        <div className="bg-[#4EBBD4] col-span-2 p-6 rounded-[12px] relative">
          <h5 className="font-glirock uppercase text-2xl tracking-wider mb-1.5">
            OUR COMMITMENT
          </h5>
          <p className="leading-tight">
            At Digital Desk, we&apos;re dedicated to exceeding client
            expectations as a comprehensive communication hub. Our expert team
            empowers clients to focus on their core business, ensuring top-notch
            quality.
          </p>
        </div>
      </section>
      <ScrollCarousel />

      <Commitment />
      <Trusted />
    </>
  )
}

export default About
