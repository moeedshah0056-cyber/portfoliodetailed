import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, X, ArrowUp } from 'lucide-react'
import CaseStudySection from './CaseStudySection'

export default function CaseStudyDetail({ caseStudy, onClose, onSelectCaseStudy, allCaseStudies = [] }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Prevent background scroll while detail is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!caseStudy) return null

  // Find previous and next case studies
  const currentIndex = allCaseStudies.findIndex((cs) => cs.id === caseStudy.id)
  const prevStudy = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < allCaseStudies.length - 1 ? allCaseStudies[currentIndex + 1] : null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-canvas/98 backdrop-blur-xl flex flex-col"
    >
      {/* Sticky Top Navigation Bar */}
      <div className="sticky top-0 z-20 bg-canvas/90 backdrop-blur-md border-b border-border-subtle py-4 px-6 md:px-12 flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-ink hover:text-accent-violet transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Case Study"
          className="p-2 rounded-lg text-ink hover:bg-canvas-subtle transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Case Study Body Container */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 w-full flex flex-col gap-12">
        {/* Case Study Hero */}
        <header className="flex flex-col gap-5 border-b border-border-subtle pb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="uppercase tracking-widest font-semibold text-ink">
              CASE STUDY // {caseStudy.number}
            </span>
            <span className="text-border-strong">&bull;</span>
            <span>DEEP DIVE ARCHITECTURE</span>
          </div>

          <h1
            id="case-study-modal-title"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-tight"
          >
            {caseStudy.title}
          </h1>

          {caseStudy.tagline && (
            <p className="text-sm sm:text-base font-mono text-ink-muted">
              {caseStudy.tagline}
            </p>
          )}

          <p className="type-body text-base sm:text-lg text-ink-secondary leading-relaxed pt-2">
            {caseStudy.intro}
          </p>

          {/* Project Overview Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border-subtle text-xs font-mono">
            <div className="flex flex-col gap-1 p-3 rounded bg-canvas-card border border-border-subtle">
              <span className="text-[10px] text-ink-muted uppercase">CATEGORY</span>
              <span className="font-semibold text-ink truncate">{caseStudy.overview.category}</span>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded bg-canvas-card border border-border-subtle">
              <span className="text-[10px] text-ink-muted uppercase">YEAR</span>
              <span className="font-semibold text-ink">{caseStudy.overview.year}</span>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded bg-canvas-card border border-border-subtle">
              <span className="text-[10px] text-ink-muted uppercase">ROLE</span>
              <span className="font-semibold text-ink truncate">{caseStudy.overview.role}</span>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded bg-canvas-card border border-border-subtle">
              <span className="text-[10px] text-ink-muted uppercase">SCOPE</span>
              <span className="font-semibold text-ink truncate">{caseStudy.overview.scope}</span>
            </div>
          </div>
        </header>

        {/* Modular Case Study Sections */}
        <div className="flex flex-col">
          {caseStudy.sections.map((section) => (
            <CaseStudySection
              key={section.id}
              section={section}
              accent={caseStudy.accent}
            />
          ))}
        </div>

        {/* Footer Navigation: Next / Previous & Back to Top */}
        <footer className="pt-10 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {prevStudy ? (
              <button
                type="button"
                onClick={() => onSelectCaseStudy(prevStudy.id)}
                className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev: {prevStudy.title}</span>
              </button>
            ) : (
              <span className="text-xs font-mono text-ink-muted/50 select-none">
                First Case Study
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top of Page</span>
          </button>

          <div className="flex items-center justify-end gap-4">
            {nextStudy ? (
              <button
                type="button"
                onClick={() => onSelectCaseStudy(nextStudy.id)}
                className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink transition-colors"
              >
                <span>Next: {nextStudy.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="text-xs font-mono text-ink-muted/50 select-none">
                Last Case Study
              </span>
            )}
          </div>
        </footer>
      </div>
    </div>
  )
}
