import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Image, Badge, Rating, Icon, type BadgeTone } from "./Media";
import { ButtonLink } from "./Button";

/** Shared card shell: 20px radius, soft shadow, hover lift. */
export function Card({
  children,
  className,
  interactive = true,
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string | undefined;
  interactive?: boolean | undefined;
  as?: "article" | "div" | "li" | undefined;
}) {
  return (
    <Tag
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[20px] bg-card shadow-[var(--shadow-soft)] transition-all duration-500",
        interactive && "hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export type CoffeeCardProps = {
  image: string;
  name: string;
  description?: string;
  price?: string;
  rating?: number;
  badge?: string;
  badgeTone?: BadgeTone;
  ctaLabel?: string;
  ctaTo?: string;
  className?: string;
};

export function CoffeeCard({
  image,
  name,
  description,
  price,
  rating,
  badge,
  badgeTone = "brass",
  ctaLabel = "Order",
  ctaTo = "/reserve",
  className,
}: CoffeeCardProps) {
  return (
    <Card className={cn("hover:scale-[1.03]", className)}>
      <div className="relative">
        <Image src={image} alt={name} ratio="square" rounded={false} zoom wrapperClassName="h-56" />
        {badge ? (
          <span className="absolute top-4 left-4">
            <Badge tone={badgeTone}>{badge}</Badge>
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-7">
        {typeof rating === "number" ? <Rating value={rating} showValue size="sm" /> : null}
        <h3 className="mt-3 font-display text-2xl">{name}</h3>
        {description ? (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
        <div className="mt-7 flex items-center justify-between gap-4">
          {price ? <span className="font-display text-2xl text-accent">{price}</span> : <span />}
          {ctaLabel ? (
            <ButtonLink to={ctaTo} size="sm">
              {ctaLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

/** Compact menu row/card: image, name, copy, price. */
export function MenuCard({
  image,
  name,
  description,
  price,
  category,
  rating,
  className,
}: {
  image?: string;
  name: string;
  description?: string;
  price: string;
  category?: string;
  rating?: number;
  className?: string;
}) {
  return (
    <Card className={cn("", className)}>
      {image ? (
        <Image src={image} alt={name} rounded={false} zoom wrapperClassName="h-44" />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {category ? <p className="eyebrow">{category}</p> : null}
        <div className="mt-3 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl">{name}</h3>
          <span className="font-display text-xl text-accent">{price}</span>
        </div>
        {description ? (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
        {typeof rating === "number" ? <Rating value={rating} className="mt-4" /> : null}
      </div>
    </Card>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  meta,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  meta?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group h-full p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-secondary/40 hover:shadow-[var(--shadow-lift)] sm:p-8 md:p-10",
        className,
      )}
    >
      <Icon
        icon={icon}
        size="lg"
        className="text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110"
      />
      <h3 className="mt-8 font-display text-2xl md:text-3xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {meta ? (
        <p className="mt-8 text-[0.6rem] tracking-[0.24em] uppercase text-accent">{meta}</p>
      ) : null}
    </article>
  );
}

export function GalleryCard({
  image,
  caption,
  onClick,
  className,
}: {
  image: string;
  caption: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View ${caption}`}
      className={cn(
        "group relative block w-full overflow-hidden rounded-[20px] text-left focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none",
        className,
      )}
    >
      <Image src={image} alt={caption} zoom rounded={false} />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-espresso/85 to-transparent p-5 text-sm text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {caption}
      </span>
    </button>
  );
}

export function ReviewCard({
  quote,
  name,
  location,
  rating,
  avatar,
  className,
}: {
  quote: string;
  name: string;
  location?: string;
  rating?: number;
  avatar?: string;
  className?: string;
}) {
  return (
    <Card as="div" className={cn("bg-card/80 p-7 backdrop-blur-sm sm:p-9", className)}>
      {typeof rating === "number" ? <Rating value={rating} /> : null}
      <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed italic sm:text-xl">
        “{quote}”
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt=""
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
        ) : null}
        <span className="min-w-0">
          <span className="block truncate font-semibold">{name}</span>
          {location ? (
            <span className="block truncate text-xs text-muted-foreground">{location}</span>
          ) : null}
        </span>
      </figcaption>
    </Card>
  );
}

/** Future-ready team member card. */
export function TeamCard({
  image,
  name,
  role,
  bio,
  className,
}: {
  image: string;
  name: string;
  role: string;
  bio?: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <Image src={image} alt={name} ratio="portrait" rounded={false} zoom />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl">{name}</h3>
        <p className="mt-1 text-[0.65rem] tracking-[0.22em] uppercase text-accent">{role}</p>
        {bio ? (
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{bio}</p>
        ) : null}
      </div>
    </Card>
  );
}
