import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Leaf, Flame } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HomeHero } from "@/components/HomeHero";
import { AboutSection } from "@/components/AboutSection";
import { SignatureCoffee } from "@/components/SignatureCoffee";
import { MenuPreview } from "@/components/MenuPreview";
import { HomeGallery } from "@/components/HomeGallery";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { ContactSection } from "@/components/ContactSection";


import interiorImg from "@/assets/interior.jpg";

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
      <HomeHero />

      <AboutSection />

      <SignatureCoffee />

      <MenuPreview />

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

      {/* The room */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal variant="slide-left" duration={0.7}>
            <img
              src={interiorImg}
              alt="Warm oak and linen interior of Brew & Bean Cafe"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-[20px] object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal variant="slide-right" delay={140} duration={0.7}>
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

      {/* Why choose us */}
      <WhyChooseUs />

      <HomeGallery />

      <TestimonialSlider />

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <Reveal variant="scale-in" duration={0.7}>
          <div className="surface-dark grain relative overflow-hidden rounded-[20px] px-8 py-20 text-center md:px-20 md:py-28">
            <div className="relative z-10">
              <p className="eyebrow">Reservations</p>
              <h2 className="mx-auto mt-8 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
                A table is waiting
                <span className="block italic text-brass-soft">for your slow morning.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-xl leading-relaxed opacity-75">
                Experience unforgettable coffee moments — reserve your table today.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link
                  to="/reserve"
                  className="btn-lux glow-brass bg-cream text-espresso hover:bg-brass-soft"
                >
                  Book Now
                </Link>
                <Link
                  to="/contact"
                  className="btn-ghost-lux border-cream/60 text-cream hover:border-cream hover:bg-cream hover:text-espresso"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactSection />
    </>
  );
}
