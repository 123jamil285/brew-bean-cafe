import { Section, SectionTitle } from "@/components/lux/Layout";
import { CoffeeCard } from "@/components/lux/Cards";
import { ScaleIn } from "@/components/lux/Motion";

import cortadoImg from "@/assets/drink-cortado.jpg";
import pourOverImg from "@/assets/drink-pourover.jpg";
import latteImg from "@/assets/drink-latte.jpg";
import icedImg from "@/assets/drink-iced.jpg";

const drinks = [
  {
    img: cortadoImg,
    name: "Velvet Cortado",
    copy: "Ethiopia Guji pulled short and folded into silk-textured milk. Cocoa nib sweetness.",
    rating: 4.9,
    price: "$5.50",
    badge: "Best Seller",
  },
  {
    img: pourOverImg,
    name: "Harbour Pour Over",
    copy: "Six patient minutes over a V60. Jasmine, ripe apricot and a clean caramel finish.",
    rating: 5.0,
    price: "$7.00",
    badge: "Premium",
  },
  {
    img: latteImg,
    name: "Burnt Honey Latte",
    copy: "Slow-caramelised honey, a pinch of sea salt and a double ristretto base.",
    rating: 4.8,
    price: "$6.25",
    badge: "Popular",
  },
  {
    img: icedImg,
    name: "Orange Coffee Tonic",
    copy: "Cold-brew concentrate over tonic and clear ice, finished with charred orange peel.",
    rating: 4.7,
    price: "$6.75",
    badge: "New",
  },
];

export function SignatureCoffee() {
  return (
    <Section tone="muted">
      <SectionTitle
        label="Signatures"
        title="Our Signature Coffee"
        description="Discover our most loved handcrafted beverages."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {drinks.map((d, i) => (
          <ScaleIn key={d.name} delay={i * 110} className="h-full">
            <CoffeeCard
              image={d.img}
              name={d.name}
              description={d.copy}
              price={d.price}
              rating={d.rating}
              badge={d.badge}
            />
          </ScaleIn>
        ))}
      </div>
    </Section>
  );
}
