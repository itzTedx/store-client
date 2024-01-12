import { Button } from "@/components/ui/button";
import EmojiEyeTracking from "./EmojiEyeTracking";
import Link from "next/link";

function AboutHero() {
  return (
    <>
      <section className="bg-[url('/bg-hero.webp')] dark:bg-[url('/hero-dark.webp')] bg-cover w-full h-[75vh] relative">
        <div className="text-center space-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tighter">
            We <span className="text-lime-500">print</span>
            <br />
            <span className="font-glirock font-medium">everything</span>
            <br />
            <span className="flex items-center justify-center">
              y<EmojiEyeTracking />u want
            </span>
          </h1>
          <p>You think, We print!</p>

          <Link
            href="tel:+971501625053"
            className="px-6 py-3 bg-lime-500 shadow-[0_0_0_1.5px_#000] border rounded-full font-bold hover:shadow-[0_0_0_1.5px_#000,0_7px_0_1.5px_#000] hover:translate-y-[-10px]  dark:bg-lime-400 text-foreground dark:hover:shadow-[0_0_0_1.5px_#404040,0_7px_0_1.5px_#404040] hover:bg-lime-500
          transition-[transform,box-shadow,background] ease-btn-bounce duration-300 mt-4 inline-flex items-center justify-center whitespace-nowrap text-sm  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Make a call
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
