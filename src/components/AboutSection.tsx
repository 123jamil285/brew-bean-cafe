import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

import interiorImg from "@/assets/interior.jpg";

const stats = [
  { to: 10, suffix: "+", label: "Years Experience" },
  { to: 50, suffix: "+", label: "Coffee Varieties" },
  { to: 5000, suffix: "+", label: "Happy Customers" },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-28 md:px-10 md:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <img
            src={interiorImg}
            alt="The warm oak and linen interior of Brew & Bean Cafe"
            loading="lazy"
            width={1400}
            height={1000}
            className="w-full rounded-[20px] object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>

        <div>
          <Reveal delay={120}>
            <p className="eyebrow">About Brew &amp; Bean</p>
            <div className="rule-brass mt-6" />
            <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.96]">
              Where every cup
              <span className="block italic text-muted-foreground">tells a story.</span>
            </h2>
            <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
              We opened on this corner in 2012 with one drum roaster and a stubborn idea:
              that coffee tastes better when you know exactly whose hands picked it. Today
              we buy directly from six family farms, roast twice a week in small batches,
              and pour every cup to order.
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Our mission is simple — treat great coffee with the same care a kitchen gives
              great food, and give the city a warm room to enjoy it in.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-accent">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-2 text-[0.6rem] leading-relaxed tracking-[0.2em] uppercase text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={300}>
            <Link to="/about" className="mt-10 inline-flex btn-ghost-lux">
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
