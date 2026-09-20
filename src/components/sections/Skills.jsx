import { skillGroups } from '../../data/skills'
import SkillGroup from '../skills/SkillGroup'
import EcosystemSpecimen from '../skills/EcosystemSpecimen'
import AmbientBackground from '../ui/AmbientBackground'

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas-subtle/30 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Self-Generated Atmospheric Ambient Background */}
      <AmbientBackground
        accent="mint"
        secondaryAccent="violet"
        watermarkText="TOPOLOGY"
        watermarkPosition="right"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Editorial Section Header */}
        <header className="flex flex-col gap-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              05 // TECHNOLOGY ECOSYSTEM
            </span>
          </div>

          <h2
            id="skills-heading"
            className="font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            THE TOOLS MATTER.{' '}
            <span className="block text-accent-violet transition-colors">
              THE SYSTEM MATTERS MORE.
            </span>
          </h2>

          <p className="type-body text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
            Technologies are not isolated achievements; they are connected disciplines
            engineered to turn complex digital requirements into clear, responsive, and memorable user interfaces.
          </p>
        </header>

        {/* 12-Column Ecosystem Layout: Capability Sequence + Centerpiece Topology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vertical Capability Groups Sequence (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle text-xs font-mono text-ink-muted">
              <span>DISCIPLINE &amp; CAPABILITY MATRIX</span>
              <span>5 ACTIVE DOMAINS</span>
            </div>

            <div className="flex flex-col">
              {skillGroups.map((group) => (
                <SkillGroup key={group.id} group={group} />
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Topology Centerpiece Specimen (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <EcosystemSpecimen />
          </div>
        </div>
      </div>
    </section>
  )
}
