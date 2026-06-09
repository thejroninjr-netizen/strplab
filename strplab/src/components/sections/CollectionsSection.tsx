"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/products";

export default function CollectionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="label-eyebrow mb-3">Our Collections</p>
            <h2 className="text-4xl lg:text-5xl font-light text-brand-text leading-tight tracking-[-0.02em]">
              Three distinct<br />
              <span className="font-semibold">expressions.</span>
            </h2>
          </div>
          <Link href="/collections" className="flex items-center gap-2 text-sm font-medium tracking-[0.08em] uppercase text-brand-secondary hover:text-brand-text transition-colors group">
            View All
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/collections/${collection.slug}`} className="group block relative overflow-hidden bg-brand-carbon">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Badge */}
                  {collection.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-brand-text text-[9px] font-medium tracking-[0.15em] uppercase px-2.5 py-1">
                        {collection.badge}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-2">{collection.tagline}</p>
                    <h3 className="text-2xl lg:text-3xl font-light text-white tracking-[-0.01em] mb-1">{collection.name}</h3>
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-white/80 text-xs font-medium tracking-[0.1em] uppercase">Explore</span>
                      <ArrowRight size={12} className="text-white/80" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
