import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TagProps {
  children: ReactNode;
  variant?: "filled" | "outline";
  onRemove?: () => void;
  className?: string;
}

export function Tag({
  children,
  variant = "filled",
  onRemove,
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
        variant === "filled" && "bg-ktf-blue/8 text-ktf-blue",
        variant === "outline" && "border border-ktf-gray-300 text-ktf-gray-700",
        className,
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm text-current opacity-60 transition-opacity hover:opacity-100"
          aria-label="Remove"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}
