import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu as ShadDrop,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

export const ProfileActions = () => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex gap-2"
      id="account"
      aria-label="Account"
    >
      <Image
        src="/icons/account.svg"
        width={40}
        height={40}
        alt="My Account"
        aria-hidden
        className="shrink-0"
      />
      <div className="hidden lg:block">
        <p className="text-xs text-left" aria-label="Hello Digital">
          Hello, Digital
        </p>
        <span className="flex font-semibold text-primary-800">
          My Account <ChevronDown size={16} aria-hidden />
        </span>
      </div>
    </Button>
  );
};
//  <ShadDrop>
//    <DropdownMenuTrigger className="hidden md:flex">
//      <Image
//        src="/icons/account.svg"
//        width={40}
//        height={40}
//        alt="My Account"
//        aria-hidden
//        className="shrink-0"
//      />
//      <div className="hidden lg:block">
//        <p className="text-xs text-left" aria-label="Hello Digital">
//          Hello, Digital
//        </p>
//        <span className="flex text-sm font-semibold text-primary-800">
//          My Account <ChevronDown size={16} aria-hidden />
//        </span>
//      </div>
//    </DropdownMenuTrigger>
//    <DropdownMenuContent align="start">Hell</DropdownMenuContent>
//  </ShadDrop>;
