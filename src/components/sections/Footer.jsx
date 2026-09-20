import { ArrowUp, Terminal } from 'lucide-react'

/**
 * Premium Editorial Footer Component (Phase 13)
 * 
 * Provides a quiet, confident, and semantic ending to the portfolio publication:
 * - Brand alignment with Navbar
 * - Typographic statement with deliberate violet accentuation
 * - Accessible section navigation with reduced-motion aware scrolling
 * - Subtle back-to-top control
 * - Technical metadata and copyright attribution
 */
export default function Footer() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targetId = href.replace('#', '')

    if (targetId === 'home' || !targetId) {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    } else {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        })
      }
    }
  }

  const handleBackToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <footer
      id="colophon"
      className="relative border-t border-border-subtle bg-canvas text-ink pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden select-none"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-20 relative z-10">
        {/* Top Editorial Row: Brand & Large Typographic Statement + Navigation & Utilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Brand Identity & Architectural Headline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Brand Logo Lockup */}
            <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
              <span className="font-display tracking-normal text-base font-bold">MOEED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" aria-hidden="true" />
              <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest pl-1.5 border-l border-border-subtle">
                DEV
              </span>
            </div>

            {/* Dominant Typographic Editorial Statement */}
            <div className="flex flex-col">
              <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.08] tracking-[-0.03em] max-w-lg">
                BUILD WITH{' '}
                <span className="text-accent-violet">INTENTION.</span>
              </p>
              <p className="type-body text-sm sm:text-base text-ink-secondary mt-3 max-w-md leading-relaxed">
                Building digital experiences with code, systems &amp; intention. Designed to feel deliberate rather than decorative.
              </p>
            </div>
          </div>

          {/* Navigation Directory & Utility Back-to-Top (5 cols) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-start justify-between gap-8 pt-2">
            {/* Semantic Navigation Section */}
            <nav aria-label="Footer Navigation" className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-ink-muted">
                Directory
              </span>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="nav-link-underline inline-block text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-ink transition-colors py-1 focus-visible:outline-accent-violet"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Subtle Back To Top Action */}
            <div className="flex flex-col items-start sm:items-end">
              <button
                type="button"
                onClick={handleBackToTop}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-canvas-card border border-border-subtle hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink transition-all duration-200 shadow-2xs hover:shadow-xs min-h-[44px] cursor-pointer"
                aria-label="Back to top of page"
              >
                <span>BACK TO TOP</span>
                <ArrowUp
                  className="w-3.5 h-3.5 text-accent-violet transition-transform duration-200 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Technical Bar & Copyright */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2 text-ink-secondary">
            <span className="font-semibold text-ink">&copy; 2026 MOEED SHAH</span>
            <span className="text-border-strong">&bull;</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-3">
            <Terminal className="w-3.5 h-3.5 text-accent-violet" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-wider">
              REACT // JAVASCRIPT // TAILWIND // GSAP
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
