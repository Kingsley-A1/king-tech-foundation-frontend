import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-ktf-gray-800"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "min-h-25 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ktf-obsidian placeholder:text-ktf-gray-500 transition-colors duration-150 resize-y",
            "focus:outline-none focus:ring-2 focus:ring-ktf-blue/30 focus:border-ktf-blue",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-ktf-gray-100",
            error
              ? "border-ktf-error focus:ring-ktf-error/30 focus:border-ktf-error"
              : "border-ktf-gray-300 hover:border-ktf-gray-400",
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : hint
                ? `${textareaId}-hint`
                : undefined
          }
          {...props}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
            className="text-xs text-ktf-error"
            role="alert"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="text-xs text-ktf-gray-500">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
