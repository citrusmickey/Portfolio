import { Mail, Github, Linkedin } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import Sparkles, { type SparkleDef } from '../components/Sparkles'

const SOCIALS = [
  { label: 'Email', href: 'mailto:mickeyyu1106@gmail.com', Icon: Mail },
  { label: 'GitHub', href: '#', Icon: Github },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
]

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#FF3EA5', top: '16%', left: '14%', size: 'clamp(22px, 4vw, 52px)' },
  { char: '✧', color: '#00D2FF', top: '22%', left: '82%', size: 'clamp(18px, 3vw, 42px)' },
  { char: '✦', color: '#9B5DE5', top: '72%', left: '10%', size: 'clamp(16px, 2.5vw, 34px)' },
  { char: '✧', color: '#FF3EA5', top: '68%', left: '88%', size: 'clamp(20px, 3.5vw, 46px)' },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex min-h-[70vh] flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32"
      style={{ background: '#E6F7FF' }}
    >
      {/* Y2K glow + sparkles */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(40% 40% at 20% 25%, rgba(255, 62, 165, 0.25), transparent 70%),' +
            'radial-gradient(40% 40% at 82% 30%, rgba(0, 210, 255, 0.25), transparent 70%),' +
            'radial-gradient(45% 35% at 50% 95%, rgba(198, 255, 61, 0.2), transparent 70%)',
        }}
      />
      <Sparkles items={SPARKLES} className="z-[1]" />

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14">
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Let&apos;s talk
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.15}
        className="text-[#24004D] font-light uppercase tracking-wide text-center max-w-[520px]"
        style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
      >
        have a project in mind or just want to say hi? drop me a line and let&apos;s
        build something incredible together.
      </FadeIn>

      <FadeIn delay={0.3}>
        <ContactButton href="mailto:mickeyyu1106@gmail.com" />
      </FadeIn>

      <FadeIn delay={0.45} className="flex items-center gap-6 sm:gap-8">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-[#FF3EA5] transition-opacity duration-200 hover:opacity-70"
          >
            <Icon size={26} strokeWidth={1.5} />
          </a>
        ))}
      </FadeIn>

        <p className="text-[#24004D]/40 uppercase tracking-widest text-xs mt-8">
          © {'2026'} Mickey — Front-End Web Developer
        </p>
      </div>
    </section>
  )
}
