import { useState, useRef } from 'react'
import { Sparkles, RefreshCw } from 'lucide-react'

export default function KineticType() {
  const containerRef = useRef(null)
  const phrases = ['KINETIC', 'CADENCE', 'RHYTHM', 'VELOCITY']
  const [activePhraseIndex, setActivePhraseIndex] = useState(0)
  const [mode, setMode] = useState('stretch') // 'stretch' | 'wave'
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !prefersReduced
  })

  const currentWord = phrases[activePhraseIndex]

  const handlePointerMove = (e) => {
    if (!canAnimate || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Normalized -1 to +1
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setPointerOffset({ x, y })
    setIsHovered(true)
  }

  const handlePointerLeave = () => {
    setIsHovered(false)
    setPointerOffset({ x: 0, y: 0 })
  }

  const cyclePhrase = () => {
    setActivePhraseIndex((prev) => (prev + 1) % phrases.length)
  }

  // Dynamic tracking based on horizontal pointer distance
  const dynamicTracking = isHovered && canAnimate
    ? 0.08 + Math.abs(pointerOffset.x) * 0.22
    : 0.06

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-canvas-subtle p-4 sm:p-6 border border-border-subtle/80 flex flex-col justify-between overflow-hidden select-none"
      aria-label="Interactive Kinetic Typography Experiment"
    >
      {/* Blueprint Header */}
      <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-b border-border-subtle/60 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
          <span className="uppercase tracking-widest font-semibold text-ink">TYPE MATRIX</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMode(mode === 'stretch' ? 'wave' : 'stretch')}
            className="px-2 py-0.5 rounded bg-canvas border border-border-subtle text-ink hover:border-accent-violet/40 transition-colors cursor-pointer"
            aria-label="Toggle motion mode"
          >
            MODE: {mode.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={cyclePhrase}
            className="p-1 rounded bg-canvas border border-border-subtle text-ink hover:text-accent-violet transition-colors cursor-pointer"
            aria-label="Cycle next typography phrase"
            title="Next Word"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Kinetic Typography Stage */}
      <div className="flex-1 flex flex-col items-center justify-center py-4 relative">
        <div
          className="flex items-center justify-center transition-all duration-300 ease-out"
          style={{
            letterSpacing: `${dynamicTracking}em`,
          }}
        >
          {currentWord.split('').map((char, i) => {
            // Calculate individual letter kinetic displacement
            let translateY = 0
            let rotate = 0
            let scale = 1

            if (isHovered && canAnimate) {
              if (mode === 'wave') {
                translateY = Math.sin(pointerOffset.x * 3 + i * 0.7) * 9
                rotate = Math.cos(pointerOffset.y * 2 + i * 0.5) * 4
              } else {
                // Stretch / Proximity Mode
                const charCenterOffset = (i - (currentWord.length - 1) / 2) / (currentWord.length / 2)
                const dist = Math.abs(charCenterOffset - pointerOffset.x)
                translateY = -Math.max(0, (1 - dist) * 10)
                scale = 1 + Math.max(0, (1 - dist) * 0.14)
              }
            }

            return (
              <span
                key={`${char}-${i}`}
                className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-ink transition-transform duration-150 inline-block will-change-transform hover:text-accent-violet"
                style={{
                  transform: `translate3d(0, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`,
                }}
              >
                {char}
              </span>
            )
          })}
        </div>

        {/* Dynamic Responsive Underline Accent */}
        <div
          className="h-0.5 bg-gradient-to-r from-accent-violet via-accent-coral to-accent-mint rounded-full mt-3 transition-all duration-200"
          style={{
            width: isHovered ? `${Math.min(90, 45 + Math.abs(pointerOffset.x) * 45)}%` : '40%',
            opacity: isHovered ? 0.85 : 0.4,
            transform: `translate3d(${pointerOffset.x * 12}px, 0, 0)`,
          }}
        />
      </div>

      {/* Blueprint Footer Metrics */}
      <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-t border-border-subtle/60 pt-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-accent-violet" />
          <span>TRACKING: {dynamicTracking.toFixed(3)}em</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>X: {pointerOffset.x.toFixed(2)}</span>
          <span>&bull;</span>
          <span>Y: {pointerOffset.y.toFixed(2)}</span>
        </div>
        <span className="uppercase text-ink font-medium">MOVE CURSOR</span>
      </div>
    </div>
  )
}
