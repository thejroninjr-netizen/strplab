"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Globe, Award } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Bioceramic composite, vulcanized rubber, and forged carbon fiber. Materials sourced for performance, not price.",
  },
  {
    icon: Zap,
    title: "Precision Fit",
    description: "Machined to ±0.05mm. Every STRP LAB piece is designed to snap into place — no adjustment, no compromise.",
  },
  {
    icon: Award,
    title: "Collector Approved",
    description: "Designed with and tested by serious AP x Swatch collectors. The community drives every product decision we make.",
  },
  {
    icon: Globe,
    title: "Ships Worldwide",
    description: "Delivered in collector packaging. Free express shipping on orders over $300. Carbon-neutral on all standard routes.",
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-36 bg-brand-black" ref={ref}>
      <div className="section-padding">
        <motion.div
          className="max-w-xl mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-eyebrow-white mb-4">Why STRP LAB</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-[-0.02em]">
            Built for those<br />
            <span className="font-semibold">who notice.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="bg-brand-black p-8 lg:p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-6">
                  <Icon size={18} strokeWidth={1.5} className="text-white/60" />
                </div>
                <h3 className="text-base font-medium text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
