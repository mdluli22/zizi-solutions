import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const features = [
  {
    title: 'Workflow Automation',
    description:
      'Identify and eliminate manual bottlenecks by embedding AI into your existing workflows — saving time, reducing errors, and freeing your team for higher-value work.',
  },
  {
    title: 'Custom AI Solutions',
    description:
      'Bespoke AI models and tools built around your specific business problem — not off-the-shelf software adapted to fit.',
  },
  {
    title: 'AI-Powered Analytics',
    description:
      'Go beyond static dashboards with AI-driven analysis that surfaces trends, predicts outcomes, and recommends actions automatically.',
  },
  {
    title: 'Custom AI Agent Integration',
    description:
      'Design and deploy intelligent agents that can reason, act, and integrate with your tools — automating complex multi-step tasks end-to-end.',
  },
  {
    title: 'LLM & Generative AI Integration',
    description:
      'Embed large language models into your products and internal tools — for document processing, intelligent search, content generation, and more.',
  },
  {
    title: 'AI Consulting & Strategy',
    description:
      'Not sure where AI fits in your business? We help you identify high-impact opportunities and build a pragmatic roadmap to get there.',
  },
]

const process = [
  {
    step: '01',
    label: 'Discovery',
    desc: 'We learn your business goals, technical landscape and user needs through stakeholder introductory meetings.',
  },
  {
    step: '02',
    label: 'Strategy',
    desc: 'We define the solution architecture, technology stack and delivery roadmap with clear milestones.',
  },
  {
    step: '03',
    label: 'Build',
    desc: 'Continuous delivery meetings, code reviews and demo sessions so you\'re always in the loop on progress.',
  },
  {
    step: '04',
    label: 'Launch & Scale',
    desc: 'Deployment, monitoring and ongoing optimisation to ensure reliability and growth as your user base scales.',
  },
]

export default function AIIntegrationPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 px-6 lg:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f0820 0%, #050a1a 60%, #0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(120,40,220,0.2) 0%, transparent 70%)' }}
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
            AI<br />
            <span style={{ color: 'var(--yellow-neon)' }}>INTEGRATION</span><br />
            PROCESSING
          </h1>
          <p className="mt-8 text-white/50 text-sm leading-relaxed max-w-lg">
            We help businesses leverage AI technologies to enhance their processes, products and services — driving innovation and unlocking measurable competitive advantage.
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
              <h3 className="font-display font-black text-white text-lg tracking-wide mb-3 uppercase">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0820 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display font-black text-white text-4xl lg:text-5xl mb-16 tracking-tight">
            KEY <span style={{ color: 'var(--yellow-neon)' }}>DELIVERABLES_</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Workflow automation', 'Custom AI solutions', 'AI-powered analytics', 'Custom AI agent integration'].map((d) => (
              <div
                key={d}
                className="rounded-xl p-6 border border-white/5"
                style={{ background: 'rgba(120,40,220,0.06)' }}
              >
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: 'var(--yellow-neon)' }} />
                <p className="font-display font-black text-white text-sm uppercase tracking-widest">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#0a0a0a' }}>
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
            background: 'linear-gradient(135deg, #0f0820 0%, #050a1a 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div>
            <h2 className="font-display font-black text-white text-4xl lg:text-5xl leading-tight mb-3">
              READY TO BRING<br />
              <span style={{ color: 'var(--yellow-neon)' }}>AI TO YOUR BUSINESS?</span>
            </h2>
            <p className="text-white/50 text-sm max-w-md">
              Let&apos;s explore how AI can enhance your processes, products and services — and build something that makes a real difference.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 font-display text-sm font-black tracking-widest uppercase px-10 py-5 bg-[#f4f53c] text-black rounded-full hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
