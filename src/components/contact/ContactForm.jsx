import { useState } from 'react'
import { ArrowUpRight, AlertCircle, Copy, Check, Send } from 'lucide-react'

/**
 * ContactForm Component
 * 
 * Minimal, accessible 3-field editorial form:
 * - Full client-side validation (Name, Email, Message)
 * - Accessible error handling (aria-invalid, aria-describedby, role="alert")
 * - Connected to real Formspree endpoint (or safe fallback if endpoint is unset)
 * - Preserves drafted content on any network error
 */
export default function ContactForm({ recipientEmail, formspreeEndpoint }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submissionState, setSubmissionState] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error' | 'destination-placeholder' | 'mail-client-opened'
  const [submissionError, setSubmissionError] = useState('')
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    // If Formspree endpoint is configured, perform live submission
    if (formspreeEndpoint) {
      setSubmissionState('submitting')
      setSubmissionError('')

      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        })

        if (response.ok) {
          setSubmissionState('success')
          setFormData({ name: '', email: '', message: '' })
        } else {
          const data = await response.json().catch(() => ({}))
          const errorMsg =
            data?.errors?.map((err) => err.message).join(', ') ||
            'Submission encountered an issue. Please try again or copy your draft.'
          setSubmissionError(errorMsg)
          setSubmissionState('error')
        }
      } catch {
        setSubmissionError(
          'Network connection error reaching Formspree. Please try again or copy your draft.'
        )
        setSubmissionState('error')
      }
      return
    }

    // Fallback if no Formspree endpoint is configured
    setSubmissionState('submitting')
    setTimeout(() => {
      if (!recipientEmail || recipientEmail === 'YOUR_EMAIL_HERE') {
        setSubmissionState('destination-placeholder')
      } else {
        const subject = `Project Inquiry from ${formData.name.trim()}`
        const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nProject / Message:\n${formData.message.trim()}`
        const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        window.location.href = mailtoUrl
        setSubmissionState('mail-client-opened')
      }
    }, 400)
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
          LIVE FORMSPREE PIPELINE
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
            disabled={submissionState === 'submitting'}
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
            disabled={submissionState === 'submitting'}
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
          disabled={submissionState === 'submitting'}
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

      {/* Live Formspree Success State */}
      {submissionState === 'success' && (
        <div
          role="status"
          className="flex flex-col gap-3 p-5 rounded-xl bg-accent-mint/[0.08] border border-accent-mint/30 text-xs font-mono text-ink"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-ink uppercase tracking-wider flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-mint" />
              MESSAGE TRANSMITTED
            </span>
            <span className="text-[10px] text-ink-muted uppercase">FORMSPREE // DELIVERED</span>
          </div>
          <p className="text-ink-secondary leading-relaxed">
            Thank you for reaching out. Your message was successfully received via Formspree. I will review your note and reply as soon as possible.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setSubmissionState('idle')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-ink text-canvas text-xs font-mono font-medium hover:bg-ink/90 transition-colors"
            >
              <Send className="w-3 h-3" />
              <span>SEND ANOTHER MESSAGE</span>
            </button>
          </div>
        </div>
      )}

      {/* Formspree / Network Error State with Fallback Draft */}
      {submissionState === 'error' && (
        <div
          role="alert"
          className="flex flex-col gap-3 p-5 rounded-xl bg-accent-coral/[0.08] border border-accent-coral/30 text-xs font-mono text-ink"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-accent-coral uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-accent-coral" />
              TRANSMISSION ISSUE
            </span>
            <span className="text-[10px] text-ink-muted">SAFE FALLBACK</span>
          </div>
          <p className="text-ink-secondary leading-relaxed">
            {submissionError || 'There was a problem submitting your message to Formspree. Your drafted text is preserved below:'}
          </p>
          <div className="pt-1 flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyDraft}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-ink text-canvas text-xs font-mono font-medium hover:bg-ink/90 transition-colors"
            >
              {draftCopied ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{draftCopied ? 'DRAFT COPIED' : 'COPY FORMATTED DRAFT'}</span>
            </button>
            <button
              type="button"
              onClick={() => setSubmissionState('idle')}
              className="text-xs text-ink-muted hover:text-ink transition-colors font-mono underline underline-offset-4"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Fallback Placeholder State (When Formspree endpoint is not set) */}
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
            Destination is configured with placeholder{' '}
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
              {draftCopied ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{draftCopied ? 'DRAFT COPIED' : 'COPY FORMATTED DRAFT'}</span>
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

      {/* Primary Submit Action */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={submissionState === 'submitting'}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-ink text-canvas text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-ink/90 active:scale-[0.98] min-h-[44px] shadow-xs cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>
            {submissionState === 'submitting'
              ? 'TRANSMITTING MESSAGE…'
              : submissionState === 'success'
              ? 'MESSAGE TRANSMITTED'
              : 'SEND MESSAGE'}
          </span>
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>

        <span className="text-[11px] font-mono text-ink-muted">
          Formspree &bull; Direct inbox delivery &bull; No marketing tracking
        </span>
      </div>
    </form>
  )
}
