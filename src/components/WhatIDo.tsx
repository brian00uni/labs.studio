import { whatIDo } from '../data/content'
import { Reveal } from './Reveal'

export function WhatIDo() {
  return (
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
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {whatIDo.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {whatIDo.body}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {whatIDo.tags.map((tag) => (
              <li key={tag.label}>
                <span
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                    tag.strong
                      ? 'bg-navy-900 text-white'
                      : 'border border-paper-200 bg-white text-ink-soft'
                  }`}
                >
                  {tag.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-10 border-l-2 border-amber-deep/70 pl-5 text-base italic leading-relaxed text-ink-soft sm:text-lg">
            {whatIDo.quote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
