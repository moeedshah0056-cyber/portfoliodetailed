export default function AmbientBackground({
  accent = 'violet',
  secondaryAccent,
  watermarkText,
  watermarkPosition = 'right',
  grid = true,
  dots = false,
  crosshairs = true,
  className = '',
}) {
  const accentGlowMap = {
    violet: 'bg-accent-violet/[0.035]',
    coral: 'bg-accent-coral/[0.035]',
    mint: 'bg-accent-mint/[0.035]',
    'warm-yellow': 'bg-accent-warm-yellow/[0.04]',
    lavender: 'bg-accent-soft-lavender/40',
  }

  const secondaryGlowMap = {
    violet: 'bg-accent-violet/[0.025]',
    coral: 'bg-accent-coral/[0.025]',
    mint: 'bg-accent-mint/[0.025]',
    'warm-yellow': 'bg-accent-warm-yellow/[0.03]',
    lavender: 'bg-accent-soft-lavender/30',
  }

  const primaryGlow = accentGlowMap[accent] || accentGlowMap.violet
  const secondaryGlow = secondaryAccent ? (secondaryGlowMap[secondaryAccent] || secondaryGlowMap.mint) : null

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Primary Blurred Radial Accent Atmosphere */}
      <div
        className={`absolute -top-1/4 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-3xl transform-gpu ${primaryGlow}`}
      />

      {/* Optional Secondary Blurred Accent Atmosphere */}
      {secondaryGlow && (
        <div
          className={`absolute bottom-0 -left-20 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full blur-3xl transform-gpu ${secondaryGlow}`}
        />
      )}

      {/* Fine Architectural Grid Pattern Overlay */}
      {grid && <div className="absolute inset-0 bg-grid-subtle opacity-70" />}

      {/* Optional Geometric Dot Pattern */}
      {dots && <div className="absolute inset-0 bg-dot-subtle opacity-60" />}

      {/* Oversized Faint Typographic Watermark Character / Fragment */}
      {watermarkText && (
        <div
          className={`absolute font-display font-extrabold text-[10rem] sm:text-[16rem] lg:text-[22rem] tracking-tighter text-ink/[0.022] leading-none select-none uppercase pointer-events-none transition-transform duration-700 ${
            watermarkPosition === 'right'
              ? '-right-6 sm:right-4 top-1/2 -translate-y-1/2 text-right'
              : '-left-6 sm:left-4 top-1/2 -translate-y-1/2 text-left'
          }`}
        >
          {watermarkText}
        </div>
      )}

      {/* Subtle Corner / Edge Blueprint Crosshairs */}
      {crosshairs && (
        <>
          <span className="absolute top-4 left-6 text-xs font-mono text-ink-muted/30">+</span>
          <span className="absolute top-4 right-6 text-xs font-mono text-ink-muted/30">+</span>
          <span className="absolute bottom-4 left-6 text-xs font-mono text-ink-muted/30">+</span>
          <span className="absolute bottom-4 right-6 text-xs font-mono text-ink-muted/30">+</span>
        </>
      )}
    </div>
  )
}
