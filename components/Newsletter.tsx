import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const Newsletter = () => {
  return (
    <section className="grid sm:grid-cols-2 max-w-5xl mx-auto py-9 sm:py-12 px-3 my-9 bg-lime-100 dark:bg-lime-900 sm:rounded-lg">
      <div className="">Image</div>
      <div className="space-y-2">
        <h5 className="text-lime-900 dark:text-lime-100 font-glirock text-xl sm:text-3xl">
          Join our Newsletter
        </h5>
        <p className="text-sm">
          Signup for our great deals, Inspiration and much more.
        </p>
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "px-0 border bg-background/50"
          )}
        >
          <Input
            placeholder="Enter your email."
            className="w-auto bg-transparent border-0"
          />
          <Button variant="ghost" size="icon" className="">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
