import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { WhatWeDo, FeaturedProjects, HowWeWork, SocialProof, TestimonialsPreview, FAQPreview, FinalCTA } from '../components/HomeSections'

export default function HomePage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedProjects />
        <HowWeWork />
        <SocialProof />
        <TestimonialsPreview />
        <FAQPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
