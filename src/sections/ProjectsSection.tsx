import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'
import Sparkles, { type SparkleDef } from '../components/Sparkles'

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#00D2FF', top: '6%', left: '14%', size: 'clamp(20px, 3.5vw, 46px)' },
  { char: '✧', color: '#C6FF3D', top: '10%', left: '82%', size: 'clamp(18px, 3vw, 40px)' },
  { char: '✦', color: '#FF3EA5', top: '18%', left: '46%', size: 'clamp(14px, 2vw, 30px)' },
]

type Project = {
  number: string
  category: string
  name: string
  images: [string, string, string] // col1-top, col1-bottom, col2
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
]

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
  range,
}: {
  project: Project
  index: number
  totalCards: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: [number, number]
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] flex items-start justify-center">
      <motion.div
        style={{ scale, top: `${index * 28}px`, background: '#22004D' }}
        className={`relative w-full ${RADIUS} border-2 border-[#00D2FF] p-4 sm:p-6 md:p-8`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#C6FF3D]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#00D2FF] uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span
                className="text-[#E6F7FF] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom row: image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.images[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.images[2]}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`w-full h-full object-cover ${RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const total = PROJECTS.length

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
      style={{ background: '#14002E' }}
    >
      <Sparkles items={SPARKLES} className="z-[1]" />

      <h2
        className="relative z-10 chrome-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div className="relative z-10 mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => {
          const start = i / total
          const range: [number, number] = [start, 1]
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              totalCards={total}
              progress={scrollYProgress}
              range={range}
            />
          )
        })}
      </div>
    </section>
  )
}
