import { ArrowUpRight, GitBranch, Code } from 'lucide-react'
import ProjectPreview from './ProjectPreview'
import MagneticButton from '../ui/MagneticButton'

export default function ProjectCard({ project, index }) {
  const isOdd = index % 2 !== 0

  return (
    <article
      className="group relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Editorial Content Column */}
      <div
        className={`flex flex-col gap-5 ${
          isOdd ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5 lg:order-1'
        }`}
      >
        {/* Project Meta Bar: Number + Category + Year */}
        <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
          <span className="font-semibold text-ink group-hover:text-accent-violet transition-colors">
            {project.number ? `${project.number} /` : `0${index + 1} /`}
          </span>
          <span className="uppercase tracking-wider px-2 py-0.5 rounded-md bg-canvas-card border border-border-subtle text-[10px] shadow-xs group-hover:border-border-strong transition-colors">
            {project.category}
          </span>
          <span className="text-border-strong">&bull;</span>
          <span>{project.year}</span>
        </div>

        {/* Project Title with Subtle Translation */}
        <div className="flex flex-col gap-1.5">
          <h3
            id={`project-title-${project.id}`}
            className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight tracking-tight transition-all duration-300 group-hover:text-accent-violet group-hover:translate-x-2"
          >
            {project.title}
          </h3>
          {project.tagline && (
            <p className="text-xs sm:text-sm font-mono text-ink-muted group-hover:text-ink-secondary transition-colors">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Project Description */}
        <p className="type-body text-sm sm:text-base text-ink-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Technologies List */}
        <div className="flex flex-wrap items-center gap-2 pt-1" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-secondary px-2.5 py-1 rounded-md bg-canvas-card border border-border-subtle transition-all duration-200 group-hover:border-border-strong shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-border-strong group-hover:bg-accent-violet group-hover:scale-125 transition-all" />
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links or Placeholder Status */}
        <div className="pt-3 flex items-center gap-4">
          {project.liveUrl ? (
            <MagneticButton strength={0.3} maxOffset={6}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-ink text-canvas text-xs font-semibold tracking-wide uppercase transition-all duration-200 hover:bg-ink/90 active:scale-95 shadow-xs"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>
            </MagneticButton>
          ) : (
            <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted px-3 py-1.5 rounded-md bg-canvas-card border border-border-subtle select-none shadow-xs">
              <Code className="w-3.5 h-3.5 text-accent-violet" />
              <span>Preview Stage &bull; Real URLs Coming Soon</span>
            </div>
          )}

          {project.caseStudySlug && (
            <a
              href="#case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-violet hover:text-ink transition-all px-3 py-1.5 rounded-md bg-canvas-card border border-border-subtle hover:border-accent-violet/40 shadow-xs"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-secondary hover:text-ink transition-colors"
              aria-label={`View source code for ${project.title}`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>

      {/* Visual Preview Column */}
      <div
        className={`w-full ${
          isOdd ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7 lg:order-2'
        }`}
      >
        <ProjectPreview
          image={project.image}
          title={project.title}
          number={project.number}
          accent={project.accent}
        />
      </div>
    </article>
  )
}
