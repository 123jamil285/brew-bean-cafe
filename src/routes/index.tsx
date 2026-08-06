import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Leaf, Flame, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import beansImg from "@/assets/beans.jpg";
import menuImg from "@/assets/menu.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brew & Bean Cafe — Luxury Specialty Coffee & Roastery" },
      {
        name: "description",
        content:
          "Brewed with passion, served with love. Single-origin espresso, slow-bar pour overs and a warm room to linger in. Reserve your table at Brew & Bean Cafe.",
      },
      { property: "og:title", content: "Brew & Bean Cafe — Luxury Specialty Coffee" },
      {
        property: "og:description",
        content:
          "A single-origin roastery and quiet corner for the city's slow mornings. Book a table today.",
      },
    ],
  }),
  component: Home,
});

const signatures = [
  {
    name: "Velvet Cortado",
    note: "Ethiopia Guji · 4oz",
    price: "$5.50",
    copy: "Cocoa nib sweetness pulled short, folded into silk-textured milk.",
  },
  {
    name: "Harbour Pour Over",
    note: "Colombia Huila · V60",
    price: "$7.00",
    copy: "Six minutes of patience. Jasmine, ripe apricot, a clean caramel finish.",
  },
  {
    name: "Burnt Honey Latte",
    note: "House blend · 8oz",
    price: "$6.25",
    copy: "Slow-caramelised honey, sea salt, and a double ristretto base.",
  },
];

const pillars = [
  {
    icon: Leaf,
    title: "Direct Trade",
    copy: "Every lot traced to the farm, paid above fair-trade floor, harvested this season.",
  },
  {
    icon: Flame,
    title: "Roasted Daily",
    copy: "A 12kg drum roaster in the back room. Nothing on the bar older than eight days.",
  },
  {
    icon: Coffee,
    title: "Slow Bar",
    copy: "One barista, one guest, one brew at a time. Coffee served the way it deserves.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="surface-dark grain relative min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Barista pouring latte art into a ceramic cup"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/70 to-espresso/40" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-6 pt-32 pb-20 md:px-10">
          <Reveal>
            <p className="eyebrow">Est. 2012 · Old Harbour District</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.03em]">
              Brewed with passion,
              <span className="block italic text-brass-soft">served with love.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-md text-base leading-relaxed opacity-70">
              A small roastery and slow bar where single-origin coffee is treated like
              wine — sourced by hand, roasted in batches, poured without hurry.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/reserve" className="btn-lux bg-cream text-espresso hover:bg-brass-soft">
                Reserve a Table
              </Link>
              <Link to="/menu" className="btn-ghost-lux text-cream">
                View the Menu <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <dl className="mt-24 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-10 border-t border-cream/15 pt-10 sm:grid-cols-4">
              {[
                ["14", "Origin lots"],
                ["8 days", "Max roast age"],
                ["4.9", "Guest rating"],
                ["12 yrs", "On this corner"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-brass-soft">{v}</dt>
                  <dd className="mt-2 text-[0.6rem] tracking-[0.24em] uppercase opacity-60">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">The Craft</p>
              <div className="rule-brass mt-6" />
              <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
                Coffee is agriculture
                <span className="block italic text-muted-foreground">
                  before it is a drink.
                </span>
              </h2>
              <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
                We buy small — sometimes a single day's harvest from one hillside — so the
                cup in front of you tastes of somewhere specific. Then we get out of the
                way.
              </p>
              <Link to="/about" className="mt-10 inline-flex btn-ghost-lux">
                Our Story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-px">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t border-border py-10 transition-colors last:border-b hover:border-accent">
                  <p.icon className="mt-1 h-6 w-6 shrink-0 text-accent transition-transform duration-700 group-hover:scale-110" />
                  <div className="min-w-0">
                    <h3 className="text-2xl">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{p.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature menu */}
      <section className="surface-dark grain">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <Reveal>
              <div>
                <p className="eyebrow">Signatures</p>
                <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
                  Three pours worth
                  <span className="block italic text-brass-soft">the walk over.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/menu" className="btn-ghost-lux text-cream">
                Full Menu
              </Link>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px sm:grid-cols-3">
            {signatures.map((s, i) => (
              <Reveal key={s.name} delay={i * 130}>
                <article className="group h-full border-t border-cream/15 pt-10 transition-colors hover:border-brass sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 sm:first:border-l-0 sm:first:pl-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl">{s.name}</h3>
                    <span className="font-display text-xl text-brass-soft">{s.price}</span>
                  </div>
                  <p className="mt-2 text-[0.6rem] tracking-[0.24em] uppercase opacity-50">
                    {s.note}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed opacity-70">{s.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-24 grid gap-px overflow-hidden sm:grid-cols-3">
              {[beansImg, menuImg, interiorImg].map((src, i) => (
                <div key={i} className="overflow-hidden">
                  <img
                    src={src}
                    alt={
                      ["Roasted coffee beans", "Espresso and croissants", "Cafe interior"][i]
                    }
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-64 w-full object-cover grayscale-[25%] transition-all duration-1000 hover:scale-105 hover:grayscale-0 md:h-80"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The room */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <img
              src={interiorImg}
              alt="Warm oak and linen interior of Brew & Bean Cafe"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={140}>
            <div>
              <p className="eyebrow">The Room</p>
              <div className="rule-brass mt-6" />
              <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
                Stay as long
                <span className="block italic text-muted-foreground">as you like.</span>
              </h2>
              <p className="mt-8 leading-relaxed text-muted-foreground">
                Oak tables, warm linen, brass light. Fast wifi at the back for the working
                hours, a quiet mezzanine for the reading ones, and a long communal table
                that fills up every Saturday.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Free gigabit wifi",
                  "Power at every seat",
                  "Private meeting nook",
                  "Dog friendly terrace",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 border-b border-border pb-3 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow text-center">Guest Book</p>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                q: "The cortado here ruined every other cortado for me. The room is even better than the coffee.",
                n: "Amara O.",
                r: "Regular since 2019",
              },
              {
                q: "I've taken three clients here and signed all three. Something about the light at 10am.",
                n: "Daniel K.",
                r: "Architect",
              },
              {
                q: "They remember my order, my dog's name, and which table I like. That's the whole review.",
                n: "Priya S.",
                r: "Neighbour",
              },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 130}>
                <figure className="h-full">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-2xl leading-snug">
                    “{t.q}”
                  </blockquote>
                  <figcaption className="mt-6 text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
                    {t.n} · {t.r}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <div className="surface-dark grain relative overflow-hidden rounded-sm px-8 py-20 text-center md:px-20 md:py-28">
            <div className="relative z-10">
              <p className="eyebrow">Reservations</p>
              <h2 className="mx-auto mt-8 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
                A table is waiting
                <span className="block italic text-brass-soft">for your slow morning.</span>
              </h2>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link
                  to="/reserve"
                  className="btn-lux bg-cream text-espresso hover:bg-brass-soft"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
