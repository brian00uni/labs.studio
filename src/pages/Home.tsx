import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Now } from '../components/Now'
import { WhatIDo } from '../components/WhatIDo'
import { Projects } from '../components/Projects'
import { TrackRecord } from '../components/TrackRecord'
import { Labs } from '../components/Labs'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { SectionDivider } from '../components/SectionDivider'
import { dividers } from '../data/content'

// 서사 순서: HERO → NOW → WHAT I DO → PROJECTS → TRACK RECORD → LABS → CONTACT
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider label={dividers.hero} />
        <Now />
        <SectionDivider label={dividers.now} />
        <WhatIDo />
        <SectionDivider label={dividers.what} />
        <Projects />
        <SectionDivider label={dividers.projects} />
        <TrackRecord />
        <SectionDivider label={dividers.track} />
        <Labs />
        <SectionDivider label={dividers.labs} />
        <Contact />
        <SectionDivider label={dividers.contact} />
      </main>
      <Footer />
    </>
  )
}
