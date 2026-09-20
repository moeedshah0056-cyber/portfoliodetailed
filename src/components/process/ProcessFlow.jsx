import { ArrowRight } from 'lucide-react'

/**
 * ProcessFlow Component
 * 
 * Renders an editorial horizontal workflow track connecting the four stages
 * of the engineering process with precision node markers, connecting architectural lines,
 * and directional arrows.
 */
export default function ProcessFlow({ steps, activeIndex = null, onSelect = null }) {
  const accentBorderMap = {
    violet: 'border-accent-violet group-hover:border-accent-violet',
    coral: 'border-accent-coral group-hover:border-accent-coral',
    mint: 'border-accent-mint group-hover:border-accent-mint',
    'warm-yellow': 'border-accent-warm-yellow group-hover:border-accent-warm-yellow',
  }

  const accentDotMap = {
    violet: 'bg-accent-violet',
    coral: 'bg-accent-coral',
    mint: 'bg-accent-mint',
    'warm-yellow': 'bg-accent-warm-yellow',
  }

  const accentTextMap = {
    violet: 'text-accent-violet',
    coral: 'text-accent-coral',
    mint: 'text-accent-mint',
    'warm-yellow': 'text-accent-warm-yellow',
  }

  return (
    <div
      className="process-flow-track hidden lg:block w-full py-6 px-8 rounded-2xl bg-canvas-card border border-border-subtle shadow-xs"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between relative">
        {steps.map((step, idx) => {
          const isSelected = activeIndex === idx
          const isLast = idx === steps.length - 1
          const borderClass = accentBorderMap[step.accent] || accentBorderMap.violet
          const dotClass = accentDotMap[step.accent] || accentDotMap.violet
          const textClass = accentTextMap[step.accent] || accentTextMap.violet

          return (
            <div key={step.id} className="flex items-center flex-1 last:flex-none">
              {/* Stage Node Item */}
              <div
                onClick={() => onSelect && onSelect(idx)}
                className={`group flex items-center gap-3 cursor-pointer transition-all duration-200 select-none ${
                  isSelected ? 'opacity-100 scale-[1.02]' : 'opacity-80 hover:opacity-100'
                }`}
              >
                {/* Precision Circular Stage Node */}
                <div
                  className={`w-6 h-6 rounded-full bg-canvas border-2 flex items-center justify-center transition-all duration-300 ${borderClass} shadow-2xs`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-transform duration-300 ${dotClass} ${
                      isSelected ? 'scale-125' : 'group-hover:scale-125'
                    }`}
                  />
                </div>

                {/* Node Typography Metadata */}
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                    {step.number} // STAGE
                  </span>
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                      isSelected ? textClass : 'text-ink group-hover:' + textClass
                    }`}
                  >
                    {step.phase}
                  </span>
                </div>
              </div>

              {/* Connecting Horizontal Line with Directional Vector */}
              {!isLast && (
                <div className="flex items-center flex-1 mx-6 relative">
                  {/* Subtle baseline track */}
                  <div className="w-full h-px bg-border-subtle group-hover:bg-border-strong transition-colors" />

                  {/* Flow Directional Vector Arrow */}
                  <div className="absolute inset-x-0 flex justify-center">
                    <div className="px-1.5 bg-canvas-card">
                      <ArrowRight className="w-3.5 h-3.5 text-ink-muted/60" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
