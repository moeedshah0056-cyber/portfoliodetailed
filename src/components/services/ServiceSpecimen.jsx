import { useState, useEffect } from 'react'
import {
  Layers,
  Activity,
  Smartphone,
  Tablet,
  Monitor,
  Code2,
  Play,
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react'

export default function ServiceSpecimen({ service, isCompact = false }) {
  // State for Motion timeline specimen
  const [motionState, setMotionState] = useState('idle') // idle | hover | active | settle
  const [isLooping, setIsLooping] = useState(false)

  // State for Responsive viewport specimen
  const [activeViewport, setActiveViewport] = useState('desktop') // desktop | tablet | mobile

  // State for Design Token cascade specimen
  const [activeTokenLayer, setActiveTokenLayer] = useState('type') // type | space | color | component

  // State for Architecture tree data flow
  const [dataFlowActive, setDataFlowActive] = useState(true)

  // Motion Loop cycle
  useEffect(() => {
    if (!isLooping) return
    const sequence = ['idle', 'hover', 'active', 'settle']
    let idx = 0

    const interval = setInterval(() => {
      idx = (idx + 1) % sequence.length
      setMotionState(sequence[idx])
    }, 700)

    return () => clearInterval(interval)
  }, [isLooping])

  if (!service) return null

  // Accent styles map
  const accentColor = {
    violet: {
      text: 'text-accent-violet',
      bg: 'bg-accent-violet',
      bgSubtle: 'bg-accent-violet/10',
      border: 'border-accent-violet/30',
      ring: 'ring-accent-violet/20',
      fill: '#7C3AED'
    },
    coral: {
      text: 'text-accent-coral',
      bg: 'bg-accent-coral',
      bgSubtle: 'bg-accent-coral/10',
      border: 'border-accent-coral/30',
      ring: 'ring-accent-coral/20',
      fill: '#FF6B6B'
    },
    mint: {
      text: 'text-accent-mint',
      bg: 'bg-accent-mint',
      bgSubtle: 'bg-accent-mint/10',
      border: 'border-accent-mint/30',
      ring: 'ring-accent-mint/20',
      fill: '#65D6C2'
    },
    'warm-yellow': {
      text: 'text-accent-warm-yellow',
      bg: 'bg-accent-warm-yellow',
      bgSubtle: 'bg-accent-warm-yellow/10',
      border: 'border-accent-warm-yellow/30',
      ring: 'ring-accent-warm-yellow/20',
      fill: '#F4C95D'
    }
  }[service.accent] || {
    text: 'text-accent-violet',
    bg: 'bg-accent-violet',
    bgSubtle: 'bg-accent-violet/10',
    border: 'border-accent-violet/30',
    ring: 'ring-accent-violet/20',
    fill: '#7C3AED'
  }

  // 1. SPECIMEN: FRONTEND ARCHITECTURE (App -> Components -> Interface)
  const renderArchitectureSpecimen = () => (
    <div className="flex flex-col gap-4 w-full">
      {/* Visual Controls */}
      <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
        <span className="flex items-center gap-1.5">
          <Code2 className={`w-3.5 h-3.5 ${accentColor.text}`} />
          COMPONENT HIERARCHY
        </span>
        <button
          type="button"
          onClick={() => setDataFlowActive((prev) => !prev)}
          className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors border ${
            dataFlowActive
              ? `${accentColor.bgSubtle} ${accentColor.text} ${accentColor.border}`
              : 'bg-canvas border-border-subtle text-ink-muted hover:text-ink'
          }`}
          aria-label="Toggle data flow pulse"
        >
          {dataFlowActive ? 'Data Flow: Active' : 'Data Flow: Paused'}
        </button>
      </div>

      {/* Hierarchical Tree Container */}
      <div className="p-4 rounded-lg bg-canvas border border-border-subtle flex flex-col gap-3 font-mono text-[11px] select-none">
        {/* Level 1: App Root */}
        <div className="flex items-center justify-center">
          <div className={`px-3 py-1.5 rounded border border-border-subtle bg-canvas-card shadow-xs flex items-center gap-2 ${
            dataFlowActive ? 'ring-2 ring-accent-violet/30' : ''
          } transition-all duration-300`}>
            <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
            <span className="font-bold text-ink">AppRoot.jsx</span>
            <span className="text-[9px] text-ink-muted px-1.5 py-0.2 bg-canvas-subtle rounded">Provider</span>
          </div>
        </div>

        {/* Tree Connector 1 */}
        <div className="flex justify-center -my-1">
          <div className="w-px h-4 bg-border-strong relative">
            {dataFlowActive && (
              <span className="absolute top-0 -left-[2px] w-1.5 h-1.5 rounded-full bg-accent-violet animate-ping" />
            )}
          </div>
        </div>

        {/* Level 2: Middle Branch */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2 rounded border border-border-subtle bg-canvas-card flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-ink text-[10px]">StateFlow</span>
              <span className="text-[8px] text-accent-violet font-semibold">REACTIVE</span>
            </div>
            <span className="text-[9px] text-ink-muted">useStore / Context</span>
          </div>

          <div className="p-2 rounded border border-border-subtle bg-canvas-card flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-ink text-[10px]">LayoutOrchestrator</span>
              <span className="text-[8px] text-accent-mint font-semibold">SHELL</span>
            </div>
            <span className="text-[9px] text-ink-muted">Grid / Breakpoints</span>
          </div>
        </div>

        {/* Tree Connector 2 */}
        <div className="grid grid-cols-2 gap-3 -my-1">
          <div className="flex justify-center">
            <div className="w-px h-3 bg-border-strong" />
          </div>
          <div className="flex justify-center">
            <div className="w-px h-3 bg-border-strong" />
          </div>
        </div>

        {/* Level 3: Leaf UI Interfaces */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-1.5 rounded bg-canvas-card border border-border-subtle text-center">
            <span className="text-[9px] text-ink font-semibold block truncate">ViewRender</span>
            <span className="text-[8px] text-ink-muted">DOM / A11y</span>
          </div>
          <div className="p-1.5 rounded bg-canvas-card border border-border-subtle text-center">
            <span className="text-[9px] text-ink font-semibold block truncate">DataGrid</span>
            <span className="text-[8px] text-ink-muted">Async API</span>
          </div>
          <div className="p-1.5 rounded bg-canvas-card border border-border-subtle text-center">
            <span className="text-[9px] text-ink font-semibold block truncate">ActionCTA</span>
            <span className="text-[8px] text-ink-muted">Events</span>
          </div>
        </div>
      </div>
    </div>
  )

  // 2. SPECIMEN: UI & INTERACTION (Motion Timeline & State Machine)
  const renderMotionSpecimen = () => {
    const states = [
      { id: 'idle', label: 'IDLE' },
      { id: 'hover', label: 'HOVER' },
      { id: 'active', label: 'ACTIVE' },
      { id: 'settle', label: 'SETTLE' }
    ]

    return (
      <div className="flex flex-col gap-4 w-full">
        {/* Visual Controls */}
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Activity className={`w-3.5 h-3.5 ${accentColor.text}`} />
            STATE MACHINE
          </span>
          <button
            type="button"
            onClick={() => setIsLooping((prev) => !prev)}
            className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors border flex items-center gap-1 ${
              isLooping
                ? `${accentColor.bgSubtle} ${accentColor.text} ${accentColor.border}`
                : 'bg-canvas border-border-subtle text-ink-muted hover:text-ink'
            }`}
            aria-label="Toggle motion cycle loop"
          >
            {isLooping ? <RotateCcw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
            {isLooping ? 'Cycling' : 'Auto Play'}
          </button>
        </div>

        {/* State Selection Bar */}
        <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-canvas border border-border-subtle">
          {states.map((st) => (
            <button
              key={st.id}
              type="button"
              onClick={() => {
                setIsLooping(false)
                setMotionState(st.id)
              }}
              className={`py-1 text-[10px] font-mono font-semibold rounded uppercase tracking-wider transition-all ${
                motionState === st.id
                  ? 'bg-canvas-card text-ink shadow-xs border border-border-subtle'
                  : 'text-ink-muted hover:text-ink'
              }`}
              aria-label={`Preview state ${st.label}`}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Live Interactive Specimen Stage */}
        <div className="h-32 rounded-lg bg-canvas border border-border-subtle flex flex-col items-center justify-center relative overflow-hidden p-4">
          <div
            className={`transition-all duration-300 transform-gpu cursor-pointer flex items-center justify-center font-mono text-xs font-bold ${
              motionState === 'idle'
                ? 'w-24 h-10 rounded bg-canvas-card text-ink border border-border-strong shadow-xs'
                : motionState === 'hover'
                ? 'w-28 h-11 rounded-md bg-canvas-card text-accent-coral border border-accent-coral shadow-subtle -translate-y-1 scale-105'
                : motionState === 'active'
                ? 'w-28 h-10 rounded-md bg-accent-coral text-white border border-accent-coral shadow-xs translate-y-0.5 scale-95'
                : 'w-24 h-10 rounded-lg bg-accent-coral/10 text-accent-coral border border-accent-coral/40 shadow-xs'
            }`}
            onClick={() => {
              const next = motionState === 'idle' ? 'hover' : motionState === 'hover' ? 'active' : motionState === 'active' ? 'settle' : 'idle'
              setMotionState(next)
            }}
          >
            {motionState.toUpperCase()}
          </div>

          <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-ink-muted">
            <span>curve: cubic-bezier(0.16, 1, 0.3, 1)</span>
            <span>280ms transition</span>
          </div>
        </div>
      </div>
    )
  }

  // 3. SPECIMEN: WEBSITE DEVELOPMENT (Responsive Multi-Device Layouts)
  const renderResponsiveSpecimen = () => {
    const viewports = [
      { id: 'desktop', label: '1440px', icon: Monitor },
      { id: 'tablet', label: '768px', icon: Tablet },
      { id: 'mobile', label: '375px', icon: Smartphone }
    ]

    return (
      <div className="flex flex-col gap-4 w-full">
        {/* Visual Controls */}
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Monitor className={`w-3.5 h-3.5 ${accentColor.text}`} />
            VIEWPORT ADAPTATION
          </span>
          <div className="flex items-center gap-1">
            {viewports.map((vp) => {
              const Icon = vp.icon
              const isSelected = activeViewport === vp.id
              return (
                <button
                  key={vp.id}
                  type="button"
                  onClick={() => setActiveViewport(vp.id)}
                  className={`p-1.5 rounded transition-all border ${
                    isSelected
                      ? `${accentColor.bgSubtle} ${accentColor.text} ${accentColor.border}`
                      : 'bg-canvas border-border-subtle text-ink-muted hover:text-ink'
                  }`}
                  aria-label={`Simulate ${vp.id} viewport`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              )
            })}
          </div>
        </div>

        {/* Morphing Viewport Simulation Box */}
        <div className="h-36 rounded-lg bg-canvas border border-border-subtle p-3 flex flex-col justify-center items-center overflow-hidden">
          <div
            className={`h-full border border-border-strong rounded bg-canvas-card p-2 flex flex-col gap-2 transition-all duration-500 ease-out shadow-xs ${
              activeViewport === 'desktop'
                ? 'w-full max-w-[280px]'
                : activeViewport === 'tablet'
                ? 'w-[200px]'
                : 'w-[120px]'
            }`}
          >
            {/* Header bar */}
            <div className="h-3 rounded bg-canvas-subtle flex items-center justify-between px-1.5">
              <span className="w-1 h-1 rounded-full bg-accent-mint" />
              <div className="flex gap-1">
                <span className="w-3 h-1 rounded-xs bg-ink-muted/30" />
                <span className="w-3 h-1 rounded-xs bg-ink-muted/30" />
              </div>
            </div>

            {/* Layout blocks matching viewport */}
            {activeViewport === 'desktop' && (
              <div className="grid grid-cols-3 gap-1.5 flex-1">
                <div className="col-span-2 rounded bg-accent-mint/10 border border-accent-mint/20 p-1 flex flex-col justify-end">
                  <span className="text-[7px] font-mono text-accent-mint font-semibold">Hero (2 col)</span>
                </div>
                <div className="col-span-1 rounded bg-canvas-subtle p-1 flex flex-col justify-end">
                  <span className="text-[7px] font-mono text-ink-muted">Sidebar</span>
                </div>
              </div>
            )}

            {activeViewport === 'tablet' && (
              <div className="grid grid-cols-2 gap-1.5 flex-1">
                <div className="col-span-2 rounded bg-accent-mint/10 border border-accent-mint/20 p-1">
                  <span className="text-[7px] font-mono text-accent-mint font-semibold">Stacked Hero</span>
                </div>
                <div className="rounded bg-canvas-subtle p-1">
                  <span className="text-[6px] font-mono text-ink-muted">Card A</span>
                </div>
                <div className="rounded bg-canvas-subtle p-1">
                  <span className="text-[6px] font-mono text-ink-muted">Card B</span>
                </div>
              </div>
            )}

            {activeViewport === 'mobile' && (
              <div className="flex flex-col gap-1 flex-1">
                <div className="h-6 rounded bg-accent-mint/10 border border-accent-mint/20 flex items-center px-1">
                  <span className="text-[6px] font-mono text-accent-mint font-semibold">Single Flow</span>
                </div>
                <div className="h-4 rounded bg-canvas-subtle" />
                <div className="h-4 rounded bg-canvas-subtle" />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // 4. SPECIMEN: INTERFACE SYSTEMS (Design Token Cascade)
  const renderTokensSpecimen = () => {
    const layers = [
      { id: 'type', label: 'TYPE' },
      { id: 'space', label: 'SPACE' },
      { id: 'color', label: 'COLOR' },
      { id: 'component', label: 'RESULT' }
    ]

    return (
      <div className="flex flex-col gap-4 w-full">
        {/* Visual Controls */}
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Layers className={`w-3.5 h-3.5 ${accentColor.text}`} />
            DESIGN TOKEN CASCADE
          </span>
          <span className="text-[10px] text-accent-warm-yellow font-semibold uppercase">
            SYSTEM FOUNDATION
          </span>
        </div>

        {/* Token Layers Tab Bar */}
        <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-canvas border border-border-subtle">
          {layers.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setActiveTokenLayer(l.id)}
              className={`py-1 text-[10px] font-mono font-semibold rounded uppercase tracking-wider transition-all ${
                activeTokenLayer === l.id
                  ? 'bg-canvas-card text-ink shadow-xs border border-border-subtle'
                  : 'text-ink-muted hover:text-ink'
              }`}
              aria-label={`Inspect token layer ${l.label}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Dynamic Token Layer Preview Stage */}
        <div className="h-32 rounded-lg bg-canvas border border-border-subtle p-3 flex flex-col justify-center overflow-hidden">
          {activeTokenLayer === 'type' && (
            <div className="flex flex-col gap-1.5 select-none">
              <div className="flex items-baseline justify-between border-b border-border-subtle pb-1">
                <span className="font-display font-bold text-sm text-ink">Space Grotesk</span>
                <span className="font-mono text-[9px] text-ink-muted">--font-display / 700</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border-subtle pb-1">
                <span className="font-sans text-xs text-ink-secondary">Plus Jakarta Sans</span>
                <span className="font-mono text-[9px] text-ink-muted">--font-sans / 400</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] text-accent-warm-yellow">JetBrains Mono</span>
                <span className="font-mono text-[9px] text-ink-muted">--font-mono / 500</span>
              </div>
            </div>
          )}

          {activeTokenLayer === 'space' && (
            <div className="flex flex-col gap-2 font-mono text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-12 text-ink-muted text-[9px]">4px:</span>
                <div className="h-2 w-4 bg-accent-warm-yellow/40 rounded-xs" />
                <span className="text-[9px] text-ink-secondary">--space-1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-ink-muted text-[9px]">8px:</span>
                <div className="h-2 w-8 bg-accent-warm-yellow/60 rounded-xs" />
                <span className="text-[9px] text-ink-secondary">--space-2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-ink-muted text-[9px]">16px:</span>
                <div className="h-2 w-16 bg-accent-warm-yellow/80 rounded-xs" />
                <span className="text-[9px] text-ink-secondary">--space-4</span>
              </div>
            </div>
          )}

          {activeTokenLayer === 'color' && (
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col gap-1 items-center">
                <span className="w-6 h-6 rounded-full bg-accent-violet border border-border-subtle" />
                <span className="font-mono text-[8px] text-ink-muted">#7C3AED</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="w-6 h-6 rounded-full bg-accent-coral border border-border-subtle" />
                <span className="font-mono text-[8px] text-ink-muted">#FF6B6B</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="w-6 h-6 rounded-full bg-accent-mint border border-border-subtle" />
                <span className="font-mono text-[8px] text-ink-muted">#65D6C2</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="w-6 h-6 rounded-full bg-accent-warm-yellow border border-border-subtle" />
                <span className="font-mono text-[8px] text-ink-muted">#F4C95D</span>
              </div>
            </div>
          )}

          {activeTokenLayer === 'component' && (
            <div className="flex items-center justify-center">
              <div className="px-4 py-2 rounded-lg bg-canvas-card border border-border-strong shadow-subtle flex items-center gap-3 select-none">
                <Sparkles className="w-3.5 h-3.5 text-accent-warm-yellow" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xs text-ink">System Specimen</span>
                  <span className="font-mono text-[8px] text-ink-muted">Composed from design tokens</span>
                </div>
                <Check className="w-3.5 h-3.5 text-accent-mint" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Specimen Router
  const renderSpecimenContent = () => {
    switch (service.specimenType) {
      case 'architecture':
        return renderArchitectureSpecimen()
      case 'motion':
        return renderMotionSpecimen()
      case 'responsive':
        return renderResponsiveSpecimen()
      case 'tokens':
        return renderTokensSpecimen()
      default:
        return renderArchitectureSpecimen()
    }
  }

  // Compact Mode (for mobile / inline inside row)
  if (isCompact) {
    return (
      <div className="w-full pt-4 mt-2 border-t border-border-subtle">
        {renderSpecimenContent()}
      </div>
    )
  }

  // Desktop Full Panel Mode
  return (
    <div className="w-full rounded-2xl bg-canvas-card border border-border-subtle p-6 lg:p-8 shadow-subtle flex flex-col gap-6 relative overflow-hidden transition-all duration-300">
      {/* Specimen Header Metadata */}
      <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${accentColor.bg}`} />
          <span className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold">
            SPECIMEN // {service.number}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">
          {service.shortTitle}
        </span>
      </div>

      {/* Dynamic Specimen Interactive Canvas */}
      {renderSpecimenContent()}

      {/* Specimen Footer Notes */}
      <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-ink-muted">
        <span>INTERACTIVE CSS ARTIFACT</span>
        <span className="uppercase text-ink-secondary">{service.specimenLabel}</span>
      </div>
    </div>
  )
}
