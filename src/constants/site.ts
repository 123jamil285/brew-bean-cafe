import { Facebook, Instagram, Twitter, type LucideIcon } from "lucide-react";

/** Single source of truth for brand, contact and navigation data. */
export const SITE = {
  name: "Brew & Bean Cafe",
  tagline: "Brewed with Passion, Served with Love",
  description:
    "A single-origin roastery and quiet corner for the city's slow mornings.",
  phone: "+1 (415) 220-1908",
  phoneHref: "tel:+14152201908",
  email: "hello@brewandbean.cafe",
  emailHref: "mailto:hello@brewandbean.cafe",
  addressLine1: "42 Cedar Lane, Old Harbour District",
  addressLine2: "Northgate District",
  hoursShort: "Mon–Fri 7–20 · Sat–Sun 8–22",
} as const;

export const OPENING_HOURS: readonly (readonly [string, string])[] = [
  ["Monday – Thursday", "7:00 — 18:00"],
  ["Friday", "7:00 — 21:00"],
  ["Saturday", "8:00 — 21:00"],
  ["Sunday", "8:00 — 16:00"],
];

export type SocialLink = { label: string; href: string; Icon: LucideIcon };

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", Icon: Twitter },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/reserve", label: "Reserve" },
] as const;

export const FOOTER_LINKS = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/reserve", label: "Reservations" },
] as const;
