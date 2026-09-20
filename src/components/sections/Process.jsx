import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { processSteps } from '../../data/process'
import ProcessFlow from '../process/ProcessFlow'
import ProcessStep from '../process/ProcessStep'
import AmbientBackground from '../ui/AmbientBackground'
import { GitBranch, Sparkles } from 'lucide-react'

/**
 * Process Section (Phase 11)
 * 
 * Explains the engineering workflow from problem discovery to interface delivery:
 * Discover -> Structure -> Build -> Refine.
 * Grounded in technical decision-making, component architecture, and systematic refinement.
 */
export default function Process() {
  const [activeStage, setActiveStage] = useState(null)
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
              '.process-eyebrow',
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5 }
            )
              .fromTo(
                '.process-heading',
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.3'
              )
              .fromTo(
                '.process-description',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.4'
              )
              .fromTo(
                '.process-flow-track',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.65 },
                '-=0.3'
              )
              .fromTo(
                '.process-step-item',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.12, duration: 0.7 },
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
      id="process"
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Ambient Atmospheric Canvas */}
      <AmbientBackground
        accent="violet"
        secondaryAccent="mint"
        watermarkText="FLOW"
        watermarkPosition="left"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-14 md:gap-20 relative z-10">
        {/* Editorial Section Header */}
        <header className="flex flex-col gap-6 max-w-3xl">
          {/* Eyebrow */}
          <div className="process-eyebrow inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              11 // PROCESS
            </span>
          </div>

          {/* Headline */}
          <h2
            id="process-heading"
            className="process-heading font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            FROM IDEA<br />
            <span className="text-accent-violet">
              TO INTERFACE.
            </span>
          </h2>

          {/* Supporting Rationale */}
          <p className="process-description type-body text-base sm:text-lg text-ink-secondary leading-relaxed">
            Good frontend development is not simply writing code; it is a sequence of deliberate decisions
            that turns an idea into a clear, responsive, and usable interface.
          </p>
        </header>

        {/* Desktop Horizontal Workflow Progression Track */}
        <ProcessFlow
          steps={processSteps}
          activeIndex={activeStage}
          onSelect={(idx) => setActiveStage(activeStage === idx ? null : idx)}
        />

        {/* =========================================================================
            DESKTOP & TABLET LAYOUT (md+): 4-Stage Workflow Matrix
            ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {processSteps.map((step, idx) => (
            <ProcessStep
              key={step.id}
              step={step}
              isSelected={activeStage === idx}
            />
          ))}
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (< md): Vertical Continuous Timeline Spine
            ========================================================================= */}
        <div className="md:hidden flex flex-col">
          {processSteps.map((step, idx) => {
            const accentDots = {
              violet: 'bg-accent-violet',
              coral: 'bg-accent-coral',
              mint: 'bg-accent-mint',
              'warm-yellow': 'bg-accent-warm-yellow',
            }
            const dotClass = accentDots[step.accent] || accentDots.violet

            return (
              <div
                key={step.id}
                className="relative pl-7 sm:pl-8 pb-10 last:pb-2 border-l-2 border-border-subtle ml-2 sm:ml-3"
              >
                {/* Node Anchor on Timeline Spine */}
                <div
                  className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-canvas-card border-2 border-border-strong flex items-center justify-center shadow-xs"
                  aria-hidden="true"
                >
                  <span className={`w-2 h-2 rounded-full ${dotClass}`} />
                </div>

                <ProcessStep
                  step={step}
                  isSelected={activeStage === idx}
                />
              </div>
            )
          })}
        </div>

        {/* Editorial Footnote / Engineering Ethos */}
        <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5 text-accent-violet" />
            <span className="font-semibold text-ink uppercase tracking-wider">
              SYSTEMATIC ITERATION // DECISION-DRIVEN ARCHITECTURE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-warm-yellow" />
            <span>ACCESSIBLE &bull; ROBUST &bull; MAINTAINABLE</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
