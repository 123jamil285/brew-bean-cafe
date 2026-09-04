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
  const reduced = useReducedMotion() ?? false;
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitionLux(0.7, 0.05)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/70 py-3 text-foreground shadow-[var(--shadow-soft)]"
          : "border-b border-transparent bg-transparent py-6 text-cream"
      }`}

    >
      <div className="container-lux mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Brew & Bean Cafe home">
          <BrandLogo priority onDark={!scrolled} className={scrolled ? "h-10 md:h-11" : "h-9 md:h-10"} />
        </Link>


        <nav aria-label="Main" className="hidden items-center justify-center gap-10 lg:flex">
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
          <motion.div
            whileHover={{ scale: reduced ? 1 : 1.05 }}
            whileTap={{ scale: reduced ? 1 : 0.97 }}
            transition={transitionLux(0.4)}

          >
            <Link
              to="/reserve"
              className={`glow-brass ${scrolled ? "btn-lux" : "btn-lux bg-cream text-espresso hover:bg-brass-soft"}`}
            >
              Book a Table
            </Link>
          </motion.div>
        </div>


        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-transform duration-300 hover:scale-105 lg:hidden ${
            scrolled ? "border-border" : "border-cream/40"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            transition={transitionLux(0.5)}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-espresso/85 px-8 py-24 backdrop-blur-2xl lg:hidden"
            style={{ willChange: "transform" }}
          >
            <nav aria-label="Mobile" className="flex flex-col items-center gap-7 text-center">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={transitionLux(0.4, 0.08 + i * 0.05)}
                >
                  <Link
                    to={l.to}
                    className="link-underline inline-flex min-h-11 items-center font-display text-2xl text-cream/80 sm:text-3xl"
                    activeProps={{ className: "text-brass-soft" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/reserve"
                className="btn-lux btn-block-sm mt-4 max-w-xs bg-cream text-espresso hover:bg-brass-soft"
              >
                Book a Table
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

