export default function FloatingShape({
  type = 'cross',
  size = 16,
  className = '',
  accent = 'default',
}) {
  const accentColorMap = {
    default: 'text-border-strong',
    violet: 'text-accent-violet/40',
    coral: 'text-accent-coral/40',
    mint: 'text-accent-mint/40',
    'warm-yellow': 'text-accent-warm-yellow/50',
  }

  const colorClass = accentColorMap[accent] || accentColorMap.default

  const renderShape = () => {
    switch (type) {
      case 'cross':
        return (
          <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        )
      case 'ring':
        return (
          <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="6" />
          </svg>
        )
      case 'square':
        return (
          <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="10" height="10" />
          </svg>
        )
      case 'dot':
        return (
          <svg width={size} height={size} viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>
        )
      case 'arc':
        return (
          <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 13 A7 7 0 0 1 13 3" />
          </svg>
        )
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        )
    }
  }

  return (
    <div
      className={`inline-flex items-center justify-center select-none pointer-events-none ${colorClass} ${className}`}
      aria-hidden="true"
    >
      {renderShape()}
    </div>
  )
}
