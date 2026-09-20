/**
 * Development Process Data Architecture
 * 
 * Defines the four-stage engineering methodology from initial problem discovery
 * to architectural structure, component synthesis, and empirical refinement.
 * Factual, technical, and concrete without exaggerated marketing rhetoric.
 */

export const processSteps = [
  {
    id: "process-01",
    number: "01",
    phase: "DISCOVER",
    technicalTag: "STAGE 01 // SCOPE & INTAKE",
    title: "Understand The Problem",
    description:
      "Clarify the purpose of the interface, its content, the intended users, and the experience the project needs to communicate.",
    actions: [
      "Define the goal",
      "Understand content",
      "Identify interface requirements"
    ],
    outputs: [
      "Direction",
      "Content Structure"
    ],
    accent: "violet",
    specimen: {
      badge: "DISCOVERY // SCOPE",
      steps: [
        { label: "QUESTION", sub: "User Context" },
        { label: "CONTENT", sub: "Information Model" },
        { label: "GOAL", sub: "Key Outcomes" }
      ],
      connector: "↓"
    }
  },

  {
    id: "process-02",
    number: "02",
    phase: "STRUCTURE",
    technicalTag: "STAGE 02 // COMPOSITION & TOKENS",
    title: "Shape The Interface",
    description:
      "Turn the initial direction into a clear information hierarchy, responsive layout structure, and reusable component plan.",
    actions: [
      "Map page structure",
      "Plan components",
      "Define responsive behavior"
    ],
    outputs: [
      "Layout System",
      "Component Structure"
    ],
    accent: "coral",
    specimen: {
      badge: "LAYOUT // ARCHITECTURE",
      steps: [
        { label: "PAGE", sub: "Macro Landmark" },
        { label: "SECTIONS", sub: "Responsive Grid" },
        { label: "COMPONENTS", sub: "Modular Units" }
      ],
      connector: "↓"
    }
  },

  {
    id: "process-03",
    number: "03",
    phase: "BUILD",
    technicalTag: "STAGE 03 // SYNTHESIS & SYSTEM",
    title: "Develop The System",
    description:
      "Build the interface using reusable components, modern frontend patterns, responsive styling, and purposeful interaction.",
    actions: [
      "Build components",
      "Connect data",
      "Implement interaction"
    ],
    outputs: [
      "Working Interface",
      "Responsive System"
    ],
    accent: "mint",
    specimen: {
      badge: "ENGINEERING // INTEGRATION",
      steps: [
        { label: "COMPONENT", sub: "Modular Pattern" },
        { label: "STYLE", sub: "Tokens & Layout" },
        { label: "DATA", sub: "Unidirectional" },
        { label: "INTERFACE", sub: "Living System" }
      ],
      connector: "+"
    }
  },

  {
    id: "process-04",
    number: "04",
    phase: "REFINE",
    technicalTag: "STAGE 04 // AUDIT & HARDENING",
    title: "Test And Improve",
    description:
      "Review the experience across screen sizes, interaction states, accessibility requirements, and performance considerations.",
    actions: [
      "Test responsiveness",
      "Review accessibility",
      "Refine interaction"
    ],
    outputs: [
      "Refined Interface",
      "Final Improvements"
    ],
    accent: "warm-yellow",
    specimen: {
      badge: "VERIFICATION // POLISH",
      steps: [
        { label: "TEST", sub: "Multi-device Matrix" },
        { label: "OBSERVE", sub: "A11y & Contrast" },
        { label: "ADJUST", sub: "60 FPS & Micro-motion" },
        { label: "REPEAT", sub: "Iterative Polish" }
      ],
      connector: "↓"
    }
  }
];
