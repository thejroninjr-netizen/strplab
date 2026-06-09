"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const materials = [
  {
    name: "Bioceramic",
    description:
      "An aerospace-grade composite of zirconium oxide and polyamide. Permanently scratch-resistant. Featherlight. Dimensionally stable across temperature extremes.",
    properties: ["Scratch-resistant surface", "3× lighter than steel", "Zero corrosion", "Permanent color stability"],
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=900&q=90",
    bg: "bg-brand-carbon",
    textColor: "text-white",
    secondaryText: "text-white/50",
  },
  {
    name: "Premium Rubber",
    description:
      "Vulcanized to military specification. STRP LAB rubber maintains its geometry under UV, perspiration, and temperature variance. Engineered, not manufactured.",
    properties: ["UV-stable compound", "Sweat-resistant", "Memory-free geometry", "Soft-touch texture"],
    image: "https://images.unsplash.com/photo-1548171916-c8fd2c35fe6c?w=900&q=90",
    bg: "bg-brand-off",
    textColor: "text-brand-text",
    secondaryText: "text-brand-secondary",
  },
  {
    name: "Carbon Fiber",
    description:
      "3K forged carbon — the same material class used in Formula 1 chassis and aerospace structural components. Each piece has a unique, unrepeatable grain pattern.",
    properties: ["Forged 3K weave", "Unique per piece", "Grade 5 titanium hardware", "Numbered edition"],
    image: "https://images.unsplash.com/photo-1614177639091-b6e11cc6e12e?w=900&q=90",
    bg: "bg-brand-black",
    textColor: "text-white",
    secondaryText: "text-white/50",
  },
];

export default function MaterialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-36 bg-white" ref={ref}>
      <div className="section-padding mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-eyebrow mb-4">Material Science</p>
          <h2 className="text-4xl lg:text-5xl font-light text-brand-text tracking-[-0.02em]">
            The substance<br />
            <span className="font-semibold">behind the form.</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {materials.map((material, i) => (
          <motion.div
            key={material.name}
            className={`${material.bg} p-8 lg:p-10`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image */}
            <div className="aspect-square mb-8 overflow-hidden">
              <Image
                src={material.image}
                alt={material.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <p className={`text-xs tracking-[0.2em] uppercase font-medium mb-3 ${material.secondaryText}`}>
              Material
            </p>
            <h3 className={`text-2xl font-light tracking-[-0.01em] mb-4 ${material.textColor}`}>
              {material.name}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${material.secondaryText}`}>
              {material.description}
            </p>
            <ul className="space-y-2">
              {material.properties.map((prop) => (
                <li key={prop} className={`text-xs tracking-[0.05em] flex items-center gap-2 ${material.secondaryText}`}>
                  <span className="w-1 h-1 rounded-full bg-current flex-shrink-0" />
                  {prop}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
