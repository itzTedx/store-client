"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Draggable from "react-draggable";

const WhatsAppButton = () => {
  return (
    <>
      <div className="block sm:hidden">
        <Draggable>
          <div className="fixed bottom-5 right-5 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer z-50">
            <Link
              href="https://wa.me/+971509807452"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
            </Link>
          </div>
        </Draggable>
      </div>
      <div className="hidden sm:flex fixed bottom-5 right-5 w-12 h-12 bg-green-500 rounded-full  items-center justify-center cursor-pointer z-50">
        <Link
          href="https://wa.me/+971509807452"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle />
        </Link>
      </div>
    </>
  );
};

export default WhatsAppButton;
