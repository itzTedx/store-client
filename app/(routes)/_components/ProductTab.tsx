"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function ProductTab() {
  return (
    <section className="pb-9">
      <Tabs aria-label="Options" variant="underlined">
        <Tab key="overview" title="Overview">
          <div className="grid md:grid-cols-2 items-center gap-9">
            <div className="space-y-6">
              <h2 className="font-glirock text-4xl [text-wrap:balance]">
                Standard Business Cards: Elevate Your Brand in Timeless Style
              </h2>
              <p className="text-lg [text-wrap:balance]">
                Our 350gsm standard business cards blend contemporary design
                with a luxurious feel. Ideal for the innovative entrepreneur or
                the vibrant creative, these cards exude elegance. Whether you're
                a startup enthusiast, designer, or business owner, this card
                amplifies your brand. The matte finish is not only stylish but
                also functional, perfect for note-taking. Ready in just 3 days,
                Elevate your networking game and stand out from the crowd with
                our matte business cards your gateway to making a memorable and
                lasting connection in the business world.
              </p>
            </div>
            <div className="relative aspect-square md:aspect-[3/4] lg:aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/standard-card.jpeg"
                fill
                alt="Standard Business Card"
                className="object-cover"
              />
            </div>
          </div>
        </Tab>
        <Tab key="template" title="Download Template">
          <h2>Template for Business Card</h2>
        </Tab>
      </Tabs>
    </section>
  );
}
