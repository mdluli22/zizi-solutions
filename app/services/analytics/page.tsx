import Link from 'next/link'
import Navbar from '@/components/Navbar'

const features = [
  {
    title: 'Data Pipeline & ETL',
    description:
      'Design and build robust ingestion, transformation, and loading pipelines that get reliable, clean data to wherever you need it.',
    icon: '🔄',
  },
  {
    title: 'Interactive Dashboards',
    description:
      'Custom dashboards and reporting tools that surface KPIs clearly — built for your team, not a generic template.',
    icon: '📊',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Statistical models and machine learning to forecast demand, detect churn, flag anomalies, and surface opportunities before they pass.',
    icon: '🔮',
  },
  {
    title: 'Data Warehouse Design',
    description:
      'Schema design, data modelling, and warehouse architecture that scales with your data volume without sacrificing query performance.',
    icon: '🗄️',
  },
  {
    title: 'Reporting & Automation',
    description:
      'Scheduled reports, alert systems, and automated data delivery so stakeholders always have the numbers they need.',
    icon: '⚙️',
  },
  {
    title: 'Data Strategy Consulting',
    description:
      'Not sure where to start? We help you map your data landscape, identify gaps, and build a roadmap to a data-driven operation.',
    icon: '🗺️',
  },
]

const process = [
  { step: '01', label: 'Audit', desc: 'We map your existing data sources, tools, and gaps to understand where you are today.' },
  { step: '02', label: 'Architect', desc: 'Design the right pipeline and storage architecture for your scale and use-case.' },
  { step: '03', label: 'Build', desc: 'Implement pipelines, models, and dashboards with clean, documented, maintainable code.' },
  { step: '04', label: 'Iterate', desc: 'Monitor outputs, refine models, and expand coverage as your data matures.' },
]

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 px-6 lg:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0808 0%, #0a1500 60%, #0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(40,160,40,0.12) 0%, transparent 70%)' }}
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
            DATA &<br />
            <span style={{ color: 'var(--yellow-neon)' }}>BUSINESS</span><br />
            ANALYTICS
          </h1>
          <p className="mt-8 text-white/50 text-sm leading-relaxed max-w-lg">
            We turn raw, scattered data into clear analytics, reliable pipelines, and actionable insights — so you can make faster, smarter decisions with confidence.
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
              <span className="text-3xl mb-4 block">{f.icon}</span>
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
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0a1000 100%)' }}
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
            background: 'linear-gradient(135deg, #1a0808 0%, #0a1500 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div>
            <h2 className="font-display font-black text-white text-4xl lg:text-5xl leading-tight mb-3">
              READY TO UNLOCK<br />
              <span style={{ color: 'var(--yellow-neon)' }}>YOUR DATA?</span>
            </h2>
            <p className="text-white/50 text-sm max-w-md">
              Let&apos;s turn your data into a competitive advantage — from pipeline to dashboard to insight.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 font-display text-sm font-black tracking-widest uppercase px-10 py-5 bg-[#f4f53c] text-black rounded-full hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
