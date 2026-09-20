/**
 * Development Journey Data Architecture
 * 
 * Factual progression reflecting learning milestones, changing technical focus,
 * and growth from fundamental markup toward deliberate interface systems engineering.
 * No fabricated dates, employment, client metrics, or external claims.
 */

export const journeyItems = [
  {
    id: "journey-01",
    number: "01",
    phase: "FOUNDATIONS",
    nodeTag: "NODE 01 // FOUNDATION",
    title: "Learning How The Web Works",
    description:
      "Understanding semantic HTML, CSS fundamentals, responsive layouts, and the structure behind a well-built interface.",
    focus: [
      "HTML5",
      "Semantic Structure",
      "CSS",
      "Responsive Layout"
    ],
    technologies: [
      "HTML5",
      "CSS3"
    ],
    accent: "violet",
    specimen: {
      type: "sequence",
      badge: "SYNTAX // ARCHITECTURE",
      steps: [
        { label: "HTML", sub: "Semantics" },
        { label: "STRUCTURE", sub: "Document Tree" },
        { label: "CSS", sub: "Cascade & Box" },
        { label: "LAYOUT", sub: "Responsive Flow" }
      ],
      connector: "↓"
    }
  },

  {
    id: "journey-02",
    number: "02",
    phase: "INTERFACE BUILDING",
    nodeTag: "NODE 02 // INTERFACE",
    title: "From Pages To Interfaces",
    description:
      "Moving beyond individual pages toward reusable UI patterns, component thinking, and responsive interface composition.",
    focus: [
      "Component Thinking",
      "Responsive UI",
      "Reusable Patterns"
    ],
    technologies: [
      "JavaScript",
      "React"
    ],
    accent: "coral",
    specimen: {
      type: "component-tree",
      badge: "REACTIVITY // COMPOSITION",
      steps: [
        { label: "COMPONENT", sub: "Encapsulation" },
        { label: "PROPS", sub: "Unidirectional" },
        { label: "STATE", sub: "Dynamic Reactivity" },
        { label: "UI", sub: "Living Interface" }
      ],
      connector: "↓"
    }
  },

  {
    id: "journey-03",
    number: "03",
    phase: "SYSTEMS & INTERACTION",
    nodeTag: "NODE 03 // SYSTEMS",
    title: "Understanding Systems",
    description:
      "Exploring how components, design tokens, interaction states, motion, and data flow work together as one interface system.",
    focus: [
      "Design Systems",
      "Interaction",
      "Motion",
      "Data Flow"
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "GSAP"
    ],
    accent: "mint",
    specimen: {
      type: "matrix",
      badge: "COHESION // MICRO-PHYSICS",
      steps: [
        { label: "TOKENS", sub: "Color, Type, Space" },
        { label: "COMPONENTS", sub: "Design System" },
        { label: "MOTION", sub: "Choreography" },
        { label: "EXPERIENCE", sub: "Harmonious System" }
      ],
      connector: "+"
    }
  },

  {
    id: "journey-04",
    number: "04",
    phase: "CURRENT DIRECTION",
    nodeTag: "NODE 04 // CURRENT",
    title: "Building With More Intention",
    description:
      "Focusing on cleaner architecture, thoughtful interaction, accessibility, performance, and experiences that feel deliberate rather than decorative.",
    focus: [
      "Frontend Architecture",
      "Accessibility",
      "Performance",
      "Interaction Design"
    ],
    technologies: [
      "React",
      "JavaScript",
      "GSAP",
      "Vite"
    ],
    accent: "warm-yellow",
    specimen: {
      type: "vectors",
      badge: "ENGINEERING // DELIBERATE UI",
      steps: [
        { label: "CLARITY", sub: "Hierarchy & Weight" },
        { label: "ACCESSIBILITY", sub: "Inclusive & WCAG" },
        { label: "PERFORMANCE", sub: "60 FPS & Light" },
        { label: "INTERACTION", sub: "Tactile Feedback" }
      ],
      connector: "+"
    }
  }
];
