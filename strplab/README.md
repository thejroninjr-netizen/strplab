# STRP LAB

Premium aftermarket accessories for AP x Swatch MoonSwatch collectors.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── about/              # About page
│   ├── collections/        # Collections listing + [slug]
│   ├── product/[slug]/     # Product detail pages
│   ├── faq/                # FAQ page
│   ├── contact/            # Contact page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Navbar, Footer, CartDrawer
│   ├── sections/           # Homepage sections
│   ├── product/            # Product card, gallery
│   └── ui/                 # Shared UI components
├── data/
│   └── products.ts         # Product & collection data
├── lib/
│   ├── cart-context.tsx    # Cart state (React Context)
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript interfaces
```

## Replacing Images

All product images use Unsplash URLs for development. Replace with local images:

1. Add images to `public/images/`
2. Update `src/data/products.ts` — change `src` values in the `images` array
3. Use Next.js `Image` component `sizes` prop for performance

## Adding Products

Edit `src/data/products.ts`:

```typescript
{
  id: "unique-id",
  slug: "url-slug",
  name: "Product Name",
  tagline: "Short tagline",
  price: 299,
  currency: "USD",
  collection: "core" | "performance" | "carbon",
  images: [{ src: "...", alt: "...", width: 800, height: 800 }],
  variants: [{ id: "v1", name: "Black", color: "#000", inStock: true }],
  materials: ["Material 1", "Material 2"],
  compatibility: ["AP x Swatch MoonSwatch"],
  description: "Full product description...",
  details: ["Spec 1", "Spec 2"],
}
```

## Shopify Integration (Future)

The product data model in `src/types/index.ts` mirrors Shopify's product structure. To integrate:

1. Install `@shopify/storefront-api-client`
2. Replace `src/data/products.ts` with Shopify Storefront API calls
3. Map Shopify product/variant fields to the `Product`/`ProductVariant` interfaces

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deploys.

### Environment Variables

No required environment variables for the base build. Add as needed:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
```

## Performance

- All images use `next/image` with automatic optimization
- Route-based code splitting via Next.js App Router
- Framer Motion animations are `will-change: transform` optimized
- Font loading uses `next/font` with `display: swap`

## SEO

- Title/description metadata per page via `generateMetadata`
- OpenGraph and Twitter card tags in root layout
- Structured data (Schema.org) for products
- Auto-generated sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
