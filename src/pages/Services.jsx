import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Card } from '../components/ui'
import { services } from '../data/content'

export default function ServicesPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>Services</H2>
          <Lead className="mt-3">Private residential architecture with creativity, practicality and clear budgets.</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="space-y-8">
            {services.map(s => (
              <section key={s.id} id={s.id}>
                <Card className="p-6">
                  <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold text-neutral-900">{s.title}</h3>
                      <p className="mt-2 text-neutral-700">{s.summary}</p>
                      <div className="mt-4">
                        <div className="font-medium">Typical deliverables</div>
                        <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-neutral-700 list-disc list-inside">
                          {s.deliverables.map(d => (<li key={d}>{d}</li>))}
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-80">
                      <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-4 text-sm text-neutral-700 space-y-3">
                        <div><span className="font-medium">Who this is for:</span> {s.who}</div>
                        <div><span className="font-medium">Typical timeline:</span> {s.timeline}</div>
                        <div className="text-neutral-600">{s.note}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
