import { Terminal, Compass, Layers, CheckCircle2 } from 'lucide-react'

export default function AboutSpecimen() {
  return (
    <div
      className="about-specimen card-sweep relative w-full rounded-xl bg-gradient-to-b from-canvas-card via-canvas-card to-canvas-subtle/30 border border-border-subtle p-6 sm:p-8 shadow-xs select-none transition-all duration-300 hover:border-border-strong hover:shadow-sm"
      aria-label="Engineering craft and architectural philosophy artifact"
    >
      {/* Corner Blueprint Crosshairs */}
      <span className="absolute -top-1.5 -left-1.5 text-xs font-mono text-ink-muted/50">+</span>
      <span className="absolute -top-1.5 -right-1.5 text-xs font-mono text-ink-muted/50">+</span>
      <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono text-ink-muted/50">+</span>
      <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono text-ink-muted/50">+</span>

      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-border-subtle text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-ink">
            MANIFESTO // SPECIMEN
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-ink-muted px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle">
          <Terminal className="w-3 h-3 text-accent-violet" />
          <span>STANDARDS V1.0</span>
        </div>
      </div>

      {/* Specimen Code Content */}
      <div className="py-6 flex flex-col gap-5">
        <div className="rounded-lg bg-canvas-subtle p-4 border border-border-subtle/80 font-mono text-xs sm:text-[13px] leading-relaxed text-ink-secondary">
          <div className="flex items-center justify-between text-[10px] text-ink-muted mb-2 pb-1.5 border-b border-border-subtle/50">
            <span>craft.manifesto.ts</span>
            <span className="text-accent-violet">discipline: creative-dev</span>
          </div>
          <p className="text-ink">
            <span className="text-accent-violet">const</span> engineeringPhilosophy = &#123;
          </p>
          <p className="pl-4 text-ink-secondary">
            clarity: <span className="text-accent-mint">&apos;uncompromised&apos;</span>,
          </p>
          <p className="pl-4 text-ink-secondary">
            motion: <span className="text-accent-warm-yellow">&apos;purposeful &amp; GPU-accelerated&apos;</span>,
          </p>
          <p className="pl-4 text-ink-secondary">
            architecture: <span className="text-accent-coral">&apos;system-driven &amp; accessible&apos;</span>,
          </p>
          <p className="pl-4 text-ink-secondary">
            aesthetics: <span className="text-accent-violet">&apos;editorial restraint&apos;</span>
          </p>
          <p className="text-ink flex items-center">
            <span>&#125;;</span>
            <span className="inline-block w-1.5 h-3.5 bg-accent-violet ml-1.5 animate-cursor-blink" aria-hidden="true" />
          </p>
        </div>

        {/* Matrix of Core Disciplines */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-[11px] font-mono">
          <div className="p-3 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center gap-1 transition-all duration-200 hover:border-accent-violet/40 hover:bg-canvas-card shadow-xs">
            <span className="text-ink-muted text-[10px]">FOUNDATION</span>
            <span className="font-semibold text-ink">STRUCTURE</span>
          </div>
          <div className="p-3 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center gap-1 transition-all duration-200 hover:border-accent-mint/40 hover:bg-canvas-card shadow-xs">
            <span className="text-ink-muted text-[10px]">TYPOGRAPHY</span>
            <span className="font-semibold text-ink">CADENCE</span>
          </div>
          <div className="p-3 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center gap-1 transition-all duration-200 hover:border-accent-coral/40 hover:bg-canvas-card shadow-xs">
            <span className="text-ink-muted text-[10px]">FEEL</span>
            <span className="font-semibold text-ink">MICRO-MOTION</span>
          </div>
          <div className="p-3 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center gap-1 transition-all duration-200 hover:border-accent-warm-yellow/40 hover:bg-canvas-card shadow-xs">
            <span className="text-ink-muted text-[10px]">STANDARDS</span>
            <span className="font-semibold text-ink">A11Y FIRST</span>
          </div>
        </div>
      </div>

      {/* Specimen Footer Metadata */}
      <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-ink-muted">
        <div className="flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-accent-coral" />
          <span>CANVAS: #F8F8F5 WARM OFF-WHITE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-accent-mint" />
          <span>TOKEN-DRIVEN SYSTEM</span>
        </div>
        <div className="flex items-center gap-1.5 text-ink font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent-violet" />
          <span>WCAG AAA CONTRAST READY</span>
        </div>
      </div>
    </div>
  )
}
