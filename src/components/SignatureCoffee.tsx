import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

import cortadoImg from "@/assets/drink-cortado.jpg";
import pourOverImg from "@/assets/drink-pourover.jpg";
import latteImg from "@/assets/drink-latte.jpg";
import icedImg from "@/assets/drink-iced.jpg";

const drinks = [
  {
    img: cortadoImg,
    name: "Velvet Cortado",
    copy: "Ethiopia Guji pulled short and folded into silk-textured milk. Cocoa nib sweetness.",
    rating: "4.9",
    price: "$5.50",
  },
  {
    img: pourOverImg,
    name: "Harbour Pour Over",
    copy: "Six patient minutes over a V60. Jasmine, ripe apricot and a clean caramel finish.",
    rating: "5.0",
    price: "$7.00",
  },
  {
    img: latteImg,
    name: "Burnt Honey Latte",
    copy: "Slow-caramelised honey, a pinch of sea salt and a double ristretto base.",
    rating: "4.8",
    price: "$6.25",
  },
  {
    img: icedImg,
    name: "Orange Coffee Tonic",
    copy: "Cold-brew concentrate over tonic and clear ice, finished with charred orange peel.",
    rating: "4.7",
    price: "$6.75",
  },
];

export function SignatureCoffee() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container-lux mx-auto w-full max-w-7xl py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Signatures</p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.96]">
              Our Signature Coffee
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Discover our most loved handcrafted beverages.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((d, i) => (
            <Reveal key={d.name} variant="scale-in" delay={i * 110} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[var(--shadow-lift)]">
                <div className="overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-56 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-1.5 text-accent">
                    <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    <span className="text-xs font-semibold">{d.rating}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl">{d.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {d.copy}
                  </p>
                  <div className="mt-7 flex items-center justify-between gap-4">
                    <span className="font-display text-2xl text-accent">{d.price}</span>
                    <Link
                      to="/reserve"
                      className="glow-brass rounded-[12px] bg-primary px-5 py-2.5 font-[family-name:var(--font-button)] text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                    >
                      Order
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
