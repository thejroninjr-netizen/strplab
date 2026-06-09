"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-36 bg-brand-off" ref={ref}>
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-brand-carbon">
              <Image
                src="https://images.unsplash.com/photo-1614177639091-b6e11cc6e12e?w=1000&q=90"
                alt="STRP LAB craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -right-6 lg:bottom-8 lg:right-8 bg-white p-6 shadow-xl max-w-[180px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-3xl font-light text-brand-text tracking-[-0.02em]">±0.05</p>
              <p className="text-xs text-brand-secondary mt-1 leading-relaxed">mm machining tolerance</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-eyebrow mb-6">The STRP LAB Philosophy</p>
            <h2 className="text-4xl lg:text-5xl font-light text-brand-text leading-tight tracking-[-0.02em] mb-8">
              Crafted<br />
              <span className="font-semibold">for Collectors.</span>
            </h2>

            <div className="space-y-5 text-brand-secondary text-base leading-relaxed">
              <p>
                Every STRP LAB piece begins with a single obsession: precision. Not approximate precision — the kind that requires machining tolerances measured in hundredths of a millimeter.
              </p>
              <p>
                Our bioceramic composite is sourced from the same material families used in aerospace ceramics. It&apos;s 3× lighter than steel. It does not scratch in daily wear. It holds its color permanently.
              </p>
              <p>
                The straps are engineered to a proprietary curvature that mirrors the case geometry of the AP x Swatch. The fit is not approximate. It is exact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-black/10">
              {[
                { value: "47", label: "Limited carbon pieces per run" },
                { value: "3×", label: "Lighter than steel bioceramic" },
                { value: "100m", label: "Water resistance, performance line" },
                { value: "316L", label: "Surgical grade steel hardware" },
              ].map((stat) => (
                <div key={stat.value}>
                  <p className="text-2xl font-light text-brand-text tracking-[-0.02em]">{stat.value}</p>
                  <p className="text-xs text-brand-secondary mt-1 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary mt-10 inline-flex">
              Our Story
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
