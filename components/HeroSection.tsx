'use client'
import dynamic from 'next/dynamic'

const ParticleOrb = dynamic(() => import('./ParticleOrb'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(30,20,60,0.6) 0%, transparent 70%)',
        }}
      />

      {/* Orb Canvas — takes up full section */}
      <div className="absolute inset-0">
        <ParticleOrb />
      </div>

      {/* Orbital ring decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '90vmin',
          height: '90vmin',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          transform: 'rotateX(70deg)',
          top: '50%',
          left: '50%',
          translate: '-50% -50%',
        }}
      />

      {/* Floating card — Cybersecurity */}
      <div
        className="absolute float-left hidden sm:block"
        style={{ left: '3%', top: '35%', zIndex: 10 }}
      >
        <div
          className="backdrop-blur-md px-9 py-6 rounded-lg max-w-xs"
          style={{
            background: 'rgba(40, 30, 40, 0.55)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <h3 className="font-display text-base font-black tracking-widest text-white mb-2 uppercase">
            Custom Software Solutions
          </h3>
          <p className="text-white/60 text-xs leading-relaxed">
            Tailored software that accelerates your business,<br />
            scales with demand, and integrates seamlessly across systems,<br />
            delivered quickly with reliability and measurable impact
          </p>
        </div>
      </div>

      {/* Floating card — Artificial Intelligence */}
      <div
        className="absolute float-right hidden sm:block"
        style={{ right: '3%', bottom: '18%', zIndex: 10 }}
      >
        <div
          className="backdrop-blur-md px-9 py-6 rounded-lg max-w-xs"
          style={{
            background: 'rgba(60, 25, 25, 0.55)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <h3 className="font-display text-base font-black tracking-widest text-white mb-2 uppercase">
            AI Powered Data Solutions
          </h3>
          <p className="text-white/60 text-xs leading-relaxed">
            Transform raw data into clear analytics and dashboards,<br />
            build robust ETL and aggregation pipelines for reliable reporting,<br />
            and deploy models & anomaly detection to surface actionable insights
          </p>
        </div>
      </div>

      {/* Center hero text overlay — subtle */}
      <div className="relative z-10 text-center px-4 pointer-events-none" style={{ marginTop: '-10vh' }}>
        <p className="font-display text-xs tracking-[0.4em] text-[#f4f53c]/60 uppercase mb-4">
          Intelligent solutions built around you.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="font-display text-sm tracking-widest text-white/70 uppercase">Scroll</span>
        <div className="w-[2px] h-14 rounded-full bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
      </div>
    </section>
  )
}
