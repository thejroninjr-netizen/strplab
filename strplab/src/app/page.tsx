import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import EditorialSection from "@/components/sections/EditorialSection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import BestSellersSection from "@/components/sections/BestSellersSection";
import WhySection from "@/components/sections/WhySection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "STRP LAB — Engineered for the Perfect Fit",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <EditorialSection />
      <MaterialsSection />
      <BestSellersSection />
      <WhySection />
      <BrandStorySection />
      <ReviewsSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
