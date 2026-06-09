"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShoppingBag, ArrowRight, Check } from "lucide-react";
import type { Product, ProductVariant } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/product/ProductCard";

export default function ProductPageClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants.find((v) => v.inStock) ?? product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const totalPrice = product.price + (selectedVariant.additionalPrice ?? 0);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="section-padding py-5 border-b border-black/8">
        <div className="flex items-center gap-2 text-xs text-brand-secondary">
          <Link href="/" className="hover:text-brand-text transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-brand-text transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-brand-text">{product.name}</span>
        </div>
      </div>

      <div className="section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
          {/* Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "w-16 h-16 overflow-hidden bg-brand-off border-2 transition-all",
                    activeImage === i ? "border-brand-text" : "border-transparent"
                  )}
                >
                  <Image src={img.src} alt={img.alt} width={64} height={64} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-square bg-brand-off overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[activeImage].src}
                    alt={product.images[activeImage].alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-text text-white text-[9px] font-medium tracking-[0.12em] uppercase px-3 py-1.5">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product details */}
          <div>
            <p className="label-eyebrow mb-3">{product.collectionLabel}</p>
            <h1 className="text-3xl lg:text-4xl font-light text-brand-text tracking-[-0.02em] mb-2">{product.name}</h1>
            <p className="text-brand-secondary mb-6">{product.tagline}</p>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-2xl font-medium text-brand-text">{formatPrice(totalPrice)}</span>
              {selectedVariant.additionalPrice && (
                <span className="text-sm text-brand-secondary">+{formatPrice(selectedVariant.additionalPrice)} for this variant</span>
              )}
            </div>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand-secondary mb-3">
                Colour — <span className="text-brand-text">{selectedVariant.name}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.inStock && setSelectedVariant(variant)}
                    disabled={!variant.inStock}
                    className={cn(
                      "relative px-4 py-2 text-xs font-medium border transition-all",
                      selectedVariant.id === variant.id
                        ? "border-brand-text text-brand-text"
                        : variant.inStock
                        ? "border-black/15 text-brand-secondary hover:border-brand-text hover:text-brand-text"
                        : "border-black/8 text-black/25 cursor-not-allowed line-through"
                    )}
                  >
                    {variant.name}
                    {!variant.inStock && (
                      <span className="absolute inset-x-0 top-1/2 h-px bg-black/20 -rotate-12" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand-secondary mb-3">Quantity</p>
              <div className="inline-flex items-center border border-black/15">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-brand-off transition-colors">
                  <Minus size={13} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-brand-off transition-colors">
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant.inStock}
              className={cn(
                "w-full flex items-center justify-center gap-3 py-4 text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300",
                added
                  ? "bg-green-600 text-white"
                  : "bg-brand-text text-white hover:bg-brand-carbon"
              )}
            >
              {added ? (
                <>
                  <Check size={16} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  Add to Cart — {formatPrice(totalPrice * quantity)}
                </>
              )}
            </button>

            {/* Shipping note */}
            <p className="text-xs text-brand-secondary text-center mt-3">
              Free express shipping on orders over $300
            </p>

            {/* Description */}
            <div className="mt-10 pt-10 border-t border-black/8">
              <p className="text-sm text-brand-secondary leading-relaxed">{product.description}</p>
            </div>

            {/* Details accordion */}
            <div className="mt-8 space-y-6">
              {/* Product Details */}
              <div className="border-t border-black/8 pt-6">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-text mb-4">Specifications</p>
                <ul className="space-y-2">
                  {product.details.map((d) => (
                    <li key={d} className="text-sm text-brand-secondary flex gap-2">
                      <span className="text-black/20 flex-shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div className="border-t border-black/8 pt-6">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-text mb-4">Materials</p>
                <ul className="space-y-2">
                  {product.materials.map((m) => (
                    <li key={m} className="text-sm text-brand-secondary flex gap-2">
                      <span className="text-black/20 flex-shrink-0">—</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="border-t border-black/8 pt-6">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-text mb-4">Compatibility</p>
                <ul className="space-y-2">
                  {product.compatibility.map((c) => (
                    <li key={c} className="text-sm text-brand-secondary flex gap-2">
                      <span className="text-black/20 flex-shrink-0">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="section-padding py-16 border-t border-black/8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label-eyebrow mb-2">You may also like</p>
              <h2 className="text-2xl font-light text-brand-text">From the same collection</h2>
            </div>
            <Link href="/collections" className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-brand-secondary hover:text-brand-text transition-colors group">
              View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
