import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'section'
}

// 스크롤 진입 시 페이드+업으로 드러나는 래퍼.
export function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const ref = useReveal<HTMLDivElement>()
  const Tag = as as 'div'
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
