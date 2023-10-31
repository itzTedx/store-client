import { MouseEventHandler } from "react"

import { cn } from "@/lib/utils"

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  className?: string
  icon: React.ReactElement
}

const IconButton = ({ onClick, className, icon }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white dark:bg-gray-900 border shadow-md p-1 md:p-2 hover:scale-110 transition-transform hover:dark:bg-gray-200 dark:text-gray-800",
        className
      )}
    >
      {icon}
    </button>
  )
}

export default IconButton
