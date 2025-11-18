import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Card, Button } from '../components/ui'
import { projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = useMemo(() => projects.find(p => p.slug === slug), [slug])

  if (!project) {
    return (
      <div className="bg-white text-neutral-900">
        <Nav />
        <Section>
          <Container>
            <H2>Project not found</H2>
            <p className="mt-2 text-neutral-700">The project you’re looking for doesn’t exist. See all our work below.</p>
            <div className="mt-6"><Button href="/projects">Back to projects</Button></div>
          </Container>
        </Section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>{project.title}</H2>
          <Lead className="mt-3">{project.summary}</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="rounded-xl overflow-hidden border border-neutral-200">
            <img src={project.hero} alt={`${project.title} — ${project.location}`} className="w-full h-auto object-cover" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-neutral max-w-none">
                <h3>The brief</h3>
                <p>{project.story.brief}</p>
                <h3>The design</h3>
                <p>{project.story.design}</p>
                <h3>The result</h3>
                <p>{project.story.result}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-neutral-200">
                    <img src={src} alt={`${project.title} image ${i+1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            <aside>
              <Card className="p-6">
                <div className="font-semibold text-neutral-900">At a glance</div>
                <dl className="mt-3 text-sm text-neutral-700 space-y-2">
                  <div className="flex justify-between gap-6"><dt className="text-neutral-600">Location</dt><dd>{project.location}</dd></div>
                  <div className="flex justify-between gap-6"><dt className="text-neutral-600">Project type</dt><dd>{project.facts.type}</dd></div>
                  <div className="flex justify-between gap-6"><dt className="text-neutral-600">Brief</dt><dd className="text-right">{project.facts.brief}</dd></div>
                </dl>
                <div className="mt-4">
                  <div className="font-medium">Key outcomes</div>
                  <ul className="mt-2 list-disc list-inside text-neutral-700">
                    {project.facts.outcomes.map(o => (<li key={o}>{o}</li>))}
                  </ul>
                </div>
              </Card>
            </aside>
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
