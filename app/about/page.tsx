import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const teamMembers = [
  {
    name: 'Akhona Mdluli',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack engineer and systems thinker with a passion for building software that solves real problems. A strong supporter of Orlando Pirates and a coffee lover.',
    image: '/akhona.png',
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Information Systems',
    institution: 'Rhodes University',
    year: '2022 – 2024',
    description: 'Focused on software engineering, algorithms, and data structures.',
  },
  {
    degree: 'Bachelor of Science Honours',
    institution: 'Rhodes University',
    year: '2025',
    description: 'Focused on advanced topics in information systems, software development and data analytics.',
  },
]

const operatingHours = [
  { day: 'Monday – Friday', hours: '07:00 – 18:00' },
  { day: 'Saturday', hours: '09:00 – 13:00' },
  { day: 'Sunday', hours: 'Closed' },
]

export default function AboutPage() {
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-xs tracking-widest uppercase text-white/40 hover:text-[#f4f53c] transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 3L3 13M3 13H11M3 13V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Back to Home
          </Link>
          <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
            Who We Are
          </p>
          <h1
            className="font-display font-black leading-none tracking-tight text-white mb-8"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: '0.92' }}
          >
            ABOUT<br />
            <span style={{ color: 'var(--yellow-neon)' }}>US_</span>
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl">
            Zizi Solutions is a technology studio focused on building intelligent, scalable software for ambitious businesses. We combine engineering rigour with thoughtful design to deliver outcomes that last.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 lg:px-12 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div
            className="rounded-lg p-10"
            style={{
              background: 'rgba(244,245,60,0.04)',
              border: '1px solid rgba(244,245,60,0.12)',
            }}
          >
            <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
              Vision
            </p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              A World Where Technology Works For You
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              We envision a future where every business — regardless of size — has access to world-class software and AI capabilities. Our goal is to be the studio that bridges that gap, delivering enterprise-grade solutions with startup speed and transparency.
            </p>
          </div>

          {/* Mission */}
          <div
            className="rounded-lg p-10"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
              Mission
            </p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Intelligent Solutions Built Around You
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Our mission is to design, build and deploy software that creates measurable value for our clients. We listen deeply, think strategically and execute with precision — partnering with businesses to turn complex challenges into elegant, performant products.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 lg:px-12 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
            The Team
          </p>
          <h2
            className="font-display font-black text-white mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1' }}
          >
            THE TEAM BEHIND<br />
            <span style={{ color: 'var(--yellow-neon)' }}>THE WORK_</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-lg p-10"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Profile photo */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mb-6 object-cover object-top"
                    style={{ border: '2px solid rgba(244,245,60,0.3)' }}
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-full mb-6 flex items-center justify-center font-display font-black text-2xl"
                    style={{ background: 'rgba(244,245,60,0.1)', color: '#f4f53c', border: '1px solid rgba(244,245,60,0.2)' }}
                  >
                    {member.name.charAt(0)}
                  </div>
                )}
                <h3 className="font-display font-black text-white text-xl tracking-wide mb-1 uppercase">
                  {member.name}
                </h3>
                <p className="font-display text-xs tracking-widest uppercase mb-4" style={{ color: '#f4f53c' }}>
                  {member.role}
                </p>
                <p className="text-white/55 text-sm leading-relaxed">{member.bio}</p>

                {/* Education */}
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="font-display text-xs tracking-[0.4em] uppercase mb-6" style={{ color: '#f4f53c' }}>
                    Education
                  </p>
                  <div className="flex flex-col">
                    {education.map((item, i) => (
                      <div
                        key={item.degree}
                        className="pb-8"
                        style={{
                          borderLeft: '2px solid rgba(244,245,60,0.15)',
                          paddingLeft: '1.5rem',
                          marginLeft: '0.25rem',
                          position: 'relative',
                        }}
                      >
                        {/* Timeline dot */}
                        <div
                          className="absolute -left-[7px] top-0 w-3 h-3 rounded-full"
                          style={{ background: '#f4f53c', boxShadow: '0 0 8px rgba(244,245,60,0.4)' }}
                        />
                        <span className="font-display text-xs tracking-widest uppercase text-white/30 mb-1 block">
                          {item.year}
                        </span>
                        <h4 className="font-display font-black text-white text-base tracking-wide uppercase mb-1">
                          {item.degree}
                        </h4>
                        <p className="font-display text-xs tracking-widest uppercase mb-2" style={{ color: '#f4f53c' }}>
                          {item.institution}
                        </p>
                        <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="px-6 lg:px-12 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
            Operating Hours
          </p>
          <h2
            className="font-display font-black text-white mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1' }}
          >
            WHEN YOU CAN<br />
            <span style={{ color: 'var(--yellow-neon)' }}>REACH US_</span>
          </h2>

          <div className="max-w-lg">
            {operatingHours.map((item, i) => (
              <div
                key={item.day}
                className="flex items-center justify-between py-5"
                style={{
                  borderBottom: i < operatingHours.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}
              >
                <span className="font-display font-bold tracking-widest uppercase text-white/70 text-sm">
                  {item.day}
                </span>
                <span
                  className="font-display font-black tracking-widest text-sm"
                  style={{ color: item.hours === 'Closed' ? 'rgba(255,255,255,0.25)' : '#f4f53c' }}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>

          <p className="text-white/35 text-xs mt-8 leading-relaxed max-w-sm">
            All times are in South African Standard Time (SAST, UTC+2).<br />
            Urgent queries outside of hours? Drop us a message and we&apos;ll get back to you first thing.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
