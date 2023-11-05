import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import React from "react"

interface BreadcrumbProps {
  page: string
}

const Breadcrumb = ({ page }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <Link href="/">
        <Home size={16} />
      </Link>
      <ChevronRight className="w-5 h-5" />
      <p className="">{page}</p>
    </div>
  )
}

export default Breadcrumb
