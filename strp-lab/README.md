# STRP LAB — Premium Royal Pop Conversion Accessories

A premium minimalist e-commerce website for STRP LAB, built with React + Vite + Tailwind CSS.

---

## Folder Structure

```
strp-lab/
├── public/
│   └── images/               ← Replace with your product images
│       ├── hero-watch-macro.jpg
│       ├── bioceramic-black.jpg
│       ├── bioceramic-white.jpg
│       ├── bioceramic-orange.jpg
│       ├── bioceramic-blue.jpg
│       ├── bioceramic-red.jpg
│       ├── metallic-silver.jpg
│       ├── metallic-black.jpg
│       ├── metallic-gold.jpg
│       ├── metallic-rose.jpg
│       ├── special-edition-phantom.jpg
│       ├── special-edition-ice.jpg
│       ├── special-edition-ember.jpg
│       └── story-macro.jpg
├── src/
│   ├── App.jsx               ← All page sections (fully self-contained)
│   ├── main.jsx              ← React entry point
│   └── index.css             ← Global styles + Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

---

## How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Add your images to /public/images/

# 3. Start the dev server
npm run dev

# Open http://localhost:5173
```

---

## How to Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option B — GitHub Integration
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — click Deploy
4. Done. Your site is live.

---

## Replacing Product Images

All image paths are in `/src/App.jsx` in the product arrays:

```jsx
const bioceramicProducts = [
  {
    name: 'Core Bioceramic | Obsidian',
    image: '/images/bioceramic-black.jpg',  // ← Replace this path
    ...
  },
]
```

Just replace the `.jpg` files in `/public/images/` with your actual product photos.
Recommended dimensions: **1:1 square, minimum 800×800px**.

---

## Brand Tokens

All brand colours are in `tailwind.config.js`:

```js
colors: {
  ivory:     '#F7F6F2',
  obsidian:  '#111111',
  graphite:  '#2B2B2B',
  stone:     '#8A8A8A',
  champagne: '#C9A96E',
}
```

---

## Typography

- **Display/Headings**: Cormorant Garamond (Google Fonts)
- **Body**: DM Sans (Google Fonts)
- **Labels/Mono**: DM Mono (Google Fonts)

---

## Sections

| # | Section | ID |
|---|---------|-----|
| 1 | Announcement bar | — |
| 2 | Navbar | — |
| 3 | Hero | — |
| 4 | Collection intro | `#collection` |
| 5 | Bioceramic products | `#bioceramic` |
| 6 | Metallic products | `#metallic` |
| 7 | Special Edition | `#special` |
| 8 | Before / After | — |
| 9 | Engineering features | — |
| 10 | Compatibility | `#compatibility` |
| 11 | Brand story | `#about` |
| 12 | FAQ | `#faq` |
| 13 | Footer | — |
