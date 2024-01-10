"use client";

import { useIsMounted } from "@/hooks/use-is-mounted";
import Skeleton from "./skeleton";

interface CurrencyProps {
  value?: string | number;
  fraction?: number;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0, fraction = 2 }) => {
  const isMounted = useIsMounted();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: fraction,
  });

  if (!isMounted) {
    return <Skeleton className="w-full h-6" />;
  }

  return formatter.format(Number(value));
};

export default Currency;
