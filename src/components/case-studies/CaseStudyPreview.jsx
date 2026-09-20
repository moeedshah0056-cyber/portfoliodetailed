import { ArrowUpRight, BookOpen, Layers } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function CaseStudyPreview({ caseStudy, onSelect }) {
  const accentMap = {
    violet: {
      dot: 'bg-accent-violet',
      border: 'hover:border-accent-violet/40',
      gradient: 'from-accent-violet/[0.08] via-canvas-subtle to-accent-soft-lavender/30',
      topLine: 'bg-accent-violet',
    },
    mint: {
      dot: 'bg-accent-mint',
      border: 'hover:border-accent-mint/40',
      gradient: 'from-accent-mint/[0.08] via-canvas-subtle to-accent-soft-lavender/25',
      topLine: 'bg-accent-mint',
    },
    coral: {
      dot: 'bg-accent-coral',
      border: 'hover:border-accent-coral/40',
      gradient: 'from-accent-coral/[0.08] via-canvas-subtle to-accent-warm-yellow/20',
      topLine: 'bg-accent-coral',
    },
    'warm-yellow': {
      dot: 'bg-accent-warm-yellow',
      border: 'hover:border-accent-warm-yellow/40',
      gradient: 'from-accent-warm-yellow/[0.1] via-canvas-subtle to-accent-coral/10',
      topLine: 'bg-accent-warm-yellow',
    },
  }

  const currentAccent = accentMap[caseStudy.accent] || accentMap.violet

  return (
    <article
      className={`group card-sweep relative w-full rounded-xl bg-canvas-card border border-border-subtle p-6 sm:p-8 flex flex-col justify-between gap-8 transition-all duration-300 hover:border-border-strong hover:shadow-md hover:-translate-y-1 overflow-hidden shadow-xs`}
      aria-labelledby={`case-study-title-${caseStudy.id}`}
    >
      {/* Top Accent Strip */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${currentAccent.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${currentAccent.dot} group-hover:scale-150 transition-transform`} />
          <span className="font-semibold text-ink">CASE STUDY // {caseStudy.number}</span>
        </div>

        <span className="uppercase tracking-wider px-2 py-0.5 rounded-md bg-canvas border border-border-subtle text-[10px] shadow-2xs">
          {caseStudy.overview.category}
        </span>
      </div>

      {/* Centerpiece Abstract Case Study Specimen Canvas */}
      <div className={`w-full aspect-[16/9] rounded-lg bg-gradient-to-br ${currentAccent.gradient} p-4 sm:p-5 border border-border-subtle/80 flex flex-col justify-between select-none relative overflow-hidden transition-all duration-300 group-hover:scale-[1.015]`}>
        <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-accent-violet" />
            <span>ARCHITECTURAL SPECIMEN</span>
          </div>
          <span className="uppercase">{caseStudy.overview.year} ARCHIVE</span>
        </div>

        {/* Wireframe Metric Block */}
        <div className="flex flex-col items-center justify-center gap-1.5 py-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
            CASE STUDY ANALYSIS
          </span>
          <span className="font-display font-bold text-lg sm:text-xl text-ink text-center transition-transform duration-300 group-hover:translate-x-1">
            {caseStudy.title}
          </span>
          <span className="text-xs font-mono text-ink-secondary text-center max-w-sm line-clamp-1">
            {caseStudy.tagline}
          </span>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-t border-border-subtle/60 pt-2">
          <span className="flex items-center gap-1">
            <Layers className="w-3 h-3 text-accent-mint" />
            <span>{caseStudy.sections.length} MODULAR SECTIONS</span>
          </span>
          <span className="text-accent-violet font-semibold">DEEP DIVE READY</span>
        </div>
      </div>

      {/* Description & Action Trigger */}
      <div className="flex flex-col gap-4">
        <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed line-clamp-2">
          {caseStudy.intro}
        </p>

        <div className="pt-2 flex items-center justify-between border-t border-border-subtle">
          <span className="text-xs font-mono text-ink-muted">
            SCOPE: {caseStudy.overview.scope.split(',')[0]}
          </span>

          <MagneticButton strength={0.3} maxOffset={5}>
            <button
              type="button"
              onClick={() => onSelect(caseStudy.id)}
              className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink text-canvas text-xs font-semibold tracking-wide uppercase transition-all duration-200 hover:bg-ink/90 active:scale-95 shadow-xs"
            >
              <span>Read Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </article>
  )
}
