import { playgroundExperiments } from '../../data/playground'
import PlaygroundCard from '../playground/PlaygroundCard'
import AmbientBackground from '../ui/AmbientBackground'
import { Sparkles, Terminal } from 'lucide-react'

export default function Playground() {
  return (
    <section
      id="playground"
      className="relative py-24 md:py-32 lg:py-40 border-t border-border-subtle bg-canvas overflow-hidden"
      aria-labelledby="playground-heading"
    >
      {/* Self-Generated Atmospheric Ambient Background */}
      <AmbientBackground
        accent="violet"
        secondaryAccent="coral"
        watermarkText="LAB"
        watermarkPosition="right"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Editorial Section Header */}
        <header className="flex flex-col gap-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              08 // CREATIVE PLAYGROUND
            </span>
          </div>

          <h2
            id="playground-heading"
            className="font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            I LIKE TO{' '}
            <span className="text-accent-violet transition-colors">
              BREAK THINGS
            </span>{' '}
            ON PURPOSE.
          </h2>

          <p className="type-body text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
            A collection of small experiments exploring interaction design, motion studies,
            kinetic typography, and frontend behavior. A dedicated space for curiosity,
            technical play, and experimental craftsmanship.
          </p>
        </header>

        {/* Asymmetric Editorial Experiments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {playgroundExperiments.map((experiment) => (
            <div
              key={experiment.id}
              className={`col-span-12 ${experiment.colSpan || 'lg:col-span-6'}`}
            >
              <PlaygroundCard experiment={experiment} />
            </div>
          ))}
        </div>

        {/* Editorial Section Footnote */}
        <footer className="pt-10 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-violet" />
            <span className="font-semibold text-ink uppercase tracking-wider">
              SMALL EXPERIMENTS. REAL CURIOSITY. BETTER INTERACTIONS.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-coral" />
            <span>FRONTEND LAB // CONTINUOUSLY EVOLVING</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
