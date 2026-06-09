import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — STRP LAB",
  description: "STRP LAB was founded by collectors, for collectors. The story behind precision-engineered MoonSwatch accessories.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] lg:h-[70vh] bg-brand-black overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1614177639091-b6e11cc6e12e?w=1800&q=90"
          alt="STRP LAB workshop"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 section-padding pb-14">
          <p className="label-eyebrow-white mb-4">About STRP LAB</p>
          <h1 className="text-5xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-none">
            Precision.<br />
            <span className="font-semibold">Purpose.</span><br />
            Craft.
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="section-padding py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="label-eyebrow mb-5">The Origin</p>
            <h2 className="text-3xl lg:text-4xl font-light text-brand-text tracking-[-0.02em] mb-8">
              Started by a frustration.<br />
              <span className="font-semibold">Built into a brand.</span>
            </h2>
            <div className="space-y-5 text-brand-secondary text-base leading-relaxed">
              <p>
                STRP LAB was born from a collector&apos;s frustration. The AP x Swatch MoonSwatch was a landmark
                product — a genuine collaboration between two horological institutions that made luxury accessible.
                But the available aftermarket accessories told a different story.
              </p>
              <p>
                We spent months testing every strap and case on the market. The fit was always approximate.
                The materials were always a compromise. The packaging felt like an afterthought.
              </p>
              <p>
                So we started from the beginning. Sourced bioceramic composite from the same material families
                Swatch Group uses. Developed our own rubber compound. Found a carbon fiber supplier who works
                with motorsport teams. And built everything to tolerances that most watch accessory manufacturers
                do not consider necessary.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden bg-brand-off">
              <Image
                src="https://images.unsplash.com/photo-1622434641406-a158123450f9?w=900&q=90"
                alt="STRP LAB carbon fiber detail"
                width={900}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden bg-brand-off">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=90"
                  alt="STRP LAB product"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-brand-off">
                <Image
                  src="https://images.unsplash.com/photo-1548171916-c8fd2c35fe6c?w=600&q=90"
                  alt="STRP LAB strap detail"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-brand-off section-padding py-20 lg:py-28">
        <div className="max-w-xl mb-14">
          <p className="label-eyebrow mb-4">What We Stand For</p>
          <h2 className="text-3xl lg:text-4xl font-light text-brand-text tracking-[-0.02em]">
            Three commitments.<br />
            <span className="font-semibold">No exceptions.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/8">
          {[
            {
              number: "01",
              title: "Material Honesty",
              text: "We use only what we say we use. Every material claim on every product is independently verifiable. If the specification says bioceramic, it is bioceramic.",
            },
            {
              number: "02",
              title: "Fit or Nothing",
              text: "An accessory that almost fits is not an accessory. Our machining tolerances are tighter than the industry standard because the only standard that matters is the watch.",
            },
            {
              number: "03",
              title: "Limited on Purpose",
              text: "The Carbon Series is limited because rarity is a design choice, not a sales tactic. When a run is gone, it is retired. No reprints. No exceptions.",
            },
          ].map((v) => (
            <div key={v.number} className="bg-brand-off p-8 lg:p-10">
              <p className="text-3xl font-light text-brand-text/15 mb-5 tracking-[-0.02em]">{v.number}</p>
              <h3 className="text-base font-medium text-brand-text mb-4">{v.title}</h3>
              <p className="text-sm text-brand-secondary leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
