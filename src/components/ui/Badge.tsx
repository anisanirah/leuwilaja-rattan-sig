import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "emerald" | "stone";
}

const variants = {
  default: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
  emerald: "bg-emerald-600 text-white",
  stone: "bg-stone-100 text-stone-700 ring-stone-200",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}