import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Simple active section check based on scroll position
      const sections = ['contact', 'services', 'about', 'work']
      const scrollPosition = window.scrollY + 120

      let current = 'home'
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el && el.offsetTop <= scrollPosition) {
          current = sectionId
          break
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    if (targetId === 'home' || !targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/85 backdrop-blur-md border-b border-border-subtle py-3 shadow-xs'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-ink font-semibold tracking-tight text-sm select-none"
          aria-label="Moeed — Creative Developer Home"
        >
          <span className="font-display tracking-normal text-base font-bold">MOEED</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet transition-transform duration-300 group-hover:scale-150" />
          <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest pl-1.5 border-l border-border-subtle">
            DEV
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link-underline text-xs font-mono tracking-widest uppercase transition-colors py-1 ${
                      isActive
                        ? 'text-ink font-bold active'
                        : 'text-ink-secondary hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right CTA with Tactile Magnetic Pull */}
        <div className="hidden md:flex items-center">
          <MagneticButton strength={0.3} maxOffset={5}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink text-canvas text-xs font-semibold tracking-wide uppercase transition-all duration-200 hover:bg-ink/90 active:scale-95 shadow-xs"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-ink hover:bg-canvas-subtle transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-canvas/98 backdrop-blur-xl border-b border-border-subtle shadow-lg transition-all duration-300 ease-in-out px-6 py-8 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block py-2 text-base font-medium tracking-tight transition-colors border-b border-border-subtle/50 ${
                      isActive ? 'text-accent-violet font-semibold' : 'text-ink hover:text-accent-violet'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-ink text-canvas text-sm font-semibold tracking-wide uppercase transition-all"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
