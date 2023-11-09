"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 60000 is the time in milliseconds, equivalent to 1 minute

    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("keydown", down);
    };
  }, []);
  return <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />;
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/10 backdrop-blur-[1px] p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background text-primary rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="rounded-full absolute right-4 top-4"
            >
              <X />
            </Button>
            <div className="relative z-10">
              <div className="relative aspect-video">
                <Image src="/dubai-water.gif" fill alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-2xl font-bold text-center mb-2">
                  Get our lowest price on this December
                </h3>
                <div className=" bg-foreground-100 text-gray-900 dark:text-gray-200 rounded-md p-4 flex gap-3">
                  <p className=" text-sm font-light">
                    Want to make this December special for your loved one? Get a
                    wish card from us at the lowest cost today!
                  </p>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="dark:bg-lime-500 bg-lime-400 hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded"
                  >
                    Get Now!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
