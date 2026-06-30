import { useEffect, useState } from 'react'
import { projects, type Project } from '../data/content'
import { Reveal } from './Reveal'
import { RichText } from './RichText'

const VISIBLE = 4

// period 문자열에서 "종료 시점" 정렬 키를 뽑는다 (년*12 + 월).
// "진행 중 / 현재"는 가장 최신으로, 연도만 있으면 그 해 말(12월)로 본다.
function periodEndKey(period?: string): number {
  if (!period) return -Infinity
  const tail = period.split('~')[1] ?? period
  if (/진행|현재|now/i.test(tail)) return Infinity
  const m = tail.match(/(\d{4})(?:\.(\d{1,2}))?/)
  if (!m) return -Infinity
  return Number(m[1]) * 12 + (m[2] ? Number(m[2]) : 12)
}

// 종료일 기준 최신순 (진행 중 → 최근 종료 → 과거)
const sortedItems = [...projects.items].sort(
  (a, b) => periodEndKey(b.period) - periodEndKey(a.period),
)

export function Projects() {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<Project | null>(null)

  const items = sortedItems
  const shown = expanded ? items : items.slice(0, VISIBLE)
  const remaining = items.length - VISIBLE

  return (
    <section id="projects" className="bg-paper-200 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-amber-deep uppercase">
            {projects.eyebrow}
          </p>
          <RichText
            as="h2"
            className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl"
            html={projects.title}
          />
          <RichText
            as="p"
            className="mt-6 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg"
            html={projects.body}
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((p, i) => (
            <Reveal as="li" key={p.no} delay={(i % VISIBLE) * 80}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className={`group flex h-full w-full flex-col items-start overflow-hidden rounded-xl border bg-white text-left transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5 ${
                  p.featured
                    ? 'border-amber-deep/50 ring-1 ring-amber-deep/20'
                    : 'border-paper-200 hover:border-amber-deep/40'
                }`}
              >
                <span className="flex h-full w-full flex-1 flex-col items-start p-6">
                  {p.badge && (
                    <span className="rounded-full bg-amber-deep/10 px-2.5 py-1 text-[13px] font-bold text-amber-deep">
                      {p.badge}
                    </span>
                  )}
                  <span className={`flex items-center gap-3 ${p.badge ? 'mt-3' : ''}`}>
                    {p.image && (
                      <img
                        src={p.image}
                        alt={`${p.brand} ${p.tagline}`}
                        loading="lazy"
                        className="h-10 w-10 shrink-0 rounded-full border border-paper-200 bg-white object-contain p-1"
                      />
                    )}
                    <span className="flex flex-col">
                      <span className="text-lg font-bold text-ink">{p.brand}</span>
                      <span className="mt-0.5 text-sm text-ink-soft">{p.tagline}</span>
                    </span>
                  </span>
                  <span className="mt-auto pt-5 text-xs font-medium text-amber-deep opacity-0 transition-opacity group-hover:opacity-100">
                    자세히 보기 →
                  </span>
                </span>
              </button>
            </Reveal>
          ))}

          {!expanded && remaining > 0 && (
            <li>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-ink-soft/30 bg-transparent p-6 text-center transition-colors hover:border-amber-deep hover:bg-white"
              >
                <span className="text-2xl font-extrabold text-amber-deep">+{remaining}</span>
                <span className="mt-1 text-sm font-medium text-ink-soft">더보기</span>
              </button>
            </li>
          )}
        </ul>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const meta = [project.org, project.period, project.team, project.role]
    .filter(Boolean)
    .join(' · ')

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-navy-950/70 p-0 backdrop-blur-sm sm:items-start sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.brand} 프로젝트 상세`}
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-t-2xl bg-white sm:my-auto sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 네이비 헤더 — 뱃지 · 제목 · 메타 · 스택 */}
        <div className="relative shrink-0 bg-navy-900 px-6 py-6 sm:px-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/55 transition-colors hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>

          {project.badge && (
            <div className="mb-3 flex flex-wrap gap-1.5 pr-10">
              <span className="rounded-xl bg-amber-bright px-2.5 py-1 text-xs font-semibold text-amber-ink">
                {project.badge}
              </span>
            </div>
          )}

          <h3 className="pr-10 text-lg font-bold leading-snug text-white">{project.name}</h3>

          {meta && <p className="mt-2 text-xs text-white/55">{meta}</p>}

          {project.stack && (
            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-xl bg-amber-bright/15 px-2.5 py-1 text-xs text-amber-soft"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 흰 본문 — 라벨 구간들. 이 영역만 스크롤 */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 sm:px-7">
          {project.sections ? (
            project.sections.map((s) => (
              <Block key={s.label} title={s.label} items={s.items} accent={s.accent} />
            ))
          ) : (
            <>
              {project.responsibilities && (
                <Block title="수행 내용" items={project.responsibilities} />
              )}
              {project.highlights && <Block title="성과 및 기여" items={project.highlights} accent />}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// HTML 모달의 .lbl + ul(·dash / .hi ✦box) 스타일을 따른 라벨 구간.
function Block({ title, items, accent }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className="mt-5 first:mt-0">
      <h4 className="text-xs font-semibold tracking-wide text-amber-deep">{title}</h4>
      <ul
        className={`mt-2 space-y-1.5 ${
          accent ? 'rounded-xl border border-[#ece2cc] bg-[#faf3e4] px-4 py-3.5' : ''
        }`}
      >
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
            <span className="shrink-0 text-amber-deep" aria-hidden>
              {accent ? '✦' : '–'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
