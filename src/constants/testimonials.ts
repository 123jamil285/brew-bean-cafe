import guest1 from "@/assets/guest-1.jpg";
import guest2 from "@/assets/guest-2.jpg";
import guest3 from "@/assets/guest-3.jpg";

export type Testimonial = {
  img: string;
  quote: string;
  name: string;
  place: string;
};

/** Guest reviews used by the home page testimonial slider. */
export const TESTIMONIALS: Testimonial[] = [
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
