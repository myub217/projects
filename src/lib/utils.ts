// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * รวมคลาสโดยรองรับการเขียนแบบเงื่อนไข (clsx) + จัดการ merge class (twMerge)
 * ตัวอย่าง: cn("p-4", isDark && "bg-black", "text-white")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}