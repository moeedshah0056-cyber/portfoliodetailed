import { useState } from 'react'
import { Code2, Compass, Layers, Cpu, Sparkles } from 'lucide-react'

export default function HeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div
      className="hero-visual relative w-full max-w-lg mx-auto lg:max-w-none lg:h-[480px] flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive digital interface specimen"
    >
      {/* Subtle Background Geometric Blueprint Grid */}
      <div className="absolute inset-0 border border-dashed border-border-subtle/70 rounded-2xl pointer-events-none p-4">
        {/* Corner Crosshair Accents */}
        <span className="absolute -top-1.5 -left-1.5 text-xs font-mono text-ink-muted/50">+</span>
        <span className="absolute -top-1.5 -right-1.5 text-xs font-mono text-ink-muted/50">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono text-ink-muted/50">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono text-ink-muted/50">+</span>

        {/* Ambient Subtle Accent Light Blobs (Restrained & Soft) */}
        <div className="absolute top-1/4 right-1/4 w-36 h-36 rounded-full bg-accent-violet/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-accent-mint/6 blur-2xl pointer-events-none" />
      </div>

      {/* Main Specimen Card (Tactile Layer with subtle tilt & sweep) */}
      <div
        className="hero-specimen-card card-sweep relative z-10 w-full max-w-[420px] bg-gradient-to-b from-canvas-card via-canvas-card to-canvas-subtle/40 border border-border-subtle rounded-xl p-6 shadow-sm transition-transform duration-300 ease-out"
        style={{
          transform: isHovered
            ? `perspective(800px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) translateY(-2px)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        }}
      >
        {/* Specimen Header & Status Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-mint animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-ink">
              SPECIMEN // ARCHITECTURE
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-ink-muted px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle">
            <Cpu className="w-3 h-3 text-accent-violet" />
            <span>REACT 19</span>
          </div>
        </div>

        {/* Specimen Code & Typography Composition */}
        <div className="py-5 flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-ink-muted">01 / DISCIPLINE</span>
            <span className="inline-flex items-center gap-1 font-mono text-ink font-medium">
              <Code2 className="w-3.5 h-3.5 text-accent-violet" />
              Creative Development
            </span>
          </div>

          {/* Editorial Code Fragment */}
          <div className="rounded-lg bg-canvas-subtle p-3.5 border border-border-subtle/80 font-mono text-[12px] leading-relaxed text-ink-secondary">
            <div className="flex items-center justify-between text-[10px] text-ink-muted mb-1 pb-1 border-b border-border-subtle/50">
              <span>experience.config.ts</span>
              <span className="text-accent-coral">mode: deliberate</span>
            </div>
            <p className="text-ink">
              <span className="text-accent-violet">const</span> experience = &#123;
            </p>
            <p className="pl-4 text-ink-secondary">
              craftsmanship: <span className="text-accent-mint">&apos;art-directed&apos;</span>,
            </p>
            <p className="pl-4 text-ink-secondary">
              motion: <span className="text-accent-warm-yellow">&apos;purposeful&apos;</span>,
            </p>
            <p className="pl-4 text-ink-secondary">
              performance: <span className="text-accent-violet">&apos;optimized&apos;</span>
            </p>
            <p className="text-ink flex items-center">
              <span>&#125;;</span>
              <span className="inline-block w-1.5 h-3.5 bg-accent-violet ml-1.5 animate-cursor-blink" aria-hidden="true" />
            </p>
          </div>

          {/* Palette Swatch Matrix */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] font-mono uppercase text-ink-muted tracking-wider">
              PALETTE TOKEN HARMONY
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-accent-violet shadow-xs hover:scale-125 transition-transform" title="Violet #7C3AED" />
              <span className="w-3 h-3 rounded-full bg-accent-coral shadow-xs hover:scale-125 transition-transform" title="Coral #FF6B6B" />
              <span className="w-3 h-3 rounded-full bg-accent-mint shadow-xs hover:scale-125 transition-transform" title="Mint #65D6C2" />
              <span className="w-3 h-3 rounded-full bg-accent-warm-yellow shadow-xs hover:scale-125 transition-transform" title="Yellow #F4C95D" />
            </div>
          </div>
        </div>

        {/* Specimen Footer Metadata */}
        <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-ink-muted">
          <div className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-accent-coral" />
            <span>GRID: 12-COL</span>
          </div>
          <div className="flex items-center gap-1">
            <Layers className="w-3 h-3 text-accent-mint" />
            <span>EASING: POWER3.OUT</span>
          </div>
          <div className="flex items-center gap-1 text-ink font-medium">
            <Sparkles className="w-3 h-3 text-accent-warm-yellow" />
            <span>AESTHETIC: HIGH</span>
          </div>
        </div>
      </div>

      {/* Secondary Floating Micro Badge (Top Right Offset) */}
      <div
        className="hero-floating-badge-1 hidden sm:flex absolute -top-3 right-2 z-20 items-center gap-2 px-3 py-1.5 rounded-md bg-canvas-card border border-border-subtle shadow-sm transition-transform duration-300"
        style={{
          transform: isHovered
            ? `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7 - 4}px, 0)`
            : 'translate3d(0, 0, 0)',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
        <span className="text-[11px] font-mono text-ink font-medium">60 FPS GPU-READY</span>
      </div>

      {/* Secondary Floating Micro Badge (Bottom Left Offset) */}
      <div
        className="hero-floating-badge-2 hidden sm:flex absolute -bottom-3 left-4 z-20 items-center gap-2 px-3 py-1.5 rounded-md bg-canvas-card border border-border-subtle shadow-sm transition-transform duration-300"
        style={{
          transform: isHovered
            ? `translate3d(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6 + 4}px, 0)`
            : 'translate3d(0, 0, 0)',
        }}
      >
        <span className="text-[10px] font-mono text-ink-muted">SYSTEM STATUS</span>
        <span className="text-[11px] font-mono text-accent-mint font-semibold">SYNCHRONIZED</span>
      </div>
    </div>
  )
}
