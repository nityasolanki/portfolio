import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely: clsx handles conditionals,
 * twMerge resolves conflicts (`p-4` + `p-6` → `p-6`) so component
 * consumers can override defaults via className.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
