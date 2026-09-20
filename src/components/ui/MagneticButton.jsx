import { useRef, useState } from 'react'

export default function MagneticButton({
  children,
  className = '',
  strength = 0.25,
  maxOffset = 6,
  as: Component = 'div',
  ...props
}) {
  const elementRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [canAnimate] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches
    return !prefersReduced && !isTouch
  })

  const handlePointerMove = (e) => {
    if (!canAnimate || !elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rawX = (e.clientX - centerX) * strength
    const rawY = (e.clientY - centerY) * strength

    // Restrain maximum movement to prevent aggressive drift
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, rawX))
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, rawY))

    setOffset({ x: clampedX, y: clampedY })
    setIsHovered(true)
  }

  const handlePointerLeave = () => {
    if (!canAnimate) return
    setIsHovered(false)
    setOffset({ x: 0, y: 0 })
  }

  return (
    <Component
      ref={elementRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`inline-block will-change-transform ${className}`}
      style={{
        transform: canAnimate
          ? `translate3d(${offset.x}px, ${offset.y}px, 0)`
          : undefined,
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
