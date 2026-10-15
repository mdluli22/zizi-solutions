'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ParticleOrb = dynamic(() => import('./ParticleOrb'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-[90svh] bg-black overflow-hidden flex items-center justify-center">
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

      {/* Center hero text overlay — subtle */}
      <div className="relative z-10 text-center px-6 pt-36 pb-40 sm:pt-44 sm:pb-48 w-full">
        <h1 className="font-display font-black text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mx-auto mb-6">
          Websites, Business Automation &amp; Data Analytics
        </h1>
        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-6">
          Attract customers, save time and understand your business. Practical digital
          solutions for small and medium businesses in South Africa and beyond.
        </p>
        <p className="font-display text-xs sm:text-sm tracking-[0.2em] text-[#f4f53c]/90 uppercase mb-4">
          Built around your business.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
          <Link href="/contact" className="button-primary">Start your project</Link>
          <Link href="/work" className="button-secondary">Explore our work</Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="font-display text-sm tracking-widest text-white/70 uppercase">Scroll</span>
        <div className="w-[2px] h-8 rounded-full bg-linear-to-b from-white/70 via-white/40 to-transparent" />
      </div>
    </section>
  )
}
