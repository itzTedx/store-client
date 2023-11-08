"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
  fraction?: number;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0, fraction = 2 }) => {
  const [isMounted, setIsMounted] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: fraction,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return formatter.format(Number(value));
};

export default Currency;
