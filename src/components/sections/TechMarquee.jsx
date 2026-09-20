import { technologies } from '../../data/technologies'

export default function TechMarquee() {
  // Duplicate the array once to create a seamless infinite loop track
  const marqueeItems = [...technologies, ...technologies]

  return (
    <section
      id="stack"
      className="relative py-14 md:py-20 border-y border-border-subtle bg-canvas-subtle/50 overflow-hidden select-none transition-colors"
      aria-label="Core Technologies and Engineering Stack"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6 mb-8 relative z-10">
        {/* Editorial Eyebrow & Supporting Lead */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 self-start px-2.5 py-0.5 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-muted">
                02 // TECHNOLOGY &amp; TOOLKIT
              </span>
            </div>
            <p className="type-body text-sm md:text-base text-ink-secondary max-w-xl">
              Tools and technologies I use to turn ideas into interactive, high-performance digital experiences.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono text-ink-muted uppercase">
            <span className="px-2 py-0.5 rounded bg-canvas border border-border-subtle">PAUSE ON HOVER</span>
            <span className="w-1 h-1 rounded-full bg-border-strong" />
            <span>ACCELERATED RENDERING</span>
          </div>
        </div>
      </div>

      {/* Marquee Track Wrapper with Smooth Left & Right Edge Fade Mask */}
      <div
        className="relative w-full overflow-hidden group py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-hidden="true"
      >
        <div className="animate-marquee flex items-center gap-10 md:gap-14 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((tech, index) => {
            const accentClasses = [
              'group-hover/item:text-accent-violet group-hover/item:bg-accent-violet',
              'group-hover/item:text-accent-coral group-hover/item:bg-accent-coral',
              'group-hover/item:text-accent-mint group-hover/item:bg-accent-mint',
              'group-hover/item:text-accent-warm-yellow group-hover/item:bg-accent-warm-yellow',
            ][index % 4]

            return (
              <div
                key={`${tech.name}-${index}`}
                className="inline-flex items-center gap-10 md:gap-14 whitespace-nowrap cursor-default"
              >
                {/* Tech Label with Micro-Interaction */}
                <div className="group/item inline-flex items-center gap-3 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5">
                  <span className={`w-2 h-2 rounded-full bg-border-strong transition-all duration-300 ${accentClasses.split(' ')[1]} group-hover/item:scale-125`} />
                  <span className={`font-display font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl text-ink transition-colors duration-300 ${accentClasses.split(' ')[0]}`}>
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider hidden lg:inline-block px-2 py-0.5 rounded-md bg-canvas-card border border-border-subtle opacity-75 group-hover/item:opacity-100 transition-opacity shadow-xs">
                    {tech.category}
                  </span>
                </div>

                {/* Editorial Separator Star */}
                <span className="text-accent-violet/40 text-lg md:text-xl select-none">
                  ✦
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Accessible Static Screen-Reader Listing */}
      <div className="sr-only">
        <h2>Technology Stack</h2>
        <ul>
          {technologies.map((tech) => (
            <li key={tech.name}>
              {tech.name} ({tech.category})
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
