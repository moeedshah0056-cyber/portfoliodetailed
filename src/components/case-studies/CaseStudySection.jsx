import { CheckCircle2 } from 'lucide-react'

export default function CaseStudySection({ section, accent = 'violet' }) {
  const accentBorderMap = {
    violet: 'border-l-accent-violet',
    mint: 'border-l-accent-mint',
    coral: 'border-l-accent-coral',
    'warm-yellow': 'border-l-accent-warm-yellow',
  }

  const borderClass = accentBorderMap[accent] || 'border-l-accent-violet'

  return (
    <article className="py-8 border-b border-border-subtle last:border-b-0 flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-ink-muted">
          {section.eyebrow}
        </span>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
          {section.title}
        </h3>
      </div>

      {/* Dynamic Layout Rendering */}
      {section.layout === 'split' ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <p className="md:col-span-7 type-body text-sm sm:text-base text-ink-secondary leading-relaxed">
            {section.body}
          </p>
          {section.highlightText && (
            <div className={`md:col-span-5 p-4 rounded-lg bg-canvas border-l-2 ${borderClass} border border-border-subtle text-xs sm:text-sm font-mono text-ink leading-relaxed shadow-2xs`}>
              {section.highlightText}
            </div>
          )}
        </div>
      ) : section.layout === 'technical' ? (
        <div className="flex flex-col gap-4">
          <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed max-w-3xl">
            {section.body}
          </p>
          {section.technicalDetails && section.technicalDetails.length > 0 && (
            <div className="p-4 sm:p-5 rounded-lg bg-canvas border border-border-subtle flex flex-col gap-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
                ARCHITECTURAL SPECIFICATIONS
              </span>
              <ul className="flex flex-col gap-2">
                {section.technicalDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs font-mono text-ink-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-violet mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        /* Standard Editorial Text Layout */
        <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed max-w-3xl">
          {section.body}
        </p>
      )}
    </article>
  )
}
