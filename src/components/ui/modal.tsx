"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
  type MouseEvent,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    { open, onClose, children, title, description, className, size = "md" },
    ref,
  ) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
      (e: globalThis.KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      },
      [onClose],
    );

    useEffect(() => {
      if (open) {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }, [open, handleKeyDown]);

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === overlayRef.current) onClose();
    };

    return (
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-300" aria-hidden={!open}>
            {/* Backdrop */}
            <motion.div
              ref={overlayRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 flex items-center justify-center bg-ktf-obsidian/50 backdrop-blur-sm p-4"
              onClick={handleOverlayClick}
            >
              {/* Dialog */}
              <motion.div
                ref={ref}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
                aria-describedby={description ? "modal-desc" : undefined}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 4 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className={cn(
                  "relative w-full rounded-xl bg-white shadow-2xl",
                  sizeMap[size],
                  className,
                )}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-ktf-gray-500 transition-colors hover:bg-ktf-gray-100 hover:text-ktf-gray-700"
                  aria-label="Close dialog"
                >
                  <svg
                    className="h-4 w-4"
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

                {/* Content */}
                <div className="p-6">
                  {title && (
                    <h2
                      id="modal-title"
                      className="text-lg font-semibold text-ktf-obsidian pr-8"
                    >
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p
                      id="modal-desc"
                      className="mt-1.5 text-sm text-ktf-gray-600"
                    >
                      {description}
                    </p>
                  )}
                  <div className={cn(title || description ? "mt-5" : "")}>
                    {children}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  },
);

Modal.displayName = "Modal";
