import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, Facebook, Twitter, Send } from "lucide-react";
import { BrandLogo } from "./BrandLogo";


export function SiteFooter() {
  return (
    <footer className="grain bg-coffee text-cream">
      <div className="relative z-10 container-lux mx-auto w-full max-w-7xl py-24">
        <div className="grid gap-12 text-center sm:text-left md:grid-cols-2 md:gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="mx-auto max-w-sm sm:mx-0">
            <BrandLogo onDark className="mx-auto h-12 sm:mx-0 sm:h-14" />
            <p className="mt-6 text-sm leading-relaxed opacity-80">
              Brewed with Passion, Served with Love. A single-origin roastery and quiet
              corner for the city's slow mornings.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://instagram.com"
                  aria-label={`Brew & Bean Cafe on ${label} (opens in a new tab)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 transition-all duration-500 hover:-translate-y-1 hover:rotate-6 hover:scale-110 hover:border-brass hover:bg-brass hover:text-espresso"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>


          <div>
            <p className="eyebrow">Visit</p>
            <ul className="mt-6 space-y-4 text-sm opacity-75">
              <li className="flex justify-center gap-3 sm:justify-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                42 Cedar Lane, Old Harbour District
              </li>
              <li className="flex justify-center gap-3 sm:justify-start">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                +1 (415) 220-1908
              </li>
              <li className="flex justify-center gap-3 sm:justify-start">
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
                <Link to="/gallery" className="link-underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/reserve" className="link-underline">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Newsletter</p>
            <p className="mt-6 text-sm leading-relaxed opacity-80">
              New origins, tasting nights and seasonal blends — one quiet email a month.
            </p>
            <form
              className="mt-6 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-xl border border-cream/25 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/45 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/60"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brass text-espresso transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
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
