import { useEffect, useRef, useState, type CSSProperties } from 'react'

// 自動載入 src/assets/marquee/ 底下所有圖片（png / jpg / jpeg / gif / webp / avif / svg）。
// 要新增或更換圖片，直接把檔案丟進那個資料夾即可，不用改這份程式；
// 排序依檔名，可用 01-xxx.png、02-xxx.png 這種前綴控制順序。
const MODULES = import.meta.glob(
  '../assets/marquee/*.{png,jpg,jpeg,gif,webp,avif,svg}',
  { eager: true, import: 'default' },
) as Record<string, string>

const IMAGES = Object.keys(MODULES)
  .sort()
  .map((path) => MODULES[path])

// 對半分成上下兩排；奇數張時上排多一張
const HALF = Math.ceil(IMAGES.length / 2)
const ROW1 = IMAGES.slice(0, HALF)
const ROW2 = IMAGES.slice(HALF)

const STICKER_COLORS = ['#FF3EA5', '#00D2FF', '#C6FF3D', '#9B5DE5']

const Tile = ({ src, index }: { src: string; index: number }) => {
  const ring = STICKER_COLORS[index % STICKER_COLORS.length]
  const rotate = index % 2 === 0 ? -2 : 2
  return (
    <div
      className="marquee-tile"
      style={
        {
          flex: '0 0 auto',
          '--rot': `${rotate}deg`,
          border: '4px solid #ffffff',
          borderRadius: 20,
          boxShadow: `0 0 0 3px ${ring}, 8px 8px 0 rgba(36, 0, 77, 0.18)`,
        } as CSSProperties
      }
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="block"
        style={{ height: 270, width: 'auto', borderRadius: 14 }}
      />
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1Images = [...ROW1, ...ROW1, ...ROW1]
  const row2Images = [...ROW2, ...ROW2, ...ROW2]

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#E6F7FF' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Images.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} index={i} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Images.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
