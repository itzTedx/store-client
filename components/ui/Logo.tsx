import Image from "next/image";

const Logo = () => {
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
    </>
  );
};

export default Logo;
