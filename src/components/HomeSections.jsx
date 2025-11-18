import { Container, Section, H2, Lead, Button, Card } from './ui'
import { services, steps, faqs, testimonials } from '../data/content'
import { projects } from '../data/projects'
import { ArrowRight, Home, Wrench, House, Phone, Lightbulb, FileCheck, Hammer, ClipboardCheck, Smile, Star } from 'lucide-react'

const iconMap = { Phone, Lightbulb, FileCheck, Hammer, ClipboardCheck, Smile, Home, Wrench, House }

export function WhatWeDo() {
  const items = [
    { id: 'extensions', title: 'House extensions', icon: 'Home', copy: 'Light, space and better flow without losing character.' },
    { id: 'renovations', title: 'Home renovations', icon: 'Wrench', copy: 'Comfort, storage and clarity from fabric‑first upgrades.' },
    { id: 'new-homes', title: 'New homes & private houses', icon: 'House', copy: 'Warm, modern homes planned around daily life.' },
  ]
  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-2xl">
          <H2>What we do</H2>
          <Lead className="mt-3">We specialise in private residential work across Dublin — extensions, renovations and new homes.</Lead>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => {
            const Icon = iconMap[item.icon]
            return (
              <a key={item.id} href={`/services#${item.id}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-xl">
                <Card className="p-6 h-full">
                  <Icon className="w-8 h-8 text-neutral-700" />
                  <div className="mt-4 font-semibold text-neutral-900">{item.title}</div>
                  <p className="mt-2 text-neutral-700">{item.copy}</p>
                  <div className="mt-4 text-[var(--accent,#9A6B4F)] inline-flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></div>
                </Card>
              </a>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <H2>Featured projects</H2>
          <Lead className="mt-3">Recent homes designed with budget clarity, warm materials and generous light.</Lead>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.slug} href={`/projects/${p.slug}`} className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-xl">
              <Card>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.hero} alt={`${p.title} — ${p.location}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-neutral-900">{p.title}</div>
                  <div className="text-sm text-neutral-600">{p.location}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs rounded-full bg-neutral-100 text-neutral-700 px-2 py-1">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition flex items-end">
                  <p className="opacity-0 group-hover:opacity-100 text-white p-4 text-sm">{p.summary}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function HowWeWork() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-2xl">
          <H2>How we work</H2>
          <Lead className="mt-3">From first ideas to handover, we lead with clear communication and practical guidance.</Lead>
        </div>
        <ol className="mt-10 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <li key={s.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">{i+1}</div>
                <div>
                  <div className="flex items-center gap-2 font-semibold text-neutral-900"><Icon className="w-4 h-4" /> {s.title}</div>
                  <p className="text-neutral-700 mt-1">{s.copy}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </Container>
    </Section>
  )
}

export function SocialProof() {
  const points = [
    'Budget conscious from day one',
    'Transparent fee structure',
    'Frequent communication and support',
  ]
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-6">
          <div>
            <H2>Trusted by Dublin homeowners</H2>
            <Lead className="mt-3">We’re a friendly, experienced team focused on value and a smooth process.</Lead>
          </div>
          <ul className="grid sm:grid-cols-3 gap-3">
            {points.map(p => (
              <li key={p} className="rounded-lg border border-neutral-200 bg-white p-4 flex items-center gap-2"><Star className="w-4 h-4 text-amber-500" /> {p}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export function TestimonialsPreview() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-2xl">
          <H2>What clients say</H2>
          <Lead className="mt-3">Short notes from recent projects. More on our testimonials page.</Lead>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
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
  )
}

export function FAQPreview() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <H2>Questions we’re often asked</H2>
          <Lead className="mt-3">Straight answers in plain language. See the full FAQ for more detail.</Lead>
        </div>
        <div className="mt-6 divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
          {faqs.slice(0,4).map((f, i) => (
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
        <div className="mt-6">
          <Button href="/faqs" variant="secondary">View all FAQs</Button>
        </div>
      </Container>
    </Section>
  )
}

export function FinalCTA() {
  return (
    <Section id="contact" className="bg-neutral-900 text-white">
      <Container>
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <H2 className="text-white">Ready to chat about your home?</H2>
            <p className="mt-3 text-neutral-300">Tell us a little about your plans. We’ll get back quickly with helpful next steps.</p>
            <div className="mt-6 flex gap-3">
              <a href="tel:015079990" className="underline hover:no-underline">01 507 9990</a>
              <span aria-hidden>•</span>
              <a href="mailto:josh@thehousearchitects.ie" className="underline hover:no-underline">josh@thehousearchitects.ie</a>
            </div>
          </div>
          <form className="bg-white text-neutral-900 rounded-xl p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Area</label>
                <input className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" />
              </div>
              <div>
                <label className="block text-sm font-medium">Type of project</label>
                <select className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                  <option>Extension</option>
                  <option>Renovation</option>
                  <option>New home</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Approximate budget</label>
                <select className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                  <option>€100k–€200k</option>
                  <option>€200k–€350k</option>
                  <option>€350k–€600k</option>
                  <option>€600k+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Preferred timeline</label>
                <input className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="e.g. hoping to start next summer" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="Tell us about your home and your goals"></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input id="privacy" type="checkbox" className="w-4 h-4 rounded border-neutral-300" required />
              <label htmlFor="privacy" className="text-sm">I agree to the privacy policy</label>
            </div>
            <Button>Send enquiry</Button>
            <p className="text-xs text-neutral-500">We’ll reply within two working days.</p>
          </form>
        </div>
      </Container>
    </Section>
  )
}
