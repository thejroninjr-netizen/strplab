"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-brand-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1800&q=90"
          alt="STRP LAB — Engineered for the Perfect Fit"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-padding pb-20 lg:pb-28 pt-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            className="label-eyebrow-white mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            New Collection — 2025
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-light text-white leading-none tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            Engineered
            <br />
            <span className="font-semibold">for the</span>
            <br />
            Perfect Fit.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-white/60 text-base lg:text-lg font-light max-w-lg leading-relaxed mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            Premium straps and cases crafted for modern collectors.
            Bioceramic precision. Uncompromising detail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
          >
            <Link href="/collections" className="btn-ghost-white">
              Shop Collection
              <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-200 py-4">
              Explore Materials
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        className="relative section-padding border-t border-white/10 py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-wrap gap-8 justify-between">
          {["Bioceramic Composite", "Precision Fit ±0.05mm", "Collector Approved", "Ships Worldwide"].map((tag) => (
            <p key={tag} className="text-white/30 text-xs tracking-[0.15em] uppercase">{tag}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
