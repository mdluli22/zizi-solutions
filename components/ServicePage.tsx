import ArrowIcon from './ArrowIcon'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import { services } from '../lib/services'
import { siteUrl } from '../lib/seo'

type Service = (typeof services)[number]

export default function ServicePage({ service }: { service: Service }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${siteUrl}${service.path}`,
    provider: { '@id': `${siteUrl}/#organization` },
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 sm:pt-40 pb-16 lg:pb-24">
        <Link href="/#services" className="button-secondary mb-8"><ArrowIcon direction="left" className="mr-3" />All services</Link>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[#f4f53c] text-xs font-semibold uppercase tracking-[0.2em] mb-4">{service.outcome}</p>
            <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-6">{service.title}</h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{service.description}</p>
            <Link href="/contact" className="button-primary">{service.cta}</Link>
          </div>
          <div className="aspect-[16/10] rounded-2xl border border-white/10 bg-[#18181b] bg-no-repeat" style={{ backgroundImage: 'url(/images/services-studio.jpg)', backgroundSize: '200% auto', backgroundPosition: service.position }} aria-hidden="true" />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Built for your business</h2>
          <p className="text-white/75 leading-relaxed">{service.audience}</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">How we can help</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.deliverables.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/75 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
          <div>
            <p className="text-[#f4f53c] text-xs uppercase tracking-widest mb-4">An example of what’s possible</p>
            <h2 className="font-display text-3xl font-bold mb-4">A practical starting point</h2>
            <p className="text-white/75 leading-relaxed">{service.example}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">How we get started</h2>
            <p className="text-white/75 leading-relaxed mb-6">We discuss your goals and existing tools, agree the scope and deliverables, then build and test the solution with you. You’ll know what is included before work begins.</p>
            <Link href="/contact" className="button-primary">{service.cta}</Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <h2 className="font-display text-3xl font-bold mb-6">Explore our other services</h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          {services.filter((item) => item.path !== service.path).map((item) => (
            <Link key={item.path} href={item.path} className="button-secondary">{item.title}</Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
