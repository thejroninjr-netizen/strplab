import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { collections, getProductsByCollection } from "@/data/products";
import type { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return {};
  return {
    title: `${collection.name} — STRP LAB`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const products = getProductsByCollection(collection.id as Product["collection"]);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden bg-brand-black">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 section-padding pb-12">
          <p className="label-eyebrow-white mb-3">{collection.tagline}</p>
          <h1 className="text-5xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-none">
            {collection.name}
          </h1>
          {collection.badge && (
            <span className="inline-block mt-4 bg-white text-brand-text text-[9px] font-medium tracking-[0.15em] uppercase px-3 py-1.5">
              {collection.badge}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="section-padding py-12 border-b border-black/8">
        <p className="text-brand-secondary max-w-2xl leading-relaxed">{collection.description}</p>
      </div>

      {/* Products */}
      <div className="section-padding py-12 lg:py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-brand-secondary">Products coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
