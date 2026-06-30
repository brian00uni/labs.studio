import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Now } from '../components/Now'
import { WhatIDo } from '../components/WhatIDo'
import { Projects } from '../components/Projects'
import { TrackRecord } from '../components/TrackRecord'
import { Labs } from '../components/Labs'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

// 서사 순서: HERO → NOW → WHAT I DO → PROJECTS → TRACK RECORD → LABS → CONTACT
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Now />
        <WhatIDo />
        <Projects />
        <TrackRecord />
        <Labs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
