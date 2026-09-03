import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { staggerParent, transitionLux, viewportOnce } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Named animation wrappers — thin, consistent aliases over Reveal. */
export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <Reveal variant="fade-up" delay={delay} className={className ?? ""}>
      {children}
    </Reveal>
  );
}

export function FadeLeft({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <Reveal variant="slide-left" delay={delay} className={className ?? ""}>
      {children}
    </Reveal>
  );
}

export function FadeRight({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <Reveal variant="slide-right" delay={delay} className={className ?? ""}>
      {children}
    </Reveal>
  );
}

export function ScaleIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <Reveal variant="scale-in" delay={delay} className={className ?? ""}>
      {children}
    </Reveal>
  );
}

export function StaggerChildren({
  children,
  stagger = 0.1,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerParent(stagger)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Hover lift wrapper for non-card elements. */
export function HoverLift({
  children,
  className,
  lift = 6,
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      className={cn("will-change-transform", className)}
      whileHover={reduced ? {} : { y: -lift }}
      transition={transitionLux(0.4)}
    >
      {children}
    </motion.div>
  );
}
