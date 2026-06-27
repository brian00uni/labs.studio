import { useEffect, useRef } from 'react'

// IntersectionObserver 기반 스크롤 리빌. 요소가 뷰포트에 들어오면
// .reveal-in 유틸을 붙여 페이드+업. prefers-reduced-motion은 CSS에서 무력화됨.
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
