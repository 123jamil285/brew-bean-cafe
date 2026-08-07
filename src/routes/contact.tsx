import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone, Train } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Opening Hours — Brew & Bean Cafe, Old Harbour" },
      {
        name: "description",
        content:
          "Find Brew & Bean Cafe at 42 Cedar Lane, Old Harbour District. Opening hours, phone, email, parking and transit directions, plus private hire enquiries.",
      },
      { property: "og:title", content: "Contact Brew & Bean Cafe" },
      {
        property: "og:description",
        content:
          "42 Cedar Lane, Old Harbour District. Open Mon–Fri 7–20, Sat–Sun 8–22. Call +1 (415) 220-1908.",
      },
    ],
  }),
  component: ContactPage,
});

const hours = [
  ["Monday – Thursday", "7:00 – 20:00"],
  ["Friday", "7:00 – 22:00"],
  ["Saturday", "8:00 – 22:00"],
  ["Sunday", "8:00 – 18:00"],
];

const channels = [
  {
    icon: Phone,
    label: "Call the bar",
    value: "+1 (415) 220-1908",
    href: "tel:+14152201908",
    note: "Fastest for same-day tables",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@brewandbean.cafe",
    href: "mailto:hello@brewandbean.cafe",
    note: "Press, wholesale and private hire",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@brewandbean",
    href: "https://instagram.com",
    note: "This week's rotating single origin",
  },
];

function ContactPage() {
  return (
    <>
      <section className="surface-dark grain relative overflow-hidden">
        <img
          src={interiorImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1400}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-44 pb-24 md:px-10 md:pt-52 md:pb-32">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-3xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9]">
              Come find us
              <span className="block italic text-brass-soft">on Cedar Lane.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-md leading-relaxed opacity-70">
              Two minutes from the harbour steps, under the green awning. Walk in, call
              ahead, or write to us — someone behind the bar always answers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl">Get in touch</h2>
            </Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border">
              {channels.map((c, i) => (
                <li key={c.label} className="bg-background">
                  <Reveal delay={i * 100}>
                    <a
                      href={c.href}
                      className="group flex items-start gap-5 p-7 transition-colors hover:bg-secondary/50"
                    >
                      <c.icon className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      <span>
                        <span className="block text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="mt-2 block font-display text-2xl">{c.value}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {c.note}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-12 border-t border-border pt-10">
                <h3 className="font-display text-3xl">Private hire &amp; cuppings</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  The mezzanine seats sixteen and can be booked whole for tastings,
                  launches and long lunches. Cupping sessions run Thursday evenings for
                  groups of six or more, led by our head roaster.
                </p>
                <Link to="/reserve" className="btn-lux mt-8">
                  Start an Enquiry
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <aside className="rounded-sm border border-border bg-card p-8 md:p-10">
                <BrandLogo className="h-11" />
                <ul className="mt-8 space-y-6 text-sm">
                  <li className="flex gap-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      42 Cedar Lane
                      <br />
                      Old Harbour District
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Train className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      Harbour Line — Cedar Street stop
                      <br />
                      Street parking after 18:00
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>Kitchen closes one hour before the bar</span>
                  </li>
                </ul>

                <h3 className="mt-10 text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
                  Opening hours
                </h3>
                <dl className="mt-5">
                  {hours.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex items-baseline justify-between gap-4 border-b border-border/70 py-3.5 text-sm"
                    >
                      <dt className="text-muted-foreground">{day}</dt>
                      <dd className="font-display text-lg">{time}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Map showing Brew & Bean Cafe on Cedar Lane"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4241%2C37.7994%2C-122.3971%2C37.8106&layer=mapnik"
                  loading="lazy"
                  className="h-80 w-full grayscale-[0.35]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
