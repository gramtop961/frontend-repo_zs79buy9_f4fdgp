import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Card } from '../components/ui'
import { testimonials } from '../data/content'

export default function TestimonialsPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>Testimonials</H2>
          <Lead className="mt-3">Short notes from clients across Dublin.</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <Card key={t.headline} className="p-6">
                <div className="font-semibold text-neutral-900">{t.headline}</div>
                <p className="mt-2 text-neutral-700">{t.body}</p>
                <div className="mt-4 text-sm text-neutral-600">{t.client}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
