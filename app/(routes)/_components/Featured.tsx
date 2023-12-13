import { Button } from "@/components/ui/button";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="container grid grid-cols-2 gap-12 py-24">
      <div className="relative aspect-square">
        <Image
          fill
          src="/images/spot-uv-bcs.jpg"
          alt=""
          className="object-cover rounded-xl"
        />
      </div>
      <div className="py-3 max-w-xl flex flex-col justify-between">
        <div className="space-y-3">
          <h4 className="text-2xl lg:text-4xl font-glirock leading-tight">
            Level up your impression with spot uv business card
          </h4>
          <p className="max-w-prose text-sm lg:text-base">
            Enhance your business card design with the precisely placed, clear,
            shiny coating of Spot UV. Even though subtle, the slick shine is
            encapsulating and highly impressive.
          </p>
          <Button className="font-semibold rounded-full">Order Now</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <div className="p-3">
              <Image
                src="/icons/quality.png"
                height={42}
                width={42}
                alt="Quality Papers"
              />
            </div>
            <span className="mb-2 font-semibold">Quality Material</span>
            <p>
              Utilizing 400gsm art card paper, enhanced by a sophisticated matte
              lamination on both sides, for a luxurious and durable finish.
            </p>
          </div>
          <div className="">
            <div className="p-3">
              <Image
                src="/icons/excellent-color.png"
                height={42}
                width={42}
                alt="Excellent Colors"
              />
            </div>
            <span className="mb-2 font-semibold">Excellent Colors</span>
            <p>
              Printing in vibrant, full color on both the front and back sides
              to ensure a visually striking and impactful result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
