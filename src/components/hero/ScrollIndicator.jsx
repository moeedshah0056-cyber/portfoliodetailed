import { useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'

export default function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollClick = () => {
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })
    }
  }

  return (
    <button
      type="button"
      onClick={handleScrollClick}
      aria-label="Scroll to explore work"
      className={`hero-scroll-indicator group inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-ink-muted uppercase transition-all duration-500 hover:text-ink ${
        scrolled ? 'opacity-0 pointer-events-none translate-y-3' : 'opacity-100 translate-y-0'
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent-violet group-hover:scale-125 transition-transform" />
      <span>SCROLL TO EXPLORE</span>
      <div className="w-5 h-5 rounded-full border border-border-subtle flex items-center justify-center transition-transform group-hover:translate-y-0.5">
        <ArrowDown className="w-3 h-3 text-ink-muted group-hover:text-ink transition-colors animate-bounce" />
      </div>
    </button>
  )
}
