import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Brew & Bean Cafe" },
      {
        name: "description",
        content:
          "Book a table at Brew & Bean Cafe on Cedar Lane. Slow-bar tastings, meeting nooks and terrace seating, seven days a week.",
      },
      { property: "og:title", content: "Reserve a Table — Brew & Bean Cafe" },
      {
        property: "og:description",
        content: "Book your table on Cedar Lane — slow bar, meeting nooks and terrace seating.",
      },
    ],
  }),
  component: ReservePage,
});

const field =
  "w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent";
const label = "block text-[0.6rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground";

function ReservePage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="surface-dark grain relative overflow-hidden">
        <img
          src={interiorImg}
          alt="Cafe interior with oak tables and daylight"
          width={1400}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-44 pb-24 md:px-10 md:pt-52 md:pb-32">
          <Reveal>
            <p className="eyebrow">Reservations</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-3xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9]">
              Save your
              <span className="block italic text-brass-soft">seat by the window.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <Reveal>
            {sent ? (
              <div className="flex h-full min-h-72 flex-col items-start justify-center border border-accent/40 bg-secondary/40 p-10">
                <Check className="h-8 w-8 text-accent" />
                <h2 className="mt-6 font-display text-4xl">Table requested</h2>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  We'll confirm by phone within the hour. If it's urgent, call the bar
                  directly on +1 (415) 220-1908.
                </p>
                <button className="btn-ghost-lux mt-8" onClick={() => setSent(false)}>
                  Book another
                </button>
              </div>
            ) : (
              <form
                className="space-y-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="name">
                      Full name
                    </label>
                    <input id="name" required placeholder="Amara Okafor" className={field} />
                  </div>
                  <div>
                    <label className={label} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      placeholder="+1 415 000 0000"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="date">
                      Date
                    </label>
                    <input id="date" required type="date" className={field} />
                  </div>
                  <div>
                    <label className={label} htmlFor="time">
                      Time
                    </label>
                    <input id="time" required type="time" className={field} />
                  </div>
                  <div>
                    <label className={label} htmlFor="guests">
                      Guests
                    </label>
                    <select id="guests" className={field} defaultValue="2">
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="seating">
                      Seating
                    </label>
                    <select id="seating" className={field} defaultValue="Window">
                      {["Window", "Slow bar", "Mezzanine", "Terrace", "Meeting nook"].map(
                        (s) => (
                          <option key={s}>{s}</option>
                        ),
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="notes">
                    Anything we should know
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Allergies, celebrations, a dog joining us…"
                    className={`${field} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-lux w-full sm:w-auto">
                  Request Table
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={140}>
            <aside className="border-t border-border pt-10 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
              <BrandLogo className="mb-8 h-11" />
              <p className="eyebrow">Find us</p>

              <ul className="mt-8 space-y-7 text-sm">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    42 Cedar Lane
                    <br />
                    Old Harbour District
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  +1 (415) 220-1908
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    Mon–Fri · 7:00 – 20:00
                    <br />
                    Sat–Sun · 8:00 – 22:00
                  </span>
                </li>
              </ul>
              <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
                Walk-ins are always welcome — reservations simply hold the good seats. Groups
                over ten, please call ahead.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
