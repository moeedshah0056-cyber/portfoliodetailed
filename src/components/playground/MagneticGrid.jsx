import { useState, useRef } from 'react'
import { Activity } from 'lucide-react'

export default function MagneticGrid() {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [activeCount, setActiveCount] = useState(0)

  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !prefersReduced
  })

  // 6 columns x 4 rows = 24 cells
  const cols = 6
  const rows = 4
  const totalCells = cols * rows

  const handlePointerMove = (e) => {
    if (!canAnimate || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const normX = (e.clientX - rect.left) / rect.width
    const normY = (e.clientY - rect.top) / rect.height
    setMousePos({ x: normX, y: normY })

    // Count how many cells are currently within proximity
    let active = 0
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = (c + 0.5) / cols
        const cy = (r + 0.5) / rows
        const dist = Math.hypot((normX - cx) * 1.5, normY - cy)
        if (dist < 0.3) active++
      }
    }
    setActiveCount(active)
  }

  const handlePointerLeave = () => {
    setMousePos({ x: -10, y: -10 })
    setActiveCount(0)
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-canvas-subtle p-4 sm:p-5 border border-border-subtle/80 flex flex-col justify-between overflow-hidden select-none"
      aria-label="Proximity-driven Magnetic Matrix Experiment"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-b border-border-subtle/60 pb-2">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-accent-mint" />
          <span className="font-semibold text-ink uppercase tracking-wider">MAGNETIC MATRIX</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PROXIMITY: 80PX</span>
          <span>&bull;</span>
          <span className="text-accent-mint font-semibold">ACTIVE: {activeCount}</span>
        </div>
      </div>

      {/* Grid Canvas */}
      <div className="flex-1 grid grid-cols-6 grid-rows-4 gap-2 sm:gap-3 py-3 relative">
        {Array.from({ length: totalCells }).map((_, index) => {
          const colIndex = index % cols
          const rowIndex = Math.floor(index / cols)

          // Normalized node center
          const cx = (colIndex + 0.5) / cols
          const cy = (rowIndex + 0.5) / rows

          // Distance calculation in normalized coordinate space
          let scale = 1
          let isNear = false
          let isCenter = false
          let translateX = 0
          let translateY = 0

          if (canAnimate && mousePos.x >= 0) {
            const dx = (mousePos.x - cx) * 1.5
            const dy = mousePos.y - cy
            const dist = Math.hypot(dx, dy)

            if (dist < 0.28) {
              isNear = true
              const factor = 1 - dist / 0.28
              scale = 1 + factor * 0.35
              translateX = dx * factor * 14
              translateY = dy * factor * 14
              if (dist < 0.1) isCenter = true
            }
          }

          return (
            <div
              key={index}
              className={`rounded-md border flex items-center justify-center relative transition-colors duration-150 ${
                isCenter
                  ? 'bg-accent-mint/20 border-accent-mint shadow-xs'
                  : isNear
                  ? 'bg-canvas-card border-accent-mint/40 shadow-2xs'
                  : 'bg-canvas/50 border-border-subtle/50'
              }`}
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                transitionProperty: 'transform, background-color, border-color',
                transitionDuration: '0.12s',
                transitionTimingFunction: 'ease-out',
              }}
              title={`Node [${colIndex}, ${rowIndex}]`}
            >
              {/* Center Dot or Cross */}
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
                  isCenter
                    ? 'bg-accent-mint scale-150'
                    : isNear
                    ? 'bg-accent-mint/80'
                    : 'bg-border-strong'
                }`}
              />

              {/* Node coordinate identifier */}
              <span className="absolute bottom-0.5 right-1 text-[8px] font-mono text-ink-muted/40 hidden sm:inline">
                {colIndex},{rowIndex}
              </span>
            </div>
          )
        })}
      </div>

      {/* Blueprint Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-t border-border-subtle/60 pt-2">
        <span className="uppercase">VECTOR ATTRACTION: ACTIVE</span>
        <span className="text-ink font-medium">HOVER TO DISTORT</span>
      </div>
    </div>
  )
}
