import { useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { transitionLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Lazy, fade-in, aspect-safe image with optional hover zoom. */
export function Image({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  ratio = "auto",
  rounded = true,
  zoom = false,
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  wrapperClassName?: string;
  ratio?: "auto" | "square" | "video" | "portrait" | "wide";
  rounded?: boolean;
  zoom?: boolean;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const ratios: Record<string, string> = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/10]",
  };

  return (
    <div
      className={cn(
        "overflow-hidden bg-muted",
        rounded && "rounded-[20px]",
        ratios[ratio],
        wrapperClassName,
      )}
    >
      <img
        src={src}
        alt={alt}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-lux)]",
          loaded ? "opacity-100" : "opacity-0",
          zoom && "group-hover:scale-110",
          className,
        )}
      />
    </div>
  );
}

export type IconSize = "sm" | "md" | "lg";

/** Lucide icon wrapper with optional circular / outline plate. */
export function Icon({
  icon: Glyph,
  size = "md",
  variant = "plain",
  onDark = false,
  className,
  label,
}: {
  icon: LucideIcon;
  size?: IconSize;
  variant?: "plain" | "circle" | "outline" | "rounded";
  onDark?: boolean;
  className?: string;
  label?: string;
}) {
  const glyph = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" }[size];
  const box = { sm: "h-9 w-9", md: "h-12 w-12", lg: "h-14 w-14" }[size];
  const plate =
    variant === "plain"
      ? ""
      : cn(
          "grid place-items-center shrink-0",
          box,
          variant === "circle" && (onDark ? "rounded-full bg-cream/10" : "rounded-full bg-accent/15"),
          variant === "rounded" &&
            (onDark ? "rounded-[12px] bg-cream/10" : "rounded-[12px] bg-accent/15"),
          variant === "outline" &&
            (onDark ? "rounded-full border border-cream/30" : "rounded-full border border-border"),
        );

  const content = <Glyph className={cn(glyph, variant === "plain" && className)} aria-hidden="true" />;

  if (variant === "plain") {
    return label ? <span aria-label={label}>{content}</span> : content;
  }
  return (
    <span className={cn(plate, "text-accent", className)} {...(label ? { "aria-label": label } : {})}>
      {content}
    </span>
  );
}

export type BadgeTone = "brass" | "cream" | "outline" | "dark";

export function Badge({
  children,
  tone = "brass",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  const tones: Record<BadgeTone, string> = {
    brass: "bg-accent text-accent-foreground",
    cream: "bg-cream/10 text-brass-soft border border-brass/40 backdrop-blur-sm",
    outline: "border border-border text-muted-foreground",
    dark: "bg-espresso text-cream",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.62rem] font-semibold tracking-[0.22em] uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Animated 1–5 star rating with half-star support. */
export function Rating({
  value,
  max = 5,
  showValue = false,
  size = "sm",
  animate = true,
  className,
}: {
  value: number;
  max?: number;
  showValue?: boolean;
  size?: IconSize;
  animate?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion() ?? false;
  const glyph = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" }[size];

  return (
    <div
      className={cn("flex items-center gap-1 text-accent", className)}
      role="img"
      aria-label={`Rated ${value} out of ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(Math.max(value - i, 0), 1);
        return (
          <motion.span
            key={i}
            className="relative inline-block"
            {...(animate && !reduced
              ? {
                  initial: { scale: 0.6, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  viewport: { once: true },
                  transition: transitionLux(0.4, i * 0.06),
                }
              : {})}
          >
            <Star className={cn(glyph, "opacity-30")} aria-hidden="true" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
              aria-hidden="true"
            >
              <Star className={cn(glyph, "fill-current")} />
            </span>
          </motion.span>
        );
      })}
      {showValue ? <span className="ml-1.5 text-xs font-semibold">{value.toFixed(1)}</span> : null}
    </div>
  );
}
