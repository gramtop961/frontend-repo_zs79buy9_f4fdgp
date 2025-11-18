import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Button } from '../components/ui'
import { site } from '../data/site'

export default function ContactPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>Contact</H2>
          <Lead className="mt-3">We’d love to hear about your home. Tell us a little and we’ll be in touch.</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="prose prose-neutral max-w-none">
                <h3>How we can help</h3>
                <ul>
                  <li>Extensions and reconfigured ground floors</li>
                  <li>Whole‑house renovations and energy upgrades</li>
                  <li>Private new homes and replacement dwellings</li>
                </ul>
                <p>We mainly work across Dublin and nearby counties.</p>
              </div>
              <div className="mt-6 space-y-1 text-sm">
                <a className="block underline" href={`tel:${site.phone.replace(/\s/g,'')}`}>{site.phone}</a>
                <a className="block underline" href={`mailto:${site.email}`}>{site.email}</a>
                <p className="text-neutral-600">{site.address}</p>
              </div>
              <div className="mt-6 rounded-xl overflow-hidden border border-neutral-200">
                <iframe title="Map" className="w-full h-64" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=-6.255%2C53.335%2C-6.235%2C53.345&layer=mapnik"></iframe>
              </div>
            </div>
            <form className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" required />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Address or area</label>
                  <input className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Type of project</label>
                  <select className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                    <option>Extension</option>
                    <option>Renovation</option>
                    <option>New home</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Approximate budget</label>
                  <select className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                    <option>€100k–€200k</option>
                    <option>€200k–€350k</option>
                    <option>€350k–€600k</option>
                    <option>€600k+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Preferred timeline</label>
                <input className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" placeholder="e.g. hoping to start next summer" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" placeholder="Tell us about your home and your goals"></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input id="privacy2" type="checkbox" className="w-4 h-4 rounded border-neutral-300" required />
                <label htmlFor="privacy2" className="text-sm">I agree to the privacy policy</label>
              </div>
              <Button>Send enquiry</Button>
              <p className="text-xs text-neutral-500">We’ll reply within two working days.</p>
            </form>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
