import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function progressPct(raised, goal) {
  return Math.min(Math.round((raised / goal) * 100), 100);
}

export function formatNumber(n) {
  return n.toLocaleString();
}