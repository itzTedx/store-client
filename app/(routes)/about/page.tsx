import Image from "next/image";
import AboutHero from "./_components/Hero";
import RunningText from "./_components/RunningText";
import { Badge } from "@/components/ui/badge";
import ScrollCarousel from "./_components/ScrollCarousel";

function About() {
  return (
    <>
      <AboutHero />
      <RunningText />
      <div className="grid grid-cols-3 gap-2 container">
        <div className="space-y-2 mt-12">
          <Badge>15+ YEARS OF EXPERIENCE</Badge>
          <h2 className="text-lg font-bold leading-tight">
            We&apos;ve Covered All Your Large & Small Format Printing Needs.
          </h2>
          <p>
            Digital Desk helps establish your market presence, emphasizing the
            transformative power of creativity to enhance your corporate image.
          </p>
        </div>
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
      <ScrollCarousel />
    </>
  );
}

export default About;
