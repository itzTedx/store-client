"use client";

import { Home, Search, ShoppingBag, User2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { useScrollingEffect } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrollDirection = useScrollingEffect(); // Use the custom hook

  const navClass =
    scrollDirection === "up"
      ? "backdrop-blur-lg bottom-3 rounded-full  mx-9"
      : "opacity-100 bottom-0";

  return (
    <div
      className={`sticky py-2 z-10 border-t bg-background/70 transition-all duration-500 sm:hidden shadow-xl ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Button
          onClick={() => router.push("/")}
          variant="ghost"
          size="icon"
          className={"flex flex-col items-center relative"}
        >
          <Home
            className={cn(
              "transition-all relative z-10",
              pathname === "/" ? "stroke-2 text-primary-800" : "stroke-1"
            )}
          />
          {pathname === "/" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-md",
                scrollDirection === "up"
                  ? "from-primary-600/70 to-primary-400/70 "
                  : "bg-primary-500/20"
              )}
            />
          )}
        </Button>
        <Button
          onClick={() => router.push("/shop")}
          variant="ghost"
          size="icon"
          className="flex flex-col items-center relative"
        >
          <Search
            className={cn(
              "transition-all relative",
              pathname === "/shop" ? "stroke-2 text-primary-800" : "stroke-1"
            )}
          />
          {pathname === "/search" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-md",
                scrollDirection === "up"
                  ? "from-primary-600/70 to-primary-400/70 "
                  : "bg-primary-500/20"
              )}
            />
          )}
        </Button>
        <Button
          onClick={() => router.push("/cart")}
          variant="ghost"
          size="icon"
          className="flex flex-col items-center relative"
        >
          <ShoppingBag
            className={cn(
              "transition-all relative z-10",
              pathname === "/cart" ? "stroke-2 text-primary-800" : "stroke-1"
            )}
          />
          {pathname === "/cart" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-md",
                scrollDirection === "up"
                  ? "from-primary-600/70 to-primary-400/70 "
                  : "bg-primary-500/20"
              )}
            />
          )}
        </Button>
        <Button
          onClick={() => router.push("/account")}
          variant="ghost"
          size="icon"
          className="flex flex-col items-center relative"
        >
          <User2
            className={cn(
              "transition-all relative z-10",
              pathname === "/account" ? "stroke-2 text-primary-800" : "stroke-1"
            )}
          />
          {pathname === "/account" && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "absolute inset-0 z-0 bg-gradient-to-br rounded-md",
                scrollDirection === "up"
                  ? "from-primary-600/70 to-primary-400/70 "
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
