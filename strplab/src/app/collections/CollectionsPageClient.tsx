"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Collection, Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";

const tabs = [
  { id: "all", label: "All" },
  { id: "core", label: "Core Collection" },
  { id: "performance", label: "Performance" },
  { id: "carbon", label: "Carbon Series" },
];

export default function CollectionsPageClient({
  products,
}: {
  collections: Collection[];
  products: Product[];
}) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all" ? products : products.filter((p) => p.collection === activeTab);

  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <div className="section-padding pb-12 lg:pb-16 border-b border-black/8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-eyebrow mb-4">All Collections</p>
          <h1 className="text-5xl lg:text-7xl font-light text-brand-text tracking-[-0.02em]">
            Designed for<br />
            <span className="font-semibold">every collector.</span>
          </h1>
        </motion.div>
      </div>

      {/* Filter tabs */}
      <div className="section-padding py-6 border-b border-black/8 sticky top-16 lg:top-20 bg-white/95 backdrop-blur-sm z-10">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-medium tracking-[0.12em] uppercase whitespace-nowrap transition-colors pb-1 border-b ${
                activeTab === tab.id
                  ? "text-brand-text border-brand-text"
                  : "text-brand-secondary border-transparent hover:text-brand-text"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="section-padding py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
