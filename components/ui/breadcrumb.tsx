import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  page: string;
  subPage?: string;
}

const Breadcrumb = ({ page, subPage }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <Link href="/">
        <Home size={16} />
      </Link>
      <ChevronRight className="w-5 h-5" />
      <p className="">{page}</p>
      {subPage && (
        <>
          <ChevronRight className="w-5 h-5" />
          <p className="">{subPage}</p>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
