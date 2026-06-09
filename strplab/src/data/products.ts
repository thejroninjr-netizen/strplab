import type { Product, Collection } from "@/types";

export const products: Product[] = [
  {
    id: "bc-rubber-001",
    slug: "bioceramic-rubber-strap-black",
    name: "Bioceramic Case + Rubber Strap",
    tagline: "Precision-engineered bioceramic in obsidian black.",
    price: 289,
    currency: "USD",
    collection: "core",
    collectionLabel: "Core Collection",
    images: [
      {
        src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=90",
        alt: "Bioceramic Case + Rubber Strap - Front",
        width: 800,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1548171916-c8fd2c35fe6c?w=800&q=90",
        alt: "Bioceramic Case + Rubber Strap - Detail",
        width: 800,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=90",
        alt: "Bioceramic Case + Rubber Strap - Side",
        width: 800,
        height: 800,
      },
    ],
    variants: [
      { id: "bc-r-black", name: "Obsidian Black", color: "#0A0A0A", inStock: true },
      { id: "bc-r-white", name: "Arctic White", color: "#F5F5F5", inStock: true },
      { id: "bc-r-grey", name: "Carbon Grey", color: "#444444", inStock: false },
    ],
    materials: ["Bioceramic composite", "Premium vulcanized rubber", "316L stainless steel hardware"],
    compatibility: ["AP x Swatch MoonSwatch", "Bioceramic 42mm cases"],
    description:
      "The Core Collection sets the standard. Bioceramic composite meets aerospace-grade rubber in a form that is both engineered and worn. Every edge is machined to ±0.05mm tolerance. The result: a fit that collectors describe as transformative.",
    details: [
      "Case diameter: 42mm",
      "Lug width: 20mm",
      "Thickness: 11.5mm",
      "Hardware: 316L stainless steel",
      "Strap length: 120/75mm",
      "Water resistance: 50m",
    ],
    isBestSeller: true,
    badge: "Best Seller",
  },
  {
    id: "sil-bio-002",
    slug: "silicone-strap-bioceramic-case",
    name: "Silicone Strap + Bioceramic Case",
    tagline: "High-performance silicone. Bioceramic precision.",
    price: 249,
    currency: "USD",
    collection: "performance",
    collectionLabel: "Performance Collection",
    images: [
      {
        src: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=90",
        alt: "Silicone Strap + Bioceramic Case - Front",
        width: 800,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=90",
        alt: "Silicone Strap - Detail",
        width: 800,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=90",
        alt: "Silicone Strap - Side View",
        width: 800,
        height: 800,
      },
    ],
    variants: [
      { id: "sil-black", name: "Stealth Black", color: "#0A0A0A", inStock: true },
      { id: "sil-racing", name: "Racing Green", color: "#1A3A2A", inStock: true },
      { id: "sil-navy", name: "Midnight Navy", color: "#0F1A2E", inStock: true },
    ],
    materials: ["Medical-grade silicone", "Bioceramic composite case", "PVD-coated buckle"],
    compatibility: ["AP x Swatch MoonSwatch", "Bioceramic 42mm cases"],
    description:
      "Designed for the collector who demands both aesthetics and endurance. The Performance Collection uses medical-grade silicone that maintains its form under any condition, paired with the same precision bioceramic case found in our core line.",
    details: [
      "Case diameter: 42mm",
      "Lug width: 20mm",
      "Thickness: 11.2mm",
      "Hardware: PVD-coated buckle",
      "Strap length: 125/80mm",
      "Water resistance: 100m",
    ],
    isNew: true,
    badge: "New",
  },
  {
    id: "carbon-003",
    slug: "carbon-fiber-limited-edition",
    name: "Carbon Series — No. 001",
    tagline: "47 pieces. Forged carbon. Unrepeatable.",
    price: 589,
    currency: "USD",
    collection: "carbon",
    collectionLabel: "Carbon Series",
    images: [
      {
        src: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=90",
        alt: "Carbon Fiber Limited Edition - Front",
        width: 800,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1614177639091-b6e11cc6e12e?w=800&q=90",
        alt: "Carbon Fiber - Weave Detail",
        width: 800,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1612816958957-74e09ed0e66b?w=800&q=90",
        alt: "Carbon Fiber - Side Detail",
        width: 800,
        height: 800,
      },
    ],
    variants: [
      { id: "carbon-std", name: "Carbon Black", color: "#1A1A1A", inStock: true },
      { id: "carbon-gold", name: "Carbon + Gold", color: "#C9A84C", inStock: false, additionalPrice: 80 },
    ],
    materials: ["3K forged carbon fiber", "Titanium hardware", "Sapphire-coated case back"],
    compatibility: ["AP x Swatch MoonSwatch", "Bioceramic 42mm cases"],
    description:
      "A numbered edition for serious collectors. The Carbon Series is produced in strictly limited runs. Forged carbon fiber, hand-finished to a mirror edge. Each piece is individually numbered, certified, and arrives in collector packaging.",
    details: [
      "Edition size: 47 pieces",
      "Case diameter: 42mm",
      "Lug width: 20mm",
      "Thickness: 10.8mm",
      "Hardware: Grade 5 titanium",
      "Includes: certificate of authenticity, collector box",
    ],
    isLimited: true,
    badge: "Limited — 47 Pieces",
  },
  {
    id: "bc-rubber-004",
    slug: "bioceramic-rubber-strap-white",
    name: "Bioceramic Case + Rubber Strap",
    tagline: "Arctic white. Unmistakable.",
    price: 289,
    currency: "USD",
    collection: "core",
    collectionLabel: "Core Collection",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=90",
        alt: "Bioceramic Case White - Front",
        width: 800,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=90",
        alt: "Bioceramic Case White - Detail",
        width: 800,
        height: 800,
      },
    ],
    variants: [
      { id: "bc-r-white-v2", name: "Arctic White", color: "#F5F5F5", inStock: true },
      { id: "bc-r-cream", name: "Bone", color: "#E8E4DC", inStock: true },
    ],
    materials: ["Bioceramic composite", "Premium vulcanized rubber", "316L stainless steel hardware"],
    compatibility: ["AP x Swatch MoonSwatch", "Bioceramic 42mm cases"],
    description:
      "The white variant of our most popular core piece. Bioceramic composite in arctic white — a finish that references the original MoonSwatch heritage while elevating it entirely.",
    details: [
      "Case diameter: 42mm",
      "Lug width: 20mm",
      "Thickness: 11.5mm",
      "Hardware: 316L stainless steel",
      "Strap length: 120/75mm",
      "Water resistance: 50m",
    ],
    isBestSeller: true,
  },
];

export const collections: Collection[] = [
  {
    id: "core",
    slug: "core",
    name: "Core Collection",
    label: "01",
    tagline: "Bioceramic + Rubber",
    description:
      "The foundation of STRP LAB. Bioceramic precision meets premium rubber in the collection that started everything.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=90",
    badge: undefined,
  },
  {
    id: "performance",
    slug: "performance",
    name: "Performance Collection",
    label: "02",
    tagline: "Silicone + Bioceramic",
    description:
      "Medical-grade silicone. Bioceramic precision. Engineered for the collector who moves.",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&q=90",
    badge: "New",
  },
  {
    id: "carbon",
    slug: "carbon",
    name: "Carbon Series",
    label: "03",
    tagline: "Limited Edition",
    description:
      "Forged carbon fiber. Numbered. Unrepeatable. For the collector who demands the exceptional.",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=90",
    badge: "47 Pieces",
  },
];

export const getBestSellers = (): Product[] =>
  products.filter((p) => p.isBestSeller);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCollection = (collection: Product["collection"]): Product[] =>
  products.filter((p) => p.collection === collection);
