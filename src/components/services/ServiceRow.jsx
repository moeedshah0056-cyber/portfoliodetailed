import { ArrowUpRight } from 'lucide-react'
import ServiceSpecimen from './ServiceSpecimen'

export default function ServiceRow({
  service,
  isActive,
  onSelect,
  onHover,
}) {
  const { number, title, shortTitle, category, description, capabilities, technologies, accent } = service

  // Theme accent mappings
  const accentClasses = {
    violet: {
      text: 'group-hover:text-accent-violet',
      activeText: 'text-accent-violet',
      bg: 'bg-accent-violet',
      borderActive: 'border-accent-violet/40',
      glow: 'group-hover:bg-accent-violet/[0.02]',
      indicatorActive: 'h-full bg-accent-violet',
      indicatorHover: 'group-hover:h-full group-hover:bg-accent-violet',
      tagActive: 'border-accent-violet/30 bg-accent-violet/5 text-ink',
    },
    coral: {
      text: 'group-hover:text-accent-coral',
      activeText: 'text-accent-coral',
      bg: 'bg-accent-coral',
      borderActive: 'border-accent-coral/40',
      glow: 'group-hover:bg-accent-coral/[0.02]',
      indicatorActive: 'h-full bg-accent-coral',
      indicatorHover: 'group-hover:h-full group-hover:bg-accent-coral',
      tagActive: 'border-accent-coral/30 bg-accent-coral/5 text-ink',
    },
    mint: {
      text: 'group-hover:text-accent-mint',
      activeText: 'text-accent-mint',
      bg: 'bg-accent-mint',
      borderActive: 'border-accent-mint/40',
      glow: 'group-hover:bg-accent-mint/[0.02]',
      indicatorActive: 'h-full bg-accent-mint',
      indicatorHover: 'group-hover:h-full group-hover:bg-accent-mint',
      tagActive: 'border-accent-mint/30 bg-accent-mint/5 text-ink',
    },
    'warm-yellow': {
      text: 'group-hover:text-accent-warm-yellow',
      activeText: 'text-accent-warm-yellow',
      bg: 'bg-accent-warm-yellow',
      borderActive: 'border-accent-warm-yellow/40',
      glow: 'group-hover:bg-accent-warm-yellow/[0.02]',
      indicatorActive: 'h-full bg-accent-warm-yellow',
      indicatorHover: 'group-hover:h-full group-hover:bg-accent-warm-yellow',
      tagActive: 'border-accent-warm-yellow/30 bg-accent-warm-yellow/5 text-ink',
    },
  }[accent] || {
    text: 'group-hover:text-accent-violet',
    activeText: 'text-accent-violet',
    bg: 'bg-accent-violet',
    borderActive: 'border-accent-violet/40',
    glow: 'group-hover:bg-accent-violet/[0.02]',
    indicatorActive: 'h-full bg-accent-violet',
    indicatorHover: 'group-hover:h-full group-hover:bg-accent-violet',
    tagActive: 'border-accent-violet/30 bg-accent-violet/5 text-ink',
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(service)
    }
  }

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`Service ${number}: ${title} — ${category}`}
      aria-pressed={isActive}
      onClick={() => onSelect(service)}
      onMouseEnter={() => onHover(service)}
      onFocus={() => onHover(service)}
      onKeyDown={handleKeyDown}
      className={`group relative p-6 sm:p-8 lg:p-10 transition-all duration-300 cursor-pointer outline-hidden focus-visible:ring-2 focus-visible:ring-accent-violet rounded-xl ${
        isActive
          ? 'bg-canvas-card shadow-subtle border border-border-strong'
          : 'bg-transparent hover:bg-canvas-card/60 border border-transparent hover:border-border-subtle'
      } ${accentClasses.glow}`}
    >
      {/* Expanding Accent Indicator Bar on Left Border */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 rounded-l-xl ${
          isActive ? accentClasses.indicatorActive : 'h-0 group-hover:h-full'
        } ${accentClasses.indicatorHover}`}
      />

      {/* Row Inner Grid Layout */}
      <div className="flex flex-col gap-6 transform-gpu transition-transform duration-300 lg:group-hover:translate-x-1">
        {/* Top Header Row: Number, Category, and Action Arrow */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-ink-muted font-bold tracking-wider">
              {number} //
            </span>
            <span className="text-ink-secondary uppercase tracking-wider text-[11px]">
              {category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-ink-muted font-mono hidden sm:inline-block">
              {shortTitle}
            </span>
            <div
              className={`w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-ink text-canvas shadow-xs'
                  : 'bg-canvas group-hover:bg-canvas-card group-hover:border-border-strong text-ink-secondary group-hover:text-ink'
              }`}
            >
              <ArrowUpRight className="w-4 h-4 transform-gpu transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Main Title & Description */}
        <div className="flex flex-col gap-3">
          <h3
            className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-tight transition-colors duration-300 ${
              isActive ? accentClasses.activeText : 'text-ink'
            } ${accentClasses.text}`}
          >
            {title}
          </h3>

          <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Capabilities Editorial Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className={`text-[11px] font-mono px-2.5 py-1 rounded border transition-colors duration-200 ${
                isActive
                  ? accentClasses.tagActive
                  : 'border-border-subtle bg-canvas/70 text-ink-secondary group-hover:border-border-strong group-hover:text-ink'
              }`}
            >
              {cap}
            </span>
          ))}
        </div>

        {/* Technologies Strip */}
        <div className="flex items-center gap-2 pt-2 border-t border-border-subtle text-xs font-mono text-ink-muted">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-secondary">
            STACK //
          </span>
          <span className="text-[11px] text-ink-secondary truncate">
            {technologies.join(' · ')}
          </span>
        </div>

        {/* Mobile / Tablet Compact Specimen (< lg viewports) */}
        <div className="lg:hidden">
          <ServiceSpecimen service={service} isCompact={true} />
        </div>
      </div>
    </article>
  )
}
