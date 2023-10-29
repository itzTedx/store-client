"use client"

import { Fragment, useState, MouseEventHandler } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { CheckIcon, Search } from "lucide-react"
import { Product } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface SearchBarProps {
  data: Product[]
}

export default function SearchBar({ data }: SearchBarProps) {
  const router = useRouter()

  const [selected, setSelected] = useState()
  const [query, setQuery] = useState("")

  const filteredQuery =
    query === ""
      ? data
      : data.filter((search) =>
          search.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )

  // const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
  //   e.stopPropagation()
  //   router.push(`/product/${}`)
  // }

  return (
    <div className="w-full sm:max-w-xl mx-auto">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <form className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-lime-300 sm:text-sm border">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
              placeholder="Search your printing needs"
              displayValue={(search: { name: string }) => search.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-2 flex items-center">
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
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm pr-2 z-[9999]">
              {filteredQuery.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredQuery.map((search) => (
                  <Combobox.Option
                    key={search.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-lime-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={search}
                  >
                    {({ selected, active }) => (
                      <>
                        <Link
                          href={`/product/${search.id}`}
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {search.name}
                        </Link>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
