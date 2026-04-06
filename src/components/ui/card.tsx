import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "premium";
  padding?: "none" | "sm" | "md" | "lg";
  href?: string;
  as?: "div" | "article" | "section";
}

const paddingMap: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  variant = "default",
  padding = "md",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border transition-shadow duration-200",
        paddingMap[padding],
        variant === "default" && [
          "border-ktf-gray-200 bg-white",
          "shadow-card",
          "hover:shadow-[0_8px_25px_-5px_rgba(10,132,255,0.12),0_4px_10px_-4px_rgba(11,31,58,0.06)]",
        ],
        variant === "premium" && [
          "border-ktf-blue/20 bg-gradient-to-br from-white to-ktf-surface",
          "shadow-[0_4px_6px_-1px_rgba(11,31,58,0.07),0_2px_4px_-2px_rgba(11,31,58,0.05)]",
          "hover:shadow-[0_20px_25px_-5px_rgba(10,132,255,0.15),0_8px_10px_-6px_rgba(11,31,58,0.06)]",
          "hover:border-ktf-blue/40",
        ],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>{children}</div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-lg font-semibold text-ktf-obsidian", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-ktf-gray-600", className)}>{children}</p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-6 flex items-center gap-3 border-t border-ktf-gray-200 pt-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
