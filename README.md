# FounderFolio

![FounderFolio hero screenshot](https://raw.githubusercontent.com/aarondud/founderfolio-poc/main/public/readme/founderfolio-hero.png)

**FounderFolio** began as a client engagement to build an interactive end-of-financial-year performance review site: financial charts, company branding, and custom components to bring annual reporting to life. On conclusion of the project, proprietary content was removed, theming adjusted, and the architecture refactored into the current sandbox — a **fictional investor platform** built to showcase modern fintech/SaaS UI: responsive layouts, interactive charts, a world map, and a satirical snake-game "market simulator", all on static frontend data.

- **Brand & concept**: Fictional "FounderFolio" investor platform — not a real product, and not connected to any backend or analytics engine.
- **Frontend-only**: Pure frontend — no backend, no database, no real analytics engine. All data is static TypeScript.
- **Scope**: Marketing and product overview experience with emphasis on interactive visualizations, the snake-game market simulator, and motion-driven components.

---

## Key Features

### Deal Flow Simulator (Snake Game)

A satirical venture-themed snake game built to practice canvas-based game loops inside React. Classic mechanics re-skinned with fintech branding — collecting board seats and unicorn exits instead of fruit. Game state managed via `useState` / `useEffect`; collision detection, movement, and fruit spawning in TypeScript. Rendered via HTML5 Canvas API with `requestAnimationFrame`.

### Portfolio (World Map)

Interactive SVG world map visualizing geographic market presence. Built with `react-simple-maps` and `d3-geo` for projection, with custom pulsing markers and adaptive cursor-following tooltips. The `WorldMap` component uses `forwardRef` to allow parent-controlled marker interactions.

### Analysis (Line Chart)

Recharts `LineChart` integrated into a fintech dashboard layout with custom tooltips, `ReferenceDot` highlights, and callout cards. Chart animates on viewport entry via `isAnimationActive={isInView}`. Custom `ChartTooltip` conditionally renders notes from raw data.

### Distribution (Treemap)

Recharts `Treemap` with `ResponsiveContainer` and a custom `CustomizedContent` SVG render function. Hover tooltips surface deployed capital, deal counts, and regional status. Paired with a color legend and KPI cards summarizing markets, companies, and capital deployed.

---

## Design & UX

The visual language draws from modern fintech and SaaS — clean, data-forward, and investor-facing. Significant effort went into the hero: staggered scale, fade-in, and fade-up animations create a warm, inviting entry that sets the tone without feeling clinical. From there, chart data and the treemap animate in on load, world map pins bloom into view in sequence, and scroll-triggered fade-ups carry users through each section. The result is a UI that feels alive and polished rather than static.

- **Hero**: Grid-pattern background, floating avatar imagery, staggered scale/fade-up animations
- **Motion**: Scroll-triggered fade-ups, viewport-entry chart animations
- **Responsive**: Mobile-first Tailwind breakpoints; all complex components tuned from small phones to large desktops

---

## Tech stack

| Category               | Technology                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**               | React 18, TypeScript 5.x, Vite                                                                                                        |
| **Styling**            | Tailwind CSS 3.x, tailwindcss-animate, clsx, tailwind-merge                                                                           |
| **UI Components**      | Radix UI, shadcn                                                                                                                      |
| **Data Visualization** | Recharts (line chart + treemap), React Simple Maps, D3 Geo                                                                            |
| **Interactive**        | Embla Carousel, custom Snake Game (HTML5 Canvas), scroll-based animations                                                             |
| **Routing**            | React Router DOM                                                                                                                      |
| **Content Management** | All copy and data are static TypeScript centralized in `src/lib/content.ts` and `src/lib/data.ts`, re-exported via `src/lib/index.ts` |
| **Utilities**          | Lucide React, custom hooks (`useMediaQuery`, `useSectionAnimation`)                                                                   |
| **Hosting**            | Vercel (static deployment)                                                                                                            |
| **Analytics**          | Vercel Analytics                                                                                                                      |
| **Development**        | ESLint, TypeScript ESLint, PostCSS, Autoprefixer                                                                                      |

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

## License

MIT License — see [`LICENSE`](LICENSE) for details.
