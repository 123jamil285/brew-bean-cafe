import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  revealVariants,
  transitionLux,
  viewportOnce,
  type RevealVariant,
} from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  variant = "fade-up",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  /** delay in ms (50–150ms steps recommended) */
  delay?: number;
  /** duration in seconds */
  duration?: number;
  variant?: RevealVariant;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduced = useReducedMotion() ?? false;
  const Component = motion[Tag];

  return (
    <Component
      className={className}
      variants={revealVariants(variant, reduced)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={transitionLux(reduced ? 0.3 : duration, reduced ? 0 : delay / 1000)}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Component>
  );
}
