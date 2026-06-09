export interface ProductVariant {
  id: string;
  name: string;
  color?: string;
  size?: string;
  inStock: boolean;
  additionalPrice?: number;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  collection: "core" | "performance" | "carbon";
  collectionLabel: string;
  images: ProductImage[];
  variants: ProductVariant[];
  materials: string[];
  compatibility: string[];
  description: string;
  details: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  label: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
}
