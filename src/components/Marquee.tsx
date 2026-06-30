// 한 줄 무한 마퀴 — 동일한 트랙 2벌을 이어 붙이고 트랙을 -50% 이동시켜
// 끊김 없이 반복한다. hover 시 일시정지, reduced-motion이면 정지.
function MarqueeRow({ items }: { items: string[] }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-sm font-semibold tracking-wide text-white/85">
            {item}
          </span>
          <span className="text-amber-bright/80" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  )
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="group relative flex overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <MarqueeRow items={items} />
        <MarqueeRow items={items} />
      </div>
      {/* 좌우 페이드 — 검정 섹션 배경색과 동일 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#06070d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#06070d] to-transparent" />
    </div>
  )
}
