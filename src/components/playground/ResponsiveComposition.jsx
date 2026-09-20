import { useState } from 'react'
import { Monitor, Tablet, Smartphone, Maximize2 } from 'lucide-react'

export default function ResponsiveComposition() {
  const [viewport, setViewport] = useState('desktop') // 'desktop' | 'tablet' | 'mobile'

  const viewports = {
    desktop: {
      width: 'w-full',
      maxWidth: '100%',
      label: 'DESKTOP',
      colClass: 'grid-cols-12 gap-3',
      gridInfo: '1440PX // 12-COL ASYMMETRIC',
      icon: Monitor,
    },
    tablet: {
      width: 'w-[75%]',
      maxWidth: '75%',
      label: 'TABLET',
      colClass: 'grid-cols-8 gap-2.5',
      gridInfo: '768PX // 8-COL BALANCED',
      icon: Tablet,
    },
    mobile: {
      width: 'w-[48%] sm:w-[42%]',
      maxWidth: '48%',
      label: 'MOBILE',
      colClass: 'grid-cols-1 gap-2',
      gridInfo: '375PX // 4-COL LINEAR STACK',
      icon: Smartphone,
    },
  }

  const current = viewports[viewport]

  return (
    <div
      className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-canvas-subtle p-4 sm:p-5 border border-border-subtle/80 flex flex-col justify-between overflow-hidden select-none"
      aria-label="Interactive Responsive Viewport Simulator"
    >
      {/* Top Header & Viewport Switcher Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-ink-muted">
          <Maximize2 className="w-3.5 h-3.5 text-accent-mint" />
          <span className="font-semibold text-ink uppercase tracking-wider">RESPONSIVE TOPOLOGY</span>
        </div>

        {/* Viewport Switcher Tabs */}
        <div className="flex items-center gap-1 text-[10px] font-mono">
          {Object.entries(viewports).map(([key, item]) => {
            const IconComponent = item.icon
            return (
              <button
                key={key}
                type="button"
                onClick={() => setViewport(key)}
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                  viewport === key
                    ? 'bg-ink text-canvas font-bold shadow-2xs'
                    : 'bg-canvas border border-border-subtle text-ink-muted hover:text-ink'
                }`}
                aria-label={`Switch to ${item.label} viewport`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Viewport Simulation Stage */}
      <div className="flex-1 flex items-center justify-center py-2 relative">
        <div
          className={`h-full max-h-[160px] sm:max-h-[190px] rounded-lg bg-canvas-card border border-border-strong/40 p-3 flex flex-col justify-between transition-all duration-500 ease-out shadow-xs overflow-hidden ${current.width}`}
        >
          {/* Simulated Window Top Bar */}
          <div className="flex items-center justify-between pb-1.5 border-b border-border-subtle text-[9px] font-mono text-ink-muted">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent-warm-yellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
            </div>
            <span className="truncate max-w-[120px]">{current.gridInfo}</span>
          </div>

          {/* Dynamic Responsive Layout Content */}
          <div className={`flex-1 grid ${current.colClass} items-center py-2 overflow-hidden`}>
            {viewport === 'desktop' ? (
              <>
                <div className="col-span-7 flex flex-col gap-1">
                  <div className="h-2 w-12 rounded-full bg-accent-violet/60" />
                  <div className="h-3 w-4/5 rounded-sm bg-ink" />
                  <div className="h-2 w-3/4 rounded-full bg-border-strong/40" />
                </div>
                <div className="col-span-5 h-full min-h-[50px] rounded-md bg-canvas-subtle border border-border-subtle flex items-center justify-center p-2">
                  <span className="text-[9px] font-mono text-ink-muted">MEDIA COMPONENT</span>
                </div>
              </>
            ) : viewport === 'tablet' ? (
              <>
                <div className="col-span-5 flex flex-col gap-1">
                  <div className="h-2 w-10 rounded-full bg-accent-mint/70" />
                  <div className="h-2.5 w-full rounded-sm bg-ink" />
                  <div className="h-1.5 w-2/3 rounded-full bg-border-strong/40" />
                </div>
                <div className="col-span-3 h-full min-h-[44px] rounded-md bg-canvas-subtle border border-border-subtle flex items-center justify-center p-1">
                  <span className="text-[8px] font-mono text-ink-muted">SPECIMEN</span>
                </div>
              </>
            ) : (
              <div className="col-span-1 flex flex-col gap-1.5 py-1">
                <div className="h-2 w-8 rounded-full bg-accent-coral/70" />
                <div className="h-2.5 w-full rounded-sm bg-ink" />
                <div className="h-1.5 w-3/4 rounded-full bg-border-strong/40" />
                <div className="h-6 w-full rounded-md bg-canvas-subtle border border-border-subtle flex items-center justify-center">
                  <span className="text-[8px] font-mono text-ink-muted">STACKED</span>
                </div>
              </div>
            )}
          </div>

          {/* Simulated Window Bottom Meta */}
          <div className="flex items-center justify-between text-[8px] font-mono text-ink-muted border-t border-border-subtle pt-1">
            <span>FLUID ADAPTATION</span>
            <span className="text-accent-mint font-semibold">REACTIVE</span>
          </div>
        </div>
      </div>

      {/* Blueprint Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-t border-border-subtle/60 pt-2">
        <span className="uppercase text-ink font-semibold">{current.gridInfo}</span>
        <span className="text-ink-secondary">SELECT VIEWPORT TO RE-COMPOSE</span>
      </div>
    </div>
  )
}
