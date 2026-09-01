import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Coffee, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";

import heroImg from "@/assets/hero.jpg";
import latteImg from "@/assets/drink-latte.jpg";

export function HomeHero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY * 0.18));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="surface-dark grain relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Barista pouring latte art into a ceramic cup"
        width={1600}
        height={1200}
        className="absolute inset-0 h-[118%] w-full object-cover opacity-45 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/75 to-espresso/45" />

      <div className="relative z-10 container-lux mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid items-center gap-12 text-center sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:text-left">
          {/* Left */}
          <div>
            <Reveal>
              <span className="pulse-soft inline-flex items-center gap-2 rounded-full border border-brass/40 bg-cream/5 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-brass-soft backdrop-blur-sm">
                <Coffee className="h-3.5 w-3.5" aria-hidden="true" />
                Luxury Coffee Experience
              </span>
            </Reveal>

            <Reveal delay={70}>
              <BrandLogo priority onDark className="mx-auto mt-8 h-10 sm:h-12 md:h-16 lg:mx-0" />
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mx-auto mt-6 max-w-2xl font-display lg:mx-0 text-[clamp(2.25rem,6vw,4rem)] leading-[0.92] tracking-[-0.03em]">
                Freshly Brewed Coffee
                <span className="block italic text-brass-soft">Made with Passion.</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mx-auto mt-6 max-w-md leading-relaxed opacity-75 lg:mx-0">
                Experience handcrafted coffee made from premium single-origin beans,
                served inside a warm and modern environment built for slow mornings.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mx-auto mt-9 grid w-full max-w-xs gap-3 sm:mx-0 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
                <Link to="/menu" className="btn-lux btn-block-sm bg-cream text-espresso hover:bg-brass-soft">
                  Explore Menu
                </Link>
                <Link
                  to="/reserve"
                  className="btn-ghost-lux btn-block-sm border-cream/60 text-cream hover:border-cream hover:bg-cream hover:text-espresso"
                >
                  Book a Table <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
                <div className="flex gap-1 text-brass" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm opacity-70">
                  Trusted by thousands of coffee lovers.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — floating cup, steam, beans */}
          <Reveal delay={260}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="float-slow relative">
                <div
                  className="absolute -inset-8 rounded-full bg-brass/25 blur-3xl"
                  aria-hidden="true"
                />
                <img
                  src={latteImg}
                  alt="Signature honey latte with rosetta latte art"
                  width={1024}
                  height={1024}
                  className="relative w-full rounded-[20px] object-cover shadow-[var(--shadow-lift)]"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
                  <span className="steam-puff left-[38%] -top-10" />
                  <span className="steam-puff left-[50%] -top-14 [animation-delay:1.1s]" />
                  <span className="steam-puff left-[62%] -top-8 [animation-delay:2.2s]" />
                </div>
              </div>

              <span
                className="float-bean absolute -left-6 top-10 grid h-14 w-14 place-items-center rounded-full border border-brass/40 bg-espresso/70 text-brass backdrop-blur-sm"
                aria-hidden="true"
              >
                <Coffee className="h-6 w-6" />
              </span>
              <span
                className="float-bean absolute -right-4 bottom-16 grid h-11 w-11 place-items-center rounded-full border border-brass/30 bg-espresso/70 text-brass-soft backdrop-blur-sm [animation-delay:2s]"
                aria-hidden="true"
              >
                <Coffee className="h-5 w-5" />
              </span>
              <span
                className="float-bean absolute right-10 -top-6 h-3 w-3 rounded-full bg-brass/70 [animation-delay:3.2s]"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={440}>
          <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/15 pt-10 sm:gap-x-8 sm:gap-y-10 md:grid-cols-4">
            {[
              ["14", "Origin lots"],
              ["8 days", "Max roast age"],
              ["4.9", "Guest rating"],
              ["12 yrs", "On this corner"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl text-brass-soft sm:text-3xl">{v}</dt>
                <dd className="mt-2 text-[0.6rem] tracking-[0.24em] uppercase opacity-60">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-cream md:flex"
      >
        <span className="text-[0.55rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="scroll-cue h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
}
