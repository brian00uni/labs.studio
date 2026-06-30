import { contact } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="bg-amber-bright py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.24em] text-amber-ink/80 uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-5xl xl:whitespace-nowrap">
            {contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-amber-ink sm:text-lg xl:whitespace-nowrap">
            {contact.description}
          </p>
          <a
            href={contact.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-950 px-9 py-4 text-sm font-bold text-white shadow-xl shadow-navy-950/20 transition-transform hover:-translate-y-0.5"
          >
            {contact.cta.label}
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
