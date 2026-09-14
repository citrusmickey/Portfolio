import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import Sparkles, { type SparkleDef } from '../components/Sparkles'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const PORTRAIT_URL = '/mickey-portrait.png'

// Y2K sticker sparkles scattered around the hero
const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#FF3EA5', top: '18%', left: '8%', size: 'clamp(28px, 5vw, 64px)' },
  { char: '✧', color: '#00D2FF', top: '30%', left: '88%', size: 'clamp(20px, 4vw, 48px)' },
  { char: '✦', color: '#C6FF3D', top: '58%', left: '4%', size: 'clamp(18px, 3vw, 40px)' },
  { char: '✦', color: '#9B5DE5', top: '12%', left: '70%', size: 'clamp(16px, 2.5vw, 34px)' },
  { char: '✧', color: '#FF3EA5', top: '68%', left: '92%', size: 'clamp(22px, 4vw, 52px)' },
]

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Y2K holographic gradient-mesh glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(45% 40% at 15% 20%, rgba(255, 62, 165, 0.35), transparent 70%),' +
            'radial-gradient(45% 45% at 85% 25%, rgba(0, 210, 255, 0.35), transparent 70%),' +
            'radial-gradient(50% 40% at 60% 90%, rgba(198, 255, 61, 0.28), transparent 70%)',
        }}
      />

      {/* Sparkles */}
      <Sparkles items={SPARKLES} className="z-0" />

      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#24004D] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero heading */}
      <div className="relative z-20 overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[12.5vw] md:text-[13vw] lg:text-[13.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m Mickey
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0">
        <FadeIn delay={0.6} y={30} className="pointer-events-auto">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="Mickey"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#24004D] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a front-end developer driven by crafting striking and unforgettable
          projects
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
