import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "icon";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 font-[family-name:var(--font-button)] font-semibold uppercase tracking-[0.12em] rounded-[12px] transition-all duration-500 disabled:pointer-events-none disabled:opacity-55";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-lift)]",
  secondary:
    "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-soft)]",
  outline:
    "border-2 border-coffee/70 text-current hover:-translate-y-0.5 hover:border-coffee hover:bg-coffee hover:text-cream",
  ghost: "text-current hover:text-accent",
  icon: "rounded-full border border-current/25 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5 py-2.5 text-[0.7rem]",
  md: "min-h-12 px-6 py-3.5 text-[0.8125rem] md:px-8 md:py-4",
  lg: "min-h-14 px-8 py-4 text-sm md:px-10",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "h-10 w-10 p-0",
  md: "h-12 w-12 p-0",
  lg: "h-14 w-14 p-0",
};

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  /** full width below the sm breakpoint only */
  blockOnMobile?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  block,
  blockOnMobile,
  className,
}: {
  variant?: ButtonVariant | undefined;
  size?: ButtonSize | undefined;
  block?: boolean | undefined;
  blockOnMobile?: boolean | undefined;
  className?: string | undefined;
} = {}) {
  return cn(
    base,
    variants[variant],
    variant === "icon" ? iconSizes[size] : sizes[size],
    block && "w-full",
    blockOnMobile && "w-full sm:w-auto",
    className,
  );
}

type NativeButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, NativeButtonProps>(function Button(
  {
    variant,
    size,
    block,
    blockOnMobile,
    loading = false,
    icon,
    iconRight,
    className,
    children,
    disabled,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={buttonClasses({ variant, size, block, blockOnMobile, className })}
      {...rest}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : icon}
      {children}
      {!loading && iconRight}
    </button>
  );
});

/** Same visual language, rendered as a router link. */
export function ButtonLink({
  to,
  href,
  variant,
  size,
  block,
  blockOnMobile,
  icon,
  iconRight,
  className,
  children,
  ...rest
}: ButtonProps & {
  to?: string;
  href?: string;
  [key: string]: unknown;
}) {
  const cls = buttonClasses({ variant, size, block, blockOnMobile, className });

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {icon}
        {children}
        {iconRight}
      </a>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} className={cls} {...(rest as any)}>
      {icon}
      {children}
      {iconRight}
    </Link>
  );
}
