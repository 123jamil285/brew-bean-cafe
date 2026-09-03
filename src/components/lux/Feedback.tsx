import type { ReactNode } from "react";
import { Coffee, Loader2, SearchX, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink, Button } from "./Button";

export function Spinner({ className, label = "Loading" }: { className?: string; label?: string }) {
  return (
    <span role="status" aria-label={label} className={cn("inline-flex", className)}>
      <Loader2 className="h-5 w-5 animate-spin text-accent" aria-hidden="true" />
    </span>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block animate-pulse rounded-[12px] bg-muted", className)}
    />
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[20px] bg-card p-0 shadow-[var(--shadow-soft)]", className)}>
      <Skeleton className="h-56 w-full rounded-none" />
      <div className="space-y-3 p-7">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
    </div>
  );
}

/** Full-screen brand loading screen. */
export function LoadingScreen({ label = "Brewing" }: { label?: string }) {
  return (
    <div
      role="status"
      className="grid min-h-[60vh] place-items-center bg-background px-4 text-center"
    >
      <div>
        <Coffee className="mx-auto h-8 w-8 animate-pulse text-accent" aria-hidden="true" />
        <p className="mt-5 text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
          {label}…
        </p>
      </div>
    </div>
  );
}

function Shell({
  icon,
  title,
  description,
  children,
  className,
}: {
  icon: ReactNode;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-md px-4 py-20 text-center", className)}>
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
        {icon}
      </span>
      <h2 className="mt-7 font-display text-3xl">{title}</h2>
      {description ? (
        <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      {children ? <div className="mt-8 flex justify-center gap-3">{children}</div> : null}
    </div>
  );
}

export function ErrorMessage({
  title = "Something went wrong",
  description = "We couldn't load this just now. Please try again.",
  onRetry,
}: {
  title?: string;
  description?: ReactNode;
  onRetry?: () => void;
}) {
  return (
    <Shell icon={<TriangleAlert className="h-6 w-6" aria-hidden="true" />} title={title} description={description}>
      {onRetry ? <Button onClick={onRetry}>Try again</Button> : null}
    </Shell>
  );
}

export function EmptyState({
  title = "Nothing here yet",
  description,
  action,
}: {
  title?: string;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Shell icon={<Coffee className="h-6 w-6" aria-hidden="true" />} title={title} description={description}>
      {action}
    </Shell>
  );
}

export function NoResults({ query }: { query?: string }) {
  return (
    <Shell
      icon={<SearchX className="h-6 w-6" aria-hidden="true" />}
      title="No matches"
      description={query ? `Nothing matched “${query}”. Try another search.` : "Try another search."}
    />
  );
}

export function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-background">
      <Shell
        icon={<Coffee className="h-6 w-6" aria-hidden="true" />}
        title="404 — Page not found"
        description="This page has been cleared away with the morning cups. Let's get you back to something warm."
      >
        <ButtonLink to="/">Back home</ButtonLink>
        <ButtonLink to="/menu" variant="outline">
          View menu
        </ButtonLink>
      </Shell>
    </div>
  );
}
