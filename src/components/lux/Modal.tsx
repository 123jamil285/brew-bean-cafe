import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { transitionLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  title,
  children,
  size = "md",
  bare = false,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  /** No padding / card chrome — for image previews. */
  bare?: boolean;
  className?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  const widths = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    full: "max-w-6xl",
  }[size];

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-100 grid place-items-center bg-espresso/85 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transitionLux(0.4)}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          {...(title ? { "aria-label": title } : {})}
        >
          <motion.div
            className={cn(
              "relative max-h-[90vh] w-full overflow-auto",
              widths,
              !bare && "rounded-[20px] bg-card p-6 shadow-[var(--shadow-lift)] sm:p-9",
              className,
            )}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={transitionLux(0.5)}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-current/20 bg-background/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            {title && !bare ? (
              <h2 className="pr-12 font-display text-2xl sm:text-3xl">{title}</h2>
            ) : null}
            <div className={cn(!bare && title && "mt-5")}>{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
