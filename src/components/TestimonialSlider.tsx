import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { transitionLux } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

import guest1 from "@/assets/guest-1.jpg";
import guest2 from "@/assets/guest-2.jpg";
import guest3 from "@/assets/guest-3.jpg";

const reviews = [
  {
    img: guest1,
    quote:
      "The cortado here ruined every other cortado for me. The room is even better than the coffee — I've written half a book at the mezzanine table.",
    name: "Amara Okafor",
    place: "Old Harbour, regular since 2019",
  },
  {
    img: guest2,
    quote:
      "I've taken three clients here and signed all three. Something about the light at 10am and a pour over that arrives exactly when it should.",
    name: "Daniel Keller",
    place: "Architect, Northside",
  },
  {
    img: guest3,
    quote:
      "They remember my order, my dog's name and which table I like. That's the whole review — plus the best basque cheesecake in the city.",
    name: "Priya Shah",
    place: "Neighbour, two streets over",
  },
];

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + reviews.length) % reviews.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [paused, go]);

  return (
    <section
      className="surface-dark grain relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative z-10 container-lux mx-auto w-full max-w-5xl py-24 text-center md:py-32">
        <Reveal>
          <p className="eyebrow">Guest Book</p>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[0.96]">
            Loved by the neighbourhood
          </h2>
        </Reveal>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((r, ri) => (
              <figure key={r.name} className="w-full shrink-0 px-2">
                <motion.img
                  animate={{ opacity: index === ri ? 1 : 0.35, scale: index === ri ? 1 : 0.94 }}
                  transition={transitionLux(0.6)}
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="mx-auto h-20 w-20 rounded-full border-2 border-brass/50 object-cover"
                />
                <div className="mt-6 flex justify-center gap-1 text-brass">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <motion.span
                      key={k}
                      animate={index === ri ? { scale: [0.6, 1.15, 1], opacity: 1 } : { scale: 1, opacity: 0.5 }}
                      transition={transitionLux(0.5, 0.06 * k)}
                    >
                      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                    </motion.span>
                  ))}
                </div>
                <blockquote className="mx-auto mt-8 max-w-3xl font-display text-[clamp(1.35rem,2.6vw,2rem)] leading-snug">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block text-sm font-semibold tracking-[0.14em] uppercase text-brass-soft">
                    {r.name}
                  </span>
                  <span className="mt-2 block text-[0.65rem] tracking-[0.22em] uppercase opacity-60">
                    {r.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream hover:text-espresso"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2.5">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-brass" : "w-3 bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream hover:text-espresso"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
