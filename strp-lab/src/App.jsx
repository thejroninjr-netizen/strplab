import React, { useState, useEffect, useRef } from 'react'

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}

// ─── Product Image Component ──────────────────────────────────────────────────
function ProductImage({ src, alt }) {
  const [error, setError] = useState(false)
  if (error) {
    return <div className="img-placeholder w-full h-full" />
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
    />
  )
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div className="bg-obsidian text-ivory py-2.5 text-center">
      <p className="font-mono text-[10px] tracking-mega uppercase">
        FREE WORLDWIDE SHIPPING ON ORDERS OVER $150
      </p>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['COLLECTION', 'COMPATIBILITY', 'ABOUT', 'FAQ']

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-stone/15'
          : 'bg-ivory border-b border-stone/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="font-mono text-sm tracking-mega font-medium text-obsidian">
            STRP LAB
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link font-mono text-[11px] tracking-ultra text-stone hover:text-obsidian transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <button className="hidden lg:flex items-center gap-2 font-mono text-[11px] tracking-ultra text-stone hover:text-obsidian transition-colors duration-200">
              CART
              <span className="w-5 h-5 rounded-full border border-stone/40 flex items-center justify-center text-[10px]">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-px bg-obsidian transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-px bg-obsidian transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-obsidian transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-stone/15 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-ultra text-stone hover:text-obsidian transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-2 border-t border-stone/15">
              <a href="#" className="font-mono text-xs tracking-ultra text-stone">CART (0)</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite min-h-[90vh] lg:min-h-screen flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-watch-macro.jpg"
          alt="STRP LAB hero"
          className="w-full h-full object-cover opacity-50"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/60 to-graphite/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-graphite/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 pt-24">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-[fadeUp_0.6s_ease_0.2s_forwards]">
            <div className="w-8 h-px bg-champagne" />
            <span className="font-mono text-[10px] tracking-mega uppercase text-champagne">
              Premium Conversion System
            </span>
          </div>

          {/* Headline */}
          <h1 className="display-heading text-ivory text-[11vw] lg:text-[7rem] xl:text-[8.5rem] mb-6 opacity-0 animate-[fadeUp_0.7s_ease_0.35s_forwards]">
            Transform
            <br />
            <em className="text-champagne not-italic">Your Royal Pop.</em>
          </h1>

          {/* Sub */}
          <p className="font-body text-stone text-sm lg:text-base font-light leading-relaxed max-w-sm mb-10 opacity-0 animate-[fadeUp_0.7s_ease_0.5s_forwards]">
            Premium bioceramic case, rubber strap, and metallic bracelet conversions built for collectors.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeUp_0.7s_ease_0.65s_forwards]">
            <a href="#collection" className="btn-ghost-light">
              Shop Collection
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#compatibility" className="font-mono text-[11px] tracking-ultra text-stone hover:text-ivory transition-colors duration-200 flex items-center gap-2 uppercase self-center">
              Explore Fit Guide
              <span className="text-champagne">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="mt-16 lg:mt-24 flex flex-wrap gap-8 lg:gap-16 border-t border-ivory/10 pt-8">
          {[
            { val: '3', label: 'Conversion Systems' },
            { val: '14', label: 'Colorways' },
            { val: 'AP × Swatch', label: 'Royal Pop Fit' },
          ].map((m) => (
            <div key={m.label} className="opacity-0 animate-[fadeIn_0.6s_ease_0.8s_forwards]">
              <div className="font-display font-light text-2xl text-ivory">{m.val}</div>
              <div className="font-mono text-[10px] tracking-ultra text-stone uppercase mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Collection Intro ─────────────────────────────────────────────────────────
function CollectionIntro() {
  return (
    <section className="bg-ivory py-20 lg:py-28" id="collection">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <div>
            <div className="section-label mb-6 reveal">System Overview</div>
            <h2 className="display-heading text-obsidian text-4xl lg:text-6xl xl:text-7xl reveal reveal-delay-1">
              Three Systems.
              <br />
              One Transformation.
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="w-8 h-px bg-champagne mb-6" />
            <p className="font-body text-stone text-sm lg:text-base leading-relaxed font-light">
              STRP LAB focuses on refined conversion systems for Royal Pop collectors: bioceramic case and rubber strap upgrades, integrated metallic bracelets, and limited special editions.
            </p>
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px mt-16 lg:mt-20 bg-stone/15">
          {[
            {
              num: '01',
              name: 'BIOCERAMIC CASE + RUBBER STRAP',
              desc: 'Lightweight structure. Soft-touch comfort.',
              href: '#bioceramic',
            },
            {
              num: '02',
              name: 'METALLIC BRACELET',
              desc: 'Integrated weight. Brushed finish.',
              href: '#metallic',
            },
            {
              num: '03',
              name: 'SPECIAL EDITION',
              desc: 'Limited collector configurations.',
              href: '#special',
            },
          ].map((cat, i) => (
            <a
              key={cat.num}
              href={cat.href}
              className={`bg-ivory p-8 lg:p-10 flex flex-col justify-between min-h-[160px] group reveal reveal-delay-${i + 2} hover:bg-obsidian transition-colors duration-500`}
            >
              <div>
                <div className="font-mono text-[10px] tracking-mega text-stone group-hover:text-stone/60 mb-4 transition-colors">
                  {cat.num}
                </div>
                <div className="font-mono text-xs tracking-ultra uppercase text-obsidian group-hover:text-ivory transition-colors duration-500 mb-2">
                  {cat.name}
                </div>
                <div className="font-body text-sm text-stone group-hover:text-stone/70 transition-colors">
                  {cat.desc}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <span className="font-mono text-[10px] tracking-ultra uppercase text-champagne">
                  View All
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-champagne group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ name, descriptor, price, image, color, delay = 0 }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className={`product-card reveal reveal-delay-${delay}`}>
      {/* Image */}
      <div className="product-img-wrap">
        <ProductImage src={image} alt={name} />
        {/* Color dot overlay */}
        <div
          className="absolute bottom-3 left-3 w-3 h-3 rounded-full border border-ivory/60"
          style={{ background: color }}
        />
      </div>

      {/* Info */}
      <div className="p-5 border-t border-stone/15">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-mono text-[11px] tracking-ultra uppercase text-obsidian leading-tight">
              {name}
            </h3>
            <p className="font-body text-stone text-xs mt-1 font-light">{descriptor}</p>
          </div>
          <div className="font-display font-light text-lg text-obsidian whitespace-nowrap ml-4">
            {price}
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`mt-4 w-full text-center font-mono text-[10px] tracking-ultra uppercase py-3 border transition-all duration-300 ${
            added
              ? 'bg-champagne text-obsidian border-champagne'
              : 'border-stone/30 text-stone hover:border-obsidian hover:text-obsidian'
          }`}
        >
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

// ─── Product Section ──────────────────────────────────────────────────────────
function ProductSection({ id, label, title, subtitle, products, bg = 'bg-ivory' }) {
  return (
    <section className={`${bg} py-20 lg:py-28`} id={id}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="section-label mb-4 reveal">{label}</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="display-heading text-obsidian text-3xl lg:text-5xl reveal reveal-delay-1">{title}</h2>
            <p className="font-body text-stone text-sm font-light max-w-xs reveal reveal-delay-2">{subtitle}</p>
          </div>
          <hr className="hr-champagne mt-8 reveal reveal-delay-2" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-stone/15">
          {products.map((p, i) => (
            <div key={p.name} className="bg-ivory">
              <ProductCard {...p} delay={Math.min(i + 1, 5)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Before / After ───────────────────────────────────────────────────────────
function BeforeAfter() {
  return (
    <section className="bg-obsidian py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="section-label text-stone mb-4 reveal">The Difference</div>
          <h2 className="display-heading text-ivory text-4xl lg:text-6xl xl:text-7xl reveal reveal-delay-1">
            Not Another Strap.
          </h2>
          <p className="font-body text-stone text-sm font-light max-w-sm mx-auto mt-6 leading-relaxed reveal reveal-delay-2">
            A complete transformation system designed to elevate the Royal Pop from playful collectible to daily statement piece.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 relative">
          {/* Before */}
          <div className="reveal border border-stone/20 p-8 lg:p-12">
            <div className="font-mono text-[10px] tracking-mega uppercase text-stone mb-6">Before</div>
            <div className="aspect-square bg-stone/10 mb-6 flex items-center justify-center img-placeholder" />
            <div className="space-y-2">
              <div className="font-mono text-xs tracking-ultra text-stone uppercase">Stock Royal Pop</div>
              <div className="font-body text-stone/60 text-sm font-light">Original plastic case · Standard rubber strap · Factory configuration</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Plastic Case', 'Stock Strap', 'Factory Finish'].map((t) => (
                <span key={t} className="font-mono text-[9px] tracking-ultra uppercase border border-stone/20 text-stone px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Divider / Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-champagne items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* After */}
          <div className="reveal reveal-delay-2 border border-champagne/30 p-8 lg:p-12 bg-graphite/30">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <div className="font-mono text-[10px] tracking-mega uppercase text-champagne">After</div>
            </div>
            <div className="aspect-square bg-stone/10 mb-6 flex items-center justify-center img-placeholder" />
            <div className="space-y-2">
              <div className="font-mono text-xs tracking-ultra text-ivory uppercase">STRP LAB Conversion</div>
              <div className="font-body text-stone text-sm font-light">Bioceramic case · Premium rubber or metallic · Collector finish</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Bioceramic Case', 'Premium Strap', 'Collector Grade'].map((t) => (
                <span key={t} className="font-mono text-[9px] tracking-ultra uppercase border border-champagne/30 text-champagne px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Engineering Section ──────────────────────────────────────────────────────
function Engineering() {
  const features = [
    {
      icon: '⬡',
      title: 'Precision Fit',
      desc: 'Designed specifically for Royal Pop style models. Each conversion is engineered to seat exactly right — no gaps, no flex, no compromise.',
    },
    {
      icon: '◈',
      title: 'Collector Grade Materials',
      desc: 'Bioceramic-style cases, durable rubber, and refined metallic finishes. Material decisions made for longevity and presence.',
    },
    {
      icon: '⬕',
      title: 'Everyday Wear',
      desc: 'Built for comfort, durability, and daily confidence. Every edge radiused, every surface finished to withstand the realities of daily use.',
    },
    {
      icon: '◎',
      title: 'Designed For Royal Pop',
      desc: "Made to elevate the original design, not hide it. The Royal Pop's character is preserved and amplified — not obscured.",
    },
  ]

  return (
    <section className="bg-graphite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="section-label text-stone mb-4 reveal">Product Engineering</div>
          <h2 className="display-heading text-ivory text-4xl lg:text-6xl xl:text-8xl reveal reveal-delay-1">
            Engineered
            <br />
            <em className="text-champagne not-italic">For Collectors.</em>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-px bg-stone/15">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-graphite p-8 lg:p-10 border-l border-stone/15 first:border-0 reveal reveal-delay-${i + 1}`}
            >
              <div className="text-champagne text-2xl mb-6 font-light">{f.icon}</div>
              <h3 className="font-mono text-xs tracking-ultra uppercase text-ivory mb-3">{f.title}</h3>
              <p className="font-body text-stone text-sm font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Horizontal rule */}
        <hr className="hr-champagne mt-16" />
      </div>
    </section>
  )
}

// ─── Compatibility ────────────────────────────────────────────────────────────
function Compatibility() {
  const models = [
    'Ocho Negro',
    'Orenji Hachi',
    'Huit Blanc',
    'Green Eight',
    'Blaue Acht',
    'Otto Rosso',
    'Làn Ba',
    'OTG Roz',
  ]

  return (
    <section className="bg-ivory py-20 lg:py-28" id="compatibility">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <div className="section-label mb-4 reveal">Fit Guide</div>
            <h2 className="display-heading text-obsidian text-3xl lg:text-5xl xl:text-6xl reveal reveal-delay-1">
              Compatible With
              <br />
              Royal Pop Models
            </h2>
            <p className="font-body text-stone text-sm font-light mt-6 max-w-xs leading-relaxed reveal reveal-delay-2">
              STRP LAB accessories are precision-fitted for the following Royal Pop configuration models.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-px bg-stone/15 reveal reveal-delay-2">
              {models.map((model, i) => (
                <div
                  key={model}
                  className="bg-ivory px-5 py-4 flex items-center gap-3 group hover:bg-obsidian transition-colors duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                  <span className="font-mono text-[11px] tracking-ultra uppercase text-obsidian group-hover:text-ivory transition-colors duration-300">
                    {model}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] tracking-ultra uppercase text-stone mt-4">
              * Models listed above. Additional fitments subject to announcement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Brand Story ──────────────────────────────────────────────────────────────
function BrandStory() {
  return (
    <section className="bg-obsidian py-20 lg:py-28 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 reveal">
            <div className="relative aspect-[4/5]">
              <img
                src="/images/story-macro.jpg"
                alt="STRP LAB craftsmanship"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.classList.add('img-placeholder')
                  e.target.style.display = 'none'
                }}
              />
              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-champagne/40" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l border-t border-stone/20" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="section-label text-stone mb-6 reveal">Our Philosophy</div>
            <h2 className="display-heading text-ivory text-4xl lg:text-5xl xl:text-7xl mb-8 reveal reveal-delay-1">
              Built Beyond
              <br />
              <em className="text-champagne not-italic">The Strap.</em>
            </h2>
            <div className="space-y-5 reveal reveal-delay-2">
              <p className="font-body text-stone text-sm lg:text-base font-light leading-relaxed">
                STRP LAB creates refined accessories for collectors who want more from their Royal Pop. Each piece is designed to improve comfort, protection, durability, and presence while preserving the playful spirit of the original watch.
              </p>
              <div className="w-8 h-px bg-champagne" />
              <p className="font-display text-ivory text-xl lg:text-2xl font-light italic">
                "This is not a replacement. It is a transformation."
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-10 mt-10 pt-10 border-t border-stone/15 reveal reveal-delay-3">
              {[
                { val: 'RM399+', label: 'Starting Price' },
                { val: '3', label: 'System Types' },
                { val: 'MYS', label: 'Designed In' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-light text-2xl text-ivory">{s.val}</div>
                  <div className="font-mono text-[9px] tracking-mega uppercase text-stone mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)
  const items = [
    {
      q: 'Does it include the watch?',
      a: 'No. STRP LAB products are conversion accessories only. The watch is not included.',
    },
    {
      q: 'Will it damage the watch?',
      a: 'Our products are designed for precise fitment. Installation should be done carefully or by someone experienced with watch accessories.',
    },
    {
      q: 'Does it fit all Royal Pop models?',
      a: 'STRP LAB accessories are designed for the Royal Pop style models listed in our compatibility guide.',
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes, we support worldwide shipping. Free shipping on orders over $150.',
    },
    {
      q: 'What materials are used?',
      a: 'Depending on the model, STRP LAB products use bioceramic-style cases, soft-touch rubber straps, and metallic bracelet finishes.',
    },
  ]

  return (
    <section className="bg-ivory py-20 lg:py-28" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          <div>
            <div className="section-label mb-4 reveal">Support</div>
            <h2 className="display-heading text-obsidian text-3xl lg:text-4xl xl:text-5xl reveal reveal-delay-1">
              Common
              <br />
              Questions.
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-ultra uppercase text-champagne mt-6 hover:gap-3 transition-all reveal reveal-delay-2"
            >
              View All FAQ
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="lg:col-span-2 space-y-px">
            {items.map((item, i) => (
              <div
                key={i}
                className={`border-b border-stone/20 reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <button
                  className="w-full flex items-center justify-between py-5 lg:py-6 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-body text-sm lg:text-base text-obsidian font-light pr-4 group-hover:text-graphite">
                    {item.q}
                  </span>
                  <span
                    className={`text-champagne flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="pb-5 pr-8">
                    <p className="font-body text-stone text-sm font-light leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const columns = [
    {
      heading: 'Shop',
      links: ['Bioceramic + Rubber', 'Metallic Bracelet', 'Special Edition'],
    },
    {
      heading: 'Support',
      links: ['Fit Guide', 'Shipping', 'Returns', 'FAQ', 'Contact'],
    },
    {
      heading: 'Company',
      links: ['Our Story', 'Journal', 'Instagram'],
    },
    {
      heading: 'Legal',
      links: ['Privacy Policy', 'Terms of Service'],
    },
  ]

  return (
    <footer className="bg-obsidian">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="font-mono text-sm tracking-mega text-ivory mb-4">STRP LAB</div>
            <p className="font-body text-stone text-sm font-light leading-relaxed max-w-[220px]">
              Premium conversion accessories for Royal Pop collectors.
            </p>
            <div className="flex gap-4 mt-8">
              {['IG', 'TK', 'TW'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-mono text-[10px] tracking-ultra text-stone hover:text-champagne transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <div className="font-mono text-[10px] tracking-mega uppercase text-stone mb-5">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-stone/70 hover:text-ivory transition-colors duration-200 font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-stone/15 max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col lg:flex-row items-center justify-between gap-3">
        <div className="font-mono text-[10px] tracking-ultra text-stone uppercase">
          © {new Date().getFullYear()} STRP LAB. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
          <span className="font-mono text-[10px] tracking-ultra text-stone uppercase">
            Collector-Grade Accessories
          </span>
        </div>
      </div>
    </footer>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  useReveal()

  const bioceramicProducts = [
    {
      name: 'Core Bioceramic | Obsidian',
      descriptor: 'Black bioceramic case with matching rubber strap.',
      price: 'RM399',
      image: '/images/bioceramic-black.jpg',
      color: '#111111',
    },
    {
      name: 'Core Bioceramic | Arctic',
      descriptor: 'White bioceramic case with clean rubber strap profile.',
      price: 'RM399',
      image: '/images/bioceramic-white.jpg',
      color: '#F7F6F2',
    },
    {
      name: 'Core Bioceramic | Orange',
      descriptor: 'Bold orange rubber configuration for statement wear.',
      price: 'RM399',
      image: '/images/bioceramic-orange.jpg',
      color: '#E85D04',
    },
    {
      name: 'Core Bioceramic | Navy',
      descriptor: 'Deep blue rubber strap with refined case profile.',
      price: 'RM399',
      image: '/images/bioceramic-blue.jpg',
      color: '#1B2A4A',
    },
    {
      name: 'Core Bioceramic | Crimson',
      descriptor: 'Red rubber strap system with collector presence.',
      price: 'RM399',
      image: '/images/bioceramic-red.jpg',
      color: '#C1121F',
    },
  ]

  const metallicProducts = [
    {
      name: 'Vector Metal | Silver',
      descriptor: 'Brushed silver metallic bracelet conversion.',
      price: 'RM499',
      image: '/images/metallic-silver.jpg',
      color: '#C0C0C0',
    },
    {
      name: 'Vector Metal | Graphite',
      descriptor: 'Dark graphite metallic bracelet conversion.',
      price: 'RM499',
      image: '/images/metallic-black.jpg',
      color: '#2B2B2B',
    },
    {
      name: 'Vector Metal | Champagne',
      descriptor: 'Warm champagne metallic bracelet finish.',
      price: 'RM499',
      image: '/images/metallic-gold.jpg',
      color: '#C9A96E',
    },
    {
      name: 'Vector Metal | Rose',
      descriptor: 'Rose-tone metallic bracelet with soft luxury finish.',
      price: 'RM499',
      image: '/images/metallic-rose.jpg',
      color: '#B76E79',
    },
  ]

  const specialProducts = [
    {
      name: 'Lab Edition | Phantom',
      descriptor: 'Dark limited edition conversion with stealth profile.',
      price: 'RM599',
      image: '/images/special-edition-phantom.jpg',
      color: '#1A1A1A',
    },
    {
      name: 'Lab Edition | Ice',
      descriptor: 'Cool-toned limited configuration with clean contrast.',
      price: 'RM599',
      image: '/images/special-edition-ice.jpg',
      color: '#D4EBF8',
    },
    {
      name: 'Lab Edition | Ember',
      descriptor: 'Warm limited edition colorway with bold character.',
      price: 'RM599',
      image: '/images/special-edition-ember.jpg',
      color: '#C44B17',
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <CollectionIntro />

      <ProductSection
        id="bioceramic"
        label="System 01"
        title="Bioceramic Case + Rubber Strap"
        subtitle="Lightweight structure. Soft-touch comfort. Built for daily wear."
        products={bioceramicProducts}
      />

      <ProductSection
        id="metallic"
        label="System 02"
        title="Metallic Bracelet"
        subtitle="Integrated weight. Brushed finish. Elevated wrist presence."
        products={metallicProducts}
        bg="bg-stone/5"
      />

      <ProductSection
        id="special"
        label="System 03 — Limited"
        title="Special Edition"
        subtitle="Limited collector configurations from the STRP LAB studio."
        products={specialProducts}
      />

      <BeforeAfter />
      <Engineering />
      <Compatibility />
      <BrandStory />
      <FAQ />
      <Footer />
    </div>
  )
}
