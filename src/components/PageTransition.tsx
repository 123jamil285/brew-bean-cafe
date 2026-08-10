import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import { transitionLux } from "@/lib/motion";

/** First-load + route-change fade/rise for page content. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      key={pathname}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitionLux(reduced ? 0.3 : 0.7)}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
