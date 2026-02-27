# FounderFolio

![FounderFolio hero screenshot](./assets/founderfolio-hero.png)

FounderFolio is a **frontend UI practice project** wrapped in the branding of a fictional fintech/SaaS startup.  
This repository contains a **purely frontend implementation** of a modern marketing-style site—built to practice responsive layout, interaction design, chart and map integrations, and a satirical market-simulator snake game, rather than to ship a real analytics product.

---

## What this project is

- **Brand & concept**: A fictional “FounderFolio” investor platform used as a narrative wrapper to practice **fintech/SaaS design language**—not a real product, and not connected to any backend or analytics engine.
- **Scope**: This codebase focuses on the **marketing + product overview experience**, with emphasis on the **interactive world map** for global markets, the **snake‑game-inspired market simulator**, the **treemap-style portfolio visualization**, and the **micro-interactions and motion system in the hero**.
- **Frontend-only exercise**: All data is **front-end driven** (static TypeScript modules; no trading, investing, or authenticated accounts). The charts and maps are **sample visualizations** built to practice working with libraries like Recharts and React Simple Maps.

---

## Tech stack

- **Core**
  - **React 18** + **TypeScript** (strong typing, props-driven components)
  - **Vite** (fast dev server and optimized bundling)
- **Styling & layout**
  - **Tailwind CSS** with `tailwind-merge` and `clsx` for composable utility classes
  - Custom **design tokens** via Tailwind config (colors, typography, spacing)
  - Responsive, grid-based layout patterns (hero grid background, sectionized layout)
- **UI components**
  - **Radix UI primitives** (`@radix-ui/react-*`) for accessible, headless components
  - Custom `Button` and other `ui` components built on top of Radix + Tailwind
  - **lucide-react** for iconography
- **Data visualization & maps**
  - **Recharts** for charts and visual analytics
  - **react-simple-maps** + **d3-geo** for geographic market coverage
- **Interaction & motion**
  - **tailwindcss-animate** and custom animation utilities for staged entrances
  - React hooks (`useState`, `useEffect`) to orchestrate load states and animations
- **Tooling & quality**
  - **ESLint** + **TypeScript ESLint** + **@eslint/js** for linting
  - **TypeScript 5** for strict typing
  - **Vite preview** for local production-like testing

---

## Design & UX techniques showcased

- **Hero section as brand anchor**
  - Grid-pattern background, floating avatar imagery, and directional arrows to evoke **dynamic, multi-market portfolio movement**.
  - Clear primary and secondary CTAs (“Get Started” and “Market Simulator”) with smooth scroll to sections.
- **Motion & micro-interactions**
  - Staggered fade/slide/scale-in animations on load (`animate-fadeSlideUp`, `animate-scaleIn`) for a polished first impression.
  - CTA hover states and subtle transitions to communicate interactivity without being distracting.
- **Component-driven sections**
  - Each major part of the page (Hero, Market Sentiment, Demo, etc.) is a dedicated React component under `src/components/sections`.
  - Section metadata in `src/lib/sections.ts` enables a structured, composable layout.
  - Lazy loading via `lazy-section` for below-the-fold content to keep the initial experience snappy.
- **Responsive & accessible**
  - Layouts adapt from mobile to large desktop while preserving hierarchy and whitespace.
  - Use of semantic HTML where possible and Radix-based primitives as a foundation for accessible behavior.

---

## Running the project locally

```bash
npm install
npm run dev
```

Then open the URL printed in your terminal (by default `http://localhost:5173`) to view the site.

### Available scripts

- `npm run dev` – start the Vite development server
- `npm run build` – type-check and build the app for production
- `npm run lint` – run ESLint across the project
- `npm run preview` – preview the production build locally

---

---

## License

MIT License — see [`LICENSE`](LICENSE) for details.
