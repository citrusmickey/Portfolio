import FadeIn from '../components/FadeIn'
import Sparkles, { type SparkleDef } from '../components/Sparkles'

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#FF3EA5', top: '8%', left: '12%', size: 'clamp(18px, 3vw, 42px)' },
  { char: '✧', color: '#9B5DE5', top: '14%', left: '84%', size: 'clamp(16px, 2.5vw, 34px)' },
  { char: '✦', color: '#00A8CC', top: '80%', left: '90%', size: 'clamp(14px, 2vw, 30px)' },
]

type Experience = {
  year: string
  period: string
  role: string
  company: string
  description: string
}

// TODO: 換成 Mickey 真實的工作經歷
const EXPERIENCES: Experience[] = [
  {
    year: '2024',
    period: '2024 — Present',
    role: 'Senior Front-End Developer',
    company: 'Acme Studio',
    description:
      'Leading the rebuild of the company web platform with React and TypeScript, owning the design system and shipping performant, accessible interfaces.',
  },
  {
    year: '2022',
    period: '2022 — 2024',
    role: 'Front-End Developer',
    company: 'Pixel Labs',
    description:
      'Built and shipped responsive marketing sites and internal tools, collaborating closely with designers to translate Figma into pixel-accurate UI.',
  },
  {
    year: '2021',
    period: '2021 — 2022',
    role: 'UI Engineer',
    company: 'Bright Digital',
    description:
      'Developed reusable component libraries and motion-driven landing pages, improving delivery speed across multiple client projects.',
  },
  {
    year: '2020',
    period: '2020 — 2021',
    role: 'Junior Web Developer',
    company: 'Startup Co',
    description:
      'Started my journey building websites end to end, learning modern front-end tooling and the fundamentals of clean, maintainable code.',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#E4DBFF' }}
    >
      <Sparkles items={SPARKLES} className="z-[1]" />

      <h2
        className="relative z-10 font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#24004D', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </h2>

      <div className="relative z-10 mx-auto max-w-5xl">
        {EXPERIENCES.map((exp, i) => (
          <FadeIn
            key={exp.period}
            delay={i * 0.1}
            className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(155, 93, 229, 0.3)' }}
          >
            <span
              className="font-black shrink-0"
              style={{ color: '#FF3EA5', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {exp.year}
            </span>
            <div className="flex flex-col gap-2 pt-1 sm:pt-2">
              <h3
                className="font-medium uppercase"
                style={{ color: '#24004D', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {exp.role}
              </h3>
              <span
                className="font-medium uppercase tracking-wide"
                style={{ color: '#9B5DE5', fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
              >
                {exp.company} · {exp.period}
              </span>
              <p
                className="font-light leading-relaxed max-w-2xl mt-1"
                style={{ color: '#24004D', opacity: 0.7, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
