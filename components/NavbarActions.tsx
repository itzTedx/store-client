"use client";

import { useState, useEffect } from "react";
import { LogIn, ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-lime-400 border border-black px-4 py-2">
        <ShoppingBag size={20} color="black" />
        <span className="ml-2 text-sm font-medium text-black">0</span>
      </Button>
      <LogIn />
    </div>
  );
};

export default NavbarActions;
