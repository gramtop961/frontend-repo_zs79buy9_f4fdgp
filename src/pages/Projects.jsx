import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Card, Button } from '../components/ui'
import { projects, projectTags } from '../data/projects'
import { useState } from 'react'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const tags = ['All', ...projectTags]
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))

  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>Projects</H2>
          <Lead className="mt-3">Homes across Dublin and nearby — extensions, renovations and new builds.</Lead>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===t?'bg-neutral-900 text-white border-neutral-900':'border-neutral-300 text-neutral-700 hover:bg-neutral-100'}`}>{t}</button>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <a key={p.slug} href={`/projects/${p.slug}`} className="block group">
                <Card>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.hero} alt={`${p.title} — ${p.location}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-neutral-600">{p.location}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs rounded-full bg-neutral-100 text-neutral-700 px-2 py-1">{t}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-neutral-50">
        <Container>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 flex items-center justify-between flex-col sm:flex-row gap-4">
            <div>
              <div className="font-semibold text-neutral-900">Plan your own project</div>
              <p className="text-neutral-700">Ready to start a conversation? We’ll help map budget, timeline and next steps.</p>
            </div>
            <Button href="/contact">Book a consultation</Button>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
