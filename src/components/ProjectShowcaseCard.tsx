import { motion } from 'framer-motion'
import LiveProjectButton from './LiveProjectButton'

export type ShowcaseProject = {
  number: string
  name: string
  description: string[]
  tech: string[]
  imageLayout?: 'stack' | 'side' | 'single' // 左欄圖片：上下疊（預設）/ 左右並排 / 單張
  liveUrl?: string
}

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

export default function ProjectShowcaseCard({
  project,
  img1,
  img2,
}: {
  project: ShowcaseProject
  img1: string
  img2?: string
}) {
  const isSide = project.imageLayout === 'side'
  const isSingle = project.imageLayout === 'single'
  const colClass = `flex ${isSide ? 'flex-row' : 'flex-col'} gap-3 sm:gap-4 w-full min-h-0`
  // 外層 div 當 flex item 決定尺寸，img 用 h-full object-cover 填滿，避免圖片原生長寬比干擾高度
  const slotClass = isSide
    ? `flex-1 min-w-0 overflow-hidden ${RADIUS} h-[200px] sm:h-[240px] md:h-auto md:self-stretch`
    : isSingle
      ? `relative w-full overflow-hidden ${RADIUS} h-[260px] sm:h-[340px] md:h-full`
      : `w-full overflow-hidden ${RADIUS} h-[200px] sm:h-[240px] md:h-auto md:flex-1 md:min-h-0`
  // single 用 absolute 填滿，讓圖片的原生高度不干擾 grid 列高計算
  const imgTagClass = isSingle
    ? 'absolute inset-0 w-full h-full object-cover'
    : 'w-full h-full object-cover'
  return (
    <div className="md:sticky md:top-16 lg:top-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ background: '#22004D' }}
        className={`relative w-full ${RADIUS} border-2 border-[#00D2FF] p-4 sm:p-6 md:p-8`}
      >
        {/* Live 按鈕：卡片右上角 */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* 左圖右文：桌機用 grid 等高兩欄，手機改上下堆疊 */}
        <div className="flex flex-col md:grid md:grid-cols-[minmax(0,42%)_1fr] md:items-stretch gap-5 sm:gap-6 md:gap-8">
          {/* 左欄：專案圖 */}
          <div className={colClass}>
            <div className={slotClass}>
              <img
                src={img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className={imgTagClass}
              />
            </div>
            {!isSingle && (
              <div className={slotClass}>
                <img
                  src={img2}
                  alt={`${project.name} preview 2`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* 右欄：專案介紹 */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* 編號 + 名稱 */}
            <div className="flex items-center gap-4 sm:gap-5">
              <span
                className="font-black text-[#C6FF3D]"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)', lineHeight: 1 }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[#E6F7FF] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </span>
              </div>
            </div>

            {/* 技術標籤 */}
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#00D2FF] text-[#00D2FF] px-3 py-1 text-xs sm:text-sm tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* 描述文字 */}
            <ul className="flex flex-col gap-2 sm:gap-2.5 mt-4 sm:mt-5">
              {project.description.map((d, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[#E6F7FF] font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.15vw, 1rem)', opacity: 0.85 }}
                >
                  <span className="shrink-0 select-none text-[#C6FF3D]">▹</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
