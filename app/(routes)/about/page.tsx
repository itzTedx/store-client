import Image from "next/image";
import AboutHero from "./_components/Hero";
import { Badge } from "@/components/ui/badge";
import ScrollCarousel from "./_components/ScrollCarousel";
import { MouseImageTrail } from "./_components/ImageTrails";
import ParallaxText from "./_components/ParallaxText";

function About() {
  return (
    <>
      <MouseImageTrail
        renderImageBuffer={10}
        rotationRange={25}
        images={[
          "/images/bottle.webp",
          "/images/Business-card-holding.jpg",
          "/images/Catalogue.jpg",
          "/images/instant-bcs.jpg",
          "/images/Instant-lh.jpg",
          "/images/Laptop-Sticker.jpg",
          "/images/Letterhead.jpg",
          "/images/Poster.jpg",
          "/images/rollup.jpg",
          "/images/spot-uv-bcs.jpg",
          "/images/instant-bcs.jpg",
          "/images/Instant-lh.jpg",
          "/images/Laptop-Sticker.jpg",
        ]}
      >
        <AboutHero />
      </MouseImageTrail>
      <section className="relative">
        <ParallaxText baseVelocity={-3}>Ink, Innovation, Impact</ParallaxText>
        <div className="container relative my-24">
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
        <div className="absolute top-12 right-0 lg:h-[70rem] lg:w-[70rem]">
          <div className="relative aspect-[4/3] col-span-2">
            <Image
              src="/images/print-company.png"
              fill
              alt="Printing company"
              className="object-contain -mt-40"
              priority
              quality={100}
            />
          </div>
        </div>
      </section>
      <ScrollCarousel />
    </>
  );
}

export default About;
