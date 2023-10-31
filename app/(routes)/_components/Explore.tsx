import { Separator } from "@/components/ui/separator"

const Explore = () => {
  return (
    <div className="flex gap-3 bg-white dark:bg-gray-900 rounded-full items-center shadow-md dark:shadow-gray-800/50 w-fit mx-auto py-2 sm:py-4 px-5 sm:px-9">
      <h5 className="text-[10px] md:text-base font-semibold">
        Start Exploring
      </h5>
      <Separator orientation="vertical" className="h-6" />
      <ul className="flex gap-3 sm:gap-4 text-xs md:text-base">
        <li className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer">
          Business cards
        </li>
        <li className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer">
          Rollup Stand
        </li>
        <li className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer">
          Flyers
        </li>
        <li className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer">
          Stickers
        </li>
      </ul>
    </div>
  )
}

export default Explore
