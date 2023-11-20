import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface HeadingProps {
  title: string
  link?: string
  action?: string
}

export const Heading = ({
  title,
  link,
  action = 'Explore More',
}: HeadingProps) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 justify-between items-center sticky top-0 py-3 bg-background/50 backdrop-blur-md z-10 px-6 container mx-auto rounded-full sm:rounded-md border sm:border-0 sm:border-b shadow-sm shadow-background/10 sm:shadow-none">
      <h3
        className={`font-glirock text-xl sm:text-3xl col-span-2 md:col-span-4`}
      >
        {title}
      </h3>
      {link && (
        <Link
          href={link}
          className="flex gap-2 items-center hover:text-lime-500 text-xs sm:text-sm hover:font-semibold transition-all flex-1 justify-end"
        >
          {action} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  )
}
