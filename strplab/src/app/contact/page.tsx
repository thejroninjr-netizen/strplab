"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16 lg:pt-20">
      <div className="section-padding py-14 border-b border-black/8">
        <p className="label-eyebrow mb-4">Contact</p>
        <h1 className="text-5xl lg:text-6xl font-light text-brand-text tracking-[-0.02em]">
          Get in<br />
          <span className="font-semibold">touch.</span>
        </h1>
      </div>

      <div className="section-padding py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <div>
            <p className="text-brand-secondary leading-relaxed mb-10">
              We respond to every enquiry personally. Expect a reply within one business day.
              For urgent order matters, include your order number.
            </p>

            <div className="space-y-8">
              {[
                { label: "General Enquiries", value: "hello@strplab.com" },
                { label: "Order Support", value: "orders@strplab.com" },
                { label: "Press & Collaboration", value: "press@strplab.com" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-secondary mb-1">{item.label}</p>
                  <p className="text-sm text-brand-text">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-black/8">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-secondary mb-4">Response Time</p>
              <p className="text-sm text-brand-secondary leading-relaxed">
                Monday – Friday: within 24 hours<br />
                Weekends: next business day
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-black/8 p-10 text-center"
              >
                <p className="text-brand-text font-medium mb-2">Message received.</p>
                <p className="text-sm text-brand-secondary">We&apos;ll respond within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="text-xs font-medium tracking-[0.12em] uppercase text-brand-secondary block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      required
                      className="w-full border border-black/12 px-4 py-3.5 text-sm outline-none focus:border-brand-text transition-colors bg-transparent placeholder:text-black/25"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-medium tracking-[0.12em] uppercase text-brand-secondary block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full border border-black/12 px-4 py-3.5 text-sm outline-none focus:border-brand-text transition-colors bg-transparent resize-none placeholder:text-black/25"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center gap-3">
                  Send Message
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
