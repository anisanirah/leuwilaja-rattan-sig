import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-stone-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}