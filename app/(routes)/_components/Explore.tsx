import { Separator } from "@/components/ui/separator";

const Explore = () => {
  return (
    <div className="flex gap-3 bg-white dark:bg-gray-900 rounded-full items-center shadow-md dark:shadow-gray-800/50 w-fit mx-auto py-2 sm:py-4 px-5 sm:px-9">
      <h3 className="text-[10px] md:text-base font-semibold">
        Start Exploring
      </h3>
      <Separator orientation="vertical" className="h-6" />
      <ul
        className="flex gap-3 sm:gap-4 text-xs md:text-base"
        role="list"
        aria-label="Most popular products"
      >
        <li
          className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer"
          aria-label="Business cards"
        >
          Business cards
        </li>
        <li
          className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer"
          aria-label="Rollup Stand"
        >
          Rollup Stand
        </li>
        <li
          className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer"
          aria-label="Flyers"
        >
          Flyers
        </li>
        <li
          className="hover:text-bold transition-all hover:text-lime-500 cursor-pointer"
          aria-label="Stickers"
        >
          Stickers
        </li>
      </ul>
    </div>
  );
};

export default Explore;
