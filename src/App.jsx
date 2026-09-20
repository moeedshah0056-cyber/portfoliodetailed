import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import TechMarquee from './components/sections/TechMarquee'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import CaseStudies from './components/sections/CaseStudies'
import Playground from './components/sections/Playground'
import Services from './components/sections/Services'
import DevelopmentJourney from './components/sections/DevelopmentJourney'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import CursorAura from './components/ui/CursorAura'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-accent-violet/15 selection:text-ink">
      {/* Subtle Desktop Cursor Tracking Accent */}
      <CursorAura />

      {/* Fixed Elevated Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1 flex flex-col">
        {/* Phase 2: Hero Section */}
        <Hero />

        {/* Phase 3: Technology Marquee + Hero Transition */}
        <TechMarquee />

        {/* Phase 4: Advanced Project Showcase Architecture */}
        <Projects />

        {/* Phase 5: About & Creative Philosophy */}
        <About />

        {/* Phase 6: Skills & Technology Ecosystem */}
        <Skills />

        {/* Phase 7: Case Study Architecture */}
        <CaseStudies />

        {/* Phase 8: Creative Playground */}
        <Playground />

        {/* Phase 9: Services & Client Offerings */}
        <Services />

        {/* Phase 10: Development Journey */}
        <DevelopmentJourney />

        {/* Phase 11: Development Process */}
        <Process />

        {/* Phase 12: Contact */}
        <Contact />
      </main>

      {/* Phase 13: Premium Editorial Footer */}
      <Footer />
    </div>
  )
}




