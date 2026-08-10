import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { transitionLux } from "@/lib/motion";
import { BrandLogo } from "./BrandLogo";



const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/reserve", label: "Reserve" },
] as const;


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/70 py-3 text-foreground"
          : "border-b border-transparent py-6 text-cream"
      }`}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Brew & Bean Cafe home">
          <BrandLogo priority onDark={!scrolled} className={scrolled ? "h-10 md:h-11" : "h-9 md:h-10"} />
        </Link>


        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`link-underline text-[0.7rem] font-semibold tracking-[0.22em] uppercase transition-opacity ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "opacity-70 hover:opacity-100"
              }`}
              activeProps={{ className: scrolled ? "text-foreground" : "opacity-100" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <Link
            to="/reserve"
            className={scrolled ? "btn-lux" : "btn-lux bg-cream text-espresso hover:bg-brass-soft"}
          >
            Book a Table
          </Link>
        </div>


        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="mx-6 mt-4 rounded-lg border border-border bg-card p-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[0.75rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/reserve" className="btn-lux mt-2">
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
