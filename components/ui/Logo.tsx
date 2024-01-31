"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Logo = () => {
  const texts = ["Printing", "Advertisments", "Promotional Gifts", "Signages"];
  const [displayText, setDisplayText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setDisplayText(texts[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, texts]);

  return (
    <>
      <Image
        src="/digitaldesk-dark.svg"
        fill
        alt="Digital Desk Logo"
        className="object-contain dark:block hidden"
        role="logo"
        aria-hidden
      />
      <Image
        src="/digitaldesk-light.svg"
        fill
        alt="Digital Desk Logo"
        className="object-contain dark:hidden block"
        role="logo"
        aria-hidden
      />
      <span className="absolute bottom-2 left-[2.8rem] text-xs font-bold">
        {displayText}
      </span>
    </>
  );
};

export default Logo;
