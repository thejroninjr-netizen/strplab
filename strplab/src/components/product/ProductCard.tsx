"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const defaultVariant = product.variants.find((v) => v.inStock) ?? product.variants[0];
    addItem(product, defaultVariant);
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <motion.article
        className="group cursor-pointer"
        onHoverStart={() => { setHovered(true); if (product.images.length > 1) setImageIdx(1); }}
        onHoverEnd={() => { setHovered(false); setImageIdx(0); }}
      >
        {/* Image container */}
        <div className="relative aspect-square bg-brand-off overflow-hidden mb-4">
          <motion.div
            key={imageIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={product.images[imageIdx]?.src ?? product.images[0].src}
              alt={product.images[imageIdx]?.alt ?? product.images[0].alt}
              fill
              priority={priority}
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-brand-text text-white text-[9px] font-medium tracking-[0.12em] uppercase px-2.5 py-1">
                {product.badge}
              </span>
            </div>
          )}

          {/* Quick add */}
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-brand-text text-xs font-medium tracking-[0.08em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-white transition-colors z-10"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={12} />
            Quick Add
          </motion.button>
        </div>

        {/* Info */}
        <div>
          <p className="text-[10px] tracking-[0.18em] uppercase text-brand-secondary mb-1.5">
            {product.collectionLabel}
          </p>
          <h3 className="text-sm font-medium text-brand-text leading-tight mb-2 group-hover:text-brand-carbon transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-brand-secondary">{formatPrice(product.price)}</p>
        </div>
      </motion.article>
    </Link>
  );
}
