import { whatIDo } from '../data/content'
import { Marquee } from './Marquee'
import { Reveal } from './Reveal'
import { RichText } from './RichText'

export function WhatIDo() {
  return (
    <>
    <section id="what" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 h-72 w-1/3 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(var(--color-paper-200) 1.4px, transparent 1.4px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-amber-deep uppercase">
            {whatIDo.eyebrow}
          </p>
          <RichText
            as="h2"
            className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl"
            html={whatIDo.title}
          />
          <RichText
            as="p"
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
            html={whatIDo.body}
          />
        </Reveal>

        {/* 일하는 방식 — 강점 카드 */}
        <Reveal delay={80}>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {whatIDo.strengths.map((s) => (
              <li
                key={s.title}
                className="rounded-2xl border border-paper-200 bg-white p-6 transition-colors hover:border-amber-deep/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-deep/10 text-xl text-amber-deep">
                  {s.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 스킬 — 능숙도별 칩 나열 */}
        <Reveal delay={120}>
          <div className="mt-16">
            <h3 className="text-2xl font-extrabold tracking-tight text-ink">
              {whatIDo.skillsTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
              {whatIDo.skillsBody}
            </p>
            <div className="mt-7 space-y-5">
              {whatIDo.skills.map((group) => (
                <div key={group.group}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-ink">{group.group}</span>
                    {group.level && (
                      <span className="rounded-full bg-amber-deep/10 px-2.5 py-0.5 text-xs font-semibold text-amber-deep">
                        {group.level}
                      </span>
                    )}
                  </div>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-paper-200 bg-white px-3.5 py-1.5 text-sm text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 검정 강조 섹션 — 포커스 문장 + 한 줄 마퀴를 하나로 묶음 */}
    <section className="relative overflow-hidden bg-[#06070d] pt-20 pb-0 sm:pt-28">
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.24em] text-amber-bright uppercase">
            {whatIDo.quoteEyebrow}
          </p>
          <RichText
            as="p"
            className="mx-auto mt-7 max-w-4xl text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-4xl"
            html={whatIDo.quote}
          />
        </Reveal>
      </div>

      {/* 한 줄 마퀴 — 풀블리드 */}
      <Reveal delay={120} className="relative mt-14">
        <Marquee items={whatIDo.marquee} />
      </Reveal>
    </section>
    </>
  )
}
