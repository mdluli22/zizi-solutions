import Link from 'next/link'

import { services } from '../lib/services'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="text-[#f4f53c] text-xs font-semibold uppercase tracking-[0.2em] mb-4">What we can do for you</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">Your next step,<br /><span className="text-[#f4f53c]">made simple.</span></h2>
          <p className="text-white/70 text-lg leading-relaxed">Three practical services for small and medium businesses in South Africa and beyond. Attract customers, save time and understand your business.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article key={service.path} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111113] transition-colors hover:border-white/25">
              <div
                className="aspect-[16/9] bg-[#18181b] bg-no-repeat border-b border-white/10"
                style={{ backgroundImage: 'url(/images/services-studio.jpg)', backgroundSize: '200% auto', backgroundPosition: service.position }}
                aria-hidden="true"
              />
              <div className="flex flex-1 flex-col items-start p-6 sm:p-8">
                <p className="text-[#f4f53c] text-xs font-semibold uppercase tracking-widest mb-3">{service.outcome}</p>
                <h3 className="font-display text-3xl font-bold leading-tight mb-4">{service.title}</h3>
                <p className="text-white/75 leading-relaxed mb-5">{service.description}</p>
                <p className="text-white/55 text-sm leading-relaxed mb-7">{service.details}</p>
                <Link href={service.path} className="button-secondary mt-auto" aria-label={`Learn more: ${service.title}`}>Explore service <span aria-hidden="true" className="ml-3">↗</span></Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#f4f53c]/20 bg-[#f4f53c]/5 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-display text-3xl font-bold mb-3">Not sure where to start?</h3>
            <p className="text-white/75 leading-relaxed">Tell us what is slowing your business down. We’ll help you choose a practical next step.</p>
          </div>
          <Link href="/contact" className="button-primary shrink-0">Let’s talk <span aria-hidden="true" className="ml-3">↗</span></Link>
        </div>
      </div>
    </section>
  )
}
