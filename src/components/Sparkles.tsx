import type { CSSProperties } from 'react'

export type SparkleDef = {
  char?: string
  color: string
  top: string
  left: string
  size: string
}

/**
 * Renders a set of twinkling Y2K sparkles, absolutely positioned relative to
 * the nearest positioned ancestor. Each sparkle's twinkle is staggered.
 */
export default function Sparkles({
  items,
  className = '',
}: {
  items: SparkleDef[]
  className?: string
}) {
  return (
    <>
      {items.map((s, i) => (
        <span
          key={i}
          className={`sparkle ${className}`}
          style={
            {
              color: s.color,
              top: s.top,
              left: s.left,
              fontSize: s.size,
              animationDelay: `${i * 0.4}s`,
            } as CSSProperties
          }
        >
          {s.char ?? '✦'}
        </span>
      ))}
    </>
  )
}
