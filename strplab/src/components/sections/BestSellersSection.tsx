"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function BestSellersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 lg:py-36 bg-white" id="best-sellers" ref={ref}>
      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="label-eyebrow mb-3">Featured</p>
            <h2 className="text-4xl lg:text-5xl font-light text-brand-text tracking-[-0.02em]">
              Collector<br />
              <span className="font-semibold">Favourites.</span>
            </h2>
          </div>
          <Link
            href="/collections"
            className="flex items-center gap-2 text-sm font-medium tracking-[0.08em] uppercase text-brand-secondary hover:text-brand-text transition-colors group"
          >
            View All Products
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} priority={i < 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
