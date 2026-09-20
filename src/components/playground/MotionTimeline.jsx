import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, RotateCcw, Sliders } from 'lucide-react'
import gsap from 'gsap'

export default function MotionTimeline() {
  const containerRef = useRef(null)
  const timelineRef = useRef(null)
  const [activeEase, setActiveEase] = useState('power3.out')
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !prefersReduced
  })

  const easePresets = [
    { label: 'POWER3.OUT', value: 'power3.out', desc: 'Editorial Snappy' },
    { label: 'EXPO.OUT', value: 'expo.out', desc: 'Rapid Deceleration' },
    { label: 'BACK.OUT', value: 'back.out(1.5)', desc: 'Tactile Overshoot' },
  ]

  const runAnimation = useCallback((easeChoice = activeEase) => {
    if (!containerRef.current || !canAnimate) return

    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    setIsPlaying(true)
    setProgress(0)

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.timeline-node')

      timelineRef.current = gsap.timeline({
        onUpdate: function () {
          setProgress(Math.round(this.progress() * 100))
        },
        onComplete: function () {
          setIsPlaying(false)
        },
      })

      // Stage 1: Initial reset
      timelineRef.current.set(items, {
        y: 24,
        opacity: 0,
        scale: 0.92,
        rotate: -3,
      })

      // Stage 2: Staggered transition with active ease
      timelineRef.current.to(items, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        stagger: 0.08,
        duration: 0.75,
        ease: easeChoice,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [activeEase, canAnimate])

  useEffect(() => {
    runAnimation()

    return () => {
      if (timelineRef.current) timelineRef.current.kill()
    }
  }, [runAnimation])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-canvas-subtle p-4 sm:p-5 border border-border-subtle/80 flex flex-col justify-between overflow-hidden select-none"
      aria-label="Interactive Motion Timeline and Easing Inspector"
    >
      {/* Top Header & Easing Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-ink-muted">
          <Sliders className="w-3.5 h-3.5 text-accent-warm-yellow" />
          <span className="font-semibold text-ink uppercase tracking-wider">MOTION TIMELINE</span>
        </div>

        {/* Easing Preset Pills */}
        <div className="flex items-center gap-1 text-[10px] font-mono">
          {easePresets.map((ease) => (
            <button
              key={ease.value}
              type="button"
              onClick={() => setActiveEase(ease.value)}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                activeEase === ease.value
                  ? 'bg-ink text-canvas font-bold shadow-2xs'
                  : 'bg-canvas border border-border-subtle text-ink-muted hover:text-ink'
              }`}
            >
              {ease.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Motion Stage: Staggered Specimen Nodes */}
      <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 py-4">
        {[
          { num: '01', label: 'INITIAL', accent: 'border-accent-violet/30' },
          { num: '02', label: 'ACCEL', accent: 'border-accent-coral/30' },
          { num: '03', label: 'TRANSIT', accent: 'border-accent-warm-yellow/30' },
          { num: '04', label: 'SETTLE', accent: 'border-accent-mint/30' },
        ].map((node) => (
          <div
            key={node.num}
            className={`timeline-node flex-1 max-w-[90px] aspect-[4/5] rounded-lg bg-canvas-card border ${node.accent} p-2.5 flex flex-col justify-between shadow-xs will-change-transform`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
              <span>{node.num}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
            </div>

            <div className="space-y-1 my-auto">
              <div className="h-1.5 w-full bg-border-strong/40 rounded-full" />
              <div className="h-1.5 w-2/3 bg-border-subtle rounded-full" />
            </div>

            <span className="text-[9px] font-mono text-ink-muted uppercase tracking-wider">
              {node.label}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Track & Replay Trigger */}
      <div className="space-y-2 border-t border-border-subtle/60 pt-2">
        {/* Timeline Progress Bar */}
        <div className="w-full h-1 bg-border-subtle rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-warm-yellow transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Blueprint Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span>DUR: 0.75S</span>
            <span>&bull;</span>
            <span>STAGGER: 0.08S</span>
          </div>

          <button
            type="button"
            onClick={() => runAnimation()}
            disabled={isPlaying}
            className="inline-flex items-center gap-1.5 text-ink hover:text-accent-warm-yellow font-semibold transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Replay motion timeline animation"
          >
            {isPlaying ? (
              <>
                <RotateCcw className="w-3 h-3 animate-spin text-accent-warm-yellow" />
                <span>PLAYING ({progress}%)</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current text-accent-warm-yellow" />
                <span>REPLAY SEQUENCE</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
