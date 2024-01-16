import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  page: {
    name: string;
    slug: string;
  };
  subPage?: {
    name: string;
    slug: string;
  };
  product?: {
    name: string;
    slug: string;
  };
}

const Breadcrumb = ({ page, subPage, product }: BreadcrumbProps) => {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="text-muted-foreground py-3 md:py-4"
      >
        <ol className="flex items-center gap-0 sm:gap-1 md:gap-1.5">
          <li className="flex gap-0 sm:gap-1 md:gap-1.5">
            <Link href="/">
              <Home className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </li>
          <li className="flex items-center gap-0 sm:gap-1 md:gap-1.5">
            <span role="presentation">
              <ChevronRight
                className="h-4 w-4 sm:w-5 sm:h-5 text-muted"
                aria-hidden
              />
            </span>
            <Link
              href={`/${page.slug}`}
              aria-current={subPage || product ? undefined : "page"}
              className="aria-[current=page]:text-foreground-700  aria-[current=page]:font-semibold text-[10px] sm:text-sm truncate"
            >
              {page.name}
            </Link>
          </li>
          {subPage && (
            <li className="flex items-center gap-0 sm:gap-1 md:gap-1.5">
              <span role="presentation">
                <ChevronRight
                  className="h-4 w-4 sm:w-5 sm:h-5 text-muted"
                  aria-hidden
                />
              </span>
              <Link
                href={`/${page.slug}/${subPage.slug}`}
                aria-current={product ? undefined : "page"}
                className="aria-[current=page]:text-foreground-700 aria-[current=page]:font-semibold text-[10px] sm:text-sm truncate"
              >
                {subPage.name}
              </Link>
            </li>
          )}
          {product && (
            <li className="flex items-center gap-0 sm:gap-1 md:gap-1.5">
              <span role="presentation">
                <ChevronRight
                  className="h-4 w-4 sm:w-5 sm:h-5 text-muted"
                  aria-hidden
                />
              </span>
              <Link
                href={`/${page.slug}/${product.slug}`}
                aria-current="page"
                className="aria-[current=page]:text-foreground-700 aria-[current=page]:font-medium text-[10px] sm:text-sm"
              >
                {product.name}
              </Link>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
