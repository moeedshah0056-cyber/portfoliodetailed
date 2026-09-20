import { useRef, useEffect } from 'react'
import { ArrowUpRight, MessageSquare } from 'lucide-react'
import gsap from 'gsap'
import HeroVisual from './HeroVisual'
import ScrollIndicator from './ScrollIndicator'
import AmbientBackground from '../ui/AmbientBackground'
import MagneticButton from '../ui/MagneticButton'
import FloatingShape from '../ui/FloatingShape'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      // Respect accessibility preference: skip entry animations
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 },
      })

      // 1. Navigation slide & fade in (queried globally if present)
      const navEl = document.getElementById('navbar')
      if (navEl) {
        tl.fromTo(
          navEl,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
      }

      // 2. Eyebrow reveal
      tl.fromTo(
        '.hero-eyebrow',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        navEl ? '-=0.2' : 0
      )

      // 3. Headline lines / staggered reveal
      tl.fromTo(
        '.hero-title-line',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.85 },
        '-=0.3'
      )

      // 4. Paragraph fade-up
      tl.fromTo(
        '.hero-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        '-=0.4'
      )

      // 5. CTAs reveal
      tl.fromTo(
        '.hero-cta-btn',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.55 },
        '-=0.3'
      )

      // 6. Visual specimen card & floating badges reveal
      tl.fromTo(
        '.hero-specimen-card',
        { y: 30, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85 },
        '-=0.6'
      )

      const floatingBadges = containerRef.current?.querySelectorAll('.hero-floating-badge-1, .hero-floating-badge-2')
      if (floatingBadges && floatingBadges.length > 0) {
        tl.fromTo(
          floatingBadges,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.6 },
          '-=0.4'
        )
      }

      // 7. Scroll indicator fade in
      tl.fromTo(
        '.hero-scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-[94vh] pt-28 pb-16 lg:pt-32 lg:pb-20 flex flex-col justify-between overflow-hidden"
      aria-label="Introduction & Hero"
    >
      {/* Self-Generated Atmospheric Ambient Background */}
      <AmbientBackground
        accent="violet"
        secondaryAccent="coral"
        watermarkText="01"
        watermarkPosition="right"
        grid={true}
        crosshairs={true}
      />

      {/* Main Two-Column Hero Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto relative z-10">
        {/* Left Column: Editorial Headline, Eyebrow & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
          {/* Eyebrow Pill */}
          <div className="hero-eyebrow inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              CREATIVE DEVELOPER · FRONTEND ARCHITECT
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="hero-title flex flex-col font-display font-extrabold tracking-[-0.04em] text-ink leading-[0.92] text-[2.75rem] sm:text-[3.75rem] md:text-[4.75rem] xl:text-[5.75rem] 2xl:text-[6.5rem]">
            <span className="hero-title-line block">
              I BUILD
            </span>
            <span className="hero-title-line block text-accent-violet transition-colors">
              DIGITAL EXPERIENCES
            </span>
            <span className="hero-title-line block">
              THAT PEOPLE REMEMBER.
            </span>
          </h1>

          {/* Concise Thoughtful Paragraph */}
          <p className="hero-desc type-body text-base sm:text-lg max-w-xl text-ink-secondary leading-relaxed">
            I design and build thoughtful digital experiences where clean interfaces,
            deliberate interaction, and robust modern frontend architecture work seamlessly together.
          </p>

          {/* Hero CTAs with Magnetic Pull */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton strength={0.25} maxOffset={6}>
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, 'work')}
                className="hero-cta-btn group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink text-canvas font-medium text-sm tracking-wide transition-all duration-200 hover:bg-ink/90 hover:gap-2.5 active:scale-[0.99] shadow-xs"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25} maxOffset={6}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="hero-cta-btn group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-canvas-card border border-border-subtle text-ink font-medium text-sm tracking-wide transition-all duration-200 hover:border-ink/40 hover:bg-canvas-subtle active:scale-[0.99] shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-ink-muted group-hover:text-ink transition-colors" />
                <span>Let&apos;s Talk</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: Hero Visual Specimen (5 cols) */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative">
          {/* Subtle Decorative Floating Shapes */}
          <FloatingShape type="cross" size={14} accent="violet" className="absolute -top-6 left-4 hidden sm:inline-flex" />
          <FloatingShape type="ring" size={18} accent="coral" className="absolute -bottom-8 right-12 hidden sm:inline-flex" />

          <HeroVisual />
        </div>
      </div>

      {/* Bottom Row: Scroll Indicator & Coordinate Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex items-center justify-between">
        <ScrollIndicator />
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-ink-muted">
          <span>PORTFOLIO // 2026 EDITION</span>
        </div>
      </div>
    </section>
  )
}
