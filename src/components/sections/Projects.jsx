import { projects } from '../../data/projects'
import ProjectCard from '../projects/ProjectCard'
import AmbientBackground from '../ui/AmbientBackground'

export default function Projects() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Self-Generated Atmospheric Ambient Background */}
      <AmbientBackground
        accent="coral"
        secondaryAccent="violet"
        watermarkText="03"
        watermarkPosition="right"
        grid={true}
        crosshairs={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Editorial Section Introduction */}
        <header className="flex flex-col gap-5 max-w-3xl border-b border-border-subtle pb-10">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-secondary">
              03 // SELECTED WORK
            </span>
          </div>

          <h2
            id="projects-heading"
            className="font-display font-extrabold tracking-[-0.035em] text-ink leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Architected for Design, Interaction &amp; Performance.
          </h2>

          <p className="type-body text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
            A curated selection of digital interfaces, design systems, and creative engineering experiments.
            Built with modern frontend architecture, deliberate interactions, and accessible craftsmanship.
          </p>
        </header>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-36">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
