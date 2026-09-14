import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import Sparkles, { type SparkleDef } from '../components/Sparkles'

const BASE =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7'

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#FF3EA5', top: '20%', left: '30%', size: 'clamp(18px, 3vw, 40px)' },
  { char: '✧', color: '#00D2FF', top: '24%', left: '68%', size: 'clamp(16px, 2.5vw, 34px)' },
  { char: '✦', color: '#9B5DE5', top: '70%', left: '28%', size: 'clamp(14px, 2vw, 28px)' },
  { char: '✧', color: '#FF3EA5', top: '66%', left: '70%', size: 'clamp(18px, 3vw, 38px)' },
]

const ABOUT_TEXT =
  'With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let’s build something incredible together!'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#E6F7FF' }}
    >
      {/* Y2K glow + sparkles */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(40% 35% at 30% 30%, rgba(255, 62, 165, 0.22), transparent 70%),' +
            'radial-gradient(40% 35% at 72% 68%, rgba(0, 210, 255, 0.22), transparent 70%)',
        }}
      />
      <Sparkles items={SPARKLES} className="z-[1]" />

      {/* Decorative corner objects */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <img src={`${BASE}/moon_icon.11395d36.png`} alt="" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <img src={`${BASE}/p59_1.4659672e.png`} alt="" className="w-[100px] sm:w-[140px] md:w-[180px]" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <img src={`${BASE}/lego_icon-1.703bb594.png`} alt="" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <img src={`${BASE}/Group_134-1.2e04f3ce.png`} alt="" className="w-[130px] sm:w-[170px] md:w-[220px]" />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#24004D] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
