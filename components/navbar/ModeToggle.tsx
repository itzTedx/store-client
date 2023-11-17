"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Image
            src="/icons/light.svg"
            width={38}
            height={38}
            alt="Light Mode"
            className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Image
            src="/icons/dark.svg"
            width={38}
            height={38}
            alt="Dark Mode"
            className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          {/* {theme === "system" ? (
            <React.Suspense fallback={"load"}>
              <Image
                src="/icons/system.svg"
                width={38}
                height={38}
                alt="Light Mode"
                className="h-6 w-6"
              />
            </React.Suspense>
          ) : (
            <>
              <Image
                src="/icons/light.svg"
                width={38}
                height={38}
                alt="Light Mode"
                className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <Image
                src="/icons/dark.svg"
                width={38}
                height={38}
                alt="Dark Mode"
                className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
            </>
          )} */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer hover:bg-muted-foreground"
        >
          <Image
            src="/icons/light.svg"
            width={38}
            height={38}
            alt="Light Mode"
            className="h-[1.2rem] w-[1.2rem]  mr-2"
          />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:bg-muted-foreground"
        >
          <Image
            src="/icons/dark.svg"
            width={38}
            height={38}
            alt="Light Mode"
            className="h-[1.2rem] w-[1.2rem] mr-2 "
          />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system");
          }}
          className="cursor-pointer hover:bg-muted-foreground"
        >
          <Image
            src="/icons/system.svg"
            width={38}
            height={38}
            alt="Light Mode"
            className="h-[1.2rem] w-[1.2rem] mr-2"
          />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
