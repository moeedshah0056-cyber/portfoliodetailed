/**
 * Centralized Skills & Technology Ecosystem Data
 * Connects tools to concrete capabilities and tangible outcomes.
 * Strictly avoids arbitrary skill percentages or proficiency bars.
 */

export const skillGroups = [
  {
    id: 'frontend-architecture',
    number: '01',
    title: 'Frontend Architecture',
    description:
      'Constructing responsive, component-driven client applications with clean modular boundaries and fast ESM compilation pipelines.',
    accent: 'violet',
    technologies: ['React 19', 'JavaScript (ESNext)', 'HTML5 Semantic', 'Vite'],
    relationship: {
      tool: 'React 19',
      capability: 'State Isolation & Component Hierarchy',
      outcome: 'Resilient, Maintainable Client Surfaces',
    },
  },
  {
    id: 'interaction-motion',
    number: '02',
    title: 'Interaction & Motion',
    description:
      'Designing purposeful, frame-budgeted micro-interactions and scroll-orchestrated transitions that guide user focus without causing layout lag.',
    accent: 'coral',
    technologies: ['GSAP', 'CSS Transitions', 'Scroll Interactions', 'Micro-Interactions'],
    relationship: {
      tool: 'GSAP',
      capability: 'Frame-Budgeted Animation Timelines',
      outcome: 'Guided, Natural User Attention',
    },
  },
  {
    id: 'design-systems',
    number: '03',
    title: 'Design Systems & UI',
    description:
      'Establishing systematic design token palettes, fluid typographic scales, and high-contrast WCAG-compliant styling systems.',
    accent: 'mint',
    technologies: ['Tailwind CSS v4', 'Design Tokens', 'Fluid Typography', 'Accessibility (a11y)'],
    relationship: {
      tool: 'Tailwind Tokens',
      capability: 'Harmonious Scale & Contrast Governance',
      outcome: 'Consistent Multi-Viewport Cohesion',
    },
  },
  {
    id: 'data-state',
    number: '04',
    title: 'Data & State Flow',
    description:
      'Structuring predictable asynchronous data layers, optimistic client updates, and resilient offline synchronization.',
    accent: 'warm-yellow',
    technologies: ['REST APIs', 'Firebase', 'Asynchronous UI', 'Client Caching'],
    relationship: {
      tool: 'REST APIs',
      capability: 'Optimistic Updates & Resilient State',
      outcome: 'Fluid, Real-Time Interactivity',
    },
  },
  {
    id: 'tooling-workflow',
    number: '05',
    title: 'Tooling & Workflow',
    description:
      'Maintaining version control hygiene, continuous bundle verification, and modern frontend development workflows.',
    accent: 'violet',
    technologies: ['Git', 'GitHub', 'npm', 'Modern Build Tools'],
    relationship: {
      tool: 'Git / CI Pipeline',
      capability: 'Modular Architecture & Build Hygiene',
      outcome: 'Reliable, Production-Ready Deployments',
    },
  },
]
