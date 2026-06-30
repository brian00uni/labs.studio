import { labs } from '../data/content'
import { Reveal } from './Reveal'
import { RichText } from './RichText'

export function Labs() {
  return (
    <section id="labs" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-72 w-1/3 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(var(--color-paper-200) 1.4px, transparent 1.4px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-amber-deep uppercase">
            {labs.eyebrow}
          </p>
          <RichText
            as="h2"
            className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl"
            html={labs.title}
          />
          <RichText
            as="p"
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
            html={labs.body}
          />
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 flex flex-wrap items-center gap-2.5">
            {labs.items.map((item) => (
              <li key={item.label}>
                <span
                  className="group inline-flex flex-col rounded-lg border border-amber-deep/20 bg-amber-bright/10 px-4 py-2.5"
                  title={item.verified}
                >
                  <span className="text-sm font-semibold text-amber-deep">{item.label}</span>
                  <span className="font-mono text-[13px] text-ink-soft/70">{item.verified}</span>
                </span>
              </li>
            ))}
            <li>
              <a
                href={labs.moreHref}
                className="inline-flex items-center gap-1.5 px-2 text-sm font-semibold text-amber-deep transition-colors hover:text-ink"
              >
                {labs.moreLabel}
                <span aria-hidden>→</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
