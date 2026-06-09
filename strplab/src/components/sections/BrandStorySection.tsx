"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BrandStorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-36 bg-white overflow-hidden" ref={ref}>
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-eyebrow mb-6">Our Story</p>
            <h2 className="text-4xl lg:text-5xl font-light text-brand-text tracking-[-0.02em] mb-8 leading-tight">
              Started by<br />
              <span className="font-semibold">collectors,<br />for collectors.</span>
            </h2>

            <div className="space-y-5 text-brand-secondary text-base leading-relaxed">
              <p>
                STRP LAB was founded with a single observation: the AP x Swatch deserved better.
                Not different — better. A case that felt engineered, not assembled. A strap that
                remembered nothing of the factory.
              </p>
              <p>
                Every SKU in our catalogue was born from personal frustration with the existing
                market. We wore everything available. None of it was right. So we built our own.
              </p>
              <p>
                Eighteen months of prototyping. Seventeen material formulations tested. Three
                manufacturing partners rejected before finding one who shared our obsession with
                tolerance. The result is what you see today.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-black/10">
              <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary">
                Designed & engineered — 2024
              </p>
            </div>
          </motion.div>

          {/* Image grid */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[3/4] overflow-hidden bg-brand-off col-span-2 sm:col-span-1 mt-0 sm:mt-12">
              <Image
                src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=700&q=90"
                alt="STRP LAB product development"
                width={700}
                height={933}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-off sm:-mt-12">
              <Image
                src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=700&q=90"
                alt="STRP LAB materials"
                width={700}
                height={933}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
