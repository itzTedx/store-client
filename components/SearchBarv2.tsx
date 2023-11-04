"use client";

import { useState, useEffect, Fragment } from "react";
import {
  Calculator,
  Calendar,
  CheckIcon,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
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

interface SearchProps {
  data: Category[];
}

export function SearchBar({ data }: SearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState();

  const filteredQuery =
    query === ""
      ? data
      : data.filter((d) =>
          d.subcategory.filter((search) =>
            search.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )
        );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="w-full sm:max-w-xl mx-auto">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <form className="relative w-full cursor-default overflow-hidden rounded-lg bg-white dark:bg-gray-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-lime-300 sm:text-sm border">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
                placeholder="Search your printing needs"
                displayValue={(search: { name: string }) => search.name}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-2 flex items-center space-x-2">
                <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hidden md:inline-flex">
                  <span className="text-xs">Ctrl</span>J
                </kbd>
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                {filteredQuery.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredQuery.map((search) =>
                    search.subcategory.map((sub) => (
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
                              href={`/product/${sub.id}`}
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
                                  className="h-5 w-5"
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
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {data.map((d) => (
            <CommandGroup heading={d.name} key={d.id}>
              {d.subcategory.map((s) => (
                <CommandItem key={s.id}>
                  <Calendar className="mr-2 h-4 w-4" />
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
