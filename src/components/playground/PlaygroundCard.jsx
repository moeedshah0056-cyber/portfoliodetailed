import KineticType from './KineticType'
import UIStateLab from './UIStateLab'
import MagneticGrid from './MagneticGrid'
import GradientField from './GradientField'
import MotionTimeline from './MotionTimeline'
import ResponsiveComposition from './ResponsiveComposition'

export default function PlaygroundCard({ experiment }) {
  const accentColorMap = {
    violet: {
      dot: 'bg-accent-violet',
      text: 'group-hover:text-accent-violet',
      topLine: 'bg-accent-violet',
      tagDot: 'bg-accent-violet',
    },
    mint: {
      dot: 'bg-accent-mint',
      text: 'group-hover:text-accent-mint',
      topLine: 'bg-accent-mint',
      tagDot: 'bg-accent-mint',
    },
    coral: {
      dot: 'bg-accent-coral',
      text: 'group-hover:text-accent-coral',
      topLine: 'bg-accent-coral',
      tagDot: 'bg-accent-coral',
    },
    'warm-yellow': {
      dot: 'bg-accent-warm-yellow',
      text: 'group-hover:text-accent-warm-yellow',
      topLine: 'bg-accent-warm-yellow',
      tagDot: 'bg-accent-warm-yellow',
    },
    lavender: {
      dot: 'bg-accent-violet',
      text: 'group-hover:text-accent-violet',
      topLine: 'bg-accent-soft-lavender',
      tagDot: 'bg-accent-violet',
    },
  }

  const currentAccent = accentColorMap[experiment.accent] || accentColorMap.violet

  const renderExperiment = () => {
    switch (experiment.type) {
      case 'kinetic-type':
        return <KineticType />
      case 'ui-state-lab':
        return <UIStateLab />
      case 'magnetic-grid':
        return <MagneticGrid />
      case 'gradient-field':
        return <GradientField />
      case 'motion-timeline':
        return <MotionTimeline />
      case 'responsive-composition':
        return <ResponsiveComposition />
      default:
        return null
    }
  }

  return (
    <article
      className="group card-sweep relative rounded-xl bg-canvas-card border border-border-subtle p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xs transition-all duration-300 hover:border-border-strong hover:shadow-md hover:-translate-y-1 overflow-hidden"
      aria-labelledby={`playground-title-${experiment.id}`}
    >
      {/* Top Accent Strip */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 ${currentAccent.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${currentAccent.dot} group-hover:scale-150 transition-transform`} />
          <span className="font-semibold text-ink">EXP // {experiment.number}</span>
        </div>

        <span className="uppercase tracking-wider px-2 py-0.5 rounded-md bg-canvas border border-border-subtle text-[10px] shadow-2xs">
          {experiment.category}
        </span>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-1.5">
        <h3
          id={`playground-title-${experiment.id}`}
          className={`font-display font-bold text-xl sm:text-2xl text-ink transition-all duration-300 ${currentAccent.text} group-hover:translate-x-1.5`}
        >
          {experiment.title}
        </h3>
        <p className="type-body text-sm text-ink-secondary leading-relaxed line-clamp-2">
          {experiment.description}
        </p>
      </div>

      {/* Interactive Experiment Stage */}
      <div className="w-full">
        {renderExperiment()}
      </div>

      {/* Card Technical Tags */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border-subtle/70">
        {experiment.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-[10px] font-mono text-ink-secondary px-2 py-0.5 rounded bg-canvas border border-border-subtle shadow-2xs"
          >
            <span className={`w-1 h-1 rounded-full ${currentAccent.tagDot} opacity-70`} />
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
