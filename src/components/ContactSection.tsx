import { useState, type FormEvent } from "react";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const hours = [
  ["Monday – Thursday", "7:00 — 18:00"],
  ["Friday", "7:00 — 21:00"],
  ["Saturday", "8:00 — 21:00"],
  ["Sunday", "8:00 — 16:00"],
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full rounded-[12px] border border-border bg-card px-4 py-3 text-sm outline-none transition-shadow duration-300 focus:border-accent focus:ring-2 focus:ring-accent/40";

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <div className="rule-brass mt-6" />
          <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.96]">
            Come say hello
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <p className="leading-relaxed text-muted-foreground">
                18 Harbour Lane, Old Harbour District
                <br />
                Northgate, NG1 4QT
              </p>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <a href="tel:+15550142200" className="link-underline text-muted-foreground">
                +1 (555) 014-2200
              </a>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <a
                href="mailto:hello@brewandbean.cafe"
                className="link-underline text-muted-foreground"
              >
                hello@brewandbean.cafe
              </a>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <ul className="w-full max-w-sm space-y-2.5">
                {hours.map(([d, t]) => (
                  <li
                    key={d}
                    className="flex justify-between gap-6 border-b border-border pb-2 text-sm text-muted-foreground"
                  >
                    <span>{d}</span>
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={["Instagram", "Facebook", "Twitter"][i]}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <form
            onSubmit={onSubmit}
            className="rounded-[20px] border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
                  Name
                </span>
                <input required name="name" className={`mt-2 ${field}`} placeholder="Amara Okafor" />
              </label>
              <label className="block sm:col-span-1">
                <span className="text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className={`mt-2 ${field}`}
                  placeholder="you@email.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
                  Phone
                </span>
                <input
                  name="phone"
                  type="tel"
                  className={`mt-2 ${field}`}
                  placeholder="+1 (555) 000-0000"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={`mt-2 ${field} resize-none`}
                  placeholder="Tell us what you need — a table, a private hire, or a wholesale order."
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-lux glow-brass mt-8 w-full transition-transform duration-500 hover:-translate-y-1 sm:w-auto"
            >
              Send Message
            </button>
            <AnimatePresence>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={transitionLux(0.5)}
                  className="mt-5 flex items-center gap-2 text-sm text-accent"
                  role="status"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.35"
                    />
                    <path
                      d="M7.5 12.4l3 3 6-6.4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="draw-check"
                    />
                  </svg>
                  Thank you — we'll reply within one working day.
                </motion.p>
              )}
            </AnimatePresence>

          </form>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-14 overflow-hidden rounded-[20px] border border-border shadow-[var(--shadow-soft)]">
          <iframe
            title="Map showing Brew & Bean Cafe location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.505%2C-0.10%2C51.520&layer=mapnik"
            loading="lazy"
            className="h-[360px] w-full border-0 grayscale-[35%]"
          />
        </div>
      </Reveal>
    </section>
  );
}
