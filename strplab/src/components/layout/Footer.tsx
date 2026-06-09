import Link from "next/link";

const footerLinks = {
  Shop: [
    { href: "/collections", label: "All Collections" },
    { href: "/collections/core", label: "Core Collection" },
    { href: "/collections/performance", label: "Performance" },
    { href: "/collections/carbon", label: "Carbon Series" },
  ],
  Company: [
    { href: "/about", label: "About STRP LAB" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/returns", label: "Returns" },
    { href: "/shipping", label: "Shipping" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Main footer */}
      <div className="section-padding py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-base font-semibold tracking-[0.25em] uppercase mb-4">STRP LAB</p>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Premium aftermarket accessories for AP x Swatch collectors.
              Engineered for the perfect fit.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-all text-xs">
                IG
              </a>
              <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-all text-xs">
                TW
              </a>
              <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-all text-xs">
                YT
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30 mb-5">{section}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 section-padding py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} STRP LAB. All rights reserved.
          </p>
          <p className="text-xs text-white/25 tracking-[0.1em]">
            ENGINEERED FOR THE PERFECT FIT.
          </p>
        </div>
      </div>
    </footer>
  );
}
