import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, type = "text", ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-ktf-gray-800"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            "h-10 w-full rounded-lg border bg-white px-3 text-sm text-ktf-obsidian placeholder:text-ktf-gray-500 transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-ktf-blue/30 focus:border-ktf-blue",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-ktf-gray-100",
            error
              ? "border-ktf-error focus:ring-ktf-error/30 focus:border-ktf-error"
              : "border-ktf-gray-300 hover:border-ktf-gray-400",
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-ktf-error"
            role="alert"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-ktf-gray-500">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
