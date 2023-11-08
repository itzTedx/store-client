import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPlural(word: string, number: number): string {
  if (number > 1) {
    return word + "s";
  } else {
    return word;
  }
}
