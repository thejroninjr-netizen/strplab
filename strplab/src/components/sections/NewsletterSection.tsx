"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-36 bg-brand-carbon" ref={ref}>
      <div className="section-padding">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-eyebrow-white mb-5">Community</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-[-0.02em] mb-5 leading-tight">
            Join the<br />
            <span className="font-semibold">Collector Community.</span>
          </h2>
          <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-10 max-w-md mx-auto">
            Early access to limited drops. First look at new materials. Collector conversations from people who notice what you notice.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border border-white/20 text-white placeholder:text-white/30 px-5 py-4 text-sm outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-brand-text px-6 py-4 text-sm font-medium tracking-[0.08em] uppercase flex items-center justify-center gap-2 hover:bg-brand-off transition-colors flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-white/20 px-8 py-5 max-w-md mx-auto"
            >
              <p className="text-white text-sm font-medium">You&apos;re in the community.</p>
              <p className="text-white/50 text-xs mt-1">First access drops direct to your inbox.</p>
            </motion.div>
          )}

          <p className="text-white/25 text-xs mt-5">
            No spam. Unsubscribe at any time. Your information is private.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
