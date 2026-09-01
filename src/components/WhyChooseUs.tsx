import { Armchair, Award, HandHeart, Sprout, Timer, Wifi, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reasons = [
  {
    icon: Sprout,
    title: "Farm-Direct Sourcing",
    copy: "We buy two harvests a year straight from six growers in Ethiopia, Kenya and Colombia — no brokers, no anonymous lots.",
    stat: "6 partner farms",
  },
  {
    icon: Timer,
    title: "Eight-Day Freshness",
    copy: "Nothing is poured past eight days off the roaster. What doesn't make the window goes home with the team.",
    stat: "Roasted Tue & Fri",
  },
  {
    icon: Award,
    title: "Certified Baristas",
    copy: "Every person behind the bar holds an SCA Barista Skills certification and re-calibrates the grind hourly.",
    stat: "SCA certified",
  },
  {
    icon: HandHeart,
    title: "Hospitality First",
    copy: "Your name, your order, your table. Service here is unhurried on purpose — that is the whole point of the room.",
    stat: "Since 2012",
  },
  {
    icon: Zap,
    title: "Fast, Unhurried Service",
    copy: "Order at the bar and your espresso lands in ninety seconds — without anyone rushing you out of your seat.",
    stat: "90 second espresso",
  },
  {
    icon: Wifi,
    title: "Free Gigabit WiFi",
    copy: "Fibre throughout the room and a power outlet at every seat, so the working hours are as easy as the slow ones.",
    stat: "Power at every seat",
  },
  {
    icon: Armchair,
    title: "Premium Interior",
    copy: "Solid oak, warm linen and brass light designed by a local studio — a room built to be lingered in.",
    stat: "Designed in-house",
  },
];

export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="border-y border-border bg-secondary/30"
    >
      <div className="container-lux mx-auto w-full max-w-7xl py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Why Brew &amp; Bean</p>
              <div className="rule-brass mt-6" />
              <h2
                id="why-heading"
                className="mt-8 font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[0.98]"
              >
                Six reasons
                <span className="block italic text-muted-foreground">
                  the regulars stay.
                </span>
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Everything on this list costs us more than the shortcut would. We think
                you can taste the difference in the cup.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-[20px] bg-border md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <li key={r.title} className="bg-background">
                <Reveal delay={Math.min(i, 3) * 110}>
                  <article className="group h-full p-6 transition-all sm:p-8 duration-500 hover:-translate-y-2 hover:bg-secondary/40 hover:shadow-[var(--shadow-lift)] md:p-10">
                    <r.icon
                      className="h-6 w-6 text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <h3 className="mt-8 font-display text-2xl md:text-3xl">{r.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {r.copy}
                    </p>
                    <p className="mt-8 text-[0.6rem] tracking-[0.24em] uppercase text-accent">
                      {r.stat}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
