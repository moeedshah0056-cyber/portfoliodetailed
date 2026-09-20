/**
 * Services Data Architecture — Phase 9
 * Factual, capability-driven service offerings without agency fluff, pricing, or fabricated metrics.
 */

export const servicesData = [
  {
    id: "service-01",
    number: "01",
    title: "Frontend Development",
    shortTitle: "Frontend",
    category: "Architecture & Engineering",
    description: "React applications built around modular component hierarchies, resilient state flows, accessible DOM structures, and performance-conscious architecture.",
    capabilities: [
      "React Applications",
      "Responsive Layouts",
      "Component Architecture",
      "State Management",
      "API Integration",
      "Performance-Minded UI"
    ],
    technologies: ["React", "JavaScript (ESNext)", "Vite", "Tailwind CSS", "HTML5 / CSS3"],
    accent: "violet",
    specimenType: "architecture",
    specimenLabel: "COMPONENT HIERARCHY & DATA FLOW"
  },
  {
    id: "service-02",
    number: "02",
    title: "UI & Interaction Development",
    shortTitle: "Interaction",
    category: "Motion & Micro-interactions",
    description: "Fluid digital interfaces enhanced with purposeful micro-interactions, responsive hover states, scroll coordination, and GSAP motion systems that respect reduced motion.",
    capabilities: [
      "Micro-Interactions",
      "Motion Systems",
      "Scroll Choreography",
      "Hover Transitions",
      "State Visualization",
      "Reduced-Motion Support"
    ],
    technologies: ["React", "GSAP", "CSS Transforms", "JavaScript", "SVG Motion"],
    accent: "coral",
    specimenType: "motion",
    specimenLabel: "MOTION STATE MACHINE & EASING"
  },
  {
    id: "service-03",
    number: "03",
    title: "Website Development",
    shortTitle: "Websites",
    category: "Modern Web Builds",
    description: "Bespoke portfolio, creative studio, and business websites designed with editorial typography hierarchy, asset-conscious loading, and fluid adaptation across viewports.",
    capabilities: [
      "Portfolio & Studio Sites",
      "Landing Experiences",
      "Multi-Device Viewports",
      "Editorial Typography",
      "Semantic HTML Structure",
      "Asset Optimization"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Modern Web Standards", "SEO Fundamentals"],
    accent: "mint",
    specimenType: "responsive",
    specimenLabel: "MULTI-VIEWPORT COMPOSITION"
  },
  {
    id: "service-04",
    number: "04",
    title: "Interface Systems",
    shortTitle: "Design Systems",
    category: "Tokens & Foundations",
    description: "Design token foundations and reusable component structures oriented around visual consistency, accessibility-conscious practices, and maintainable frontend codebases.",
    capabilities: [
      "Design Token Systems",
      "Reusable Component Sets",
      "Fluid Typography Scale",
      "Spacing & Layout Rhythm",
      "WCAG-Oriented Accessibility",
      "Multi-Theme Architecture"
    ],
    technologies: ["Design Tokens", "CSS Custom Properties", "Component Architecture", "WCAG Best Practices"],
    accent: "warm-yellow",
    specimenType: "tokens",
    specimenLabel: "DESIGN TOKEN CASCADE"
  }
]
