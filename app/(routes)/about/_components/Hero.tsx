import { Button } from '@/components/ui/button'
import EmojiEyeTracking from './EmojiEyeTracking'

function AboutHero() {
  return (
    <>
      <section className=" bg-[url('/bg-hero.webp')] dark:bg-[url('/hero-dark.webp')] bg-cover w-full h-[70vh] relative">
        <div className="text-center space-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold leading-tighter">
            We <span className="text-lime-500">print</span>
            <br />
            <span className="font-glirock font-medium">everything</span>
            <br />
            <span className="flex items-center justify-center">
              y<EmojiEyeTracking />u want
            </span>
          </h1>
          <p>You think, We print!</p>

          <Button
            // href="tel:+971501625053"
            className="px-6 py-3 bg-lime-500 shadow-[0_0_0_1.5px_#000] border rounded-full font-bold hover:shadow-[0_0_0_1.5px_#000,0_7px_0_1.5px_#000] hover:translate-y-[-10px]  dark:bg-lime-400 text-foreground dark:hover:shadow-[0_0_0_1.5px_#404040,0_7px_0_1.5px_#404040] hover:bg-lime-500
          transition-[transform,box-shadow,background] ease-btn-bounce duration-300 mt-4 "
          >
            Make a call
          </Button>
        </div>
      </section>
    </>
  )
}

export default AboutHero
