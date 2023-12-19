import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Contact() {
  return (
    <>
      <div className="container grid grid-cols-3 gap-3 py-12">
        <div className="col-span-2">Images</div>
        <div className="">
          <h1 className="text-3xl font-glirock">We're Here to Help</h1>
          <p>
            Have a question or need assistance? <br />
            Call us at{` `}
            <Link
              href="tel:+9714222333"
              className={cn(
                buttonVariants({ variant: "link" }),
                "px-0 py-0 h-auto"
              )}
            >
              +971 4 222 3333
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
