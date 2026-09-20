/**
 * JourneyMarker Component
 * 
 * Renders technical timeline node coordinates, precision circular node indicator,
 * and vertical architectural connecting spine.
 */

export default function JourneyMarker({
  number,
  phase,
  nodeTag,
  accent = 'violet',
  isLast = false,
}) {
  const accentStyles = {
    violet: {
      nodeBorder: 'border-accent-violet/40 group-hover:border-accent-violet',
      nodeGlow: 'group-hover:shadow-[0_0_12px_rgba(124,58,237,0.25)]',
      dot: 'bg-accent-violet',
      tag: 'text-accent-violet/90',
      activeLine: 'group-hover:bg-accent-violet/40',
      badgeBg: 'bg-accent-violet/[0.08] text-accent-violet border-accent-violet/20',
    },
    coral: {
      nodeBorder: 'border-accent-coral/40 group-hover:border-accent-coral',
      nodeGlow: 'group-hover:shadow-[0_0_12px_rgba(255,107,107,0.25)]',
      dot: 'bg-accent-coral',
      tag: 'text-accent-coral/90',
      activeLine: 'group-hover:bg-accent-coral/40',
      badgeBg: 'bg-accent-coral/[0.08] text-accent-coral border-accent-coral/20',
    },
    mint: {
      nodeBorder: 'border-accent-mint/40 group-hover:border-accent-mint',
      nodeGlow: 'group-hover:shadow-[0_0_12px_rgba(101,214,194,0.25)]',
      dot: 'bg-accent-mint',
      tag: 'text-accent-mint/90',
      activeLine: 'group-hover:bg-accent-mint/40',
      badgeBg: 'bg-accent-mint/[0.08] text-accent-mint border-accent-mint/20',
    },
    'warm-yellow': {
      nodeBorder: 'border-accent-warm-yellow/40 group-hover:border-accent-warm-yellow',
      nodeGlow: 'group-hover:shadow-[0_0_12px_rgba(244,201,93,0.25)]',
      dot: 'bg-accent-warm-yellow',
      tag: 'text-accent-warm-yellow/90',
      activeLine: 'group-hover:bg-accent-warm-yellow/40',
      badgeBg: 'bg-accent-warm-yellow/[0.08] text-accent-warm-yellow border-accent-warm-yellow/20',
    },
  }

  const currentAccent = accentStyles[accent] || accentStyles.violet

  return (
    <div className="relative flex flex-col items-center select-none" aria-hidden="true">
      {/* Node Top Anchor Line for Desktop continuity */}
      <div className="flex flex-col items-center">
        {/* Technical Node Identifier & Badge */}
        <div className="flex items-center gap-2 mb-2 font-mono text-[10px] tracking-wider uppercase text-ink-muted">
          <span className="font-semibold text-ink group-hover:text-accent-violet transition-colors">
            {number}
          </span>
          <span className="text-border-strong">&bull;</span>
          <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono border transition-colors ${currentAccent.badgeBg}`}>
            {phase}
          </span>
        </div>

        {/* Circular Coordinate Node */}
        <div
          className={`relative z-10 w-7 h-7 rounded-full bg-canvas-card border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${currentAccent.nodeBorder} ${currentAccent.nodeGlow} shadow-xs`}
        >
          {/* Inner Accent Core Dot */}
          <span
            className={`w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125 ${currentAccent.dot}`}
          />
        </div>

        {/* Technical Coordinate Sub-label */}
        <div className="mt-2 text-center">
          <span className={`font-mono text-[9px] tracking-widest uppercase block transition-colors ${currentAccent.tag}`}>
            {nodeTag}
          </span>
        </div>
      </div>

      {/* Connecting Vertical Architecture Spine (Runs between steps) */}
      {!isLast && (
        <div className="relative w-px flex-1 min-h-[50px] my-3">
          {/* Base structural track */}
          <div className="absolute inset-y-0 left-0 w-px bg-border-subtle transition-colors duration-300" />
          {/* Active hover brightening overlay */}
          <div
            className={`absolute inset-y-0 left-0 w-px transition-colors duration-300 ${currentAccent.activeLine}`}
          />
        </div>
      )}
    </div>
  )
}
