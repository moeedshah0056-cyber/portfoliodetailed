import { useState } from 'react'
import { Copy, Check, ArrowUpRight, Radio, Mail } from 'lucide-react'

/**
 * ContactDetails Component
 * 
 * Displays:
 * - Current availability status indicator
 * - Direct email communication channel with quick-copy utility
 * - Social / professional channels (GitHub, LinkedIn)
 * - Pure CSS interaction protocol diagram
 */
export default function ContactDetails({ contact }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    if (!contact.email || contact.email === 'YOUR_EMAIL_HERE') {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <aside className="contact-details flex flex-col gap-8 select-none" aria-label="Direct contact details">
      {/* Availability Status Card */}
      <div className="flex flex-col gap-2 p-5 rounded-2xl bg-canvas-card border border-border-subtle shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted pb-3 border-b border-border-subtle/80">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-accent-mint animate-pulse" aria-hidden="true" />
            STATUS
          </span>
          <span className="text-[10px] uppercase tracking-widest text-ink-secondary">CURRENT</span>
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-mint shadow-[0_0_8px_rgba(101,214,194,0.6)]" />
          <span className="font-mono text-xs sm:text-sm font-semibold text-ink uppercase tracking-wide">
            {contact.availabilityLabel}
          </span>
        </div>
      </div>

      {/* Direct Communication Details */}
      <div className="flex flex-col gap-4 p-6 rounded-2xl bg-canvas-card border border-border-subtle shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted pb-3 border-b border-border-subtle/80">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-accent-violet" aria-hidden="true" />
            DIRECT INQUIRY
          </span>
          <span className="text-[10px] uppercase tracking-widest">EMAIL</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3 bg-canvas-subtle/70 px-3.5 py-2.5 rounded-lg border border-border-subtle">
            <span className="font-mono text-xs sm:text-sm font-medium text-ink truncate select-all">
              {contact.email}
            </span>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-ink-secondary hover:text-accent-violet transition-colors py-1 px-2 rounded hover:bg-canvas-card"
              aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent-mint" aria-hidden="true" />
                  <span className="text-accent-mint font-semibold">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] font-mono text-ink-muted">
            Placeholder email. Configure with your real address when ready.
          </p>
        </div>

        {/* Social / Professional Profiles */}
        <div className="pt-4 border-t border-border-subtle/80 flex flex-col gap-2.5">
          <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest font-medium">
            Channels
          </span>
          <div className="flex flex-wrap gap-2">
            {contact.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group/link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-subtle/60 hover:bg-canvas-subtle border border-border-subtle hover:border-border-strong text-xs font-mono text-ink transition-all shadow-2xs"
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span>{social.label}</span>
                <span className="text-[9px] text-ink-muted border-l border-border-subtle pl-1.5">
                  {social.tag}
                </span>
                <ArrowUpRight className="w-3 h-3 text-ink-muted group-hover/link:text-accent-violet group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Pure CSS Interaction Protocol Diagram (Section 15) */}
      <div
        className="p-5 rounded-2xl bg-canvas-card border border-border-subtle shadow-xs flex flex-col gap-3"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted uppercase tracking-wider pb-2 border-b border-border-subtle/80">
          <span>{contact.specimen.badge}</span>
          <span className="text-accent-violet">CSS SPEC</span>
        </div>

        <div className="flex items-center justify-between gap-1 py-1">
          {contact.specimen.steps.map((step, idx) => (
            <div key={step.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center text-center px-2 py-1.5 rounded bg-canvas-subtle/70 border border-border-subtle flex-1">
                <span className="font-mono text-[10px] font-bold text-ink tracking-tight">
                  {step.label}
                </span>
                <span className="font-mono text-[8px] text-ink-muted truncate max-w-[70px]">
                  {step.sub}
                </span>
              </div>

              {idx < contact.specimen.steps.length - 1 && (
                <span className="font-mono text-xs text-ink-muted px-1.5 font-bold select-none">
                  {contact.specimen.connector}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
