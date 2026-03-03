'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ServiceParticle = dynamic(() => import('./ServiceParticle'), { ssr: false })

const services = [
  {
    title: 'CUSTOM\nWEB\nDESIGN &\nDEVELOPMENT',
    colorScheme: 'blue-purple' as const,
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #0a1a2e 100%)',
    path: '/services/web-design-dev',
  },
  {
    title: 'BRAND\nIDENTITY &\nSTRATEGY',
    colorScheme: 'pink-red' as const,
    gradient: 'linear-gradient(135deg, #2e0a0a 0%, #1a1000 100%)',
    path: '/services/brand-identity',
  },
  {
    title: 'DATA &\nBUSINESS\n ANALYTICS',
    colorScheme: 'red-rainbow' as const,
    gradient: 'linear-gradient(135deg, #1a0808 0%, #0a1500 100%)',
    path: '/services/analytics',
  },
  {
    title: 'AI\nINTEGRATION\nPROCESSING',
    colorScheme: 'purple-pink' as const,
    gradient: 'linear-gradient(135deg, #0f0820 0%, #050a1a 100%)',
    path: '/services/ai-integration',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative grid-texture" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Section heading */}
        <div className="mb-16">
          <h2
            className="font-display font-black leading-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            <span className="text-white block">SERVICES</span>
            <span style={{ color: 'var(--yellow-neon)' }} className="block">
              WE OFFER_
            </span>
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.path}
              className="service-card relative rounded-xl overflow-hidden cursor-pointer group"
              style={{
                background: service.gradient,
                height: '420px',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Particle canvas */}
              <div className="absolute inset-0">
                <ServiceParticle colorScheme={service.colorScheme} />
              </div>

              {/* Text overlay */}
              <div className="absolute top-0 left-0 right-0 p-7 z-10">
                <h3
                  className="font-display font-black text-white leading-tight"
                  style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', whiteSpace: 'pre-line' }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(244,245,60,0.05) 0%, transparent 60%)',
                }}
              />

              {/* Arrow on hover */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--yellow-neon)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional services hint */}
        <div className="mt-12 flex flex-wrap gap-4">
          {/* Services Coming Soon */}
          <h4 className="font-display text-sm font-black text-white mb-2">Coming Soon</h4>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            We're constantly working on new solutions to meet our clients' needs. Stay tuned for updates on these exciting services!
          </p>
          <div className="flex flex-wrap gap-2">
          {['AI Data Solutions', 'Database Architecture Redesign', 'AWS Cloud Infrastructure'].map((s) => (
            <span
              key={s}
              className="font-display text-xs font-bold tracking-widest uppercase px-5 py-2 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer"
            >
              {s}
            </span>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
