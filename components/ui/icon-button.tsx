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
      variant="ghost"
      className={cn(
        "rounded-full flex items-center justify-center bg-background p-1 md:p-2 hover:scale-110 transition-transform hover:text-lime-900 dark:hover:text-lime-100 text-foreground w-8 h-8",
        className
      )}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
