import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button, Container } from './ui'
import { site } from '../data/site'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <Container className="flex items-center justify-between h-16">
        <a href="/" className="font-semibold text-neutral-900 tracking-tight">{site.name}</a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-neutral-900">{l.label}</a>
          ))}
          <Button href="#contact" className="ml-2">Book a consultation</Button>
        </nav>
        <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <Container className="py-4 flex items-center justify-between">
            <a href="/" className="font-semibold text-neutral-900 tracking-tight">{site.name}</a>
            <button aria-label="Close menu" className="p-2" onClick={() => setOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </Container>
          <div className="px-6">
            <Button href="#contact" className="w-full mb-4">Book a consultation</Button>
            <nav className="flex flex-col divide-y divide-neutral-200">
              {links.map(l => (
                <a key={l.href} href={l.href} className="py-4 text-lg text-neutral-900">{l.label}</a>
              ))}
            </nav>
          </div>
          <div className="fixed bottom-0 inset-x-0 p-6 bg-white/90 border-t border-neutral-200">
            <Button href="#contact" className="w-full">Book a consultation</Button>
          </div>
        </div>
      )}
    </header>
  )
}
