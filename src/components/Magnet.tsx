import { useRef, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * Mouse-following magnetic hover effect. Tracks the cursor relative to the
 * element centre and applies a translate3d divided by `strength`. Activates
 * only while the cursor is within `padding` of the element edges.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

      const withinX = Math.abs(dx) < rect.width / 2 + padding
      const withinY = Math.abs(dy) < rect.height / 2 + padding

      if (withinX && withinY) {
        setActive(true)
        setPos({ x: dx / strength, y: dy / strength })
      } else {
        setActive(false)
        setPos({ x: 0, y: 0 })
      }
    },
    [padding, strength],
  )

  const handleLeave = useCallback(() => {
    setActive(false)
    setPos({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        ...style,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
