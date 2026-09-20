import { useState } from 'react'
import { Layout, Sparkles, Terminal } from 'lucide-react'

export default function ProjectPreview({ image, title, number, accent = 'violet' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches
    return !prefersReduced && !isTouch
  })

  const handleMouseMove = (e) => {
    if (!canAnimate) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8 // -4px to +4px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6 // -3px to +3px
    setMousePos({ x, y })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  // Map accent prop to styling classes
  const accentStyles = {
    violet: {
      bgGradient: 'from-accent-violet/12 via-canvas to-accent-soft-lavender/30',
      badge: 'text-accent-violet border-accent-violet/30 bg-accent-violet/10',
      dot: 'bg-accent-violet',
      border: 'border-accent-violet/30',
    },
    mint: {
      bgGradient: 'from-accent-mint/12 via-canvas to-accent-soft-lavender/25',
      badge: 'text-accent-mint border-accent-mint/30 bg-accent-mint/10',
      dot: 'bg-accent-mint',
      border: 'border-accent-mint/30',
    },
    coral: {
      bgGradient: 'from-accent-coral/12 via-canvas to-accent-warm-yellow/20',
      badge: 'text-accent-coral border-accent-coral/30 bg-accent-coral/10',
      dot: 'bg-accent-coral',
      border: 'border-accent-coral/30',
    },
    'warm-yellow': {
      bgGradient: 'from-accent-warm-yellow/15 via-canvas to-accent-coral/10',
      badge: 'text-accent-warm-yellow border-accent-warm-yellow/30 bg-accent-warm-yellow/10',
      dot: 'bg-accent-warm-yellow',
      border: 'border-accent-warm-yellow/30',
    },
  }[accent] || {
    bgGradient: 'from-accent-violet/12 via-canvas to-accent-soft-lavender/30',
    badge: 'text-accent-violet border-accent-violet/30 bg-accent-violet/10',
    dot: 'bg-accent-violet',
    border: 'border-accent-violet/30',
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="card-sweep relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-canvas-card border border-border-subtle shadow-xs transition-all duration-500 ease-out group-hover:shadow-md group-hover:border-border-strong will-change-transform"
      style={{
        transform: canAnimate && isHovered
          ? `perspective(1000px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg) scale3d(1.015, 1.015, 1.015)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered
          ? 'transform 0.15s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease-out, border-color 0.3s ease-out',
      }}
    >
      {image ? (
        /* Real Project Image Preview (Active when image URL/import is supplied in projects.js) */
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        /* Abstract Editorial Interface Specimen (Development Placeholder) */
        <div className={`w-full h-full flex flex-col bg-gradient-to-br ${accentStyles.bgGradient} p-4 sm:p-6 select-none`}>
          {/* Mock Browser Frame Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle text-ink-muted">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
            </div>

            {/* Mock Specimen URL Bar */}
            <div className="px-3 py-1 rounded bg-canvas border border-border-subtle text-[10px] font-mono text-ink-muted flex items-center gap-1.5 max-w-[200px] truncate">
              <span className={`w-1.5 h-1.5 rounded-full ${accentStyles.dot}`} />
              <span className="truncate">specimen://{number ? `project-${number}` : 'preview'}.view</span>
            </div>

            {/* Specimen Tag */}
            <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-ink-muted">
              <Terminal className="w-3 h-3" />
              <span>DEV SPECIMEN</span>
            </div>
          </div>

          {/* Specimen Canvas Area */}
          <div className="flex-1 relative flex flex-col items-center justify-center py-4 sm:py-6">
            {/* Subtle Blueprint Crosshairs */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-ink-muted/40">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-ink-muted/40">+</span>
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-ink-muted/40">+</span>
            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-ink-muted/40">+</span>

            {/* Center Specimen Wireframe Block */}
            <div className="w-full max-w-[280px] sm:max-w-[340px] p-4 sm:p-5 rounded-lg bg-canvas/80 backdrop-blur-sm border border-border-subtle flex flex-col gap-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
                  INTERFACE WIREFRAME
                </span>
                <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${accentStyles.badge}`}>
                  STAGE // ACTIVE
                </span>
              </div>

              {/* Wireframe Mock Skeletons */}
              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded-full bg-border-strong/30" />
                <div className="h-2 w-full rounded-full bg-border-subtle" />
                <div className="h-2 w-2/3 rounded-full bg-border-subtle" />
              </div>

              {/* Grid Metric Mock */}
              <div className="pt-2 border-t border-border-subtle/60 flex items-center justify-between text-[10px] font-mono text-ink-muted">
                <span className="flex items-center gap-1">
                  <Layout className="w-3 h-3" />
                  <span>RESPONSIVE</span>
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>GPU MOTION</span>
                </span>
              </div>
            </div>

            {/* Watermark Label */}
            <div className="absolute bottom-1 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted/70">
                PREVIEW // REAL SCREENSHOTS ADDED IN PRODUCTION
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
