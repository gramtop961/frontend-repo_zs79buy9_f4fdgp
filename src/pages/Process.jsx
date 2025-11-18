import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Card } from '../components/ui'
import { steps } from '../data/content'

export default function ProcessPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>Our process</H2>
          <Lead className="mt-3">A clear path from first ideas to a finished home, with guidance at every step.</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="">
                <Card className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">{i+1}</div>
                    <div>
                      <div className="font-semibold text-neutral-900">{s.title}</div>
                      <p className="text-neutral-700 mt-1">{s.copy}</p>
                      <ul className="mt-3 list-disc list-inside text-neutral-700">
                        <li>What happens: We explain options and agree next steps.</li>
                        <li>What you do: Share priorities, timings and any constraints.</li>
                        <li>What you receive: A short summary and proposed timeline.</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
