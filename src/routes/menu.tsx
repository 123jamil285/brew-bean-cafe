import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import menuImg from "@/assets/menu.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Brew & Bean Cafe | Espresso, Filter & Kitchen" },
      {
        name: "description",
        content:
          "Explore the Brew & Bean Cafe menu: single-origin espresso, slow-bar filter coffee, house pastries and all-day plates, roasted and baked daily.",
      },
      { property: "og:title", content: "Menu — Brew & Bean Cafe" },
      {
        property: "og:description",
        content:
          "Single-origin espresso, slow-bar filter, house pastries and all-day plates.",
      },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Espresso Bar",
    note: "Pulled on a Slayer · house blend or rotating single origin",
    items: [
      ["Espresso", "Dark cocoa, dried fig, long finish", "$3.75"],
      ["Velvet Cortado", "Ethiopia Guji, silk-textured milk", "$5.50"],
      ["Flat White", "Double ristretto, 6oz", "$5.75"],
      ["Burnt Honey Latte", "Caramelised honey, sea salt", "$6.25"],
      ["Cardamom Mocha", "70% Valrhona, green cardamom", "$6.75"],
    ],
  },
  {
    title: "Slow Bar",
    note: "Brewed to order · 6–8 minutes",
    items: [
      ["Harbour Pour Over", "Colombia Huila, V60", "$7.00"],
      ["Chemex for Two", "Kenya Nyeri AA, 600ml", "$12.00"],
      ["Cold Brew Reserve", "18-hour steep, on tap", "$5.50"],
      ["Nitro Flight", "Three origins, 3oz each", "$11.00"],
    ],
  },
  {
    title: "Kitchen",
    note: "Baked in-house from 6am",
    items: [
      ["Cultured Butter Croissant", "72-hour lamination", "$4.50"],
      ["Miso Mushroom Toast", "Sourdough, poached egg", "$14.00"],
      ["Cardamom Bun", "Pearl sugar, orange zest", "$5.25"],
      ["Harvest Grain Bowl", "Barley, roast squash, tahini", "$16.00"],
    ],
  },
  {
    title: "Beans to Take Home",
    note: "Roasted every Tuesday and Friday",
    items: [
      ["House Blend · 250g", "Brazil / Colombia / Ethiopia", "$18.00"],
      ["Guji Natural · 250g", "Blueberry, jasmine, honey", "$24.00"],
      ["Nyeri AA · 250g", "Blackcurrant, cane sugar", "$26.00"],
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="surface-dark grain relative overflow-hidden">
        <img
          src={menuImg}
          alt="Espresso, croissants and a brewer on cream linen"
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative z-10 container-lux mx-auto w-full max-w-7xl pt-44 pb-24 md:pt-52 md:pb-32">
          <Reveal>
            <p className="eyebrow">The Menu</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-3xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9]">
              Small list,
              <span className="block italic text-brass-soft">nothing filler.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-md leading-relaxed opacity-70">
              The board changes with the harvest. Ask the bar what landed this week — there
              is usually something worth changing your order for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-lux mx-auto w-full max-w-5xl py-24 md:py-32">
        <div className="space-y-24">
          {sections.map((s, si) => (
            <Reveal key={s.title} delay={si * 80}>
              <div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-b border-border pb-6">
                  <div className="min-w-0">
                    <h2 className="font-display text-4xl md:text-5xl">{s.title}</h2>
                    <p className="mt-3 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                      {s.note}
                    </p>
                  </div>
                  <span className="font-display text-2xl text-accent">
                    0{si + 1}
                  </span>
                </div>

                <ul className="mt-4">
                  {s.items.map(([name, desc, price]) => (
                    <li
                      key={name}
                      className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 border-b border-border/60 py-6 transition-colors hover:border-accent"
                    >
                      <div className="min-w-0">
                        <h3 className="text-xl transition-colors group-hover:text-accent-foreground">
                          {name}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                      </div>
                      <span className="shrink-0 font-display text-2xl">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 flex flex-col items-center gap-6 border-t border-border pt-16 text-center">
            <p className="max-w-md text-muted-foreground">
              Larger parties, tastings and cupping sessions can be arranged with a day's
              notice.
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
