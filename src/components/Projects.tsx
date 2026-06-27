import { useEffect, useState } from 'react'
import { projects, type Project } from '../data/content'
import { Reveal } from './Reveal'

const VISIBLE = 4

export function Projects() {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<Project | null>(null)

  const items = projects.items
  const shown = expanded ? items : items.slice(0, VISIBLE)
  const remaining = items.length - VISIBLE

  return (
    <section id="projects" className="bg-paper-200 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-amber-deep uppercase">
            {projects.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {projects.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {projects.body}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((p, i) => (
            <Reveal as="li" key={p.no} delay={(i % VISIBLE) * 80}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="group flex h-full w-full flex-col items-start rounded-xl border border-paper-200 bg-white p-6 text-left transition-all hover:-translate-y-1 hover:border-amber-deep/40 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <span className="font-mono text-[11px] text-ink-soft/50">{p.no}</span>
                <span className="mt-3 text-lg font-bold text-ink">{p.brand}</span>
                <span className="mt-1 text-sm text-ink-soft">{p.tagline}</span>
                <span className="mt-auto pt-5 text-xs font-medium text-amber-deep opacity-0 transition-opacity group-hover:opacity-100">
                  자세히 보기 →
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

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.brand} 프로젝트 상세`}
      onClick={onClose}
    >
      <div
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-7 sm:rounded-2xl sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] text-amber-deep">PROJECT {project.no}</p>
            <h3 className="mt-2 text-2xl font-extrabold text-ink">{project.brand}</h3>
            <p className="mt-1 text-sm text-ink-soft">{project.name}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="shrink-0 rounded-full p-2 text-ink-soft transition-colors hover:bg-paper-200 hover:text-ink"
          >
            ✕
          </button>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-paper-200 py-5 text-sm sm:grid-cols-4">
          {project.org && <Meta term="소속" value={project.org} />}
          {project.period && <Meta term="기간" value={project.period} />}
          {project.team && <Meta term="규모" value={project.team} />}
          {project.role && <Meta term="역할" value={project.role} />}
        </dl>

        {project.stack && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full bg-navy-900 px-3 py-1 font-mono text-xs text-white"
              >
                {s}
              </li>
            ))}
          </ul>
        )}

        {project.responsibilities && (
          <Block title="담당 업무" items={project.responsibilities} />
        )}
        {project.highlights && <Block title="성과 · 강점" items={project.highlights} accent />}
      </div>
    </div>
  )
}

function Meta({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-soft/60">{term}</dt>
      <dd className="mt-1 font-medium text-ink">{value}</dd>
    </div>
  )
}

function Block({ title, items, accent }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-bold text-ink">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
            <span className={accent ? 'text-amber-deep' : 'text-ink-soft/40'}>
              {accent ? '★' : '·'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
