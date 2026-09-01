import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import beansImg from "@/assets/beans.jpg";
import menuImg from "@/assets/menu.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Brew & Bean Cafe | Room, Bar & Roastery" },
      {
        name: "description",
        content:
          "A look inside Brew & Bean Cafe: the espresso bar, the oak-and-linen room, our small-batch roastery and the terrace at golden hour.",
      },
      { property: "og:title", content: "Gallery — Inside Brew & Bean Cafe" },
      {
        property: "og:description",
        content:
          "The espresso bar, the room, the roastery and the terrace — photographed on ordinary mornings.",
      },
    ],
  }),
  component: GalleryPage,
});

const shots = [
  { src: gallery1, alt: "Barista tamping espresso grounds with a brass tamper", label: "The Bar" },
  { src: gallery2, alt: "Oak communal table set with ceramic cups and linen napkins", label: "The Room" },
  { src: gallery3, alt: "Pour over coffee brewing into a glass carafe with steam rising", label: "Slow Bar" },
  { src: gallery4, alt: "Cafe terrace with bistro tables and olive trees at golden hour", label: "The Terrace" },
  { src: beansImg, alt: "Macro detail of freshly roasted coffee beans", label: "The Roastery" },
  { src: menuImg, alt: "Flat lay of espresso, pastries and brewing equipment", label: "The Kitchen" },
  { src: interiorImg, alt: "Warm oak and linen interior with brass lighting", label: "Mezzanine" },
  { src: heroImg, alt: "Barista pouring latte art into a ceramic cup", label: "Morning Service" },
];

function GalleryPage() {
  return (
    <>
      <section className="surface-dark grain relative overflow-hidden">
        <div className="relative z-10 container-lux mx-auto w-full max-w-7xl pt-44 pb-24 md:pt-52 md:pb-32">
          <Reveal>
            <p className="eyebrow">Gallery</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-3xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9]">
              Ordinary mornings,
              <span className="block italic text-brass-soft">photographed slowly.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-md leading-relaxed opacity-70">
              No stylists, no props brought in. Every frame below was taken during a normal
              service week at 42 Cedar Lane.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-lux mx-auto w-full max-w-7xl py-24 md:py-32">
        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shots.map((s, i) => (
            <li key={s.label} className="mb-4 break-inside-avoid">
              <Reveal delay={(i % 4) * 90}>
                <figure className="group relative overflow-hidden rounded-[20px]">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={900}
                    className="h-auto w-full transition-transform duration-[1.2s] ease-[var(--ease-lux)] group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-espresso/85 to-transparent px-5 pt-14 pb-5 text-[0.6rem] tracking-[0.24em] uppercase text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {s.label}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-20 flex flex-col items-center gap-6 border-t border-border pt-16 text-center">
            <p className="max-w-md text-muted-foreground">
              The room photographs well — it feels even better at 9am with a cortado in
              hand.
            </p>
            <Link to="/reserve" className="btn-lux">
              Reserve a Table
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
