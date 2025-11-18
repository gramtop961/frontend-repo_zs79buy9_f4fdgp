import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Card } from '../components/ui'

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>About The House Architects</H2>
          <Lead className="mt-3">We’re a Dublin practice designing warm, practical homes for everyday family life.</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="prose max-w-none prose-neutral">
            <h3>Who we are</h3>
            <p>We’re residential specialists with years of experience delivering extensions, renovations and new homes across Dublin. Clients choose us for calm advice, careful budgeting and a friendly, steady approach on site.</p>
            <h3>What we believe</h3>
            <p>Homes should be bright, comfortable and easy to live in. We balance creativity with practicality, finding smart ways to add value without overspending.</p>
            <h3>How we approach budget</h3>
            <p>We talk about money early and often. Expect clear cost ranges at each stage, and options to help you prioritise spend where it makes the most difference.</p>
            <h3>Team</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="font-semibold">Josh — Principal Architect</div>
                <p className="text-neutral-700 mt-2">RIAI registered. Enjoys turning tricky layouts into simple, generous spaces. Weekend cyclist and maker of pancakes.</p>
              </Card>
              <Card className="p-6">
                <div className="font-semibold">Aoife — Project Architect</div>
                <p className="text-neutral-700 mt-2">Focuses on detail and smooth communication with contractors. Loves coastal walks and good coffee.</p>
              </Card>
            </div>
            <h3>Awards & memberships</h3>
            <ul>
              <li>RIAI registered practice</li>
              <li>Shortlisted for local design awards</li>
              <li>Published in Irish architecture press</li>
            </ul>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
