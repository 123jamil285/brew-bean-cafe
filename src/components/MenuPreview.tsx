import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

import cortadoImg from "@/assets/drink-cortado.jpg";
import pourOverImg from "@/assets/drink-pourover.jpg";
import latteImg from "@/assets/drink-latte.jpg";
import icedImg from "@/assets/drink-iced.jpg";
import teaImg from "@/assets/tea.jpg";
import dessertImg from "@/assets/dessert.jpg";
import snackImg from "@/assets/snack.jpg";
import beansImg from "@/assets/beans.jpg";
import menuImg from "@/assets/menu.jpg";
import interiorImg from "@/assets/interior.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

type Item = { img: string; name: string; copy: string; price: string };

const categories: { key: string; label: string; items: Item[] }[] = [
  {
    key: "coffee",
    label: "Coffee",
    items: [
      { img: cortadoImg, name: "Velvet Cortado", copy: "Ethiopia Guji, silk-textured milk, 4oz.", price: "$5.50" },
      { img: pourOverImg, name: "Harbour Pour Over", copy: "Colombia Huila on the V60, jasmine and apricot.", price: "$7.00" },
      { img: latteImg, name: "Burnt Honey Latte", copy: "Caramelised honey, sea salt, double ristretto.", price: "$6.25" },
      { img: icedImg, name: "Orange Coffee Tonic", copy: "Cold brew, tonic, charred orange peel.", price: "$6.75" },
    ],
  },
  {
    key: "tea",
    label: "Tea",
    items: [
      { img: teaImg, name: "Jasmine Silver Needle", copy: "Spring-picked buds, three gentle infusions.", price: "$6.00" },
      { img: gallery3, name: "Roasted Hojicha Latte", copy: "Kyoto hojicha whisked with steamed oat milk.", price: "$5.75" },
      { img: beansImg, name: "Spiced Masala Chai", copy: "Assam simmered with cardamom, clove and ginger.", price: "$5.25" },
      { img: gallery2, name: "Peppermint Tisane", copy: "Whole-leaf peppermint, caffeine free, served in glass.", price: "$4.50" },
    ],
  },
  {
    key: "desserts",
    label: "Desserts",
    items: [
      { img: dessertImg, name: "Pistachio Basque Cheesecake", copy: "Burnt top, custard centre, crushed Sicilian pistachio.", price: "$8.00" },
      { img: menuImg, name: "Almond Butter Croissant", copy: "Laminated over three days, baked each morning.", price: "$5.50" },
      { img: latteImg, name: "Espresso Tiramisu", copy: "Layered with our house blend and mascarpone.", price: "$7.50" },
      { img: interiorImg, name: "Dark Chocolate Tart", copy: "70% single-origin ganache, sea salt, olive oil.", price: "$7.00" },
    ],
  },
  {
    key: "snacks",
    label: "Snacks",
    items: [
      { img: snackImg, name: "Avocado Sourdough", copy: "Poached egg, chilli, micro herbs, lemon oil.", price: "$12.50" },
      { img: menuImg, name: "Truffle Mushroom Toast", copy: "Slow-cooked mushrooms, thyme, aged pecorino.", price: "$13.00" },
      { img: gallery2, name: "Smoked Salmon Bagel", copy: "Dill cream cheese, capers, pickled shallot.", price: "$14.00" },
      { img: beansImg, name: "Honey Granola Bowl", copy: "House granola, thick yoghurt, seasonal fruit.", price: "$9.50" },
    ],
  },
];

export function MenuPreview() {
  const [active, setActive] = useState(categories[0]!.key);
  const current = categories.find((c) => c.key === active) ?? categories[0]!;

  return (
    <section className="container-lux mx-auto w-full max-w-7xl py-24 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Menu Preview</p>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[0.96]">
            A taste of the counter
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Four favourites from every corner of the menu, updated with the season.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div
          role="tablist"
          aria-label="Menu categories"
          className="mx-auto mt-12 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-[20px] border border-border bg-secondary/40 p-2"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              role="tab"
              type="button"
              aria-selected={active === c.key}
              onClick={() => setActive(c.key)}
              className={`min-h-11 rounded-[12px] px-4 py-2.5 sm:px-6 font-[family-name:var(--font-button)] text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-all duration-500 ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={active} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {current.items.map((item, i) => (
          <Reveal key={`${active}-${item.name}`} delay={i * 90} duration={0.5} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-48 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
                <span className="mt-6 font-display text-xl text-accent transition-colors duration-500 group-hover:text-coffee">
                  {item.price}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-14 flex justify-center">
          <Link to="/menu" className="btn-lux">
            View Full Menu <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
