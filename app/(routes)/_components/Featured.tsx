import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    imgSrc: "/icons/quality.png",
    title: "Quality Material",
    description:
      "Utilizing 400gsm art card paper, enhanced by a sophisticated matte lamination on both sides, for a luxurious and durable finish",
  },
  {
    imgSrc: "/icons/excellent-color.png",
    title: "Excellent Colors",
    description:
      "Printing in vibrant, full color on both the front and back sides to ensure a visually striking and impactful result.",
  },
];

const Featured = () => {
  return (
    <section className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 md:gap-12 py-9 sm:py-24 px-3 lg:px-6">
      <div className="relative aspect-video sm:aspect-[3/4] md:aspect-square">
        <Image
          fill
          src="/images/spot-uv-bcs.jpg"
          alt=""
          className="object-cover rounded-xl"
        />
      </div>
      <div className="md:py-3 max-w-xl flex flex-col justify-between gap-6 sm:gap-0">
        <div className="space-y-3">
          <h4 className="text-2xl lg:text-4xl font-glirock leading-tight">
            Level up your impression with spot uv business card
          </h4>
          <p className="max-w-prose text-sm lg:text-base">
            Enhance your business card design with the precisely placed, clear,
            shiny coating of Spot UV. Even though subtle, the slick shine is
            encapsulating and highly impressive.
          </p>
          <Button className="font-semibold rounded-full" asChild>
            <Link href="/d/spot-uv-business-card">Order Now</Link>
          </Button>
        </div>
        <div className="grid-cols-2 gap-4 hidden sm:grid">
          {features.map(({ imgSrc, title, description }, i) => (
            <div key={i}>
              <div className="p-2">
                <Image
                  src={imgSrc}
                  height={42}
                  width={42}
                  alt={title}
                  role="none"
                />
              </div>
              <span className="mb-2 font-semibold">{title}</span>
              <p className="text-sm lg:text-base xl:text-lg text-foreground-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
