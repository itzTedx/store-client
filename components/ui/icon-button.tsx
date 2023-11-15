import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: React.ReactElement;
}

const IconButton = ({ onClick, className, icon }: IconButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className={cn(
        "rounded-full flex items-center justify-center bg-white dark:bg-foreground-50 border shadow-md p-1 md:p-2 hover:scale-110 transition-transform hover:text-lime-900 dark:hover:text-lime-100 text-foreground",
        className
      )}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
