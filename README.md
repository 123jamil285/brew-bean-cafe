# Brew & Bean Cafe

A premium marketing website for **Brew & Bean Cafe** — _Brewed with Passion, Served with Love._
Built as a production-ready, fully responsive and accessible single-page-app-style site.

## Tech stack

- **TanStack Start / TanStack Router** — file-based routing and SSR
- **React 19 + TypeScript**
- **Tailwind CSS v4** — design tokens in `src/styles.css`
- **Motion (Framer Motion)** — reveal, page and micro-interaction animations
- **Lucide React** — icon set

## Getting started

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build
```

## Project structure

```
src/
  assets/        Brand logo, photography and generated imagery
  components/    Page sections (Hero, MenuPreview, TestimonialSlider, …)
    lux/         Reusable design-system primitives (Button, Card, Form, Modal, …)
    ui/          shadcn-style base components
  constants/     Site data: brand/NAP, navigation, menu, testimonials
  hooks/         Reusable custom hooks (useContactForm, useMobile)
  lib/           Utilities and animation tokens
  routes/        File-based pages: /, /menu, /about, /gallery, /contact, /reserve
  styles.css     Design tokens, typography scale and utility layers
```

## Design system

- **Palette** — Espresso `#3b2a1f`, Coffee `#6f4e37`, Brass `#d4a373`, Cream `#faf7f2`
- **Typography** — Playfair Display (headings), Inter (body), Poppins (buttons/labels)
- **Radii** — 12px buttons, 20px cards; soft and lift shadows for elevation
- All colours are semantic CSS tokens; components never hardcode raw colour values.

## Conventions

- Functional components only, PascalCase filenames, camelCase variables.
- Shared content lives in `src/constants` — never duplicate copy across components.
- Reuse primitives from `src/components/lux` before writing new UI.
- Every page defines its own title, description, canonical and Open Graph tags.
- Images are lazy-loaded with explicit dimensions and descriptive alt text.

## Accessibility & SEO

Semantic landmarks, one `h1` per page, skip-to-content link, visible focus states,
48px touch targets, labelled forms with inline validation, and `CafeOrCoffeeShop`
JSON-LD structured data in the root route.
