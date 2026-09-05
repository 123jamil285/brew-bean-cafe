import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MENU_CATEGORIES } from "@/constants/menu";

export function MenuPreview() {
  const [active, setActive] = useState(MENU_CATEGORIES[0]!.key);
  const current = MENU_CATEGORIES.find((c) => c.key === active) ?? MENU_CATEGORIES[0]!;


  return (
    <section className="container-lux mx-auto w-full max-w-7xl py-24 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Menu Preview</p>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[0.96]">
            A taste of the counter
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Four favourites from every corner of the menu, updated with the season.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div
          role="tablist"
          aria-label="Menu categories"
          className="mx-auto mt-12 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-[20px] border border-border bg-secondary/40 p-2"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              role="tab"
              type="button"
              aria-selected={active === c.key}
              onClick={() => setActive(c.key)}
              className={`min-h-11 rounded-[12px] px-4 py-2.5 sm:px-6 font-[family-name:var(--font-button)] text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-all duration-500 ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={active} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {current.items.map((item, i) => (
          <Reveal key={`${active}-${item.name}`} delay={i * 90} duration={0.5} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-48 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
                <span className="mt-6 font-display text-xl text-accent transition-colors duration-500 group-hover:text-coffee">
                  {item.price}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-14 flex justify-center">
          <Link to="/menu" className="btn-lux">
            View Full Menu <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
