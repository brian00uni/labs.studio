import { hero } from '../data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* 도트 텍스처 (앰버 점, 우상단) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-80 w-1/2 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(var(--color-amber-bright) 1px, transparent 1.4px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(to bottom left, black, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.22em] text-amber-bright uppercase">
          {hero.eyebrow}
        </p>

        <h1 className="mt-7 text-4xl font-extrabold leading-[1.18] tracking-tight text-white sm:text-6xl">
          {hero.titleLead}
          <span className="text-amber-bright">{hero.titleAccent}</span>
          <br />
          {hero.titleTail}
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-md bg-amber-bright px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-amber-bright/20 transition-transform hover:-translate-y-0.5"
          >
            {hero.primaryCta.label}
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-amber-bright hover:text-amber-bright"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
