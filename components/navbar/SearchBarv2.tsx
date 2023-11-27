"use client";

import { useState, useEffect } from "react";
import { Calendar, Search } from "lucide-react";
import { isAppleDevice } from "@react-aria/utils";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Category } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Link from "next/link";
import { Button } from "../ui/button";

interface SearchProps {
  data: Category[];
}

export function SearchBar({ data }: SearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState();
  const [commandKey, setCommandKey] = useState<"Ctrl" | "Cmd">("Ctrl");

  const category = data.map((cat) => cat.subcategory);

  const filteredCat =
    query === ""
      ? category
      : category.filter((sub) =>
          sub.filter((search) =>
            search.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )
        );

  // const filteredQuery =
  //   query === ""
  //     ? data
  //     : data.filter((d) =>
  //         d.subcategory.filter((search) =>
  //           search.name
  //             .toLowerCase()
  //             .replace(/\s+/g, "")
  //             .includes(query.toLowerCase().replace(/\s+/g, ""))
  //         )
  //       );

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
      {/* <div className="hidden w-72 lg:w-96 sm:block">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <form className="relative w-full overflow-hidden text-left bg-white border rounded-lg cursor-default dark:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-lime-300 sm:text-sm">
              <Combobox.Input
                className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-none focus:ring-0 focus:outline-none"
                placeholder="Search your printing needs"
                displayValue={(search: { name: string }) => search.name}
                onChange={(event) => setQuery(event.target.value)}
              />

              <Combobox.Button className="absolute inset-y-0 flex items-center space-x-2 right-2">
                <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hidden md:inline-flex">
                  <span className="text-xs">{commandKey}</span>K
                </kbd>
                <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </Combobox.Button>
            </form>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm pr-2 z-[9999]">
                {filteredCat.length === 0 && query !== "" ? (
                  <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                    Nothing found.
                  </div>
                ) : (
                  filteredCat.map((search) =>
                    search.map((sub) => (
                      <Combobox.Option
                        key={sub.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-lime-600 text-white"
                              : "text-gray-900 dark:text-gray-200"
                          }`
                        }
                        value={sub}
                      >
                        {({ selected, active }) => (
                          <>
                            <Link
                              href={`/d/${sub.slug}`}
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {sub.name}
                            </Link>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div> */}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search your printing needs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {data.map((d) => (
            <CommandGroup heading={d.name} key={d.id}>
              {d.subcategory.map((s) => (
                <CommandItem key={s.id}>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{s.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
