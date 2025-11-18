import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead } from '../components/ui'
import { faqs } from '../data/content'

export default function FAQsPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>FAQs</H2>
          <Lead className="mt-3">Clear answers about process, budgets and timelines.</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
            {faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="marker:content-none cursor-pointer list-none p-6 flex items-center justify-between">
                  <span className="font-medium text-neutral-900">{f.question}</span>
                  <span className="text-neutral-500 group-open:hidden">+</span>
                  <span className="text-neutral-500 hidden group-open:inline">−</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-700">{f.answer}</div>
              </details>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
