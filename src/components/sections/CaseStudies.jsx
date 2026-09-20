import { useState } from 'react'
import { caseStudies } from '../../data/caseStudies'
import CaseStudyPreview from '../case-studies/CaseStudyPreview'
import CaseStudyDetail from '../case-studies/CaseStudyDetail'
import AmbientBackground from '../ui/AmbientBackground'

export default function CaseStudies() {
  const [activeStudyId, setActiveStudyId] = useState(null)

  const activeCaseStudy = caseStudies.find((cs) => cs.id === activeStudyId)

  return (
    <section
      id="case-studies"
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas overflow-hidden"
      aria-labelledby="case-studies-heading"
    >
      {/* Self-Generated Atmospheric Ambient Background */}
      <AmbientBackground
        accent="coral"
        secondaryAccent="warm-yellow"
        watermarkText="CASES"
        watermarkPosition="left"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Editorial Section Header */}
        <header className="flex flex-col gap-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              06 // CASE STUDIES &amp; DEEP DIVES
            </span>
          </div>

          <h2
            id="case-studies-heading"
            className="font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            BEYOND THE SURFACE.{' '}
            <span className="block text-accent-violet transition-colors">
              THE DECISIONS BEHIND THE INTERFACE.
            </span>
          </h2>

          <p className="type-body text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
            Projects showcase the visual outcome; case studies examine the architectural constraints,
            interaction principles, design tokens, and technical trade-offs that shaped the experience.
          </p>
        </header>

        {/* Case Studies Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((caseStudy) => (
            <CaseStudyPreview
              key={caseStudy.id}
              caseStudy={caseStudy}
              onSelect={(id) => setActiveStudyId(id)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Full Detail View (Modal / Full Overlay Architecture) */}
      {activeCaseStudy && (
        <CaseStudyDetail
          caseStudy={activeCaseStudy}
          onClose={() => setActiveStudyId(null)}
          onSelectCaseStudy={(id) => setActiveStudyId(id)}
          allCaseStudies={caseStudies}
        />
      )}
    </section>
  )
}
