"use client";

import { isAppleDevice } from "@react-aria/utils";
import {
  BookDown,
  Building2,
  CircleDashed,
  LaptopIcon,
  ListChecks,
  LogOut,
  MoonIcon,
  Newspaper,
  PhoneCall,
  Search,
  Settings2,
  ShoppingBag,
  SunIcon,
  User2,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Category, Product } from "@/types";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface SearchProps {
  data: Category[];
  products: Product[];
}

export function SearchBar({ data, products }: SearchProps) {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [commandKey, setCommandKey] = useState<"Ctrl" | "Cmd">("Ctrl");

  const category = data.map((cat) => cat.subcategory);

  useEffect(() => {
    setCommandKey(isAppleDevice() ? "Cmd" : "Ctrl");
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const hotkey = isAppleDevice() ? "metaKey" : "ctrlKey";
      if (e.key === "k" && e[hotkey]) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 md:min-w-20 h-10 gap-12 rounded-md md:[&>svg]:max-w-[theme(spacing.unit-8)] active:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover text-sm font-normal w-10 md:w-full px-0 py-0 md:px-4 md:py-2 md:border"
        aria-label="Press ctrl + k for search"
      >
        <span
          className="hidden md:block lg:hidden text-muted-foreground"
          aria-hidden
        >
          Search...
        </span>
        <span className="hidden lg:block text-muted-foreground">
          Search your printing needs...
        </span>
        <Search
          className="w-6 h-6 text-sky-500 fill-sky-500/20"
          aria-hidden="true"
        />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search your printing needs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {data.map((group) => (
            <CommandGroup heading={group.name} key={group.id}>
              {group.subcategory.map((category) => (
                <CommandItem
                  className="hover:cursor-pointer"
                  key={category.id}
                  onSelect={() =>
                    runCommand(() =>
                      router.push(`/${group.slug}/${category.slug}`)
                    )
                  }
                >
                  <CircleDashed className="w-4 h-4 mr-2 text-foreground-400" />
                  <span>{category.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="All products"></CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Pages">
            <CommandItem>
              <Newspaper className="mr-2 text-foreground-400 h-4 w-4" />
              Blog
            </CommandItem>
            <CommandItem>
              <Building2 className="mr-2 text-foreground-400 h-4 w-4" />
              About Digital Desk
            </CommandItem>
            <CommandItem>
              <PhoneCall className="mr-2 text-foreground-400 h-4 w-4" />
              Contact us
            </CommandItem>
            <CommandItem>
              <BookDown className="mr-2 text-foreground-400 h-4 w-4" />
              Browse Catalgoue
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="All products">
            {products.map((product, i) => (
              <CommandItem key={i}>{product.name}</CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Account">
            <CommandItem>
              <User2 className="mr-2 text-foreground-400 h-4 w-4" />
              My Account
            </CommandItem>
            <CommandItem>
              <ShoppingBag className="mr-2 text-foreground-400 h-4 w-4" />
              Cart
            </CommandItem>
            <CommandItem>
              <ListChecks className="mr-2 text-foreground-400 h-4 w-4" />
              My Orders
            </CommandItem>
            <CommandItem>
              <Settings2 className="mr-2 text-foreground-400 h-4 w-4" />
              Account Settings
            </CommandItem>
            <CommandItem>
              <LogOut className="mr-2 text-foreground-400 h-4 w-4" />
              Log Out
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => runCommand(() => setTheme("light"))}
              className="relative"
            >
              <SunIcon className="mr-2 text-foreground-400 h-4 w-4" />
              <SunIcon className="mr-2 text-foreground-400 h-4 w-4 absolute" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 text-foreground-400 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 text-foreground-400 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
