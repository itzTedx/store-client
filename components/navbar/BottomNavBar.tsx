"use client";

import { Home, Search, ShoppingBag, User2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { useScrollingEffect } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import useSearchToggle from "@/store/use-search-toggle";
import useCart from "@/hooks/use-cart";
import { useIsMounted } from "@/hooks/use-is-mounted";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const isMounted = useIsMounted();

  const onOpen = useSearchToggle((state) => state.onOpen);
  const isOpen = useSearchToggle((state) => state.isOpen);

  const cart = useCart();

  const navClass =
    scrollDirection === "up"
      ? "backdrop-blur-lg bottom-3 rounded-full mx-9"
      : "opacity-100 bottom-0";

  return (
    <div
      className={`sticky py-2 z-10 border-t bg-background/70 transition-all duration-500 md:hidden shadow-xl ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Button
          onClick={() => router.push("/")}
          variant="ghost"
          className={"flex gap-1.5 items-center relative px-4"}
        >
          <Home
            className={cn(
              "transition-all relative z-10 shrink-0",
              pathname === "/" ? "stroke-2 text-background" : "stroke-1"
            )}
          />{" "}
          <span
            className={cn(
              pathname === "/" && "font-bold text-background z-10",
              "hidden sm:block"
            )}
          >
            Home
          </span>
          {pathname === "/" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-xl",
                scrollDirection === "up"
                  ? "from-sky-500/80 to-primary-400/80 "
                  : "bg-primary-500/20"
              )}
            />
          )}
        </Button>
        <Button
          onClick={onOpen}
          variant="ghost"
          className="flex gap-1.5 items-center relative px-4"
        >
          <Search
            className={cn(
              "transition-all relative z-10 shrink-0",
              pathname === "/shop" ? "stroke-2 text-background" : "stroke-1"
            )}
          />{" "}
          <span
            className={cn(
              isOpen && "font-bold text-background z-10",
              "hidden sm:block"
            )}
          >
            Search
          </span>
          {isOpen && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-xl",
                scrollDirection === "up"
                  ? "from-sky-500/80 to-primary-400/80 "
                  : "bg-primary-500/20"
              )}
            />
          )}
        </Button>
        <Button
          onClick={() => router.push("/cart")}
          variant="ghost"
          className="flex gap-1.5 items-center relative px-4"
        >
          <div className="relative z-10">
            <ShoppingBag
              className={cn(
                "transition-all relative ",
                pathname === "/cart" ? "stroke-2 text-background" : "stroke-1"
              )}
            />
            {isMounted && cart.items.length ? (
              <>
                <span className="w-4 h-4 bg-lime-400 border-background border-[2.5px] absolute rounded-full -top-1 -right-1 z-50" />
                <span className="w-3 h-3 bg-lime-400 border-background opacity-50 animate-ping absolute rounded-full -top-[2px] -right-[2px] z-50" />
              </>
            ) : null}
          </div>
          <span
            className={cn(
              pathname === "/cart" && "font-bold text-background z-10",
              "hidden sm:block"
            )}
          >
            Cart
          </span>
          {pathname === "/cart" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-xl",
                scrollDirection === "up"
                  ? "from-sky-500/80 to-primary-400/80 "
                  : "bg-primary-500/20"
              )}
            />
          )}
        </Button>
        <Button
          onClick={() => router.push("/account")}
          variant="ghost"
          className="flex gap-1.5 items-center relative px-4"
        >
          <User2
            className={cn(
              "transition-all relative z-10",
              pathname === "/account" ? "stroke-2 text-background" : "stroke-1"
            )}
          />
          <span
            className={cn(
              pathname === "/account" && "font-bold text-background z-10",
              "hidden sm:block"
            )}
          >
            Account
          </span>
          {pathname === "/account" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-xl",
                scrollDirection === "up"
                  ? "from-sky-500/80 to-primary-400/80 "
                  : "bg-primary-500/20"
              )}
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default BottomNav;
