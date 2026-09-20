import { ArrowUpRight } from 'lucide-react'
import AboutSpecimen from '../about/AboutSpecimen'
import AmbientBackground from '../ui/AmbientBackground'

export default function About() {
  const principles = [
    {
      number: '01',
      title: 'Clarity',
      description:
        'Interfaces should communicate intent immediately without sacrificing depth or personality. True simplicity is achieved by refining visual hierarchy until every element serves a distinct purpose.',
      accentClass: 'group-hover:text-accent-violet',
      borderAccent: 'bg-accent-violet',
    },
    {
      number: '02',
      title: 'Interaction',
      description:
        'Motion must explain hierarchy, guide navigation, and reward user attention rather than exist as decorative noise. Purposeful animations feel organic, fast, and respectful of time.',
      accentClass: 'group-hover:text-accent-mint',
      borderAccent: 'bg-accent-mint',
    },
    {
      number: '03',
      title: 'Systems',
      description:
        'Enduring digital products are engineered from modular, accessible tokens rather than isolated visual tricks. Systematic design and robust component architectures ensure consistency at any scale.',
      accentClass: 'group-hover:text-accent-coral',
      borderAccent: 'bg-accent-coral',
    },
    {
      number: '04',
      title: 'Detail',
      description:
        'Typography cadence, micro-states, accessible contrast, and tactile feedback define whether an interface feels generic or memorable. Excellence lives in the nuances most users feel before they notice.',
      accentClass: 'group-hover:text-accent-warm-yellow',
      borderAccent: 'bg-accent-warm-yellow',
    },
  ]

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Self-Generated Atmospheric Ambient Background */}
      <AmbientBackground
        accent="lavender"
        secondaryAccent="mint"
        watermarkText="CRAFT"
        watermarkPosition="left"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-28 relative z-10">
        {/* Layer 1: Editorial Eyebrow & Dominant Headline */}
        <header className="flex flex-col gap-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              04 // CREATIVE PHILOSOPHY &amp; MINDSET
            </span>
          </div>

          <h2
            id="about-heading"
            className="font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            I DON&apos;T JUST BUILD INTERFACES.{' '}
            <span className="block text-accent-violet transition-colors">
              I THINK ABOUT HOW THEY FEEL,
            </span>
            BEHAVE, AND COMMUNICATE.
          </h2>
        </header>

        {/* Layer 2: Editorial Developer Statement (2-Column Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-4 border-t border-border-subtle">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              01 // THE APPROACH
            </span>
            <p className="type-body text-base sm:text-lg text-ink font-medium leading-relaxed">
              Design gives an interface its voice; frontend engineering gives it behavior.
              I approach web development as a united craft where typographic nuance,
              interaction rhythm, and code architecture exist in continuous conversation.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              02 // THE EXECUTION
            </span>
            <p className="type-body text-base sm:text-lg text-ink-secondary leading-relaxed">
              Rather than treating animation and aesthetics as superficial decoration, I build systems
              where motion clarifies hierarchy, layout transitions feel effortless, and performance remains
              uncompromising on every device and viewport.
            </p>
          </div>
        </div>

        {/* Layer 3: Creative Principles (Vertical Editorial Sequence) */}
        <div className="flex flex-col gap-8 pt-6 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="type-label-meta">
              03 // CORE PRINCIPLES
            </h3>
            <span className="text-xs font-mono text-ink-muted">
              STANDARDS APPLIED TO EVERY PROJECT
            </span>
          </div>

          <div className="flex flex-col divide-y divide-border-subtle">
            {principles.map((item) => (
              <div
                key={item.number}
                className="group py-8 first:pt-4 last:pb-4 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-all duration-300 hover:bg-canvas-card px-4 sm:px-6 rounded-xl border border-transparent hover:border-border-subtle hover:shadow-xs cursor-default relative overflow-hidden"
              >
                {/* Subtle Accent Indicator Line on Left */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${item.borderAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Principle Number */}
                <div className="md:col-span-2 flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.borderAccent} transition-transform group-hover:scale-125`} />
                  <span className="font-mono text-xs font-semibold text-ink-muted group-hover:text-ink transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Principle Title */}
                <div className="md:col-span-3">
                  <h4 className={`font-display font-bold text-xl sm:text-2xl text-ink transition-all duration-300 ${item.accentClass} group-hover:translate-x-2`}>
                    {item.title}
                  </h4>
                </div>

                {/* Principle Description */}
                <div className="md:col-span-7">
                  <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 4: Engineering Specimen & Closing Cadence */}
        <div className="pt-8 border-t border-border-subtle flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <span className="type-label-meta">
              04 // ENGINEERING ARTIFACT
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-ink-muted">
              <span>EXPLORE EXPERIMENTAL PLAYGROUND IN PHASE 6</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <AboutSpecimen />
        </div>
      </div>
    </section>
  )
}
