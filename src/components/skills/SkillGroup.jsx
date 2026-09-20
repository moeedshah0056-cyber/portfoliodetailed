import { ArrowRight } from 'lucide-react'

export default function SkillGroup({ group }) {
  const accentMap = {
    violet: {
      dot: 'bg-accent-violet',
      text: 'group-hover:text-accent-violet',
      border: 'hover:border-accent-violet/30',
      badge: 'border-accent-violet/30 text-accent-violet',
      topLine: 'bg-accent-violet',
    },
    coral: {
      dot: 'bg-accent-coral',
      text: 'group-hover:text-accent-coral',
      border: 'hover:border-accent-coral/30',
      badge: 'border-accent-coral/30 text-accent-coral',
      topLine: 'bg-accent-coral',
    },
    mint: {
      dot: 'bg-accent-mint',
      text: 'group-hover:text-accent-mint',
      border: 'hover:border-accent-mint/30',
      badge: 'border-accent-mint/30 text-accent-mint',
      topLine: 'bg-accent-mint',
    },
    'warm-yellow': {
      dot: 'bg-accent-warm-yellow',
      text: 'group-hover:text-accent-warm-yellow',
      border: 'hover:border-accent-warm-yellow/30',
      badge: 'border-accent-warm-yellow/30 text-accent-warm-yellow',
      topLine: 'bg-accent-warm-yellow',
    },
  }

  const currentAccent = accentMap[group.accent] || accentMap.violet

  return (
    <article
      className="group card-sweep relative p-6 sm:p-7 rounded-xl bg-canvas-card border border-border-subtle shadow-xs mb-6 last:mb-0 flex flex-col gap-5 transition-all duration-300 hover:border-border-strong hover:shadow-sm hover:-translate-y-1 overflow-hidden"
      aria-labelledby={`skill-group-${group.id}`}
    >
      {/* Top Accent Strip */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${currentAccent.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Top Meta Bar & Title */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${currentAccent.dot} opacity-80 group-hover:scale-150 transition-transform`} />
          <span className="font-mono text-xs font-semibold text-ink-muted group-hover:text-ink transition-colors">
            {group.number} //
          </span>
          <h3
            id={`skill-group-${group.id}`}
            className={`font-display font-bold text-xl sm:text-2xl text-ink transition-all duration-300 ${currentAccent.text} group-hover:translate-x-1.5`}
          >
            {group.title}
          </h3>
        </div>

        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle">
          CAPABILITY SPEC
        </span>
      </div>

      {/* Description */}
      <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
        {group.description}
      </p>

      {/* Capability Relationship Pipeline: Tool -> Capability -> Outcome */}
      {group.relationship && (
        <div className="p-3.5 sm:p-4 rounded-lg bg-canvas border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 text-xs font-mono text-ink-secondary transition-colors group-hover:border-border-strong">
          <div className="flex items-center gap-1.5 font-semibold text-ink">
            <span className="text-[10px] text-ink-muted uppercase">TOOL:</span>
            <span>{group.relationship.tool}</span>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-accent-violet hidden sm:block shrink-0 transition-transform group-hover:translate-x-0.5" />
          <span className="sm:hidden text-accent-violet">&darr;</span>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-ink-muted uppercase">CAPABILITY:</span>
            <span>{group.relationship.capability}</span>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-accent-mint hidden sm:block shrink-0 transition-transform group-hover:translate-x-0.5" />
          <span className="sm:hidden text-accent-mint">&darr;</span>

          <div className="flex items-center gap-1.5 font-semibold text-ink">
            <span className="text-[10px] text-ink-muted uppercase">OUTCOME:</span>
            <span className="text-ink">{group.relationship.outcome}</span>
          </div>
        </div>
      )}

      {/* Technology Pills List */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {group.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-secondary px-2.5 py-1 rounded-md bg-canvas border border-border-subtle transition-all duration-200 group-hover:border-border-strong shadow-2xs"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${currentAccent.dot} opacity-70`} />
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
