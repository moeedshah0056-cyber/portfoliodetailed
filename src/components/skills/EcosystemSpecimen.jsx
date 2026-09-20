import { useState } from 'react'
import { Cpu, Activity, LayoutGrid, CheckCircle2 } from 'lucide-react'

export default function EcosystemSpecimen() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches
    return !prefersReduced && !isTouch
  })

  const handleMouseMove = (e) => {
    if (!canAnimate) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6
    setMousePos({ x, y })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="ecosystem-specimen card-sweep sticky top-28 w-full rounded-xl bg-gradient-to-b from-canvas-card via-canvas-card to-canvas-subtle/30 border border-border-subtle p-6 sm:p-8 shadow-xs select-none transition-all duration-300 hover:border-border-strong hover:shadow-sm will-change-transform"
      style={{
        transform: canAnimate && isHovered
          ? `perspective(800px) rotateX(${-mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
      }}
      aria-label="Interactive architecture relationship specimen"
    >
      {/* Corner Blueprint Crosshairs */}
      <span className="absolute -top-1.5 -left-1.5 text-xs font-mono text-ink-muted/50">+</span>
      <span className="absolute -top-1.5 -right-1.5 text-xs font-mono text-ink-muted/50">+</span>
      <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono text-ink-muted/50">+</span>
      <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono text-ink-muted/50">+</span>

      {/* Specimen Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border-subtle text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-ink">
            ECOSYSTEM // TOPOLOGY
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase text-ink-muted px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle">
          V1.0 ARCHITECTURE
        </span>
      </div>

      {/* Architectural Flow Representation */}
      <div className="py-6 flex flex-col gap-6">
        {/* Tier 1: Input Disciplines */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider">
            01 // INPUT DISCIPLINES
          </span>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center text-center gap-1.5 transition-all duration-200 hover:border-accent-violet/40 hover:bg-canvas-card shadow-2xs">
              <Cpu className="w-4 h-4 text-accent-violet" />
              <span className="text-xs font-mono font-bold text-ink">CODE</span>
              <span className="text-[10px] font-mono text-ink-muted">React 19</span>
            </div>

            <div className="p-3 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center text-center gap-1.5 transition-all duration-200 hover:border-accent-coral/40 hover:bg-canvas-card shadow-2xs">
              <Activity className="w-4 h-4 text-accent-coral" />
              <span className="text-xs font-mono font-bold text-ink">MOTION</span>
              <span className="text-[10px] font-mono text-ink-muted">GSAP Core</span>
            </div>

            <div className="p-3 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center text-center gap-1.5 transition-all duration-200 hover:border-accent-mint/40 hover:bg-canvas-card shadow-2xs">
              <LayoutGrid className="w-4 h-4 text-accent-mint" />
              <span className="text-xs font-mono font-bold text-ink">SYSTEM</span>
              <span className="text-[10px] font-mono text-ink-muted">Tokens v4</span>
            </div>
          </div>
        </div>

        {/* Tier 2: Convergence Connector Lines */}
        <div className="flex items-center justify-center gap-2 text-ink-muted">
          <div className="h-px flex-1 bg-border-subtle" />
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle">
            CONVERGENCE PIPELINE
          </span>
          <div className="h-px flex-1 bg-border-subtle" />
        </div>

        {/* Tier 3: Convergence Output Block */}
        <div className="p-4 rounded-lg bg-canvas-subtle border border-border-subtle flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
              ORCHESTRATED RESULT
            </span>
            <span className="text-[10px] font-mono text-accent-mint font-semibold">
              SYNCHRONIZED
            </span>
          </div>
          <p className="font-display font-bold text-sm sm:text-base text-ink">
            Deliberate Digital Experience
          </p>
          <p className="text-xs font-mono text-ink-secondary leading-relaxed">
            Accessible DOM hierarchies, 60 FPS transitions, and fluid editorial typography working in harmony.
          </p>
        </div>
      </div>

      {/* Specimen Footer Metrics */}
      <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-ink-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
          <span>FPS: 60 GPU-OPTIMIZED</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent-violet" />
          <span>WCAG: AAA READY</span>
        </div>
      </div>
    </div>
  )
}
