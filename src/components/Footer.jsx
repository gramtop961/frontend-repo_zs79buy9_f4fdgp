import { Container } from './ui'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container className="py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-semibold">{site.name}</div>
            <p className="mt-2 text-neutral-700">Residential architects for family homes in Dublin.</p>
            <div className="mt-4 space-y-1 text-sm">
              <a className="block underline" href={`tel:${site.phone.replace(/\s/g,'')}`}>{site.phone}</a>
              <a className="block underline" href={`mailto:${site.email}`}>{site.email}</a>
              <p className="text-neutral-600">{site.address}</p>
            </div>
          </div>
          <div>
            <div className="font-medium">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm">
              {['Home','Projects','Services','Process','About','FAQs','Blog','Contact'].map(n => (
                <li key={n}><a href={`/${n.toLowerCase()==='home'?'':n.toLowerCase()}`} className="hover:underline">{n}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-medium">Follow</div>
            <ul className="mt-3 space-y-2 text-sm">
              {site.social.map(s => (
                <li key={s.label}><a href={s.href} className="hover:underline">{s.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-medium">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              {['Privacy policy','Cookie policy','Terms'].map(n => (
                <li key={n}><a href="#" className="hover:underline">{n}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </Container>
    </footer>
  )
}
