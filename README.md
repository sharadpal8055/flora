# FloraVision 
## Live Demo

https://flora-gold.vercel.app/

## GitHub Repository

https://github.com/sharadpal8055/flora
## Tech Stack

| Tool | Purpose |
|---|---|
| **React 18** (Vite) | Component framework |
| **Tailwind CSS v3** | Utility-first styling |
| **Lucide React** | Icon library |
| **Cormorant Garamond** | Serif display headings |
| **Josefin Sans** | Body / UI text |

---

## Folder Structure

```
floravision/
├── public/
│   ├── images/
│   │   ├── facebook.png
│   │   ├── insta.png
│   │   ├── wp.png
│   │   └── bluesky.png
│   └── plants/
│       ├── bg-plant.jpg        
│       ├── aglaonema.png
│       ├── plantain-lilies.png
│       ├── cactus.png
│       ├── swiss-cheese.png
│       ├── sansevieria.png
│       └── agave.png
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── PlantCard.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   └── TrendingCard.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       ├── BtnPrimary.jsx
│   │       ├── BtnOutline.jsx
│   │       ├── Dots.jsx
│   │       ├── IconBtn.jsx
│   │       ├── SectionTitle.jsx
│   │       └── Stars.jsx
│   ├── data/
│   │   ├── plants.js
│   │   ├── reviews.js
│   │   └── trending.js
│   ├── hooks/
│   │   └── useFadeIn.js
│   ├── sections/
│   │   ├── HeroBanner.jsx
│   │   ├── TrendingPlants.jsx
│   │   ├── TopSelling.jsx
│   │   ├── CustomerReviews.jsx
│   │   └── O2Section.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

Check your versions:

```bash
node -v
npm -v
```

---

## Setup & Installation

### 1 — Scaffold the project

```bash
npm create vite@latest floravision -- --template react
cd floravision
```

### 2 — Install all dependencies

```bash
# Core
npm install

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Icons
npm install lucide-react
```

### 3 — Configure Tailwind

Replace the contents of **`tailwind.config.js`** with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:  ["Josefin Sans",       "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
```

### 4 — Add Google Fonts

Add this inside the `<head>` of **`index.html`**:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### 5 — Copy source files

Copy all files from `src/` into your project's `src/` folder, preserving the folder structure shown above.

### 6 — Add public assets

Export images from Figma and place them in `public/`:

```
public/
  images/
    facebook.png    ← social icon
    insta.png       ← social icon
    wp.png          ← social icon
    bluesky.png     ← social icon
  plants/
    bg-plant.jpg    ← dark moody background photo (used as full-page bg)
    aglaonema.png   ← transparent PNG, used in Hero + PlantCard
    plantain-lilies.png
    cactus.png
    swiss-cheese.png
    sansevieria.png
    agave.png
```

> **Tip:** Export plant images with a transparent background (PNG) from Figma using *Export → PNG* at 2x resolution.

### 7 — Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server (hot reload) |
| `npm run build` | Production build → `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Key Design Details

| Feature | Implementation |
|---|---|
| Full-page background | `fixed` `bg-plant.jpg` + `opacity-45` + dark overlay |
| Ambient light glows | Fixed blurred `div` circles (`blur-[180px]`) |
| Glassmorphism cards | `bg-white/[0.04] backdrop-blur-xl border border-white/10` |
| Section title brackets | 4-corner golden SVG borders `border-[#c9b832]` |
| Plant card shape | `rounded-[2rem]` with image overflowing top edge |
| Hero floating card | `backdrop-blur-2xl` absolute card, plant image `-mt-28` |
| Half-star rating | SVG `linearGradient` — 50% gold / 50% dimmed |
| Social icons | Image icons from `public/images/` in circular hover buttons |
| Hover lift effect | `hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)]` |
| Serif headings | Cormorant Garamond via Google Fonts |
| Body / UI text | Josefin Sans via Google Fonts |
| Scroll animations | `IntersectionObserver` via `useFadeIn` hook |
| Mobile nav | Hamburger → `backdrop-blur-2xl` drawer |
| Responsive grid | `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3` |

---

## Environment

No `.env` file needed — this is a fully static frontend with no backend or API keys.

---

## License

MIT — free to use for your internship submission.
