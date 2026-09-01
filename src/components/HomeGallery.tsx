import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { transitionLux } from "@/lib/motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import interiorImg from "@/assets/interior.jpg";
import dessertImg from "@/assets/dessert.jpg";
import latteImg from "@/assets/drink-latte.jpg";
import beansImg from "@/assets/beans.jpg";

const shots = [
  { src: gallery1, caption: "Tamping the morning dose" },
  { src: interiorImg, caption: "The oak room at opening" },
  { src: dessertImg, caption: "Pistachio basque cheesecake" },
  { src: gallery3, caption: "Slow bar pour over" },
  { src: latteImg, caption: "Burnt honey latte" },
  { src: gallery2, caption: "The communal table" },
  { src: beansImg, caption: "This week's roast" },
  { src: gallery4, caption: "Terrace at golden hour" },
];

export function HomeGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : shots[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container-lux mx-auto w-full max-w-7xl py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[0.96]">
              Inside the room
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Coffee, interiors, pastry and the people who fill the seats.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 columns-1 gap-5 sm:gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {shots.map((s, i) => (
            <Reveal key={s.caption} delay={(i % 3) * 100}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full overflow-hidden rounded-[20px] shadow-[var(--shadow-soft)]"
                aria-label={`Open image: ${s.caption}`}
              >
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-end bg-linear-to-t from-espresso/85 via-espresso/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-left text-sm tracking-[0.12em] uppercase text-cream">
                    {s.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transitionLux(0.4)}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-espresso/95 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setOpenIndex(null)}
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-espresso"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.figure
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={transitionLux(0.5)}
            className="max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.caption}
              className="max-h-[75vh] w-full rounded-[20px] object-contain"
            />
            <figcaption className="mt-5 text-center text-[0.65rem] tracking-[0.24em] uppercase text-cream/70">
              {active.caption}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
