/**
 * Case Study Data Architecture
 * Linked to primary projects in projects.js via projectId and slug.
 * Completely data-driven with neutral placeholder analysis.
 * Strictly omits fabricated client names, metrics, and claims.
 */

export const caseStudies = [
  {
    id: 'case-study-01',
    projectId: 'project-01',
    slug: 'project-placeholder-01',
    number: '01',
    title: 'Project Placeholder 01',
    tagline: 'Interactive digital surface architecture',
    intro:
      'An in-depth architectural examination of the technical, typographic, and motion decisions behind Project Placeholder 01.',
    overview: {
      category: 'Web Experience',
      year: '2026',
      role: 'Frontend Architecture & Creative Dev',
      scope: 'Design System, Component Hierarchy, GSAP Motion',
    },
    accent: 'violet',
    heroImage: null,
    sections: [
      {
        id: 'context',
        eyebrow: '01 / CONTEXT & OBJECTIVE',
        title: 'The Architectural Starting Point',
        body:
          'Placeholder context establishing initial interface constraints, accessibility targets, and performance budgets for a modern web experience.',
        layout: 'text',
      },
      {
        id: 'approach',
        eyebrow: '02 / DESIGN & INTERACTION',
        title: 'Cadence, Typography & Motion Intent',
        body:
          'Analyzing typography hierarchy, responsive scale factors, and choreographed GSAP motion triggers that guide user focus without introducing layout lag.',
        layout: 'split',
        highlightText:
          'Motion is treated as a narrative device: every translation explains spatial hierarchy rather than adding decorative noise.',
      },
      {
        id: 'architecture',
        eyebrow: '03 / SYSTEM & ENGINEERING',
        title: 'Component Isolation & Token Governance',
        body:
          'Structuring component boundaries, token-driven style variables, and GPU-accelerated rendering pipelines to ensure 60 FPS performance across viewports.',
        layout: 'technical',
        technicalDetails: [
          'State boundaries isolated to prevent unnecessary tree re-renders',
          'Tailwind tokens bridged to CSS Custom Properties for dynamic theming',
          'Strict reduced-motion media query safeguards across all motion hooks',
          'Predictable ESM bundling with sub-second tree-shaking',
        ],
      },
      {
        id: 'reflection',
        eyebrow: '04 / REFLECTION & OUTCOME',
        title: 'Key Learnings & Architectural Notes',
        body:
          'Placeholder reflection evaluating architectural trade-offs, WCAG compliance audits, and code maintainability patterns for future scalability.',
        layout: 'text',
      },
    ],
  },
  {
    id: 'case-study-02',
    projectId: 'project-02',
    slug: 'project-placeholder-02',
    number: '02',
    title: 'Project Placeholder 02',
    tagline: 'Component infrastructure & fluid tokens',
    intro:
      'A technical analysis of building modular UI primitives, accessible design tokens, and fluid typography scales for multi-screen consistency.',
    overview: {
      category: 'Design System',
      year: '2026',
      role: 'Design Systems Engineer',
      scope: 'Token Architecture, A11y Standards, Fluid Typography',
    },
    accent: 'mint',
    heroImage: null,
    sections: [
      {
        id: 'context',
        eyebrow: '01 / CONTEXT & OBJECTIVE',
        title: 'Systemic Scale Across Platforms',
        body:
          'Placeholder analysis detailing the challenges of coordinating visual consistency, component reuse, and accessible contrast ratios across varying viewports.',
        layout: 'text',
      },
      {
        id: 'approach',
        eyebrow: '02 / SYSTEM ARCHITECTURE',
        title: 'Mathematical Token Scales & Governance',
        body:
          'Establishing systematic spacing multiples, fluid clamp typographic scales, and high-contrast color pairings that eliminate arbitrary pixel values.',
        layout: 'technical',
        technicalDetails: [
          'Fluid clamp functions calculated for 320px through 1440px+ breakpoints',
          'Token contracts enforcing WCAG AAA contrast ratios for all core ink tokens',
          'Zero-runtime overhead via Tailwind CSS v4 @theme integration',
        ],
      },
      {
        id: 'reflection',
        eyebrow: '03 / REFLECTION & OUTCOME',
        title: 'Governance & Maintainability',
        body:
          'Evaluating how strict design tokens reduce design debt, streamline pair programming, and ensure consistent brand expression throughout the portfolio.',
        layout: 'text',
      },
    ],
  },
]
