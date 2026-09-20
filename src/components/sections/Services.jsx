import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { servicesData } from '../../data/services'
import ServiceRow from '../services/ServiceRow'
import ServiceSpecimen from '../services/ServiceSpecimen'
import AmbientBackground from '../ui/AmbientBackground'
import { Layers, Terminal, Sparkles } from 'lucide-react'

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id)
  const containerRef = useRef(null)
  const hasAnimatedRef = useRef(false)

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0]

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true

          const ctx = gsap.context(() => {
            const tl = gsap.timeline({
              defaults: { ease: 'power3.out', duration: 0.8 },
            })

            tl.fromTo(
              '.services-eyebrow',
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5 }
            )
              .fromTo(
                '.services-heading',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.3'
              )
              .fromTo(
                '.services-description',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.4'
              )
              .fromTo(
                '.service-row-item',
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.65 },
                '-=0.3'
              )
              .fromTo(
                '.services-workbench',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.5'
              )
          }, containerRef)

          return () => ctx.revert()
        }
      },
      { threshold: 0.15 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Ambient Atmospheric Canvas Background */}
      <AmbientBackground
        accent="violet"
        secondaryAccent="warm-yellow"
        watermarkText="BUILD"
        watermarkPosition="right"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Editorial Section Header */}
        <header className="flex flex-col gap-6 max-w-4xl">
          <div className="services-eyebrow inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              09 // SERVICES
            </span>
          </div>

          <h2
            id="services-heading"
            className="services-heading font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            I BUILD THE{' '}
            <span className="text-accent-violet transition-colors">
              PARTS THAT
            </span>{' '}
            MATTER.
          </h2>

          <p className="services-description type-body text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
            Bridging frontend engineering, interface design systems, and interaction craftsmanship
            to turn complex digital requirements into clear, responsive, and memorable user experiences.
          </p>
        </header>

        {/* 12-Column Editorial Offerings Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Vertical Editorial Service Rows (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle text-xs font-mono text-ink-muted">
              <span>OFFERINGS &amp; CAPABILITIES MATRIX</span>
              <span>4 ACTIVE DOMAINS</span>
            </div>

            <div className="divide-y divide-border-subtle border-b border-border-subtle">
              {servicesData.map((service) => (
                <div key={service.id} className="service-row-item">
                  <ServiceRow
                    service={service}
                    isActive={activeServiceId === service.id}
                    onSelect={(s) => setActiveServiceId(s.id)}
                    onHover={(s) => setActiveServiceId(s.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Interactive Specimen Workbench (5 cols, Desktop only) */}
          <div className="services-workbench hidden lg:block lg:col-span-5 w-full sticky top-28">
            <div className="flex items-center justify-between pb-4 text-xs font-mono text-ink-muted">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent-violet" />
                LIVE WORKBENCH
              </span>
              <span>HOVER / CLICK TO INSPECT</span>
            </div>

            <ServiceSpecimen service={activeService} isCompact={false} />
          </div>
        </div>

        {/* Editorial Section Footnote */}
        <footer className="pt-10 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-violet" />
            <span className="font-semibold text-ink uppercase tracking-wider">
              SMALL DETAILS. SOLID ARCHITECTURE. REAL EXPERIENCES.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-warm-yellow" />
            <span>ENGINEERED FOR MODERN BROWSERS // 60 FPS</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
