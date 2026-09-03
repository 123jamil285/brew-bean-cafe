import { useState, type FormEvent, type ReactNode } from "react";
import { Facebook, Instagram, Linkedin, Send, Youtube, Music2, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, ButtonLink } from "./Button";
import { Container } from "./Layout";
import { Reveal } from "@/components/Reveal";

const socials = [
  { key: "instagram", label: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { key: "facebook", label: "Facebook", Icon: Facebook, href: "https://facebook.com" },
  { key: "x", label: "X", Icon: Twitter, href: "https://x.com" },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com" },
  { key: "youtube", label: "YouTube", Icon: Youtube, href: "https://youtube.com" },
  { key: "tiktok", label: "TikTok", Icon: Music2, href: "https://tiktok.com" },
] as const;

export function SocialIcons({
  only,
  onDark = false,
  className,
}: {
  only?: readonly string[];
  onDark?: boolean;
  className?: string;
}) {
  const list = only ? socials.filter((s) => only.includes(s.key)) : socials;
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {list.map(({ key, label, Icon, href }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full border transition-all duration-500 hover:-translate-y-1 hover:rotate-6 hover:scale-110",
              onDark
                ? "border-cream/25 hover:border-brass hover:bg-brass hover:text-espresso"
                : "border-border hover:border-accent hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Newsletter({
  onDark = false,
  compact = false,
  className,
}: {
  onDark?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => setStatus("done"), 700);
  }

  if (status === "done") {
    return (
      <p
        role="status"
        className={cn("text-sm", onDark ? "text-brass-soft" : "text-accent", className)}
      >
        You're on the list — welcome to the slow mornings club.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className={cn("flex items-center gap-2", className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className={cn(
          "min-w-0 flex-1 rounded-[12px] border px-4 py-3 text-base outline-none transition-all focus:ring-2",
          onDark
            ? "border-cream/25 bg-cream/5 text-cream placeholder:text-cream/45 focus:border-brass focus:ring-brass/60"
            : "border-border bg-background text-foreground focus:border-accent focus:ring-accent/50",
        )}
      />
      {compact ? (
        <Button
          type="submit"
          loading={status === "loading"}
          aria-label="Subscribe"
          className={cn(
            "h-12 w-12 shrink-0 rounded-[12px] p-0",
            onDark && "bg-brass text-espresso hover:bg-brass",
          )}
        >
          {status === "loading" ? null : <Send className="h-4 w-4" aria-hidden="true" />}
        </Button>
      ) : (
        <Button type="submit" loading={status === "loading"} className="shrink-0">
          Subscribe
        </Button>
      )}
    </form>
  );
}

/** Full-width call-to-action band with optional background image. */
export function CTA({
  label,
  title,
  description,
  primary,
  secondary,
  backgroundImage,
  className,
}: {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  backgroundImage?: string;
  className?: string;
}) {
  return (
    <section className={cn("surface-dark grain relative overflow-hidden", className)}>
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <span className="absolute inset-0 bg-espresso/70" aria-hidden="true" />
        </>
      ) : null}
      <Container className="relative z-10 py-24 text-center md:py-32">
        <Reveal>
          {label ? <p className="eyebrow">{label}</p> : null}
          <h2 className="mt-6 font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-[0.98]">
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-6 max-w-xl leading-relaxed opacity-75">{description}</p>
          ) : null}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primary ? (
              <ButtonLink to={primary.to} size="lg" blockOnMobile>
                {primary.label}
              </ButtonLink>
            ) : null}
            {secondary ? (
              <ButtonLink
                to={secondary.to}
                size="lg"
                variant="outline"
                blockOnMobile
                className="border-cream/60 text-cream hover:border-cream hover:bg-cream hover:text-espresso"
              >
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
