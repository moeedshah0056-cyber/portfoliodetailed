import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import JourneyMarker from './JourneyMarker'

/**
 * JourneyItem Component
 * 
 * Editorial timeline row featuring:
 * - Left technical node marker and coordinate metadata
 * - Central narrative detailing learning progression, focus areas, and technologies
 * - Right-side pure CSS/HTML technical specimen visualizing the architectural concept
 */
export default function JourneyItem({ item, index, isLast }) {
  const titleAccentHover = {
    violet: 'group-hover:text-accent-violet',
    coral: 'group-hover:text-accent-coral',
    mint: 'group-hover:text-accent-mint',
    'warm-yellow': 'group-hover:text-accent-warm-yellow',
  }

  const badgeStyles = {
    violet: 'bg-accent-violet/[0.08] text-accent-violet border-accent-violet/20',
    coral: 'bg-accent-coral/[0.08] text-accent-coral border-accent-coral/20',
    mint: 'bg-accent-mint/[0.08] text-accent-mint border-accent-mint/20',
    'warm-yellow': 'bg-accent-warm-yellow/[0.08] text-accent-warm-yellow border-accent-warm-yellow/20',
  }

  const focusTagStyles = {
    violet: 'group-hover:border-accent-violet/30 group-hover:bg-accent-violet/[0.04] group-hover:text-ink',
    coral: 'group-hover:border-accent-coral/30 group-hover:bg-accent-coral/[0.04] group-hover:text-ink',
    mint: 'group-hover:border-accent-mint/30 group-hover:bg-accent-mint/[0.04] group-hover:text-ink',
    'warm-yellow': 'group-hover:border-accent-warm-yellow/30 group-hover:bg-accent-warm-yellow/[0.04] group-hover:text-ink',
  }

  const arrowColors = {
    violet: 'text-accent-violet',
    coral: 'text-accent-coral',
    mint: 'text-accent-mint',
    'warm-yellow': 'text-accent-warm-yellow',
  }

  const activeTitleClass = titleAccentHover[item.accent] || titleAccentHover.violet
  const activeBadgeClass = badgeStyles[item.accent] || badgeStyles.violet
  const activeFocusTagClass = focusTagStyles[item.accent] || focusTagStyles.violet
  const activeArrowColor = arrowColors[item.accent] || arrowColors.violet

  return (
    <article
      className="journey-item group relative"
      aria-labelledby={`journey-title-${item.id}`}
    >
      {/* =========================================================================
          DESKTOP & TABLET LAYOUT (md+): 12-Column Editorial Progression Map
          ========================================================================= */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-8 lg:gap-12 items-start py-8 first:pt-0 last:pb-0">
        {/* Column 1: Journey Node & Vertical Spine (2 cols) */}
        <div className="md:col-span-2 flex justify-center h-full">
          <JourneyMarker
            number={item.number}
            phase={item.phase}
            nodeTag={item.nodeTag}
            accent={item.accent}
            isLast={isLast}
          />
        </div>

        {/* Column 2: Editorial Narrative & Focus Matrix (6 cols) */}
        <div className="md:col-span-6 flex flex-col gap-5 pt-1 transition-transform duration-300 ease-out group-hover:translate-x-1">
          {/* Phase Badge & Numerical Sequence */}
          <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
            <span className="font-semibold text-ink transition-colors">
              PHASE // {item.number}
            </span>
            <span className="text-border-strong">&bull;</span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider border shadow-2xs transition-colors ${activeBadgeClass}`}
            >
              {item.phase}
            </span>
          </div>

          {/* Title & Interactive Accent Shift */}
          <div className="flex flex-col gap-2">
            <h3
              id={`journey-title-${item.id}`}
              className={`font-display font-bold text-2xl sm:text-3xl text-ink leading-tight tracking-tight transition-colors duration-300 ${activeTitleClass}`}
            >
              {item.title}
            </h3>

            {/* Factual Editorial Description */}
            <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Key Architectural Focus Areas */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted font-medium">
              Core Progression Focus
            </span>
            <div className="flex flex-wrap gap-2" aria-label="Progression focus areas">
              {item.focus.map((area) => (
                <span
                  key={area}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-canvas-card border border-border-subtle text-xs font-mono text-ink-secondary transition-all duration-200 shadow-2xs ${activeFocusTagClass}`}
                >
                  <span className="w-1 h-1 rounded-full bg-border-strong group-hover:scale-125 transition-transform" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Applied Technologies */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted font-medium">
              Stack:
            </span>
            <div className="flex flex-wrap items-center gap-2" aria-label="Technologies">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono text-ink bg-canvas-subtle/80 border border-border-subtle"
                >
                  <CheckCircle2 className="w-3 h-3 text-ink-muted group-hover:text-ink transition-colors" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: CSS Technical Architectural Specimen (4 cols) */}
        <div className="md:col-span-4 flex flex-col justify-start">
          <div className="relative rounded-xl bg-canvas-card border border-border-subtle p-5 shadow-xs transition-all duration-300 group-hover:border-border-strong group-hover:shadow-subtle overflow-hidden">
            {/* Specimen Header & Micro-Interaction Indicator */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-subtle/80 text-[10px] font-mono text-ink-muted">
              <span className="font-semibold tracking-wider uppercase text-ink-secondary">
                {item.specimen.badge}
              </span>
              <ArrowUpRight
                className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${activeArrowColor}`}
                aria-hidden="true"
              />
            </div>

            {/* Pure CSS Diagram Nodes */}
            <div className="flex flex-col gap-2.5" aria-hidden="true">
              {item.specimen.steps.map((step, idx) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-canvas-subtle/60 border border-border-subtle/70 transition-colors duration-200 group-hover:border-border-strong/60 group-hover:bg-canvas-subtle">
                    <span className="font-mono text-xs font-semibold text-ink tracking-tight">
                      {step.label}
                    </span>
                    <span className="font-mono text-[10px] text-ink-muted">
                      {step.sub}
                    </span>
                  </div>

                  {/* Flow Connector Arrow or Symbol */}
                  {idx < item.specimen.steps.length - 1 && (
                    <span className="my-1 text-xs font-mono text-ink-muted/80 font-bold leading-none select-none">
                      {item.specimen.connector}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Specimen Technical Baseline Tag */}
            <div className="mt-4 pt-3 border-t border-border-subtle/60 flex items-center justify-between text-[9px] font-mono text-ink-muted uppercase tracking-widest">
              <span>SPEC // 0{index + 1}</span>
              <span>RENDER: CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE LAYOUT (< md): Seamless Single-Column Progression Spine
          ========================================================================= */}
      <div className="md:hidden relative pl-8 pb-12 last:pb-4 border-l-2 border-border-subtle ml-3">
        {/* Mobile Circular Node on Left Timeline Spine */}
        <div
          className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-canvas-card border-2 border-border-strong flex items-center justify-center shadow-xs"
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-accent-violet" />
        </div>

        {/* Mobile Content Block */}
        <div className="flex flex-col gap-4">
          {/* Phase Badge & Number */}
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
            <span className="font-semibold text-ink">
              {item.number}
            </span>
            <span className="text-border-strong">&bull;</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${activeBadgeClass}`}>
              {item.phase}
            </span>
            <span className="text-[9px] font-mono text-ink-muted ml-auto">
              {item.nodeTag}
            </span>
          </div>

          {/* Title */}
          <h3
            id={`journey-title-mobile-${item.id}`}
            className="font-display font-bold text-xl sm:text-2xl text-ink leading-snug tracking-tight"
          >
            {item.title}
          </h3>

          {/* Description */}
          <p className="type-body text-sm text-ink-secondary leading-relaxed">
            {item.description}
          </p>

          {/* Focus Areas */}
          <div className="flex flex-col gap-1.5 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted font-medium">
              Focus Areas
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.focus.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded bg-canvas-card border border-border-subtle text-[11px] font-mono text-ink-secondary"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Applied Technologies */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted font-medium">
              Stack:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-ink bg-canvas-subtle border border-border-subtle font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Technical Specimen Box */}
          <div className="mt-2 rounded-lg bg-canvas-card border border-border-subtle p-3.5 shadow-2xs">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-border-subtle text-[9px] font-mono text-ink-muted uppercase">
              <span className="font-semibold text-ink-secondary">{item.specimen.badge}</span>
              <span>SCHEMA</span>
            </div>

            <div className="flex flex-col gap-1.5" aria-hidden="true">
              {item.specimen.steps.map((step, idx) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="w-full flex items-center justify-between px-2.5 py-1.5 rounded bg-canvas-subtle/70 border border-border-subtle/50 text-[11px] font-mono">
                    <span className="font-semibold text-ink">{step.label}</span>
                    <span className="text-[9px] text-ink-muted">{step.sub}</span>
                  </div>
                  {idx < item.specimen.steps.length - 1 && (
                    <span className="text-[10px] font-mono text-ink-muted py-0.5">
                      {item.specimen.connector}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
