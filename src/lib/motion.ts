import type { Variants, Transition } from "motion/react";

/** Shared luxury easing + timing tokens (0.4s–0.8s, easeInOut). */
export const EASE_LUX: [number, number, number, number] = [0.42, 0, 0.58, 1];

export const transitionLux = (duration = 0.6, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE_LUX,
});

export type RevealVariant = "fade-up" | "slide-left" | "slide-right" | "scale-in" | "fade";

const offsets: Record<RevealVariant, { x?: number; y?: number; scale?: number }> = {
  "fade-up": { y: 28 },
  "slide-left": { x: -40 },
  "slide-right": { x: 40 },
  "scale-in": { scale: 0.94 },
  fade: {},
};

export const revealVariants = (variant: RevealVariant, reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, x: 0, y: 0, scale: 1, ...offsets[variant] },
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
});

/** Parent that staggers its Reveal/motion children. */
export const staggerParent = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const viewportOnce = { once: true, amount: 0.2, margin: "0px 0px -60px 0px" } as const;
