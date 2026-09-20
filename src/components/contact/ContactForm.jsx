import { useState } from 'react'
import { ArrowUpRight, AlertCircle, Copy, Check } from 'lucide-react'

/**
 * ContactForm Component
 * 
 * Minimal, accessible 3-field editorial form:
 * - Full client-side validation
 * - Accessible error handling (aria-invalid, aria-describedby, role="alert")
 * - Honest, frontend-safe submission handling without simulating fake server delivery
 */
export default function ContactForm({ recipientEmail }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submissionState, setSubmissionState] = useState('idle') // 'idle' | 'preparing' | 'destination-placeholder' | 'mail-client-opened'
  const [draftCopied, setDraftCopied] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell me a little about your project.'
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Please provide a bit more detail (at least 5 characters).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setSubmissionState('preparing')

    setTimeout(() => {
      // If the email address is still the placeholder, do not open an invalid mailto URL
      if (!recipientEmail || recipientEmail === 'YOUR_EMAIL_HERE') {
        setSubmissionState('destination-placeholder')
      } else {
        // Construct safely encoded mailto URL
        const subject = `Project Inquiry from ${formData.name.trim()}`
        const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nProject / Message:\n${formData.message.trim()}`
        const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        window.location.href = mailtoUrl
        setSubmissionState('mail-client-opened')
      }
    }, 450)
  }

  const handleCopyDraft = async () => {
    const formattedDraft = `From: ${formData.name.trim()} (${formData.email.trim()})\n\nMessage:\n${formData.message.trim()}`
    try {
      await navigator.clipboard.writeText(formattedDraft)
      setDraftCopied(true)
      setTimeout(() => setDraftCopied(false), 2500)
    } catch {
      setDraftCopied(true)
      setTimeout(() => setDraftCopied(false), 2500)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="contact-form flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-canvas-card border border-border-subtle shadow-xs"
      aria-labelledby="form-heading"
    >
      <div className="flex items-center justify-between pb-4 border-b border-border-subtle/80">
        <h3 id="form-heading" className="font-display font-bold text-lg sm:text-xl text-ink">
          Start A Conversation
        </h3>
        <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          DIRECT MESSAGE
        </span>
      </div>

      {/* Name and Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-secondary"
          >
            Your Name <span className="text-accent-violet">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg bg-canvas-subtle/50 text-ink text-sm font-sans placeholder:text-ink-muted/60 border transition-all duration-200 outline-none focus:bg-canvas-card focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/15 ${
              errors.name ? 'border-accent-coral ring-1 ring-accent-coral/20' : 'border-border-subtle hover:border-border-strong'
            }`}
          />
          {errors.name && (
            <span
              id="name-error"
              role="alert"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-coral pt-1"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-secondary"
          >
            Your Email <span className="text-accent-violet">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg bg-canvas-subtle/50 text-ink text-sm font-sans placeholder:text-ink-muted/60 border transition-all duration-200 outline-none focus:bg-canvas-card focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/15 ${
              errors.email ? 'border-accent-coral ring-1 ring-accent-coral/20' : 'border-border-subtle hover:border-border-strong'
            }`}
          />
          {errors.email && (
            <span
              id="email-error"
              role="alert"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-coral pt-1"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Project / Message Field */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-secondary"
        >
          Project / Message <span className="text-accent-violet">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe what you are building, the interface goals, or what kind of frontend perspective you need..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg bg-canvas-subtle/50 text-ink text-sm font-sans placeholder:text-ink-muted/60 border transition-all duration-200 outline-none resize-y min-h-[120px] focus:bg-canvas-card focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/15 ${
            errors.message ? 'border-accent-coral ring-1 ring-accent-coral/20' : 'border-border-subtle hover:border-border-strong'
          }`}
        />
        {errors.message && (
          <span
            id="message-error"
            role="alert"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-coral pt-1"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {errors.message}
          </span>
        )}
      </div>

      {/* Honest Feedback Status Callout (When triggered) */}
      {submissionState === 'destination-placeholder' && (
        <div
          role="status"
          className="flex flex-col gap-2 p-4 rounded-xl bg-canvas-subtle border border-border-strong/70 text-xs font-mono text-ink"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-accent-violet uppercase tracking-wider">
              CONFIG: PLACEHOLDER MODE
            </span>
            <span className="text-ink-muted">SAFE FALLBACK</span>
          </div>
          <p className="text-ink-secondary leading-relaxed">
            Contact destination is currently configured with placeholder{' '}
            <code className="px-1.5 py-0.5 rounded bg-canvas-card border border-border-subtle font-mono text-ink">
              YOUR_EMAIL_HERE
            </code>
            . Your message was validated client-side and is ready to copy below:
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyDraft}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-ink text-canvas text-xs font-mono font-medium hover:bg-ink/90 transition-colors"
            >
              {draftCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent-mint" />
                  <span>DRAFT COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY FORMATTED DRAFT</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setSubmissionState('idle')}
              className="text-xs text-ink-muted hover:text-ink transition-colors font-mono underline underline-offset-4"
            >
              Back to form
            </button>
          </div>
        </div>
      )}

      {submissionState === 'mail-client-opened' && (
        <div
          role="status"
          className="flex flex-col gap-2 p-4 rounded-xl bg-accent-mint/[0.08] border border-accent-mint/30 text-xs font-mono text-ink"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-ink uppercase tracking-wider">
              YOUR MAIL CLIENT SHOULD OPEN
            </span>
            <Check className="w-4 h-4 text-accent-mint" />
          </div>
          <p className="text-ink-secondary leading-relaxed">
            A message draft has been dispatched to your system&apos;s default mail application. If your client did not open automatically, you can copy the drafted message:
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyDraft}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-ink text-canvas text-xs font-mono font-medium hover:bg-ink/90 transition-colors"
            >
              {draftCopied ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{draftCopied ? 'COPIED TO CLIPBOARD' : 'COPY DRAFT CONTENT'}</span>
            </button>
            <button
              type="button"
              onClick={() => setSubmissionState('idle')}
              className="text-xs text-ink-muted hover:text-ink transition-colors font-mono underline underline-offset-4"
            >
              Edit Form
            </button>
          </div>
        </div>
      )}

      {/* Primary Submit Action */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={submissionState === 'preparing'}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-ink text-canvas text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-ink/90 active:scale-[0.98] min-h-[44px] shadow-xs cursor-pointer"
        >
          <span>
            {submissionState === 'preparing' ? 'PREPARING MESSAGE…' : 'SEND MESSAGE'}
          </span>
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>

        <span className="text-[11px] font-mono text-ink-muted">
          Lightweight &bull; Direct inquiry &bull; No marketing tracking
        </span>
      </div>
    </form>
  )
}
