"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    author: "Marcus T.",
    role: "Watch Collector, London",
    text: "I've tried everything on the market for my MoonSwatch. STRP LAB is in a different category entirely. The fit is surgical. The bioceramic feels like it was made alongside the watch, not after it.",
    rating: 5,
    product: "Bioceramic Case + Rubber Strap",
  },
  {
    author: "Kenji A.",
    role: "AP Collector, Tokyo",
    text: "The Carbon Series No. 001 is a piece of art. I keep the original packaging. The certificate is framed. This is collector-grade in every sense of the word.",
    rating: 5,
    product: "Carbon Series — No. 001",
  },
  {
    author: "Sofia R.",
    role: "Luxury Accessories, Milan",
    text: "As someone who evaluates premium accessories professionally — the material quality is exceptional. This is not an aftermarket product. This is an upgrade.",
    rating: 5,
    product: "Performance Collection",
  },
];

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-36 bg-brand-off" ref={ref}>
      <div className="section-padding">
        <motion.div
          className="max-w-lg mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-eyebrow mb-4">Reviews</p>
          <h2 className="text-4xl lg:text-5xl font-light text-brand-text tracking-[-0.02em]">
            Collector<br />
            <span className="font-semibold">voices.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              className="bg-white p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={12} className="text-brand-text fill-brand-text" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-text text-base leading-relaxed mb-8">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="border-t border-black/8 pt-6">
                <p className="text-sm font-medium text-brand-text">{review.author}</p>
                <p className="text-xs text-brand-secondary mt-0.5">{review.role}</p>
                <p className="text-xs text-brand-secondary/70 mt-3 tracking-[0.08em] uppercase">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-sm text-brand-secondary">
            4.9 average across 340+ collector reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
