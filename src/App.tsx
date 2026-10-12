import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import SideProjectsSection from './sections/SideProjectsSection'
import ContactSection from './sections/ContactSection'
import CursorTrail from './components/CursorTrail'

export default function App() {
  return (
    <main style={{ background: '#E6F7FF', overflowX: 'clip' }}>
      <CursorTrail />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SideProjectsSection />
      <ContactSection />
    </main>
  )
}
