import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { journeyItems } from '../../data/journey'
import JourneyItem from '../journey/JourneyItem'
import AmbientBackground from '../ui/AmbientBackground'
import { Compass, Sparkles } from 'lucide-react'

/**
 * Development Journey Section (Phase 10)
 * 
 * An editorial progression map illustrating the developer's learning path:
 * Foundations -> Interface Building -> Systems & Interaction -> Current Direction.
 * Reflects genuine learning milestones and technical intent without fabricated credentials.
 */
export default function DevelopmentJourney() {
  const containerRef = useRef(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    // Respect accessibility reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true

          const ctx = gsap.context(() => {
            const tl = gsap.timeline({
              defaults: { ease: 'power3.out', duration: 0.75 },
            })

            tl.fromTo(
              '.journey-eyebrow',
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5 }
            )
              .fromTo(
                '.journey-heading',
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.3'
              )
              .fromTo(
                '.journey-description',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.4'
              )
              .fromTo(
                '.journey-meta-bar',
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                '-=0.3'
              )
              .fromTo(
                '.journey-item',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.14, duration: 0.7 },
                '-=0.3'
              )
          }, containerRef)

          return () => ctx.revert()
        }
      },
      { threshold: 0.12 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas overflow-hidden"
      aria-labelledby="journey-heading"
    >
      {/* Restrained Atmospheric Ambient Canvas */}
      <AmbientBackground
        accent="violet"
        secondaryAccent="mint"
        watermarkText="EVOLVE"
        watermarkPosition="right"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Editorial Section Header */}
        <header className="flex flex-col gap-6 max-w-3xl">
          {/* Eyebrow */}
          <div className="journey-eyebrow inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              10 // DEVELOPMENT JOURNEY
            </span>
          </div>

          {/* Headline */}
          <h2
            id="journey-heading"
            className="journey-heading font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            STILL BUILDING.{' '}
            <span className="text-accent-violet block sm:inline">
              STILL LEARNING.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="journey-description type-body text-base sm:text-lg text-ink-secondary leading-relaxed">
            Development is an ongoing progression of exploring interfaces, understanding underlying systems,
            refining interaction, and moving from basic implementation toward deliberate engineering.
          </p>
        </header>

        {/* Technical Roadmap Matrix Header */}
        <div className="journey-meta-bar flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-border-subtle text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-accent-violet" />
            <span className="uppercase tracking-wider font-semibold text-ink">
              PROGRESSION MAP // 4 MILESTONES
            </span>
          </div>
          <span className="uppercase tracking-wider">
            FROM SYNTAX TO SYSTEMS THINKING
          </span>
        </div>

        {/* The Progression Timeline Rows */}
        <div className="flex flex-col">
          {journeyItems.map((item, index) => (
            <JourneyItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === journeyItems.length - 1}
            />
          ))}
        </div>

        {/* Editorial Footnote / Engineering Sign-off */}
        <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
            <span className="font-semibold text-ink uppercase tracking-wider">
              CONTINUOUS ITERATION // CURIOSITY DRIVEN
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-warm-yellow" />
            <span>ACCESSIBLE &bull; ROBUST &bull; PURPOSEFUL</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
