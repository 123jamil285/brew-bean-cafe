import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import interiorImg from "@/assets/interior.jpg";
import beansImg from "@/assets/beans.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Brew & Bean Cafe | A Roastery on Cedar Lane" },
      {
        name: "description",
        content:
          "Since 2012, Brew & Bean Cafe has sourced direct-trade lots, roasted in small batches on Cedar Lane, and built a room worth lingering in.",
      },
      { property: "og:title", content: "Our Story — Brew & Bean Cafe" },
      {
        property: "og:description",
        content:
          "Direct-trade lots, small-batch roasting, and a room built for slow mornings since 2012.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  ["2012", "One machine, one hotplate", "A twelve-seat room on Cedar Lane and a second-hand lever machine."],
  ["2016", "The roaster arrives", "A 12kg drum moves into the back. We stop buying other people's coffee."],
  ["2020", "Direct from the farm", "First contract signed at origin in Huila. Nine more follow."],
  ["2026", "Still the same corner", "Four baristas, fourteen lots a year, and the same oak tables."],
];

function AboutPage() {
  return (
    <>
      <section className="surface-dark grain relative overflow-hidden">
        <img
          src={heroImg}
          alt="Barista pouring milk into an espresso"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 container-lux mx-auto w-full max-w-7xl pt-44 pb-24 md:pt-52 md:pb-32">
          <Reveal>
            <p className="eyebrow">Since 2012</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9]">
              A roastery
              <span className="block italic text-brass-soft">with a front room.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-lux mx-auto w-full max-w-7xl py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="font-display text-3xl leading-snug text-foreground md:text-4xl">
                We opened with twelve seats, one machine, and a stubborn idea that coffee
                should taste of the place it came from.
              </p>
              <p>
                Fourteen years later the idea hasn't changed — only the equipment has. We
                buy small lots directly from growers we visit, roast them in the back room
                twice a week, and put them on the bar within eight days.
              </p>
              <p>
                Nothing here is scaled. The croissants are laminated over three days, the
                milk comes from one dairy an hour north, and the person who sells you a bag
                of beans is usually the person who roasted it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid gap-px sm:grid-cols-2">
              <img
                src={beansImg}
                alt="Roasted coffee beans spilling from a jar"
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full object-cover sm:h-96"
              />
              <img
                src={interiorImg}
                alt="Interior of the cafe with oak tables"
                loading="lazy"
                width={1400}
                height={1000}
                className="h-72 w-full object-cover sm:mt-12 sm:h-96"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="container-lux mx-auto w-full max-w-5xl py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Milestones</p>
          </Reveal>
          <div className="mt-14">
            {timeline.map(([year, title, copy], i) => (
              <Reveal key={year} delay={i * 110}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-8 border-t border-border py-10 last:border-b md:gap-16">
                  <span className="font-display text-3xl text-accent md:text-4xl">{year}</span>
                  <div className="min-w-0">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux mx-auto w-full max-w-7xl py-24 text-center md:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95]">
            Come see the roaster
            <span className="block italic text-muted-foreground">on a Tuesday.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/reserve" className="btn-lux">
              Reserve a Table
            </Link>
            <Link to="/menu" className="btn-ghost-lux">
              See the Menu
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
