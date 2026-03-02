import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const projects = [
  {
    id: 1,
    title: 'Security Professionals',
    client: 'Firearm Safety Training',
    category: 'Web Design & Development',
    categoryPath: '/services/web-design-dev',
    year: '2025',
    description:
      'Secpro is your trusted partner for professional, accredited firearm training and unforgettable shooting experiences.',
    outcomes: ['Higher SEO rankings leading to a 50% increase in organic traffic', 'Modern, mobile-responsive design improving user engagement by 35%', 'Streamlined booking flow resulting in a 20% boost in conversions'],
    tags: ['Marketing Advancement', 'Web Development', 'SEO upgrade'],
    gradient: 'linear-gradient(135deg, #1a0808 0%, #0a1500 100%)',
    accentColor: 'rgba(40,160,40,0.15)',
    image: '/Secpro.png',
  },
  {
    id: 2,
    title: 'Zizi Solutions',
    client: 'In-house — Zizi Solutions',
    category: 'Custom Web Design & Development',
    categoryPath: '/services/web-design-dev',
    // year: '2024',
    description:
      'Our own digital home. Built from the ground up to reflect who we are — a modern, performance-first website that communicates our services, showcases our work, and converts visitors into clients. From the animated particle orb to the dark editorial layout, every detail was intentional.',
    outcomes: ['Sub-second load times with Next.js App Router and dynamic imports', 'Fully responsive across all devices with a bold, consistent design system', 'Clear service and portfolio pages driving direct client enquiries'],
    tags: ['Next.js', 'Tailwind CSS', 'Brand Identity', 'Motion'],
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #0a1a2e 100%)',
    accentColor: 'rgba(80,40,180,0.15)',
    image: '/1.png',
  },
//   {
//     id: 3,
//     title: 'Brand Identity System',
//     client: 'Confidential — Professional Services',
//     category: 'Brand Identity & Strategy',
//     categoryPath: '/services/brand-identity',
//     year: '2024',
//     description:
//       'Complete visual identity and brand strategy for a growing professional services firm entering a competitive market — from logo and colour system through to pitch deck templates and social media kits.',
//     outcomes: ['Cohesive identity across 12 brand touchpoints', 'New positioning led to 3 enterprise client wins within 6 months', 'Full brand guidelines delivered for internal team use'],
//     tags: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
//     gradient: 'linear-gradient(135deg, #2e0a0a 0%, #1a1000 100%)',
//     accentColor: 'rgba(180,40,40,0.15)',
//     image: '/3.png',
//   },
]

const stats = [
  { value: '5+', label: 'Projects Delivered' },
  { value: '3+', label: 'Happy Clients' },
  { value: '100%', label: 'On-time Delivery' },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 px-6 lg:px-12">
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(244,245,60,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
            Portfolio
          </p>
          <h1
            className="font-display font-black leading-none tracking-tight text-white mb-8"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: '0.92' }}
          >
            OUR<br />
            <span style={{ color: 'var(--yellow-neon)' }}>WORK_</span>
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl">
            A selection of projects we&apos;ve delivered — each one built to solve a real problem, grounded in strategy, and measured by outcomes that matter to our clients.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-display font-black leading-none mb-1"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--yellow-neon)' }}
              >
                {s.value}
              </div>
              <p className="text-white/40 text-xs tracking-widest uppercase font-display">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col gap-6">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
            style={{ background: p.gradient }}
          >
            {/* Glow blob */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(circle at ${i % 2 === 0 ? '10% 50%' : '90% 50%'}, ${p.accentColor} 0%, transparent 60%)` }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className={`p-10 lg:p-14 flex flex-col justify-between ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div>
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Link
                      href={p.categoryPath}
                      className="font-display text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 text-white/50 hover:text-[#f4f53c] hover:border-[#f4f53c]/40 transition-colors"
                    >
                      {p.category}
                    </Link>
                    <span className="font-display text-xs tracking-widest text-white/30 uppercase">{p.year}</span>
                  </div>

                  <h2
                    className="font-display font-black text-white leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                  >
                    {p.title}
                  </h2>
                  <p className="font-display text-xs tracking-widest uppercase text-white/30 mb-6">{p.client}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">{p.description}</p>

                  {/* Outcomes */}
                  <ul className="flex flex-col gap-2 mb-8">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--yellow-neon)' }} />
                        {o}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-display text-xs tracking-widest uppercase px-3 py-1 border border-white/10 text-white/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image panel */}
              <div
                className={`relative hidden lg:block min-h-[420px] overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 100%)'
                      : 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 pb-32">
        <div
          className="rounded-2xl px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg, #111 0%, #1a1a0a 100%)',
            border: '1px solid rgba(244,245,60,0.1)',
          }}
        >
          <div>
            <h2 className="font-display font-black text-white text-4xl lg:text-5xl leading-tight mb-3">
              GOT A PROJECT<br />
              <span style={{ color: 'var(--yellow-neon)' }}>IN MIND?</span>
            </h2>
            <p className="text-white/50 text-sm max-w-md">
              Let&apos;s talk about what you&apos;re building and how we can help you get there.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 font-display text-sm font-black tracking-widest uppercase px-10 py-5 bg-[#f4f53c] text-black rounded-full hover:scale-105 transition-all duration-300"
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
