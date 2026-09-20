import { useState, useEffect } from 'react'

export default function CursorAura() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return hasFinePointer && !prefersReduced
  })

  useEffect(() => {
    if (!enabled) return

    const handlePointerMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handlePointerLeave = () => {
      setVisible(false)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-accent-violet/30 border border-accent-violet/40 pointer-events-none z-[9999] transition-opacity duration-300 ease-out will-change-transform ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate3d(${pos.x - 5}px, ${pos.y - 5}px, 0)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.2s, 0.06s',
        transitionTimingFunction: 'ease-out',
      }}
      aria-hidden="true"
    />
  )
}
