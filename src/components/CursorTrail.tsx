import { useEffect, useRef, useState } from 'react'

type Star = { id: number; x: number; y: number; color: string; char: string }

const COLORS = ['#FF3EA5', '#00D2FF', '#C6FF3D', '#9B5DE5']
const CHARS = ['✦', '✧', '✩']

/**
 * Y2K sparkle cursor trail. Spawns a fading star each time the cursor travels
 * far enough, throttled by distance so it stays light on the main thread.
 */
export default function CursorTrail() {
  const [stars, setStars] = useState<Star[]>([])
  const idRef = useRef(0)
  const lastRef = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastRef.current.x
      const dy = e.clientY - lastRef.current.y
      if (dx * dx + dy * dy < 360) return // ~19px threshold
      lastRef.current = { x: e.clientX, y: e.clientY }

      const id = idRef.current++
      const star: Star = {
        id,
        x: e.clientX,
        y: e.clientY,
        color: COLORS[id % COLORS.length],
        char: CHARS[id % CHARS.length],
      }
      setStars((prev) => [...prev, star])
      window.setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id))
      }, 800)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {stars.map((s) => (
        <span
          key={s.id}
          className="cursor-star"
          style={{ left: s.x, top: s.y, color: s.color }}
        >
          {s.char}
        </span>
      ))}
    </div>
  )
}
