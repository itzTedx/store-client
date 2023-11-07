import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { footerNav } from "@/lib/footer";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="border-t">
      <div className="container">
        <div className="grid sm:grid-cols-4 items-center justify-between py-10">
          <div className="col-span-2">
            <div className="">Logo</div>
            <div className="">Social Media</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2">
            {footerNav.map((nav, i) => (
              <div key={i} className="space-y-4">
                <h5 className="font-semibold">
                  <Link href={nav.link}>{nav.heading}</Link>
                </h5>
                <ul className="space-y-2">
                  {nav.items.map((item, i) => (
                    <li className="flex flex-col" key={i}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-4">
              <h5 className="font-semibold">Contact</h5>
              <ul className="space-y-4">
                <li>
                  Shop 3, Bin Suwailem Building, Damascus Street, Al Qusais,
                  Dubai, UAE.
                </li>
                <li>
                  <p>Call us now</p>
                  <div className="flex flex-col font-bold ">
                    <Link
                      className="hover:text-lime-600 transition-colors"
                      href="tel:+971501625053"
                    >
                      +971 50 162 5053
                    </Link>
                    <Link
                      className="hover:text-lime-600 transition-colors"
                      href="tel:+971501625053"
                    >
                      +971 50 162 5053
                    </Link>
                  </div>
                </li>
                <li>
                  <Link
                    className="hover:text-lime-600 transition-colors"
                    href="mailto:print.digitaldesk@gmail.com"
                  >
                    print.digitaldesk@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-primary flex flex-col sm:flex-row items-center justify-between border-t py-4">
          <div className="">
            &copy; {currentYear} Digital Desk General Trading L.L.C.{" "}
            <span>All rights Reserved</span>
          </div>
          <div className="text-muted-foreground">
            <Link
              href="/privacy"
              className={cn(buttonVariants({ variant: "link", size: "sm" }))}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className={cn(buttonVariants({ variant: "link", size: "sm" }))}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
