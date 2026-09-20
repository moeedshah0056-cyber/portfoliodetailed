import { ArrowUpRight, Check, CornerDownRight } from 'lucide-react'

/**
 * ProcessStep Component
 * 
 * Renders an individual engineering process stage:
 * - Technical metadata & phase badge
 * - Narrative title & description
 * - 3 concrete implementation actions
 * - 2 concrete deliverables / outputs
 * - Pure CSS/HTML technical flow visualization diagram
 * - Responsive support for desktop/tablet grid and mobile vertical spine
 */
export default function ProcessStep({ step, isSelected = false }) {
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

  const arrowColors = {
    violet: 'text-accent-violet',
    coral: 'text-accent-coral',
    mint: 'text-accent-mint',
    'warm-yellow': 'text-accent-warm-yellow',
  }

  const dotStyles = {
    violet: 'bg-accent-violet',
    coral: 'bg-accent-coral',
    mint: 'bg-accent-mint',
    'warm-yellow': 'bg-accent-warm-yellow',
  }

  const activeTitleClass = titleAccentHover[step.accent] || titleAccentHover.violet
  const activeBadgeClass = badgeStyles[step.accent] || badgeStyles.violet
  const activeArrowColor = arrowColors[step.accent] || arrowColors.violet
  const activeDot = dotStyles[step.accent] || dotStyles.violet

  return (
    <article
      className={`process-step-item group relative flex flex-col justify-between rounded-2xl bg-canvas-card border transition-all duration-300 p-6 sm:p-7 shadow-xs hover:shadow-subtle hover:-translate-y-1 ${
        isSelected ? 'border-border-strong ring-1 ring-border-strong/50' : 'border-border-subtle hover:border-border-strong'
      }`}
      aria-labelledby={`process-title-${step.id}`}
    >
      {/* Top Header: Phase Badge, Technical Tag & Diagonal Indicator */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-border-subtle/80 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-ink">
              {step.number} //
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider border shadow-2xs transition-colors ${activeBadgeClass}`}
            >
              {step.phase}
            </span>
          </div>

          <ArrowUpRight
            className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${activeArrowColor}`}
            aria-hidden="true"
          />
        </div>

        {/* Phase Narrative */}
        <div className="flex flex-col gap-2">
          <h3
            id={`process-title-${step.id}`}
            className={`font-display font-bold text-xl sm:text-2xl text-ink leading-tight tracking-tight transition-colors duration-300 ${activeTitleClass}`}
          >
            {step.title}
          </h3>

          <p className="type-body text-sm text-ink-secondary leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Implementation Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted font-medium">
            Implementation Actions
          </span>
          <ul className="flex flex-col gap-1.5 list-none p-0 m-0" aria-label="Actions">
            {step.actions.map((action) => (
              <li
                key={action}
                className="flex items-start gap-2 text-xs font-mono text-ink-secondary group-hover:text-ink transition-colors"
              >
                <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${activeArrowColor}`} aria-hidden="true" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Deliverables / Outputs */}
        <div className="flex flex-col gap-2 pt-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted font-medium">
            Phase Outputs
          </span>
          <div className="flex flex-wrap gap-1.5" aria-label="Outputs">
            {step.outputs.map((output) => (
              <span
                key={output}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-canvas-subtle/80 border border-border-subtle text-[11px] font-mono text-ink transition-colors group-hover:border-border-strong/60"
              >
                <CornerDownRight className="w-3 h-3 text-ink-muted" aria-hidden="true" />
                {output}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Technical Specimen Visualization (Pure CSS/HTML) */}
      <div className="mt-8 pt-5 border-t border-border-subtle/80 flex flex-col gap-3">
        <div className="flex items-center justify-between text-[9px] font-mono text-ink-muted uppercase tracking-wider">
          <span>{step.specimen.badge}</span>
          <span className="flex items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full ${activeDot}`} aria-hidden="true" />
            FLOW
          </span>
        </div>

        {/* Pure CSS Diagram Nodes */}
        <div
          className="rounded-xl bg-canvas-subtle/60 border border-border-subtle/80 p-3 flex flex-col gap-1.5 transition-colors duration-200 group-hover:border-border-strong/60 group-hover:bg-canvas-subtle"
          aria-hidden="true"
        >
          {step.specimen.steps.map((item, idx) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="w-full flex items-center justify-between px-2.5 py-1.5 rounded bg-canvas-card border border-border-subtle/70 text-[10px] font-mono">
                <span className="font-semibold text-ink tracking-tight">
                  {item.label}
                </span>
                <span className="text-[9px] text-ink-muted">
                  {item.sub}
                </span>
              </div>

              {/* Step Connector */}
              {idx < step.specimen.steps.length - 1 && (
                <span className="text-[9px] font-mono text-ink-muted/80 font-bold py-0.5 leading-none select-none">
                  {step.specimen.connector}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
