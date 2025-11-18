import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Section, H2, Lead, Card } from '../components/ui'

const posts = [
  { slug: 'planning-permission-dublin', title: 'Do I need planning permission for my extension?', excerpt: 'A quick guide to planning rules that affect many Dublin homes.', date: '2024-05-10', category: 'Planning tips' },
  { slug: 'how-to-set-a-realistic-budget', title: 'How to set a realistic budget', excerpt: 'Where costs come from and how to prioritise spend for the most value.', date: '2024-06-03', category: 'Budget advice' },
  { slug: 'kitchen-living-spaces', title: 'Designing a kitchen-living space that feels generous', excerpt: 'Light, views and storage matter more than square metres.', date: '2024-07-22', category: 'Design inspiration' },
]

export default function BlogPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Section className="bg-neutral-50">
        <Container>
          <H2>Blog</H2>
          <Lead className="mt-3">Practical advice on planning, budgets and design.</Lead>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(p => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="block group">
                <Card className="p-6 h-full">
                  <div className="text-xs text-neutral-500">{new Date(p.date).toLocaleDateString()}</div>
                  <div className="mt-2 font-semibold text-neutral-900">{p.title}</div>
                  <p className="mt-2 text-neutral-700">{p.excerpt}</p>
                  <div className="mt-4 text-sm text-neutral-600">{p.category}</div>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}
