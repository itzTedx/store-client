"use client";

import Link from "next/link";
import { MouseEvent, useRef } from "react";

const GlowButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const btn = ref.current;
    if (btn) {
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop;
      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    }
  };

  return (
    <Link
      ref={ref}
      onMouseMove={handleMouseMove}
      href={href}
      className="glowing-btn w-fit font-bold"
    >
      <span className="relative z-[1]">{children}</span>
    </Link>
  );
};

export default GlowButton;

{
  /* <a href="#"><span>Button</span></a>

    let btn = document.querySelector('a')
    btn.onMouseMove = function(e){
        let x = e.pageX - btn.offsetLeft
    }
  ); */
}
