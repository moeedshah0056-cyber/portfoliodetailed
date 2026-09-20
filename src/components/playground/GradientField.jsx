import { useState, useRef } from 'react'
import { Palette, Copy, Check } from 'lucide-react'

export default function GradientField() {
  const containerRef = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [activePreset, setActivePreset] = useState('twilight') // 'twilight' | 'dawn' | 'aurora'
  const [copied, setCopied] = useState(false)

  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !prefersReduced
  })

  const presets = {
    twilight: {
      name: 'TWILIGHT',
      primary: '#7C3AED', // Violet
      secondary: '#EDE9FE', // Soft Lavender
      tertiary: '#FF6B6B', // Coral
      label: 'Violet &rarr; Lavender',
    },
    dawn: {
      name: 'DAWN',
      primary: '#FF6B6B', // Coral
      secondary: '#F4C95D', // Warm Yellow
      tertiary: '#EDE9FE', // Soft Lavender
      label: 'Coral &rarr; Yellow',
    },
    aurora: {
      name: 'AURORA',
      primary: '#65D6C2', // Mint
      secondary: '#7C3AED', // Violet
      tertiary: '#F4C95D', // Warm Yellow
      label: 'Mint &rarr; Violet',
    },
  }

  const current = presets[activePreset]

  const handlePointerMove = (e) => {
    if (!canAnimate || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100)
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100)
    setPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    })
  }

  const handlePointerLeave = () => {
    setPos({ x: 50, y: 50 })
  }

  const generatedCSS = `radial-gradient(at ${pos.x}% ${pos.y}%, ${current.primary}33 0%, transparent 65%), radial-gradient(at ${100 - pos.x}% ${100 - pos.y}%, ${current.tertiary}22 0%, transparent 60%)`

  const copyCSS = () => {
    navigator.clipboard?.writeText?.(generatedCSS)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-canvas-card border border-border-subtle/80 p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none"
      aria-label="Interactive Radial Gradient Field Experiment"
    >
      {/* Background Reactive Gradient Surface */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at ${pos.x}% ${pos.y}%, ${current.primary}28 0%, transparent 55%),
            radial-gradient(circle at ${100 - pos.x}% ${100 - pos.y}%, ${current.tertiary}22 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, ${current.secondary}40 0%, transparent 70%)
          `,
        }}
      />

      {/* Blueprint Top Header with Preset Switcher */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-ink-muted">
          <Palette className="w-3.5 h-3.5 text-accent-coral" />
          <span className="font-semibold text-ink uppercase tracking-wider">CHROMATIC FIELD</span>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          {Object.entries(presets).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActivePreset(key)}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                activePreset === key
                  ? 'bg-ink text-canvas font-bold shadow-2xs'
                  : 'bg-canvas-card/80 backdrop-blur-xs border border-border-subtle text-ink-muted hover:text-ink'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Centerpiece Interactive Coordinates Indicator */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-4">
        {/* Floating Reticle Circle following coordinates */}
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-ink/20 flex items-center justify-center backdrop-blur-xs shadow-xs transition-transform duration-100 ease-out"
          style={{
            transform: `translate3d(${(pos.x - 50) * 0.8}px, ${(pos.y - 50) * 0.8}px, 0)`,
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-ink" />
          <span className="absolute -top-1 -left-1 text-[8px] font-mono text-ink-muted">+</span>
          <span className="absolute -bottom-1 -right-1 text-[8px] font-mono text-ink-muted">+</span>
        </div>

        {/* Coordinate Display */}
        <div className="mt-2.5 px-2.5 py-1 rounded bg-canvas-card/80 backdrop-blur-xs border border-border-subtle text-[11px] font-mono text-ink">
          <span>ORIGIN: {pos.x}% {pos.y}%</span>
        </div>
      </div>

      {/* Blueprint Footer with Generated CSS Snippet */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-ink-muted border-t border-border-subtle/60 pt-2">
        <span className="truncate max-w-[220px] sm:max-w-xs text-ink-secondary">
          radial-gradient(at {pos.x}% {pos.y}%, {current.name.toLowerCase()})
        </span>

        <button
          type="button"
          onClick={copyCSS}
          className="inline-flex items-center gap-1 text-ink hover:text-accent-coral transition-colors cursor-pointer"
          title="Copy gradient CSS"
          aria-label="Copy gradient CSS string"
        >
          {copied ? <Check className="w-3 h-3 text-accent-mint" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'COPIED' : 'COPY'}</span>
        </button>
      </div>
    </div>
  )
}
