import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { contactData } from '../../data/contact'
import ContactDetails from '../contact/ContactDetails'
import ContactForm from '../contact/ContactForm'
import AmbientBackground from '../ui/AmbientBackground'
import { Terminal, Sparkles } from 'lucide-react'

/**
 * Contact Section (Phase 12)
 * 
 * Final editorial call-to-action inviting genuine collaboration and technical inquiries:
 * - Editorial headline with Space Grotesk typography & violet accent
 * - Direct contact details, availability status, and social channels
 * - Minimal, accessible 3-field contact form with client-side validation
 * - Restrained AmbientBackground with CONNECT watermark
 */
export default function Contact() {
  const containerRef = useRef(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    // Respect accessibility reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true

          const ctx = gsap.context(() => {
            const tl = gsap.timeline({
              defaults: { ease: 'power3.out', duration: 0.75 },
            })

            tl.fromTo(
              '.contact-eyebrow',
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5 }
            )
              .fromTo(
                '.contact-heading',
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.3'
              )
              .fromTo(
                '.contact-description',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.4'
              )
              .fromTo(
                '.contact-details',
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.65 },
                '-=0.3'
              )
              .fromTo(
                '.contact-form',
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.4'
              )
          }, containerRef)

          return () => ctx.revert()
        }
      },
      { threshold: 0.12 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Ambient Canvas Atmosphere */}
      <AmbientBackground
        accent="violet"
        secondaryAccent="coral"
        watermarkText="CONNECT"
        watermarkPosition="right"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Editorial 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Narrative & Contact Form */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Header Block */}
            <header className="flex flex-col gap-6">
              {/* Eyebrow */}
              <div className="contact-eyebrow inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
                  {contactData.eyebrow}
                </span>
              </div>

              {/* Dominant Editorial Headline */}
              <h2
                id="contact-heading"
                className="contact-heading font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              >
                LET&apos;S BUILD<br />
                <span className="text-accent-violet">SOMETHING</span><br />
                THOUGHTFUL.
              </h2>

              {/* Supporting Copy */}
              <p className="contact-description type-body text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl">
                {contactData.description}
              </p>
            </header>

            {/* Accessible Contact Form */}
            <ContactForm
              recipientEmail={contactData.email}
              formspreeEndpoint={contactData.formspreeEndpoint}
            />
          </div>

          {/* Right Column (5 cols): Contact Details, Status & Specimen */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-4">
            <ContactDetails contact={contactData} />
          </div>
        </div>

        {/* Editorial Footnote / Technical Sign-off */}
        <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-violet" />
            <span className="font-semibold text-ink uppercase tracking-wider">
              OPEN TO CONVERSATIONS // FRONTEND ARCHITECTURE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-warm-yellow" />
            <span>ACCESSIBLE &bull; PERFORMANCE-MINDED &bull; PURPOSE-BUILT</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
