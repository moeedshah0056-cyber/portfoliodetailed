import { useState, useEffect, useRef } from 'react'
import { CheckCircle2, Loader2, ArrowUpRight, Cpu } from 'lucide-react'

export default function UIStateLab() {
  const [currentState, setCurrentState] = useState('IDLE') // 'IDLE' | 'HOVER' | 'ACTIVE' | 'PROCESSING' | 'SUCCESS'
  const timerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const triggerLifecycle = () => {
    if (currentState === 'PROCESSING') return

    setCurrentState('ACTIVE')

    timerRef.current = setTimeout(() => {
      setCurrentState('PROCESSING')

      timerRef.current = setTimeout(() => {
        setCurrentState('SUCCESS')

        timerRef.current = setTimeout(() => {
          setCurrentState('IDLE')
        }, 2200)
      }, 1000)
    }, 200)
  }

  const stateProfiles = {
    IDLE: {
      label: 'RESTING SPEC',
      badge: 'border-border-subtle text-ink-muted bg-canvas',
      desc: 'Neutral rest state awaiting user interaction.',
    },
    HOVER: {
      label: 'AFFORDANCE LIFT',
      badge: 'border-accent-violet/40 text-accent-violet bg-accent-violet/10',
      desc: 'Elevated border and subtle translate informing clickability.',
    },
    ACTIVE: {
      label: 'TACTILE PRESS',
      badge: 'border-accent-coral/40 text-accent-coral bg-accent-coral/10',
      desc: 'Scale 0.98 compression providing tactile feedback.',
    },
    PROCESSING: {
      label: 'ASYNC DISPATCH',
      badge: 'border-accent-warm-yellow/40 text-accent-warm-yellow bg-accent-warm-yellow/10',
      desc: 'Indeterminate progress communicating non-blocking action.',
    },
    SUCCESS: {
      label: 'CONFIRMATION',
      badge: 'border-accent-mint/40 text-accent-mint bg-accent-mint/10',
      desc: 'Positive confirmation feedback before auto-settling.',
    },
  }

  return (
    <div
      className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-canvas-subtle p-4 sm:p-6 border border-border-subtle/80 flex flex-col justify-between overflow-hidden select-none"
      aria-label="Component State Machine Simulator"
    >
      {/* Top Header & State Selector Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-ink-muted">
          <Cpu className="w-3.5 h-3.5 text-accent-violet" />
          <span className="font-semibold text-ink uppercase tracking-wider">STATE MACHINE</span>
        </div>

        {/* State Selection Bar */}
        <div className="flex items-center gap-1 overflow-x-auto text-[10px] font-mono">
          {['IDLE', 'HOVER', 'ACTIVE', 'PROCESSING', 'SUCCESS'].map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => {
                if (timerRef.current) clearTimeout(timerRef.current)
                setCurrentState(state)
              }}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                currentState === state
                  ? 'bg-ink text-canvas font-bold'
                  : 'bg-canvas border border-border-subtle text-ink-muted hover:text-ink'
              }`}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive State Demonstration Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center py-4">
        {/* Interactive Target Component */}
        <button
          type="button"
          onClick={triggerLifecycle}
          onMouseEnter={() => {
            if (currentState === 'IDLE') setCurrentState('HOVER')
          }}
          onMouseLeave={() => {
            if (currentState === 'HOVER') setCurrentState('IDLE')
          }}
          className={`relative px-6 py-3.5 rounded-xl border transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-xs ${
            currentState === 'IDLE'
              ? 'bg-canvas-card border-border-subtle text-ink hover:border-border-strong hover:shadow-sm'
              : currentState === 'HOVER'
              ? 'bg-canvas-card border-accent-violet text-accent-violet shadow-sm -translate-y-1'
              : currentState === 'ACTIVE'
              ? 'bg-canvas-card border-accent-coral text-accent-coral scale-95'
              : currentState === 'PROCESSING'
              ? 'bg-canvas-card border-accent-warm-yellow text-ink cursor-wait'
              : 'bg-canvas-card border-accent-mint text-accent-mint shadow-xs'
          }`}
          aria-label="Trigger component state lifecycle"
        >
          {currentState === 'PROCESSING' ? (
            <Loader2 className="w-4 h-4 animate-spin text-accent-warm-yellow" />
          ) : currentState === 'SUCCESS' ? (
            <CheckCircle2 className="w-4 h-4 text-accent-mint" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
          )}

          <div className="flex flex-col text-left">
            <span className="text-xs font-mono font-bold tracking-tight text-ink">
              {currentState === 'PROCESSING'
                ? 'SYNCING TOKEN...'
                : currentState === 'SUCCESS'
                ? 'STATE RESOLVED'
                : 'DEPLOY EXPERIENCE'}
            </span>
            <span className="text-[10px] font-mono text-ink-muted">
              {currentState === 'PROCESSING'
                ? 'Awaiting response'
                : currentState === 'SUCCESS'
                ? '200 OK • 118ms'
                : 'Click to trigger flow'}
            </span>
          </div>

          <ArrowUpRight
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              currentState === 'HOVER' ? 'translate-x-0.5 -translate-y-0.5 text-accent-violet' : 'text-ink-muted'
            }`}
          />
        </button>

        {/* State Behavior Note */}
        <p className="text-[11px] font-mono text-ink-muted mt-3 text-center max-w-xs">
          {stateProfiles[currentState]?.desc}
        </p>
      </div>

      {/* Blueprint Footer with State Inspector Output */}
      <div className="flex items-center justify-between text-[10px] font-mono border-t border-border-subtle/60 pt-2 text-ink-muted">
        <div className="flex items-center gap-1.5">
          <span className="uppercase text-ink font-semibold">ACTIVE STATE:</span>
          <span className={`px-1.5 py-0.2 rounded border font-bold ${stateProfiles[currentState]?.badge}`}>
            {currentState}
          </span>
        </div>

        <span className="hidden sm:inline-block uppercase text-ink-muted">
          TRANSITION: 250MS EASE-OUT
        </span>
      </div>
    </div>
  )
}
