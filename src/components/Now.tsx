import { now } from '../data/content'
import { Reveal } from './Reveal'
import { RichText } from './RichText'

export function Now() {
  return (
    <section id="now" className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-amber-bright uppercase">
            {now.eyebrow}
          </p>
          <RichText
            as="h2"
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
            html={now.title}
          />
          <RichText
            as="p"
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
            html={now.body}
          />
          {now.link && (
            <a
              href={now.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-bright transition-colors hover:text-amber-soft"
            >
              {now.link.label}
              <span aria-hidden>↗</span>
            </a>
          )}
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {now.cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={(i % 3) * 90}>
              <div
                className={`group relative flex h-full flex-col rounded-xl border p-6 transition-colors ${
                  card.featured
                    ? 'border-amber-bright/80 bg-navy-800'
                    : 'border-white/10 bg-navy-850 hover:border-amber-bright/50'
                }`}
              >
                {card.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-amber-bright px-2.5 py-1 text-[12px] font-bold text-navy-950">
                    {card.badge}
                  </span>
                )}
                {card.emoji ? (
                  <div className="mb-3 text-2xl" aria-hidden>
                    {card.emoji}
                  </div>
                ) : (
                  <div className="mb-5 h-1 w-9 rounded-full bg-amber-bright/80" />
                )}
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                {card.sub && (
                  <p className="mt-1.5 text-[15px] font-medium text-amber-soft">{card.sub}</p>
                )}
                {card.desc && (
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/55">{card.desc}</p>
                )}
                {card.stack && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {card.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/55"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
