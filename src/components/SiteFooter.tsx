import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="surface-dark grain">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <h3 className="font-display text-4xl">Brew &amp; Bean</h3>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Brewed with passion • Served with love. A single-origin roastery and quiet
              corner for the city's slow mornings.
            </p>
            <a
              href="https://instagram.com"
              className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase opacity-70 transition-opacity hover:opacity-100"
            >
              <Instagram className="h-4 w-4" /> @brewandbean
            </a>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <ul className="mt-6 space-y-4 text-sm opacity-75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                42 Cedar Lane, Old Harbour District
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                +1 (415) 220-1908
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Mon–Fri 7–20 · Sat–Sun 8–22
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-4 text-sm opacity-75">
              <li>
                <Link to="/menu" className="link-underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/reserve" className="link-underline">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-8 text-[0.65rem] tracking-[0.2em] uppercase opacity-50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Brew &amp; Bean Cafe</span>
          <span>Roasted daily in small batches</span>
        </div>
      </div>
    </footer>
  );
}
