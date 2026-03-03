import Link from 'next/link'
import Navbar from '../../../components/Navbar'

const features = [
  {
    title: 'Web & Mobile Applications',
    description:
      'From landing pages to full-stack web and mobile applications, we build pixel-perfect, performant products tailored to your business requirements.',
  },
  {
    title: 'API Design & Integrations',
    description:
      'Seamlessly connect your product to payment gateways, CRMs, marketing tools, and custom third-party APIs with clean, documented interfaces.',
  },
  {
    title: 'Cloud-Native Architectures',
    description:
      'Scalable, resilient infrastructure built on modern cloud platforms — designed to handle growth without costly rewrites.',
  },
  {
    title: 'CI/CD Pipelines',
    description:
      'Automated testing, build, and deployment pipelines that let your team ship faster and with confidence on every release.',
  },
  {
    title: 'Responsive UI/UX Design',
    description:
      'User-first interfaces that look great on every device — designed for clarity, speed, and conversion.',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'We stay with you post-launch — monitoring, updates, bug fixes, and iterative improvements as your business grows.',
  },
]

const process = [
  { step: '01', label: 'Discovery', desc: 'We dig into your goals, audience, and competitive landscape.' },
  { step: '02', label: 'Design', desc: 'Wireframes and high-fidelity mockups reviewed with you before a single line of code is written.' },
  { step: '03', label: 'Develop', desc: 'Clean, maintainable code built on modern frameworks like Next.js and Tailwind CSS.' },
  { step: '04', label: 'Launch', desc: 'Thorough QA, staging review, and a smooth handover with documentation.' },
]

export default function WebDesignDevPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 px-6 lg:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #0a1a2e 60%, #0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(80,40,180,0.25) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto w-full pt-36">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 font-display text-xs tracking-widest uppercase text-white/40 hover:text-[#f4f53c] transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 3L3 13M3 13H11M3 13V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Back to Services
          </Link>
          <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
            Service
          </p>
          <h1
            className="font-display font-black leading-none tracking-tight text-white"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', lineHeight: '0.92' }}
          >
            CUSTOM WEB<br />
            <span style={{ color: 'var(--yellow-neon)' }}>DESIGN &</span><br />
            DEVELOPMENT
          </h1>
          <p className="mt-8 text-white/50 text-sm leading-relaxed max-w-lg">
            We design and build fast, scalable websites and web applications that convert visitors into customers — and scale as your business grows.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <h2 className="font-display font-black text-white text-4xl lg:text-5xl mb-16 tracking-tight">
          WHAT&apos;S <span style={{ color: 'var(--yellow-neon)' }}>INCLUDED_</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-7 border border-white/5 hover:border-white/15 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              {/* <span className="text-3xl mb-4 block">{f.icon}</span> */}
              <h3 className="font-display font-black text-white text-lg tracking-wide mb-3 uppercase">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display font-black text-white text-4xl lg:text-5xl mb-16 tracking-tight">
            OUR <span style={{ color: 'var(--yellow-neon)' }}>PROCESS_</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
                <div
                  className="font-display font-black text-6xl leading-none mb-4"
                  style={{ color: 'rgba(244,245,60,0.15)' }}
                >
                  {p.step}
                </div>
                <h3 className="font-display font-black text-white text-xl uppercase tracking-widest mb-2">
                  {p.label}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div
          className="rounded-2xl px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg, #1a0a2e 0%, #0a1a2e 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div>
            <h2 className="font-display font-black text-white text-4xl lg:text-5xl leading-tight mb-3">
              READY TO BUILD<br />
              <span style={{ color: 'var(--yellow-neon)' }}>SOMETHING GREAT?</span>
            </h2>
            <p className="text-white/50 text-sm max-w-md">
              Let&apos;s talk about your project and turn your vision into a product people love to use.
            </p>
          </div>
          <a
            href="/contact/"
            className="shrink-0 font-display text-sm font-black tracking-widest uppercase px-10 py-5 bg-[#f4f53c] text-black rounded-full hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
