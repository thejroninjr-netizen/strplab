import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "FAQ — STRP LAB",
  description: "Frequently asked questions about STRP LAB products, compatibility, shipping, and returns.",
};

export default function FAQPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="section-padding pt-14 pb-6 border-b border-black/8">
        <h1 className="text-5xl lg:text-6xl font-light text-brand-text tracking-[-0.02em]">
          Questions<br />
          <span className="font-semibold">answered.</span>
        </h1>
      </div>
      <FAQSection />
    </div>
  );
}
