import { useEffect, useRef, useState, type CSSProperties } from 'react'

const IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const ROW1 = IMAGES.slice(0, 11)
const ROW2 = IMAGES.slice(11)

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
        className="object-cover block"
        style={{ width: 420, height: 270, borderRadius: 14 }}
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
