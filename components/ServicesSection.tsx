import Link from 'next/link'

const services = [
  {
    label: 'Website design & development',
    title: 'Websites that work for you',
    description: 'Give your business a website that looks great, works on every screen and makes it easy for customers to get in touch.',
    details: 'Business websites · Web applications · API integrations',
    path: '/services/web-design-dev',
    position: '0% 17%',
  },
  {
    label: 'Branding & design',
    title: 'A brand people remember',
    description: 'Build a clear, consistent identity that helps your business stand out wherever customers find you.',
    details: 'Logo design · Visual identity · Brand strategy',
    path: '/services/brand-identity',
    position: '100% 17%',
  },
  {
    label: 'Data & analytics',
    title: 'Turn data into direction',
    description: 'Bring your numbers together in clear dashboards and reports, so you can see what matters and plan your next move.',
    details: 'Dashboards · Reporting · Data integration',
    path: '/services/analytics',
    position: '0% 83%',
  },
  {
    label: 'AI & automation',
    title: 'Make everyday work easier',
    description: 'Connect AI to your existing tools and automate repetitive tasks, giving your team more time for the work that matters.',
    details: 'AI integration · Workflow automation · Connected tools',
    path: '/services/ai-integration',
    position: '100% 83%',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="text-[#f4f53c] text-xs font-semibold uppercase tracking-[0.2em] mb-4">What we can do for you</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">Your next step,<br /><span className="text-[#f4f53c]">made simple.</span></h2>
          <p className="text-white/70 text-lg leading-relaxed">From your first website to smarter ways of working, we build digital solutions around your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <article key={service.path} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111113] transition-colors hover:border-white/25">
              <div
                className="aspect-[16/9] bg-[#18181b] bg-no-repeat border-b border-white/10"
                style={{ backgroundImage: 'url(/images/services-studio.jpg)', backgroundSize: '200% auto', backgroundPosition: service.position }}
                aria-hidden="true"
              />
              <div className="flex flex-1 flex-col items-start p-6 sm:p-8">
                <p className="text-[#f4f53c] text-xs font-semibold uppercase tracking-widest mb-3">{service.label}</p>
                <h3 className="font-display text-3xl font-bold leading-tight mb-4">{service.title}</h3>
                <p className="text-white/75 leading-relaxed mb-5">{service.description}</p>
                <p className="text-white/55 text-sm leading-relaxed mb-7">{service.details}</p>
                <Link href={service.path} className="button-secondary mt-auto" aria-label={`Learn more: ${service.title}`}>Explore service <span aria-hidden="true" className="ml-3">↗</span></Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#f4f53c]/20 bg-[#f4f53c]/5 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-display text-3xl font-bold text-white mb-3">Need something built just for you?</h3>
            <p className="text-white/75 leading-relaxed">Custom software that fits the way your business works. Tell us what you need, and we’ll help you shape the solution.</p>
          </div>
          <Link href="/services/custom-software" className="button-primary lg:shrink-0">Explore custom software <span aria-hidden="true" className="ml-3">↗</span></Link>
        </div>
      </div>
    </section>
  )
}
