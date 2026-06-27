// 섹션 사이 모노스페이스 캡션 라인 (목업의 "↓ 02 NOW — ...").
export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="bg-paper border-y border-paper-200">
      <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] text-ink-soft/70 text-center py-4 px-4">
        <span className="text-amber-deep">↓</span>{'  '}
        {label}
      </p>
    </div>
  )
}
