import { cn } from '@/lib/utils'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface BreadcrumbProps {
  page: {
    name: string
    slug: string
  }
  subPage?: {
    name: string
    slug: string
  }
  product?: {
    name: string
    slug: string
  }
}

const Breadcrumb = ({ page, subPage, product }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="text-muted-foreground py-4">
      <ol className="flex items-center gap-1.5">
        <li className="flex gap-1.5">
          <Link href="/">
            <Home size={16} />
          </Link>
        </li>
        <li className="flex gap-1.5">
          <span role="presentation">
            <ChevronRight className="w-5 h-5 text-muted" aria-hidden />
          </span>
          <Link
            href={`/${page.name}`}
            aria-current={subPage || product ? undefined : 'page'}
            className="aria-[current=page]:text-foreground-700 aria-[current=page]:font-medium"
          >
            {page.name}
          </Link>
        </li>
        {subPage && (
          <li className="flex gap-1.5">
            <span role="presentation">
              <ChevronRight className="w-5 h-5 text-muted" aria-hidden />
            </span>
            <Link
              href={`/${page.slug}/${subPage.slug}`}
              aria-current={product ? undefined : 'page'}
              className="aria-[current=page]:text-foreground-700 aria-[current=page]:font-medium"
            >
              {subPage.name}
            </Link>
          </li>
        )}
        {product && (
          <li className="flex gap-1.5">
            <span role="presentation">
              <ChevronRight className="w-5 h-5 text-muted" aria-hidden />
            </span>
            <Link
              href={`/${page.slug}/${product.slug}`}
              aria-current="page"
              className="aria-[current=page]:text-foreground-700 aria-[current=page]:font-medium"
            >
              {product.name}
            </Link>
          </li>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
