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

export type MenuItem = { img: string; name: string; copy: string; price: string };
export type MenuCategory = { key: string; label: string; items: MenuItem[] };

/** Featured items shown in the home page menu preview. */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    key: "coffee",
    label: "Coffee",
    items: [
      {
        img: cortadoImg,
        name: "Velvet Cortado",
        copy: "Ethiopia Guji, silk-textured milk, 4oz.",
        price: "$5.50",
      },
      {
        img: pourOverImg,
        name: "Harbour Pour Over",
        copy: "Colombia Huila on the V60, jasmine and apricot.",
        price: "$7.00",
      },
      {
        img: latteImg,
        name: "Burnt Honey Latte",
        copy: "Caramelised honey, sea salt, double ristretto.",
        price: "$6.25",
      },
      {
        img: icedImg,
        name: "Orange Coffee Tonic",
        copy: "Cold brew, tonic, charred orange peel.",
        price: "$6.75",
      },
    ],
  },
  {
    key: "tea",
    label: "Tea",
    items: [
      {
        img: teaImg,
        name: "Jasmine Silver Needle",
        copy: "Spring-picked buds, three gentle infusions.",
        price: "$6.00",
      },
      {
        img: gallery3,
        name: "Roasted Hojicha Latte",
        copy: "Kyoto hojicha whisked with steamed oat milk.",
        price: "$5.75",
      },
      {
        img: beansImg,
        name: "Spiced Masala Chai",
        copy: "Assam simmered with cardamom, clove and ginger.",
        price: "$5.25",
      },
      {
        img: gallery2,
        name: "Peppermint Tisane",
        copy: "Whole-leaf peppermint, caffeine free, served in glass.",
        price: "$4.50",
      },
    ],
  },
  {
    key: "desserts",
    label: "Desserts",
    items: [
      {
        img: dessertImg,
        name: "Pistachio Basque Cheesecake",
        copy: "Burnt top, custard centre, crushed Sicilian pistachio.",
        price: "$8.00",
      },
      {
        img: menuImg,
        name: "Almond Butter Croissant",
        copy: "Laminated over three days, baked each morning.",
        price: "$5.50",
      },
      {
        img: latteImg,
        name: "Espresso Tiramisu",
        copy: "Layered with our house blend and mascarpone.",
        price: "$7.50",
      },
      {
        img: interiorImg,
        name: "Dark Chocolate Tart",
        copy: "70% single-origin ganache, sea salt, olive oil.",
        price: "$7.00",
      },
    ],
  },
  {
    key: "snacks",
    label: "Snacks",
    items: [
      {
        img: snackImg,
        name: "Avocado Sourdough",
        copy: "Poached egg, chilli, micro herbs, lemon oil.",
        price: "$12.50",
      },
      {
        img: menuImg,
        name: "Truffle Mushroom Toast",
        copy: "Slow-cooked mushrooms, thyme, aged pecorino.",
        price: "$13.00",
      },
      {
        img: gallery2,
        name: "Smoked Salmon Bagel",
        copy: "Dill cream cheese, capers, pickled shallot.",
        price: "$14.00",
      },
      {
        img: beansImg,
        name: "Honey Granola Bowl",
        copy: "House granola, thick yoghurt, seasonal fruit.",
        price: "$9.50",
      },
    ],
  },
];
