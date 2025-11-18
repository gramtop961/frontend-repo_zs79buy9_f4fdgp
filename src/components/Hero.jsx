import Spline from '@splinetool/react-spline'
import { site } from '../data/site'
import { Button, Container } from './ui'

export default function Hero() {
  return (
    <div className="relative" style={{'--accent': site.accents.primary}}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative bg-gradient-to-b from-white/80 via-white/70 to-white/80 pointer-events-none"></div>
      <Container>
        <div className="pt-24 pb-20 sm:pt-32 sm:pb-28 md:pt-40 md:pb-36">
          <div className="max-w-2xl">
            <p className="uppercase tracking-wide text-sm text-neutral-600">Residential architects in Dublin</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
              {site.tagline}
            </h1>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-neutral-700 max-w-xl">
              {site.description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button href="#contact">Book a consultation</Button>
              <Button variant="secondary" href="/projects">View projects</Button>
            </div>
            <ul className="mt-8 grid grid-cols-3 gap-4 text-sm text-neutral-700">
              {site.stats.map(s => (
                <li key={s.label} className="rounded-lg border border-neutral-200 bg-white/70 p-3">
                  <div className="font-semibold text-neutral-900">{s.value}</div>
                  <div className="text-neutral-600">{s.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
