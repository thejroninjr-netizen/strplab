"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Which watches are compatible with STRP LAB accessories?",
    a: "All STRP LAB products are precision-engineered for the AP x Swatch MoonSwatch and compatible 42mm bioceramic cases. Each product page lists exact compatibility. If you're unsure, contact us with your reference number.",
  },
  {
    q: "What makes bioceramic different from standard ceramic?",
    a: "Standard ceramic is brittle and prone to cracking on impact. Bioceramic is a composite — zirconium oxide bonded with polyamide — that retains ceramic's scratch-resistance and lightness while adding the resilience required for daily wear. It is the same material Swatch Group uses in the original MoonSwatch.",
  },
  {
    q: "How is the Carbon Series different from your standard products?",
    a: "The Carbon Series is a numbered limited edition produced in runs of 47 pieces. Each piece uses 3K forged carbon fiber with grade-5 titanium hardware, arrives with a certificate of authenticity, and is numbered by hand. Once a run sells out, it is retired permanently.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard international shipping takes 5–10 business days. Express shipping (2–4 days) is available globally. Orders over $300 qualify for complimentary express shipping. Carbon Series orders ship with insured courier only.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day return window on all unworn products in original packaging. The Carbon Series is final sale due to its limited nature. For any quality concerns, we offer a lifetime craftsmanship guarantee — if we made it wrong, we make it right.",
  },
  {
    q: "Can I install STRP LAB cases and straps myself?",
    a: "Yes. All STRP LAB accessories are designed for tool-free installation. Core Collection and Performance straps use a proprietary quick-release mechanism. Carbon Series installation requires a standard spring bar tool, which is included.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-black/8">
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm lg:text-base font-medium text-brand-text group-hover:text-brand-carbon transition-colors leading-snug">
          {q}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-brand-secondary">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-brand-secondary leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-36 bg-white" ref={ref} id="faq">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-eyebrow mb-4">FAQ</p>
            <h2 className="text-4xl lg:text-5xl font-light text-brand-text tracking-[-0.02em]">
              Common<br />
              <span className="font-semibold">questions.</span>
            </h2>
            <p className="text-brand-secondary text-sm mt-6 leading-relaxed">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="/contact" className="text-brand-text underline underline-offset-2 hover:text-brand-carbon transition-colors">
                Contact us directly.
              </a>
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border-t border-black/8">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
