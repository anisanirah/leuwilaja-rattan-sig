import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white border border-stone-100 shadow-sm",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-stone-200",
        className
      )}
    >
      {children}
    </div>
  );
}