import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  as?: keyof HTMLElementTagNameMap
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}

const EASE = [0.25, 0.1, 0.25, 1] as const

/**
 * whileInView entrance wrapper. Uses motion.create() so any element tag can be
 * animated (framer-motion v12 dropped motion(Component) in favour of create()).
 */
export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const MotionTag = motion.create(as)

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}
