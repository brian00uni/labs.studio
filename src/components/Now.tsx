import { now } from '../data/content'
import { Reveal } from './Reveal'

export function Now() {
  return (
    <section id="now" className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-amber-bright uppercase">
            {now.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {now.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {now.body}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {now.cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={i * 90}>
              <div className="group h-full rounded-xl border border-white/10 bg-navy-850 p-6 transition-colors hover:border-amber-bright/50">
                <div className="mb-5 h-1 w-9 rounded-full bg-amber-bright/80" />
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2.5 font-mono text-[13px] leading-relaxed text-white/45">
                  {card.verified}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
