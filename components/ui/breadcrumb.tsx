import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  page: {
    name: string;
    slug: string;
  };
  subPage?: {
    name: string;
    slug: string;
  };
}

const Breadcrumb = ({ page, subPage }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-3 text-muted-foreground py-4">
      <Link href="/">
        <Home size={16} />
      </Link>
      <ChevronRight className="w-5 h-5" />
      <Link href={`/${page.slug}`}>{page.name}</Link>
      {subPage && (
        <>
          <ChevronRight className="w-5 h-5" />
          <Link href={`/${page.slug}/${subPage.slug}`}>{subPage.name}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
