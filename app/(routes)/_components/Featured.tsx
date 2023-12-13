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
      <div className="py-3 max-w-xl">
        <div className="space-y-3">
          <h4 className="text-4xl font-glirock">
            Level up your impression with spot uv business card
          </h4>
          <p>
            Enhance your business card design with the precisely placed, clear,
            shiny coating of Spot UV. Even though subtle, the slick shine is
            encapsulating and highly impressive.
          </p>
          <Button className="font-semibold">Order Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
