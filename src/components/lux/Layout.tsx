import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type Width = "narrow" | "default" | "wide";

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  width = "wide",
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={cn("container-lux mx-auto w-full", widths[width], className)}>
      {children}
    </Tag>
  );
}

type Tone = "default" | "muted" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-background text-foreground",
  muted: "border-y border-border bg-secondary/30",
  dark: "surface-dark grain relative",
};

/** Vertical rhythm + background tone wrapper used by every page section. */
export function Section({
  children,
  tone = "default",
  width = "wide",
  id,
  className,
  containerClassName,
}: {
  children: ReactNode;
  tone?: Tone;
  width?: Width;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn(tones[tone], className)}>
      <Container width={width} className={cn("relative z-10 py-24 md:py-32", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}

export function Divider({ className }: { className?: string }) {
  return <span className={cn("rule-brass block", className)} aria-hidden="true" />;
}

/** Consistent gap between stacked blocks. */
export function Spacing({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? "h-6" : size === "lg" ? "h-20" : "h-12";
  return <span className={cn("block", h)} aria-hidden="true" />;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  onDark = false,
  action,
  className,
}: {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  onDark?: boolean;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div
        className={cn(
          "max-w-2xl",
          align === "center" ? "mx-auto text-center" : "text-left",
        )}
      >
        {label ? <p className="eyebrow">{label}</p> : null}
        <h2 className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[0.96]">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-6 leading-relaxed",
              onDark ? "opacity-75" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        ) : null}
        {action ? (
          <div className={cn("mt-8 flex", align === "center" && "justify-center")}>{action}</div>
        ) : null}
      </div>
    </Reveal>
  );
}

/** Top-of-page hero band for interior pages. */
export function PageHeader({
  label,
  title,
  description,
  children,
}: {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="surface-dark grain relative">
      <Container className="relative z-10 pt-36 pb-20 text-center md:pt-44 md:pb-28">
        {label ? <p className="eyebrow">{label}</p> : null}
        <h1 className="mt-6 font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-[0.96]">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed opacity-75">{description}</p>
        ) : null}
        {children}
      </Container>
    </header>
  );
}
