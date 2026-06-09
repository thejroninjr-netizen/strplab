import type { Metadata } from "next";
import { collections, products } from "@/data/products";
import CollectionsPageClient from "./CollectionsPageClient";

export const metadata: Metadata = {
  title: "Collections — STRP LAB",
  description: "Explore the STRP LAB collections: Core, Performance, and Carbon Series. Premium accessories for AP x Swatch MoonSwatch collectors.",
};

export default function CollectionsPage() {
  return <CollectionsPageClient collections={collections} products={products} />;
}
