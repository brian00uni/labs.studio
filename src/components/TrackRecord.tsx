import { trackRecord } from '../data/content'
import { Reveal } from './Reveal'

export function TrackRecord() {
  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-amber-bright uppercase">
            {trackRecord.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {trackRecord.title}
          </h2>
        </Reveal>

        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6">
          {trackRecord.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 110}>
              <div>
                <dd className="flex items-start justify-center text-5xl font-extrabold text-amber-bright sm:text-6xl">
                  {stat.value}
                  <span className="text-2xl sm:text-3xl">{stat.unit}</span>
                </dd>
                <dt className="mt-3 text-sm leading-snug text-white/60">{stat.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={120}>
          <p className="mt-12 font-mono text-xs tracking-[0.2em] text-white/40">
            {trackRecord.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
